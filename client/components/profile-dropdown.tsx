"use client";

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

import {
  BookOpen,
  Heart,
  BookMarked,
  CheckCircle2,
  Settings,
  LogOut,
  User,
} from "lucide-react";

import { useShelfStore } from "@/lib/shelf";
import Link from "next/link";

export default function ProfileDropdown() {
  const {
    currentlyReading,
    wantToRead,
    favorites,
    finished,
  } = useShelfStore();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          className="
            flex h-11 w-11 items-center justify-center
            rounded-full
            bg-primary
            text-primary-foreground
            font-semibold
            transition
            hover:scale-105
          "
        >
          T
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        className="w-72 rounded-2xl p-2"
      >
        {/* User */}
        <DropdownMenuLabel className="p-3">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-lg font-semibold text-primary-foreground">
              T
            </div>

            <div>
              <p className="font-semibold">
                Tanushka Tiwari
              </p>

              <p className="text-xs text-muted-foreground">
                tanushkat96@gmail.com
              </p>
            </div>
          </div>
        </DropdownMenuLabel>

        <DropdownMenuSeparator />

        {/* Reading Stats */}

        <DropdownMenuItem className="cursor-default">
          <BookOpen className="mr-2 h-4 w-4" />
          Currently Reading
          <span className="ml-auto font-medium">
            {currentlyReading.length}
          </span>
        </DropdownMenuItem>

        <DropdownMenuItem className="cursor-default">
          <BookMarked className="mr-2 h-4 w-4" />
          Want To Read
          <span className="ml-auto font-medium">
            {wantToRead.length}
          </span>
        </DropdownMenuItem>

        <DropdownMenuItem className="cursor-default">
          <Heart className="mr-2 h-4 w-4" />
          Favorites
          <span className="ml-auto font-medium">
            {favorites.length}
          </span>
        </DropdownMenuItem>

        <DropdownMenuItem className="cursor-default">
          <CheckCircle2 className="mr-2 h-4 w-4" />
          Finished
          <span className="ml-auto font-medium">
            {finished.length}
          </span>
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        {/* Navigation */}

        <Link href="/my-space">
          <DropdownMenuItem>
            <User className="mr-2 h-4 w-4" />
            My Space
          </DropdownMenuItem>
        </Link>

        <Link href="/settings">
          <DropdownMenuItem>
            <Settings className="mr-2 h-4 w-4" />
            Settings
          </DropdownMenuItem>
        </Link>

        <DropdownMenuSeparator />

        <DropdownMenuItem className="text-red-500 focus:text-red-500">
          <LogOut className="mr-2 h-4 w-4" />
          Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}