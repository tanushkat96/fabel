"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import {
  BookOpen,
  Flame,
  Star,
  Trophy,
  Clock3,
  Sparkles,
} from "lucide-react";

export default function InsightsPage() {
  return (
    <div className="mx-auto max-w-7xl space-y-6">

      {/* Header */}

      <div>
        <h1 className="text-4xl font-bold tracking-tight">
          Reading Insights
        </h1>

        <p className="mt-2 text-muted-foreground">
          Track your reading journey and celebrate every milestone.
        </p>
      </div>

      {/* Hero */}

      <Card className="rounded-[22px] border-0 shadow-md">
        <CardContent className="flex items-center justify-between p-8">

          <div>

            <div className="flex items-center gap-2 text-orange-500">

              <Flame className="h-6 w-6" />

              <span className="font-medium">
                Current Streak
              </span>

            </div>

            <h2 className="mt-4 text-6xl font-bold">
              12
            </h2>

            <p className="text-lg text-muted-foreground">
              Days of continuous reading
            </p>

          </div>

          <div className="grid grid-cols-3 gap-10 text-center">

            <div>

              <BookOpen className="mx-auto mb-3 h-7 w-7 text-primary" />

              <h3 className="text-2xl font-bold">
                18
              </h3>

              <p className="text-md text-muted-foreground">
                Books
              </p>

            </div>

            <div>

              <Sparkles className="mx-auto mb-3 h-7 w-7 text-purple-500" />

              <h3 className="text-2xl font-bold">
                4,850
              </h3>

              <p className="text-md text-muted-foreground">
                Pages
              </p>

            </div>

            <div>

              <Star className="mx-auto mb-3 h-7 w-7 text-yellow-500 fill-yellow-500" />

              <h3 className="text-2xl font-bold">
                4.7
              </h3>

              <p className="text-md text-muted-foreground">
                Avg Rating
              </p>

            </div>

          </div>

        </CardContent>
      </Card>

      {/* Bottom Grid */}

      <div className="grid gap-6 lg:grid-cols-2">

        {/* Goal */}

        <Card className="rounded-[22px] border-0 shadow-md">

          <CardContent className="space-y-6 p-8">

            <div className="flex items-center gap-3">

              <Trophy className="h-6 w-6 text-emerald-500" />

              <h2 className="text-xl font-semibold">
                Reading Goal
              </h2>

            </div>

            <div className="flex items-end justify-between">

              <div>

                <h3 className="text-2xl font-bold">
                  60%
                </h3>

                <p className="text-muted-foreground">
                  18 of 30 books completed
                </p>

              </div>

              <span className="rounded-[80px] bg-primary/10 px-3 py-1 text-md font-medium text-primary">
                On Track
              </span>

            </div>

            <Progress value={60} className="h-3 round-[22px]" />

          </CardContent>

        </Card>

        {/* Monthly Summary */}

        <Card className="rounded-[22px] border-0 shadow-md">

          <CardContent className="space-y-6 p-8">

            <div className="flex items-center gap-3">

              <Clock3 className="h-6 w-6 text-blue-500" />

              <h2 className="text-xl font-semibold">
                This Month
              </h2>

            </div>

            <div className="grid grid-cols-3 gap-6">

              <div className="text-center">

                <h3 className="text-2xl font-bold">
                  4
                </h3>

                <p className="mt-2 text-md text-muted-foreground">
                  Books
                </p>

              </div>

              <div className="text-center">

                <h3 className="text-2xl font-bold">
                  1240
                </h3>

                <p className="mt-2 text-md text-muted-foreground">
                  Pages
                </p>

              </div>

              <div className="text-center">

                <h3 className="text-2xl font-bold">
                  18h
                </h3>

                <p className="mt-2 text-md text-muted-foreground">
                  Reading
                </p>

              </div>

            </div>

            <div className="rounded-[22px] bg-primary/5 p-4">

              <p className="text-md text-muted-foreground">

                You&apos;re ahead of your monthly reading goal.
                Keep going to unlock your next milestone!

              </p>

            </div>

          </CardContent>

        </Card>

      </div>

    </div>
  );
}