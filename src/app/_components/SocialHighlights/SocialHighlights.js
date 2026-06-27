import styles from "./SocialHighlights.module.css";

const highlights = [
  {
    name: "Residential",
    handle: "Weekly, bi-weekly, and chemical-only pool service plans",
    href: "/#contact-form",
    icon: "H2O",
  },
  {
    name: "Commercial",
    handle: "Pool maintenance for properties that need consistent service",
    href: "/#contact-form",
    icon: "CPO",
  },
  {
    name: "Specialty care",
    handle: "Filter cleaning, algae treatment, stain removal, and water balancing",
    href: "/#contact-form",
    icon: "904",
  },
];

export default function SocialHighlights() {
  return (
    <section className={styles.socialSection}>
      <div className={styles.content}>
        <p className={styles.eyebrow}>Plan options</p>
        <h2>Flexible pool maintenance based on how much care you want handled.</h2>
        <p>
          904 Pools separates routine cleaning, water chemistry, commercial care,
          and specialty recovery work so service can match the pool instead of
          forcing every customer into the same package.
        </p>
      </div>

      <div className={styles.linkGrid}>
        {highlights.map((link) => (
          <a
            className={styles.socialCard}
            href={link.href}
            key={link.name}
            target={link.href.startsWith("http") ? "_blank" : undefined}
            rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
          >
            <span className={styles.icon} aria-hidden="true">
              {link.icon}
            </span>
            <span>
              <strong>{link.name}</strong>
              <small>{link.handle}</small>
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
