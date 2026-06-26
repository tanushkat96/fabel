"use client";

import Image from "next/image";
import { BookOpen, Sparkles, ChevronDown, X } from "lucide-react";

import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetClose,
    SheetTitle,
} from "@/components/ui/sheet";


import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Button } from "@/components/ui/button";
import { GoogleBook } from "@/types/book";
import { useShelfStore } from "@/lib/shelf";

interface BookSheetProps {
    open: boolean;
    setOpen: (open: boolean) => void;
    book: GoogleBook | null;
}

export default function BookSheet({
    open,
    setOpen,
    book,
}: BookSheetProps) {
    // ✅ Hooks always go first
    const {
        currentlyReading,
        wantToRead,
        favorites,
        finished,
        addBook,
    } = useShelfStore();

    if (!book) return null;

    const title = book.volumeInfo.title;

    const author =
        book.volumeInfo.authors?.join(", ") ??
        "Unknown Author";

    const cover =
        book.volumeInfo.imageLinks?.thumbnail ??
        "/placeholder-book.jpg";

    const description =
        book.volumeInfo.description ??
        "No description available.";

    const currentShelf =
        currentlyReading.some((b) => b.id === book.id)
            ? "Currently Reading"
            : wantToRead.some((b) => b.id === book.id)
                ? "Want To Read"
                : favorites.some((b) => b.id === book.id)
                    ? "Favorites"
                    : finished.some((b) => b.id === book.id)
                        ? "Finished"
                        : null;

    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetContent
                side="right"
                showCloseButton={false}
                className="w-[55vw] min-w-212.5 max-w-none p-0"
            >
                {/* Header */}
                <div className="sticky top-0 z-10 border-b bg-background/95 backdrop-blur">
                    <SheetHeader className="flex flex-row items-center justify-between px-6 py-4">
                        <SheetTitle>Book Details</SheetTitle>

                        <SheetClose asChild>
                            <Button
                                variant="ghost"
                                size="icon"
                                className="rounded-full hover:bg-muted"
                            >
                                <X className="h-5 w-5" />
                            </Button>
                        </SheetClose>
                    </SheetHeader>
                </div>

                <div className="p-6">
                    {/* Hero */}
                    <div className="grid grid-cols-[220px_1fr] gap-8">
                        <Image
                            src={cover}
                            alt={title}
                            width={180}
                            height={270}
                            className="rounded-[22px] object-cover shadow-xl"
                        />

                        <div>
                            <h1 className="text-3xl font-bold">
                                {title}
                            </h1>

                            <p className="mt-2 text-muted-foreground">
                                {author}
                            </p>

                            <div className="mt-4 flex flex-wrap gap-2">
                                <span className="rounded-full bg-muted px-3 py-1 text-xs">
                                    Fantasy
                                </span>

                                <span className="rounded-full bg-muted px-3 py-1 text-xs">
                                    4.5 ★
                                </span>

                                <span className="rounded-full bg-muted px-3 py-1 text-xs">
                                    320 Pages
                                </span>
                            </div>

                            {/* Actions */}
                            <div className="mt-6 flex flex-wrap gap-3">
                                <Button>
                                    <BookOpen className="mr-2 h-4 w-4" />
                                    Read PDF
                                </Button>

                                <Button variant="outline">
                                    Ask Fabel
                                </Button>

                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <Button
                                            variant={currentShelf ? "outline" : "secondary"}
                                            disabled={!!currentShelf}
                                        >
                                            {currentShelf ? (
                                                <>
                                                    ✓ {currentShelf}
                                                </>
                                            ) : (
                                                <>
                                                    Add To Shelf
                                                    <ChevronDown className="ml-2 h-4 w-4" />
                                                </>
                                            )}
                                        </Button>
                                    </DropdownMenuTrigger>

                                    <DropdownMenuContent>

                                        <DropdownMenuItem
                                            onClick={() => {
                                                addBook(book, "currentlyReading");
                                                setOpen(false);
                                            }}
                                        >
                                            Currently Reading
                                        </DropdownMenuItem>

                                        <DropdownMenuItem
                                            onClick={() => {
                                                addBook(book, "wantToRead");
                                                setOpen(false);
                                            }}
                                        >
                                            Want To Read
                                        </DropdownMenuItem>

                                        <DropdownMenuItem
                                            onClick={() => {
                                                addBook(book, "finished");
                                                setOpen(false);
                                            }}
                                        >
                                            Finished
                                        </DropdownMenuItem>

                                        <DropdownMenuItem
                                            onClick={() => {
                                                addBook(book, "favorites");
                                                setOpen(false);
                                            }}
                                        >
                                            Favorites
                                        </DropdownMenuItem>

                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </div>
                        </div>
                    </div>

                    {/* Summary */}
                    <div className="mt-8 rounded-[22px] border p-5">
                        <h2 className="mb-4 text-xl font-semibold">
                            Summary
                        </h2>

                        <div
                            className="rounded-[20px] bg-muted px-4 py-2 text-sm transition-all hover:bg-primary hover:text-primary-foreground"
                            dangerouslySetInnerHTML={{
                                __html: description,
                            }}
                        />
                    </div>

                    {/* Ask Fabel */}
                    <div className="mt-6 rounded-[22px] border p-5">
                        <div className="mb-4 flex items-center">
                            <Sparkles className="mr-2 h-4 w-4" />
                            <h2 className="font-semibold">
                                Ask Fabel
                            </h2>
                        </div>

                        <div className="flex flex-wrap gap-2">
                            {[
                                "Summarize this book",
                                "Main themes",
                                "Character analysis",
                                "Books like this",
                            ].map((question) => (
                                <button
                                    key={question}
                                    className="rounded-full bg-muted px-4 py-2 text-sm transition-all hover:bg-primary hover:text-primary-foreground"
                                >
                                    {question}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </SheetContent>
        </Sheet>
    );
}