import localFont from "next/font/local";
import "./globals.css";
import Header from "../components/Global/Header";
import Footer from "../components/Global/Footer";

const interTight = localFont({
  src: "../../public/InterTight-VariableFont_wght.ttf",
  variable: "--font-inter-tight",
  weight: "100 900", // Variable fonts usually cover a range
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
        className={`${interTight.variable} antialiased font-[family-name:var(--font-inter-tight)]`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
