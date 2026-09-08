import React from "react";
import { createPageMetadata } from "../../lib/seo";

export const metadata = createPageMetadata({
  title: "Privacy Policy | OPTN Labs",
  description:
    "Read the OPTN Crypto Wallet App privacy policy, including local data storage, third-party services, permissions, security, and contact information.",
  path: "/policy",
});

export default function PrivacyPolicy() {
  return (
    <div className="supporting-page container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">
        OPTN Crypto Wallet App Privacy Policy
      </h1>
      <p className="mb-8">
        <strong>Effective Date:</strong> July 15, 2025
      </p>

      <h2 className="text-2xl font-semibold mb-4">Table of Contents</h2>
      <ul className="list-disc pl-6 mb-8">
        <li>
          <a href="#introduction" className="hover:underline">
            Introduction
          </a>
        </li>
        <li>
          <a href="#information-we-collect" className="hover:underline">
            Information We Collect
          </a>
        </li>
        <li>
          <a href="#local-data-storage" className="hover:underline">
            Local Data Storage
          </a>
        </li>
        <li>
          <a href="#third-party-services" className="hover:underline">
            Third-Party Services
          </a>
        </li>
        <li>
          <a href="#user-authentication" className="hover:underline">
            User Authentication
          </a>
        </li>
        <li>
          <a href="#app-permissions" className="hover:underline">
            App Permissions
          </a>
        </li>
        <li>
          <a href="#legal-compliance" className="hover:underline">
            Legal Compliance
          </a>
        </li>
        <li>
          <a href="#policy-updates" className="hover:underline">
            Policy Updates
          </a>
        </li>
        <li>
          <a href="#contact-information" className="hover:underline">
            Contact Information
          </a>
        </li>
        <li>
          <a href="#security-measures" className="hover:underline">
            Security Measures
          </a>
        </li>
        <li>
          <a href="#childrens-privacy" className="hover:underline">
            Children&apos;s Privacy
          </a>
        </li>
        <li>
          <a href="#data-retention" className="hover:underline">
            Data Retention
          </a>
        </li>
      </ul>

      <section id="introduction" className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Introduction</h2>
        <p>
          Welcome to the OPTN Crypto Wallet App (&quot;we&quot;,
          &quot;our&quot;, or &quot;us&quot;). This Privacy Policy explains how
          we handle your information when you use our app. We are committed to
          protecting your privacy and ensuring the security of your data. Since
          the app does not collect or send off any user data, this policy
          focuses on local data storage, security measures, and your rights.
        </p>
      </section>

      <section id="information-we-collect" className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Information We Collect</h2>
        <p>
          We do not collect or send off any personal information, device data,
          or transaction data from your use of the app. This means we do not
          gather any data that could identify you or your activities.
        </p>
      </section>

      <section id="local-data-storage" className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Local Data Storage</h2>
        <p>The app stores certain data locally on your device, including:</p>
        <ul className="list-disc pl-6">
          <li>Your private keys</li>
          <li>Transaction history</li>
        </ul>
        <p>
          This data is encrypted to ensure its security. You are responsible for
          maintaining the security of your device and the data stored on it.
        </p>
      </section>

      <section id="third-party-services" className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Third-Party Services</h2>
        <p>
          We do not use any third-party services that collect data from your use
          of the app. This ensures that no external parties have access to your
          information.
        </p>
      </section>

      <section id="user-authentication" className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">User Authentication</h2>
        <p>
          The app uses confirmation buttons for user authentication. Certain
          actions, such as initiating transactions, require your explicit
          confirmation to proceed. We do not implement additional authentication
          methods like passcodes or biometrics.
        </p>
      </section>

      <section id="app-permissions" className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">App Permissions</h2>
        <p>
          The OPTN Crypto Wallet App requests permission to use your
          device&apos;s camera solely for scanning QR codes to:
        </p>
        <ul className="list-disc pl-6">
          <li>Import wallet addresses</li>
          <li>Verify transactions</li>
        </ul>
        <p>
          No images or videos are captured, stored, shared, or transmitted by
          the app. Any data obtained from scanning QR codes (e.g., wallet
          addresses) is processed only to complete the intended transaction and
          is not retained afterward. The app does not request any other
          permissions beyond what is necessary for its core functionality.
        </p>
      </section>

      <section id="legal-compliance" className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Legal Compliance</h2>
        <p>
          Although we do not collect personal data, we are committed to
          complying with applicable privacy laws and regulations, including:
        </p>
        <ul className="list-disc pl-6">
          <li>General Data Protection Regulation (GDPR)</li>
          <li>California Consumer Privacy Act (CCPA)</li>
        </ul>
        <p>
          Our use of camera access complies with these laws, as no personal data
          is collected, stored, or shared through this feature. Since no data is
          collected, user rights under these laws (e.g., data access or
          deletion) do not apply. However, if you have questions, please reach
          out to us at{" "}
          <a href="mailto:info@optnlabs.com" className="hover:underline">
            info@optnlabs.com
          </a>
          .
        </p>
      </section>

      <section id="policy-updates" className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Policy Updates</h2>
        <p>
          We may update this Privacy Policy from time to time. You will be
          notified of any changes through in-app notifications. Your continued
          use of the app after such notifications constitutes your acceptance of
          the updated policy.
        </p>
      </section>

      <section id="contact-information" className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Contact Information</h2>
        <p>
          If you have any questions or concerns about this Privacy Policy,
          please contact us at:
        </p>
        <p>
          <strong>Email:</strong>{" "}
          <a href="mailto:info@optnlabs.com" className="hover:underline">
            info@optnlabs.com
          </a>
        </p>
      </section>

      <section id="security-measures" className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Security Measures</h2>
        <p>
          We prioritize the security of your data. The app employs the following
          measures to protect your information:
        </p>
        <ul className="list-disc pl-6">
          <li>
            <strong>Private Key Encryption</strong>: Your locally stored data,
            such as private keys, is encrypted.
          </li>
          <li>
            <strong>User Responsibility</strong>: We recommend that you keep
            your device secure and updated to further protect your information.
          </li>
        </ul>
      </section>

      <section id="childrens-privacy" className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Children&apos;s Privacy</h2>
        <p>
          The app is not intended for use by children under the age of 13. We do
          not knowingly collect any information from children.
        </p>
      </section>

      <section id="data-retention" className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Data Retention</h2>
        <p>
          We do not retain any data beyond what is necessary for the app&apos;s
          functionality. Any locally stored data is managed by you and can be
          removed by uninstalling the app.
        </p>
      </section>
    </div>
  );
}
