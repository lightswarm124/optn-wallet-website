"use client";

import { useEffect, useState } from "react";

function StatusPill({ ok, status }) {
  return <span className={`status-pill ${ok ? "status-ok" : "status-neutral"}`}>{status}</span>;
}

export default function ServiceStatusBlock({
  endpoint = "/api/service-status",
  title = "Live services",
  description = "Status for public infrastructure endpoints currently exposed by OPTN Labs.",
  sectionId = "services",
}) {
  const [services, setServices] = useState([]);
  const [meta, setMeta] = useState(null);

  useEffect(() => {
    let cancelled = false;
    fetch(endpoint, { cache: "no-store" })
      .then((response) => response.json())
      .then((data) => {
        if (!cancelled) {
          setServices(data.services || []);
          setMeta(data.meta || null);
        }
      })
      .catch(() => {
        if (!cancelled) {
          setServices([]);
          setMeta(null);
        }
      });
    return () => { cancelled = true; };
  }, [endpoint]);

  return (
    <section id={sectionId} className="site-section status-section">
      <div className="site-container">
        <SectionHeading title={title} description={description} />
        <div className="status-grid">
          {services.map((service) => (
            <div key={service.id} className="status-card">
              <div className="status-card-heading"><div><h3>{service.name}</h3><p>{service.access}</p></div><StatusPill ok={service.ok} status={service.status} /></div>
              <p className="status-note">{service.note}</p>
              <span className="status-endpoint">{service.endpoint}</span>
            </div>
          ))}
        </div>
        {meta?.lastUpdated && <p className="status-meta">Registry updated {meta.lastUpdated}. Status refreshes every {meta.refreshedEveryMinutes || "regular"} minutes.</p>}
      </div>
    </section>
  );
}

function SectionHeading({ title, description }) {
  return <div className="status-heading"><h2>{title}</h2><p>{description}</p></div>;
}
