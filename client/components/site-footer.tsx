import Image from "next/image";
import Link from "next/link";
import icon from "@/app/icon.png";
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

const exploreLinks = [
  { title: "New Releases", href: "#new-releases" },
  { title: "Books of the Week", href: "#books-week" },
  { title: "Genres", href: "#genres" },
  { title: "Authors", href: "#authors" },
];

export default function SiteFooter() {
  return (
    <footer className="border-t bg-background">
      <div className="mx-auto max-w-7xl px-6 py-10">

        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr]">

          {/* Left */}
          <div>
            <Image
              src={icon}
              alt="Fabel"
              width={120}
              className="h-auto"
            />

            <p className="mt-4 max-w-sm text-sm leading-6 text-muted-foreground">
              A curated home for readers. Discover, collect and fall in love
              with your next great book.
            </p>

            <h3 className="mt-6 text-sm font-semibold uppercase tracking-wide">
              Get in Touch
            </h3>

            <a
              href="mailto:tanushkat96@gmail.com"
              className="mt-3 flex w-fit items-center gap-2 rounded-full bg-primary px-5 py-2 text-sm text-primary-foreground transition hover:opacity-90"
            >
              <FaEnvelope />
              Email Me
            </a>
          </div>

          {/* Explore */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide">
              Explore
            </h3>

            <ul className="mt-4 space-y-3">
              {exploreLinks.map((item) => (
                <li key={item.title}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground transition hover:text-primary"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Follow */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide">
              Follow
            </h3>

            <div className="mt-4 flex gap-4">

              <a
                href="https://www.linkedin.com/in/tanushka-tiwari2105/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border p-3 transition hover:border-primary hover:text-primary"
              >
                <FaLinkedin size={18} />
              </a>

              <a
                href="https://github.com/tanushkat96"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border p-3 transition hover:border-primary hover:text-primary"
              >
                <FaGithub size={18} />
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border p-3 transition hover:border-primary hover:text-primary"
              >
                <FaInstagram size={18} />
              </a>

            </div>
          </div>

        </div>

        {/* Bottom */}

        <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t pt-5 text-sm text-muted-foreground md:flex-row">
          <p>© 2026 Fabel. Made with ❤️ for readers.</p>

          <div className="flex gap-6">
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Terms</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}