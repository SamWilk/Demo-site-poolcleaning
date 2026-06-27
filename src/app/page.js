import Link from "next/link";
import AuditCta from "./_components/AuditCta/AuditCta";
import ContactForm from "./_components/ContactForm/ContactForm";
import SectionIntro from "./_components/SectionIntro/SectionIntro";
import SiteHeader from "./_components/SiteHeader/SiteHeader";
import SocialHighlights from "./_components/SocialHighlights/SocialHighlights";
import styles from "./page.module.css";

const serviceAreas = [
  "Jacksonville",
  "Jacksonville Beach",
  "Atlantic Beach",
  "Neptune Beach",
  "Ponte Vedra",
  "St. Johns",
];

const proofPoints = [
  {
    metric: "0",
    label: "Residential contracts",
    detail: "904 Pools advertises flexible residential service without locking homeowners into contracts.",
  },
  {
    metric: "CPO",
    label: "Certified technicians",
    detail: "Pool care is handled by trained, Certified Pool Operator professionals.",
  },
  {
    metric: "904",
    label: "Local pool care",
    detail: "A Jacksonville-area pool service focused on residential and commercial maintenance.",
  },
  {
    metric: "5.0",
    label: "Google rating",
    detail: "Backed by 63 Google reviews from local customers looking for dependable pool service.",
    href: "https://www.google.com/maps/place/904+Pools/@30.3164717,-81.683107,10z/data=!4m8!3m7!1s0x88e5ca5d91c2d953:0x9c5becf65a4a7096!8m2!3d30.3164717!4d-81.683107!9m1!1b1!16s%2Fg%2F11c1p58wg4?entry=ttu&g_ep=EgoyMDI2MDYyNC4wIKXMDSoASAFQAw%3D%3D",
  },
];

const services = [
  {
    title: "Residential Pool Service",
    copy: "Weekly and bi-weekly pool cleaning plans for homeowners who want clear water, balanced chemicals, and dependable visits.",
    href: "#contact-form",
  },
  {
    title: "One-Time Pool Services",
    copy: "Single-visit help for green pool recovery, algae cleanup, stain treatment, filter cleaning, or getting a pool ready for use.",
    href: "#contact-form",
  },
  {
    title: "Chemical Service Plans",
    copy: "Water testing and chemical balancing for pool owners who prefer to handle cleaning but want the chemistry managed correctly.",
    href: "#contact-form",
  },
  {
    title: "Commercial Pool Care",
    copy: "Maintenance support for apartments, HOAs, hotels, fitness centers, and properties that need reliable pool operations.",
    href: "#contact-form",
  },
];

const checklist = [
  "Weekly cleaning",
  "Bi-weekly cleaning",
  "One-time cleanup",
  "Chemical balancing",
  "Filter cleaning",
  "Stain removal",
  "Algae treatment",
];

export default function Home() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <SiteHeader />

        <div className={styles.heroGrid} id="top">
          <div className={styles.heroContent}>
            <p className={styles.eyebrow}>Jacksonville pool cleaning and service</p>
            <h1>Clean, balanced pools without residential service contracts.</h1>
            <p className={styles.heroText}>
              904 Pools keeps Jacksonville-area pools clear, balanced, and ready
              to use with residential maintenance, chemical plans, commercial
              service, stain treatment, algae cleanup, and filter care.
            </p>
            <div className={styles.heroActions}>
              <a className={styles.primaryButton} href="#contact-form">
                Request service
              </a>
              <Link className={styles.secondaryButton} href="#services">
                View services
              </Link>
            </div>
            <div className={styles.businessTypes} aria-label="Service areas">
              {serviceAreas.map((area) => (
                <span key={area}>{area}</span>
              ))}
            </div>
          </div>

          <ContactForm />
        </div>
      </section>

      <section className={styles.section} id="proof">
        <SectionIntro
          eyebrow="Local trust signals"
          title="A local pool service built around flexible plans, Google reviews, and professional care."
        />
        <div className={styles.winGrid}>
          {proofPoints.map((point) => {
            const cardContent = (
              <>
                <strong>{point.metric}</strong>
                <h3>{point.label}</h3>
                <p>{point.detail}</p>
                {point.href ? <span>View Google reviews</span> : null}
              </>
            );

            return point.href ? (
              <a
                className={styles.winCard}
                href={point.href}
                key={point.label}
                target="_blank"
                rel="noopener noreferrer"
              >
                {cardContent}
              </a>
            ) : (
              <article className={styles.winCard} key={point.label}>
                {cardContent}
              </article>
            );
          })}
        </div>
      </section>

      <section className={styles.splitSection} id="approach">
        <div>
          <p className={styles.eyebrow}>How the work gets handled</p>
          <h2>Routine service, cleaner water, and pool issues handled before they spread.</h2>
          <p>
            904 Pools positions its service around consistent visits, proper water
            chemistry, and practical pool maintenance for homeowners and commercial
            properties across the Jacksonville area.
          </p>
        </div>
        <div className={styles.checkPanel}>
          {checklist.map((item) => (
            <div className={styles.checkItem} key={item}>
              <span aria-hidden="true">+</span>
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className={styles.section} id="services">
        <SectionIntro
          eyebrow="Services"
          title="Pool maintenance plans for homes and commercial properties."
        />
        <div className={styles.serviceGrid}>
          {services.map((service) => (
            <article className={styles.serviceCard} key={service.title}>
              <h3>{service.title}</h3>
              <p>{service.copy}</p>
              <Link href={service.href}>Request help</Link>
            </article>
          ))}
        </div>
      </section>

      <div className={styles.socialWrap}>
        <SocialHighlights />
      </div>

      <AuditCta />
    </main>
  );
}
