import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
   title: "Web Anime",
   description: "Indonesia Web Anime",
};

export default function RootLayout({ children }) {
   return (
      <html lang="en">
         <body className={inter.className}>
            <nav>
               <h1>Web Anime</h1>
            </nav>
            {children}
         </body>
      </html>
   );
}
