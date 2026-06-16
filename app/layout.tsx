import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sahil Ballewar | Data Engineer & Software Developer",
  description: "Data Engineer & Full Stack Developer specializing in real-time data pipelines, cloud infrastructure, and AI-driven solutions. IIIT Nagpur graduate.",
  keywords: ["Data Engineer", "Software Developer", "Python", "Apache Kafka", "AWS", "Databricks", "Snowflake", "IIIT Nagpur"],
  authors: [{ name: "Sahil Ballewar" }],
  openGraph: {
    title: "Sahil Ballewar | Data Engineer & Software Developer",
    description: "Building intelligent data systems and scalable software solutions.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>
        {children}
      </body>
    </html>
  );
}
