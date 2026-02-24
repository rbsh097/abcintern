import localFont from "next/font/local";
import "./globals.css";
import Header from "../components/Global/Header";
import Footer from "../components/Global/Footer";



const atkinson = localFont({
  src: "../../public/AtkinsonHyperlegible-Regular.ttf",
  variable: "--font-atkinson",
  weight: "400",
});



const oxygen = localFont({
  src: "../../public/Oxygen-Regular.ttf",
  variable: "--font-oxygen",
  weight: "400",
});

export const metadata = {
  title: "ABC International",
  description: "Global Health Care, Pharma Consultancy",
  icons: {
    icon: "/a.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={` ${atkinson.variable} ${oxygen.variable} antialiased font-sans`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
