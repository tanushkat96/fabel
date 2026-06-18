import Image from "next/image"
import icon from "@/app/icon.png"
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const columns = [
  {
    title: "Explore",
    links: ["New Releases", "Bestsellers", "Genres", "Authors"],
  },
  {
    title: "Company",
    links: ["About", "Careers", "Press", "Contact"],
  },
  {
    title: "Support",
    links: ["Help Center", "Gift Cards", "Returns", "Accessibility"],
  },
]

export function SiteFooter() {
  return (
    <footer className="bg-background">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2">
              <Image
                src={icon}
                alt="Fabel"
                width={100}
                height={30}
                priority
                className="h-auto w-auto"
              />
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground text-pretty">
              A curated home for readers. Discover, collect, and fall in love with your next great book.
            </p>
          </div>

          {columns.map((column) => (
            <div key={column.title}>
              <h3 className="text-sm font-semibold text-foreground">{column.title}</h3>
              <ul className="mt-4 flex flex-col gap-3">
                {column.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 sm:flex-row">
          <p className="text-xs text-muted-foreground">© 2026 Fabel. All rights reserved.</p>
          <div className="flex gap-6 text-xs text-muted-foreground">
            <a href="https://www.linkedin.com/in/tanushka-tiwari2105/" className="transition-colors hover:text-foreground"><FaLinkedin size={24} /></a>
            <a href="https://www.github.com/tanushkat96" className="transition-colors hover:text-foreground"><FaGithub size={24} /></a>
            <a href="https://www.instagram.com/" className="transition-colors hover:text-foreground"><FaInstagram size={24} /></a>
          </div>
        </div>
      </div>
    </footer>
  )
}
