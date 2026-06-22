"use client";

import { useState } from "react";
import AuthModal from "./AuthModal";
import Image from "next/image"
import icon from "@/app/icon.png"
import dynamic from "next/dynamic";
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react";

const ThemeToggle = dynamic(
  () => import("@/components/theme-toggle").then((mod) => mod.default),
  { ssr: false }
);



export default function Navbar() {
    const [authMode, setAuthMode] =
        useState<"login" | "signup" | null>(null);
    const [mobileMenu, setMobileMenu] = useState(false);

    return (
        <>
            <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-background/70 backdrop-blur-xl">
                <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3">
                        <Image
                            src={icon}
                            alt="Fabel"
                            width={120}
                            height={40}
                        />


                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-10">
                        <Link href="#books">New Releases</Link>
                        <Link href="#genres">Genres</Link>
                        <Link href="#reviews">Reviews</Link>
                    </nav>

                    {/* Desktop Actions */}
                    <div className="hidden md:flex items-center gap-3">
                        <ThemeToggle />

                        <Button
                            variant="ghost"
                            onClick={() => setAuthMode("login")}
                        >
                            Login
                        </Button>

                        <Button
                            variant="default"
                            onClick={() => setAuthMode("signup")}

                        >
                            Sign Up
                        </Button>
                    </div>

                    {/* Mobile Actions */}
                    <div className="flex items-center gap-2 md:hidden">
                        <ThemeToggle />

                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => setMobileMenu(!mobileMenu)}
                        >
                            {mobileMenu ? <X /> : <Menu />}
                        </Button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {mobileMenu && (
                    <div className="border-t border-white/10 bg-background/95 backdrop-blur-xl md:hidden">
                        <div className="flex flex-col p-6 gap-4">

                            <Link
                                href="#books"
                                onClick={() => setMobileMenu(false)}
                            >
                                New Releases
                            </Link>

                            <Link
                                href="#genres"
                                onClick={() => setMobileMenu(false)}
                            >
                                Genres
                            </Link>

                            <Link
                                href="#reviews"
                                onClick={() => setMobileMenu(false)}
                            >
                                Reviews
                            </Link>

                            <div className="mt-4 flex flex-col gap-2">
                                <Button
                                    variant="outline"
                                    onClick={() => {
                                        setAuthMode("login");
                                        setMobileMenu(false);
                                    }}
                                >
                                    Login
                                </Button>

                                <Button
                                    className="bg-[#A67D45] text-black"
                                    onClick={() => {
                                        setAuthMode("signup");
                                        setMobileMenu(false);
                                    }}
                                >
                                    Sign Up
                                </Button>
                            </div>
                        </div>
                    </div>
                )}
            </header>

            <AuthModal
                isOpen={authMode !== null}
                mode={authMode}
                onModeChange={setAuthMode}
                onClose={() => setAuthMode(null)}
            />
        </>
    );
}