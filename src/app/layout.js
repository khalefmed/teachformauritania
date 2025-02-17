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
})

export const metadata = {
  title: "Teach for Mauritania - Empowering Education",
  description:
    "Teach for Mauritania is dedicated to improving education access and quality for students across the country. Join us in making a difference.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.png" />
        <meta property="og:title" content="Teach For Mauritania - Empowering Education" />
        <meta
          property="og:description"
          content="Teach For Mauritania is committed to transforming education and creating a brighter future for students across Mauritania."
        />
        <meta property="og:image" content="/teachformauritania-preview.png" />
        <meta property="og:url" content="https://teachformauritania.org" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://teachformauritania.org" />
      </head>
      <body className={font.className + "w-screen font-poppins"}>{children}</body>
    </html>
  );
}
