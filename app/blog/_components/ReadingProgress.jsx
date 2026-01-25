"use client";

import { useEffect, useMemo, useRef, useState } from "react";

export default function ReadingProgress({ toc = [] }) {
  const [progress, setProgress] = useState(0);
  const [activeId, setActiveId] = useState(null);

  // Prevent repeated scrollIntoView jitter
  const lastScrolledIdRef = useRef(null);

  const tocIds = useMemo(() => toc.map((h) => h.id).filter(Boolean), [toc]);

  // Reading progress bar
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const scrollTop = h.scrollTop || document.body.scrollTop;
      const height = h.scrollHeight - h.clientHeight;
      const pct = height > 0 ? (scrollTop / height) * 100 : 0;
      setProgress(Math.min(100, Math.max(0, pct)));
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scrollspy: watch headings, set activeId
  useEffect(() => {
    if (!tocIds.length) return;

    const els = tocIds.map((id) => document.getElementById(id)).filter(Boolean);

    if (!els.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort(
            (a, b) =>
              (a.boundingClientRect.top ?? 0) - (b.boundingClientRect.top ?? 0),
          );

        if (visible[0]?.target?.id) setActiveId(visible[0].target.id);
      },
      {
        // Bias toward the top third of the viewport for "active" feel
        rootMargin: "-18% 0px -72% 0px",
        threshold: [0, 1],
      },
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [tocIds]);

  // Apply active styles to TOC links + auto-scroll within the TOC container
  useEffect(() => {
    const links = Array.from(document.querySelectorAll("[data-toc-link]"));

    let activeLink = null;

    for (const a of links) {
      const href = a.getAttribute("href") || "";
      const id = href.startsWith("#") ? href.slice(1) : null;

      const isActive = id && activeId && id === activeId;
      if (isActive) activeLink = a;

      a.classList.toggle("bg-white/5", !!isActive);
      a.classList.toggle("text-white", !!isActive);
      a.classList.toggle("border-l-2", !!isActive);
      a.classList.toggle("border-cyan-300", !!isActive);

      if (isActive) {
        a.classList.remove("text-slate-300", "text-slate-400");
      } else {
        const level = a.getAttribute("data-level");
        if (level === "3") {
          a.classList.add("text-slate-400");
          a.classList.remove("text-slate-300");
        } else {
          a.classList.add("text-slate-300");
          a.classList.remove("text-slate-400");
        }
        a.classList.remove(
          "bg-white/5",
          "text-white",
          "border-l-2",
          "border-cyan-300",
        );
      }
    }

    // Auto-scroll active link inside the TOC container
    if (activeLink && activeId) {
      if (lastScrolledIdRef.current !== activeId) {
        // Find the scroll container: the <nav> that holds TOC links
        const nav = activeLink.closest("nav");
        if (nav) {
          // If the active item is outside the visible area of the nav, scroll it into view.
          const navRect = nav.getBoundingClientRect();
          const linkRect = activeLink.getBoundingClientRect();

          const padding = 12; // px buffer inside the nav viewport
          const above = linkRect.top < navRect.top + padding;
          const below = linkRect.bottom > navRect.bottom - padding;

          if (above || below) {
            activeLink.scrollIntoView({
              block: "nearest",
              inline: "nearest",
              behavior: "smooth",
            });
          }
        }

        lastScrolledIdRef.current = activeId;
      }
    }
  }, [activeId]);

  return (
    <div className="fixed left-0 top-0 z-[60] h-1 w-full bg-transparent">
      <div
        className="h-full origin-left bg-cyan-400/80"
        style={{ transform: `scaleX(${progress / 100})` }}
      />
    </div>
  );
}
