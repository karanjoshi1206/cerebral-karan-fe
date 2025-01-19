import type { Metadata } from "next";
import Sidebar from "../components/sidebar";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Dashboard"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` px-2 antialiased md:p-4`}>
        <div className=" bg-primaryBackground rounded-3xl flex">
          <Sidebar />
          {children}
        </div>
      </body>
    </html>
  );
}
