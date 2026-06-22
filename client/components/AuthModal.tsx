"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import Image from "next/image"
import icon from "@/app/icon.png"
import { useEffect } from "react";
import { FcGoogle } from "react-icons/fc";
interface AuthModalProps {
    isOpen: boolean;
    mode: "login" | "signup" | null;
    onClose: () => void;
    onModeChange: (mode: "login" | "signup") => void;
}

export default function AuthModal(
    {
        isOpen,
        mode,
        onClose,
        onModeChange,
    }: AuthModalProps) {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }

        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);
    return (
        <AnimatePresence>
            {isOpen && (
                <div
                    className="fixed
inset-0
z-50
overflow-x-hidden
bg-black/60
backdrop-blur-lg
flex
items-center
justify-center
p-4"
                    onClick={onClose}
                >
                    <motion.div
                        initial={{
                            opacity: 0,
                            y: 40,
                            scale: 0.9,
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                            scale: 1,
                        }}
                        exit={{
                            opacity: 0,
                            y: 20,
                            scale: 0.95,
                        }}
                        transition={{
                            duration: 0.35,
                            ease: "easeOut",
                        }}
                        onClick={(e) => e.stopPropagation()}
                        className="
relative
w-full
max-w-md
mx-auto

max-h-[90vh]
overflow-y-auto

rounded-[32px]
border

bg-white/80
border-[#CDBEAD]/50

dark:bg-white/5
dark:border-white/10

backdrop-blur-[16px]
shadow-[0_8px_32px_rgba(0,0,0,0.15)]
dark:shadow-[0_8px_32px_rgba(0,0,0,0.4)]
[scrollbar-width:none]
[-ms-overflow-style:none]

p-8
"
                    >
                        {/* Glow Effects */}
                        <div className="absolute inset-0 overflow-hidden pointer-events-none">
                            <div className="absolute -top-24 -left-24 h-48 w-48 rounded-full bg-[#A67D45]/20 blur-3xl" />

                            <div className="absolute -bottom-24 -right-24 h-48 w-48 rounded-full bg-[#5D1C34]/10 blur-3xl" />
                        </div>

                        {/* Content */}
                        <div className="relative z-10">
                            {/* Close */}
                            <button
                                onClick={onClose}
                                className="absolute right-0 top-0 text-[#CDBEAD] hover:text-white"
                            >
                                <X size={20} />
                            </button>

                            {/* Heading */}
                            <div className="flex justify-center items-center">
                                <Image
                                    src={icon}
                                    alt="Fabel"
                                    width={120}
                                    height={40}
                                />
                            </div>


                            <h2
                                className="
                                    font-serif
                                    text-4xl
                                    text-center

                                    text-[#110D0E]
                                    dark:text-[#F0E9E3]
                                "
                            >


                                {mode === "login" ? "Welcome To Fabel" : "Join Fabel"}
                            </h2>

                            <p
                                className="
    mt-2
    text-center

    text-[#5D1C34]
    dark:text-[#CDBEAD]
  "
                            >
                                Continue your reading journey
                            </p>

                            <p className="mt-3 text-center italic text-[#899581] text-sm">
                                &ldquo;A reader lives a thousand lives.&ldquo;
                            </p>


                            {/* Form */}
                            <div className="mt-8 space-y-4">
                                {mode === "signup" && (
                                    <>
                                        <label
                                            htmlFor="fullName"
                                        >Full Name</label>

                                        <input
                                            id="fullName"
                                            type="text"
                                            placeholder="Full Name"
                                            className="
  w-full
  rounded-[16px]
  border

  bg-white/70
  border-[#CDBEAD]

  dark:bg-white/5
  dark:border-white/10

  px-4
  py-3

  text-[#110D0E]
  dark:text-[#F0E9E3]

  placeholder:text-[#899581]

  outline-none
  focus:border-[#A67D45]
  transition
"
                                        />
                                    </>
                                )}
                                <label htmlFor="email">Email</label>
                                <input
                                    id="email"
                                    type="email"
                                    placeholder="Email"
                                    autoComplete="off"
                                    className="
  w-full
  rounded-[16px]
  border

  bg-white/70
  border-[#CDBEAD]

  dark:bg-white/5
  dark:border-white/10

  px-4
  py-3

  text-[#110D0E]
  dark:text-[#F0E9E3]

  placeholder:text-[#899581]

  outline-none
  focus:border-[#A67D45]
  transition
"
                                />
                                <label htmlFor="password">Password</label>
                                <input
                                    id="password"
                                    type="password"
                                    placeholder="Password"
                                    autoComplete="new-password"
                                    className="
  w-full
  rounded-[16px]
  border

  bg-white/70
  border-[#CDBEAD]

  dark:bg-white/5
  dark:border-white/10

  px-4
  py-3

  text-[#110D0E]
  dark:text-[#F0E9E3]

  placeholder:text-[#899581]

  outline-none
  focus:border-[#A67D45]
  transition
"
                                />
                                {mode === "login" && (
                                    <div className="flex justify-end">
                                        <button
                                            type="button"
                                            className="text-sm text-[#A67D45] hover:underline"
                                        >
                                            Forgot Password?
                                        </button>
                                    </div>
                                )}

                                {mode === "signup" && (
                                    <>
                                        <label
                                            htmlFor="confirmPassword"
                                        >
                                            Confirm Password
                                        </label>

                                        <input
                                            id="confirmPassword"
                                            type="password"
                                            placeholder="Confirm Password"
                                            className="
        w-full
        rounded-[16px]
        border
        bg-white/70
        border-[#CDBEAD]

        dark:bg-white/5
        dark:border-white/10

        px-4
        py-3

        text-[#110D0E]
        dark:text-[#F0E9E3]

        placeholder:text-[#899581]

        outline-none
        focus:border-[#A67D45]
        transition
      "
                                        />
                                    </>
                                )}
                                <button
                                    className="
  w-full
  rounded-[16px]
  border

  bg-[#5D1C34]
  border-[#CDBEAD]

  dark:bg-[#CDBEAD]
  dark:border-white/10

  px-4
  py-3

  text-[#F0E9E3]
  dark:text-[#5D1C34]

  placeholder:text-[#899581]

  outline-none
  focus:border-[#A67D45]
  transition
"
                                >
                                    {mode === "login"
                                        ? "Login"
                                        : "Create Account"}
                                </button>
                                <p className="text-center">OR</p>
                                <button
                                    type="button"
                                    className="
    flex
    items-center
    justify-center
    gap-3
    w-full
    rounded-[16px]
    border
    border-[#CDBEAD]
    bg-white/70
    py-3
    font-medium
  "
                                >
                                    <FcGoogle size={22} />
                                    Continue with Google
                                </button>

                                {/* Footer */}
                                <div className="text-center text-sm text-[#a37e54]">
                                    {mode === "login" ? (
                                        <>
                                            New to Fabel?{" "}
                                            <button
                                                type="button"
                                                className="font-semibold hover:underline"
                                                onClick={() => onModeChange("signup")}
                                            >
                                                Create Account
                                            </button>
                                        </>
                                    ) : (
                                        <>
                                            Already have an account?{" "}
                                            <button
                                                type="button"
                                                className="font-semibold hover:underline"
                                                onClick={() => onModeChange("login")}
                                            >
                                                Login
                                            </button>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}