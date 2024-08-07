import { Inter } from "next/font/google";
import "./globals.css";
import PopulateStore from "./populate-store";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AlgoSketch",
  description: "Generated by create next app",
  icons:{
    icon: "./favicon_c.png",
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <PopulateStore>{children}</PopulateStore>
      </body>
    </html>
  );
}
