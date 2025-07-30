import "../styles/globals.css";
import { ReactNode } from "react";

export const metadata = {
    title: "Mino Store",
    description: 'E-Commerce landing page',
};

export default function RootLayout({children} : {children: ReactNode}) {
   return (
    <html lang="en">
        <body>{children}</body>
    </html>
   );
}