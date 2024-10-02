"use client";
import React, { useState } from "react";
import Logo, { LogoMoblie } from "@/components/Logo";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "./ui/button";
import { UserButton } from "@clerk/nextjs";
import { ThemeSwitcherBtn } from "./ThemeSwitcherBtn";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Menu } from "lucide-react";

type NavItemtype = {
  link: string;
  label: string;
  clickCallback?: () => void;
};

function NavBar() {
  return (
    <>
      <DesktopNavBar />
      <MoblieNavbar />
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
        <div className="flex items-center gap-2">
          <ThemeSwitcherBtn />
          <UserButton afterSignOutUrl="/sign-in" />
        </div>
      </nav>
    </div>
  );
}

function MoblieNavbar() {
  const [isopen, setIsopen] = useState(false);
  return (
    <div className="block border-spacing bg-background md:hidden">
      <nav className="container flex items-center justify-between px-8">
        <Sheet open={isopen} onOpenChange={setIsopen}>
          <SheetTrigger asChild>
            <Button variant={"ghost"} size={"icon"}>
              <Menu />
            </Button>
          </SheetTrigger>

          <SheetContent className="w-[400px] sm:w-[540px]" side={"left"}>
            <Logo />
            <div className="flex flex-col gap-1 pt-4">
              {items.map((item) => (
                <NavbarItems
                  key={item.label}
                  label={item.label}
                  link={item.link}
                  clickCallback={() => setIsopen((prev) => !prev)}
                />
              ))}
            </div>
          </SheetContent>
        </Sheet>

        <div className="flex h-[80px] min-h-[60px] items-center gap-x-4">
          <LogoMoblie />
        </div>

        <div className="flex items-center gap-2">
          <ThemeSwitcherBtn />
          <UserButton afterSignOutUrl="/app/(auth)/sign-in/[[...sign-in]]/page.tsx" />
        </div>
      </nav>
    </div>
  );
}

export function NavbarItems({ label, link, clickCallback }: NavItemtype) {
  const pathname = usePathname();

  const isActive = pathname == link;

  return (
    <div className="relative flex items-center">
      <Link
        href={link}
        className={cn(
          buttonVariants({ variant: "ghost" }),
          "w-full justify-start text-lg text-muted-foreground hover:text-foreground",
          isActive && "text-foreground"
        )}
        onClick={() => {
          if (clickCallback) clickCallback();
        }}
      >
        {label}
      </Link>
      {isActive && (
        <div
          className="absolute -bottom-[2px] left-1/2
          hidden h-[2px] w-[80%] -translate-x-1/2 rounded-xl bg-foreground md:block"
        ></div>
      )}
    </div>
  );
}

export default NavBar;
