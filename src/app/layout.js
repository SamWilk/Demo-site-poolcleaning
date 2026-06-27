import "./globals.css";

export const metadata = {
  title: "904 Pools | Jacksonville Pool Cleaning and Service",
  description:
    "904 Pools provides residential pool cleaning, chemical service plans, commercial pool maintenance, filter cleaning, stain removal, and algae treatment in Jacksonville, FL.",
  icons: {
    icon: "/site-icon.svg",
  },
  keywords: [
    "904 Pools",
    "Jacksonville pool cleaning",
    "Jacksonville pool service",
    "commercial pool service Jacksonville",
    "pool algae treatment Jacksonville",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
