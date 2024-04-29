"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { SiteRoute } from "../constants/types";
import siteRoutes from "../constants/siteRoutes";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="flex justify-between items-center py-4 px-7 border-b">
      <Link href="/">
        <Image
          src="https://img1.pnghut.com/20/10/17/HYcqzv2JxM/google-images-nyan-cat-tenor-claire-belton-gund.jpg"
          alt="logo"
          className="h-[80px] w-[80px]"
          width="80"
          height="80"
        />
      </Link>
      <nav>
        <ul className="flex gap-x-5 text-[14px]">
          {siteRoutes.map((siteRoute: SiteRoute) => (
            <li key={siteRoute.href}>
              <Link
                href={siteRoute.href}
                className={`text-zinc-400 transition ${
                  pathname === siteRoute.href ? "text-zinc-900" : ""
                }`}
              >
                {siteRoute.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
