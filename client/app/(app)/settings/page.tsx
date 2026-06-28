"use client";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";

import {
  Bell,
  Moon,
  User,
  Info,
} from "lucide-react";

export default function SettingsPage() {
  return (
    <div className="mx-auto max-w-4xl space-y-6">

      <div>
        <h1 className="text-4xl font-bold">Settings</h1>
        <p className="mt-2 text-2xl text-muted-foreground">
          Personalize your Fabel experience.
        </p>
      </div>

      {/* Profile */}

      <Card className="rounded-[22px]">
        <CardContent className="flex items-center gap-4 p-6">

          <Avatar className="h-15 w-15">
            <AvatarFallback>T</AvatarFallback>
          </Avatar>

          <div className="flex-1 ml-4">
            <h2 className="font-semibold">Tanushka</h2>
            <p className="text-lg text-muted-foreground">
              tanushka@example.com
            </p>
          </div>

          <User className="h-8 w-8 text-muted-foreground" />

        </CardContent>
      </Card>

      {/* Theme */}

      <Card className="rounded-[22px]">
        <CardContent className="flex items-center justify-between p-6">

          <div className="flex items-center gap-3">
            <Moon className="h-8 w-8 text-primary" />

            <div className="ml-4">
              <h3 className="font-medium">Dark Mode</h3>
              <p className="text-lg text-muted-foreground">
                Use dark appearance
              </p>
            </div>
          </div>

          <Switch />

        </CardContent>
      </Card>

      {/* Notifications */}

      <Card className="rounded-[22px]">
        <CardContent className="flex items-center justify-between p-6">

          <div className="flex items-center gap-3">
            <Bell className="h-8 w-8 text-primary" />

            <div className="ml-4">
              <h3 className="font-medium">Notifications</h3>
              <p className="text-lg text-muted-foreground">
                Reading reminders
              </p>
            </div>
          </div>

          <Switch defaultChecked />

        </CardContent>
      </Card>

      {/* About */}

      <Card className="rounded-[22px]">
        <CardContent className="p-6">

          <div className="flex items-center gap-3">

            <Info className="h-6 w-6 text-primary" />

            <div className="ml-3">
              <h3 className="font-medium">About Fabel</h3>
              <p className="text-md text-muted-foreground">
                Version 1.0 • Made for book lovers ❤️
              </p>
            </div>

          </div>

          <Separator className="my-4" />

          <p className="text-md text-muted-foreground">
            Discover books, connect with readers, and explore stories with AI.
          </p>

        </CardContent>
      </Card>

    </div>
  );
}