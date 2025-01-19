import { BarChart, ChartBarStacked, LayoutDashboard, Menu, Plug, Settings, UserCircle, Workflow } from "lucide-react";
import Link from "next/link";
import React from "react";

import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

const PRIMARY_LINKS = [
  {
    title: "Settings",
    href: "/",
    icon: <Settings color="grey" />
  },
  {
    title: "Team",
    href: "/",
    icon: <UserCircle color="grey" />
  }
];

const MENU_LINKS = [
  {
    title: "Dashboard",
    href: "/",
    icon: <LayoutDashboard color="blue" />,
    isActive: true
  },
  {
    title: "Campaigns",
    href: "/",
    icon: <ChartBarStacked />
  },
  {
    title: "FLows",
    href: "/",
    icon: <Workflow />
  },

  {
    title: "Integrations",
    href: "/",
    icon: <Plug />
  },
  {
    title: "Customers",
    href: "/",
    icon: <BarChart />
  }
];

const CommonNav = () => {
  return (
    <>
      <h1 className="text-[16px] md:text-[24px] font-bold pb-2  md:pb-4">Salesway</h1>
      <ul className="pb-4">
        {PRIMARY_LINKS.map((link) => (
          <li className="p-2 md:p-4 rounded-lg text-linkColor font-semibold " key={link.title}>
            <Link href={link.href} className="flex gap-4  ">
              <span className="text-sm md:text-lg">{link.icon}</span>
              <span className="text-sm md:text-lg">{link.title}</span>
            </Link>
          </li>
        ))}
      </ul>

      <h4 className="pb-2 uppercase font-semibold text-linkColor text-sm">Menu</h4>
      <ul className="pb-4">
        {MENU_LINKS.map((link) => (
          <li className={`p-2 md:p-4 rounded-lg text-linkColor font-semibold  ${link.isActive ? "bg-white text-black" : ""}  hover:bg-white text-black`} key={link.title}>
            <Link href={link.href} className="flex gap-4">
              <span className="text-sm md:text-lg">{link.icon}</span>
              <span className="text-sm md:text-lg">{link.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

const NavSheet = () => {
  return (
    <Sheet>
      <SheetTrigger className="absolute top-2 left-2">
        <SheetTitle>
          <Menu />
        </SheetTitle>
      </SheetTrigger>
      <SheetContent className="p-2">
        <CommonNav />
      </SheetContent>
    </Sheet>
  );
};

const Sidebar = () => {
  return (
    <>
      <div className="w-[300px] hidden h-screen px-6 py-10 md:block">
        <CommonNav />
      </div>
      <div className="block md:hidden">
        <NavSheet />
      </div>
    </>
  );
};

export default Sidebar;
