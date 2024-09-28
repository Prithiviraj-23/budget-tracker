"use client";

import React from "react";
import Logo from "@/components/Logo";
import { usePathname } from "next/navigation";
import Link from "next/link";

type NavItemtype = {
  link: string;
  label: string;
};

function NavBar() {
  return (
    <>
      <DesktopNavBar />
    </>
  );
}
const items = [
  { label: "Dashboard", link: "/" },
  { label: "Transaction", link: "/transaction" },
  { label: "Manage", link: "/manage" },
];

function DesktopNavBar() {
  return (
    <div className="hidden border-separate border-b bg-background md:block">
      <nav className="container flex items-center justify-between px-8">
        <div className="flex h-[80px] min-h-[60px] items-center gap-x-4">
          <Logo />
          <div className="flex h-full">
            {items.map((item) => (
              <NavbarItems
                key={item.label}
                link={item.link}
                label={item.label}
              />
            ))}
          </div>
        </div>
      </nav>
    </div>
  );
}

export function NavbarItems({ label, link }: NavItemtype) {
  const pathname = usePathname();

  const isActive = pathname == link;

  return <div className="relative flex items-center">
	<Link href={link}>
	{label}
	</Link>
  </div>;
}

export default NavBar;
