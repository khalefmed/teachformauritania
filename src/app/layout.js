import { Poppins } from "next/font/google";
import "./globals.css";

const font = Poppins({
  weight: [
    '100',
    '200',
    '300',
    '400',
    '500',
    '700',
    '800',
    '900'
  ],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  title: "Teach for Mauritania - Empowering Education",
  description:
    "Teach for Mauritania is dedicated to improving education access and quality for students across the country. Join us in making a difference.",
  icons: {
    icon: "/images/logo_icon.png",
  },
  openGraph: {
    title: "Teach For Mauritania - Empowering Education",
    description:
      "Teach For Mauritania is committed to transforming education and creating a brighter future for students across Mauritania.",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={font.className + " w-screen font-poppins"}>{children}</body>
    </html>
  );
}
