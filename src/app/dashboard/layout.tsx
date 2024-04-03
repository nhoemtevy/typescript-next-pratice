import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import UserTable from "../tables/UserTable";
import { Navbar } from "flowbite-react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   <aside className="flex">
   <DashboardSidebar/>
   <UserTable/>
    {children}
   </aside>
  );
}
