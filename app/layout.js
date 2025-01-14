import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "./components/header/nav/nav";
import { GlobalContextProvider } from "./components/context";
import Footer from "./components/footer/footer";
import ScrolledNav from "./components/header/scrolled Nav/scrolledNav";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`} >
        <GlobalContextProvider>
              <Nav />
              {/* <ScrolledNav /> */}
              {children}
              <Footer />
        </GlobalContextProvider>
      </body>
    </html>
  );
}
