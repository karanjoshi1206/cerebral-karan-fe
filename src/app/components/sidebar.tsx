import { BarChart, ChartBarStacked, LayoutDashboard, Plug, Settings, UserCircle, Workflow } from "lucide-react";
import Link from "next/link";
import React from "react";

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

const Sidebar = () => {
  return (
    <div className="w-[300px] h-screen px-6 py-10 ">
      <h1 className="text-[24px] font-bold  pb-4">Salesway</h1>
      <ul className="pb-4">
        {PRIMARY_LINKS.map((link) => (
          <li className="p-4 rounded-lg text-linkColor font-semibold " key={link.title}>
            <Link href={link.href} className="flex gap-4">
              {link.icon}
              <span>{link.title}</span>
            </Link>
          </li>
        ))}
      </ul>

      <h4 className="pb-2 uppercase font-semibold text-linkColor text-sm">Menu</h4>
      <ul className="pb-4">
        {MENU_LINKS.map((link) => (
          <li className={`rounded-lg text-linkColor p-4 font-semibold ${link.isActive ? "bg-white text-black" : ""}  hover:bg-white text-black`} key={link.title}>
            <Link href={link.href} className="flex gap-4">
              {link.icon}
              <span>{link.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
