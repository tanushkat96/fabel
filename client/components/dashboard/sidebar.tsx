"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image"
import logo from "@/app/icon.png"
import {
  LayoutDashboard,
  BookOpen,
  Users,
  Settings,
  Sparkles,
  LogOut,
} from "lucide-react";

const navItems = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "My Space",
    href: "/my-space",
    icon: BookOpen,
  },
  {
    name: "Community",
    href: "/community",
    icon: Users,
  },
  {
    name: "Ask Fabel",
    href: "/fabel",
    icon: Sparkles,
  },
  {
    name: "Settings",
    href: "/settings",
    icon: Settings,
  },
  
];

export default function FloatingSidebar() {
  const pathname = usePathname();

  return (
    <aside
      className="
      fixed
      left-6
      top-1/2
      -translate-y-1/2
      z-50
      h-[88vh]
      w-22
      rounded-[32px]
     bg-card
     border
border-border
      backdrop-blur-xl
      
      shadow-[0_10px_40px_rgba(93,27,52,0.12)]
      "
    >
      <div className="flex h-full flex-col">
        <Link href="/" className="flex items-center gap-3 px-1 py-8">
                        <Image
                            src={logo}
                            alt="Fabel"
                            width={100}
                            height={38}
                        />


                    </Link>
       

        {/* NAVIGATION */}
        <div className="flex flex-1 flex-col justify-evenly py-4">
          {navItems.map((item) => {
            const Icon = item.icon;
            const active = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className="group flex justify-center"
              >
                <div
                  className={`
                  relative
                  flex h-14 w-14 items-center justify-center
                  rounded-full
                  transition-all duration-300

                  ${
                    active
                      ? "bg-primary text-primary-foreground"
                      :  "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                  }
                `}
                >
                  <Icon size={26} />

                  {/* Tooltip */}
                  <span
                    className="
                    absolute left-20
                    whitespace-nowrap
                     rounded-full
                    bg-primary
                    px-3
                    py-2
                    text-sm
                    text-accent
                    opacity-0
                    transition-all
                    group-hover:opacity-100
                  "
                  >
                    {item.name}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>

        {/* LOGOUT */}
        <div className="flex h-24 items-center justify-center border-t border-[#CDBEAD]/40">
          <button
            className="
            flex h-14 w-14 items-center justify-center
            rounded-full
            text-[#6B5B4F]
            transition-all
            hover:bg-red-100
            hover:text-red-600
          "
          >
            <LogOut size={26} />
          </button>
        </div>
      </div>
    </aside>
  );
}