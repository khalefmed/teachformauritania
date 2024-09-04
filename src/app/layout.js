import { Tajawal } from "next/font/google";
import "./globals.css";

const roboto = Tajawal({
  weight: [ '200', '300', '400', '500', '700', '800', '900'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: "Lynaat",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" >
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
