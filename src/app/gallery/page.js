import Image from "next/image";
import Link from "next/link";
import SiteHeader from "../_components/SiteHeader/SiteHeader";
import styles from "./gallery.module.css";

export const metadata = {
  title: "Pool Service Gallery | 904 Pools",
  description:
    "View pool cleaning, water care, filter service, and commercial pool maintenance examples for 904 Pools in Jacksonville, FL.",
};

const projectGroups = [
  {
    title: "Routine residential service",
    description: "Real pool-service photos from the 904 Pools gallery.",
    layout: "three",
    photos: [
      {
        src: "https://img1.wsimg.com/isteam/ip/d0fc233c-9fa8-4828-9cf6-b589621e24f2/IMG_9124.jpeg",
        alt: "904 Pools residential pool service photo",
        label: "Clean",
        caption: "Residential pool service",
      },
      {
        src: "https://img1.wsimg.com/isteam/ip/d0fc233c-9fa8-4828-9cf6-b589621e24f2/IMG_0479.jpeg",
        alt: "904 Pools backyard pool maintenance photo",
        label: "Balanced",
        caption: "Backyard pool maintenance",
      },
      {
        src: "https://img1.wsimg.com/isteam/ip/d0fc233c-9fa8-4828-9cf6-b589621e24f2/IMG_7603.jpeg",
        alt: "904 Pools clear water service photo",
        label: "Ready",
        caption: "Clear water service",
      },
    ],
  },
  {
    title: "Water recovery and maintenance",
    description: "Gallery images showing pool condition and ongoing service work.",
    layout: "pair",
    photos: [
      {
        src: "https://img1.wsimg.com/isteam/ip/d0fc233c-9fa8-4828-9cf6-b589621e24f2/IMG_9121.jpeg",
        alt: "904 Pools water care gallery photo",
        label: "Water",
        caption: "Water care and clarity",
      },
      {
        src: "https://img1.wsimg.com/isteam/ip/d0fc233c-9fa8-4828-9cf6-b589621e24f2/IMG_7477.jpeg",
        alt: "904 Pools maintenance gallery photo",
        label: "Service",
        caption: "Pool maintenance work",
      },
    ],
  },
];

const additionalPhotos = [
  {
    src: "https://img1.wsimg.com/isteam/ip/d0fc233c-9fa8-4828-9cf6-b589621e24f2/IMG_8148.jpeg",
    alt: "904 Pools service gallery image",
    caption: "Pool service detail",
  },
  {
    src: "https://img1.wsimg.com/isteam/ip/d0fc233c-9fa8-4828-9cf6-b589621e24f2/fb_824617726335171_2048x1536.jpg",
    alt: "904 Pools pool cleaning gallery image",
    caption: "Pool cleaning",
  },
  {
    src: "https://img1.wsimg.com/isteam/ip/d0fc233c-9fa8-4828-9cf6-b589621e24f2/IMG_7499.jpeg",
    alt: "904 Pools maintenance photo",
    caption: "Maintenance visit",
  },
  {
    src: "https://img1.wsimg.com/isteam/ip/d0fc233c-9fa8-4828-9cf6-b589621e24f2/fb_1871737873045968_1440x1438.jpg",
    alt: "904 Pools customer pool gallery image",
    caption: "Customer pool",
  },
];

export default function GalleryPage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <SiteHeader />
        <div className={styles.heroContent}>
          <p className={styles.eyebrow}>Pool service gallery</p>
          <h1>Clear pools, steady maintenance, and water care that shows.</h1>
          <p>
            A visual direction for 904 Pools services: residential cleaning,
            chemical care, commercial maintenance, and specialty recovery work.
          </p>
          <Link href="/#contact-form">Request service</Link>
        </div>
      </section>

      <section className={styles.gallerySection} aria-label="Pool service gallery">
        <div className={styles.sectionIntro}>
          <p className={styles.eyebrow}>Service views</p>
          <h2>Residential and commercial pool care</h2>
        </div>

        <div className={styles.projectStack}>
          {projectGroups.map((project, projectIndex) => (
            <article className={styles.projectGroup} key={project.title}>
              <div className={styles.projectHeader}>
                <span>{String(projectIndex + 1).padStart(2, "0")}</span>
                <div>
                  <h2>{project.title}</h2>
                  <p>{project.description}</p>
                </div>
              </div>
              <div
                className={`${styles.groupedPhotos} ${
                  project.layout === "pair" ? styles.photoPair : ""
                }`}
              >
                {project.photos.map((photo, photoIndex) => (
                  <figure className={styles.groupPhoto} key={photo.src}>
                    <div className={styles.imageWrap}>
                      <Image
                        src={photo.src}
                        alt={photo.alt}
                        width={720}
                        height={560}
                        sizes="(max-width: 640px) 100vw, (max-width: 1100px) 50vw, 33vw"
                        priority={projectIndex === 0 && photoIndex < 2}
                      />
                      <span>{photo.label}</span>
                    </div>
                    <figcaption>{photo.caption}</figcaption>
                  </figure>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className={styles.sectionIntro}>
          <p className={styles.eyebrow}>More service moments</p>
          <h2>Maintenance details that matter</h2>
        </div>

        <div className={styles.galleryGrid}>
          {additionalPhotos.map((photo, index) => (
            <article className={styles.photoCard} key={photo.src}>
              <Image
                src={photo.src}
                alt={photo.alt}
                width={720}
                height={560}
                sizes="(max-width: 640px) 100vw, (max-width: 1100px) 50vw, 33vw"
              />
              <div>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h2>{photo.caption}</h2>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
