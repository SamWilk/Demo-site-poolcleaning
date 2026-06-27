import Link from "next/link";
import styles from "./AuditCta.module.css";

export default function AuditCta() {
  return (
    <section className={styles.ctaSection} id="contact">
      <div>
        <p className={styles.eyebrow}>Request pool service</p>
        <h2>Need regular pool care or a one-time service visit?</h2>
        <p>
          Call 904 Pools for residential pool cleaning, chemical care, commercial
          service, one-time cleanups, filter cleaning, stain removal, and algae
          treatment around Jacksonville.
        </p>
      </div>
      <div className={styles.actions}>
        <Link className={styles.primaryButton} href="/#contact-form">
          Request service
        </Link>
        <a
          className={styles.secondaryButton}
          href="tel:+19048670048"
        >
          Call 904 Pools
        </a>
      </div>
    </section>
  );
}
