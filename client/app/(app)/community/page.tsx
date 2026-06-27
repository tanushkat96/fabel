"use client";

import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

import AuthorCard from "@/components/community/author-card";
import DiscussionCard from "@/components/community/discussion-card";
import BlogCard from "@/components/community/blog-card";

const authors = [
  {
    name: "J.K. Rowling",
    image: "/authors/rowling.jpg",
    books: 27,
  },
  {
    name: "Stephen King",
    image: "/authors/stephen.jpg",
    books: 65,
  },
  {
    name: "Agatha Christie",
    image: "/authors/agatha.jpg",
    books: 85,
  },
  {
    name: "Jane Austen",
    image: "/authors/jane.jpg",
    books: 6,
  },
];

const discussions = [
  {
    title: "The Alchemist",
    question:
      "Why do readers connect so deeply with Santiago's journey?",
    author: "Tanushka",
    comments: 18,
    time: "2h ago",
  },
  {
    title: "Atomic Habits",
    question:
      "Which habit from this book changed your daily routine?",
    author: "Rahul",
    comments: 26,
    time: "5h ago",
  },
];

const blogs = [
  {
    title: "10 Fantasy Books Every Reader Should Try",
    category: "Fantasy",
    readTime: "6 min",
    date: "Jun 27",
    excerpt:
      "Discover magical worlds, unforgettable characters and epic adventures with these must-read fantasy novels.",
  },
  {
    title: "Why Reading Before Bed Improves Sleep",
    category: "Lifestyle",
    readTime: "4 min",
    date: "Jun 24",
    excerpt:
      "Building a bedtime reading habit can improve sleep quality while reducing screen time and stress.",
  },
];

export default function CommunityPage() {
  return (
    <div className="space-y-14">

      {/* Hero */}

      <section>
        <h1 className="font-heading text-4xl font-semibold">
          Community
        </h1>

        <p className="mt-2 text-muted-foreground">
          Explore blogs, discover authors, and join book discussions.
        </p>

        <div className="relative mt-8 max-w-lg">
          <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />

          <Input
            placeholder="Search authors, blogs or discussions..."
            className="pl-12"
          />
        </div>
      </section>

      {/* Authors */}

      <section>

        <div className="mb-6 flex items-center justify-between">

          <h2 className="text-3xl font-semibold">
            Featured Authors
          </h2>

          <button className="text-primary hover:underline">
            View all
          </button>

        </div>

        <div className="flex gap-6 overflow-x-auto pb-2 no-scrollbar">

          {authors.map((author) => (
            <AuthorCard
              key={author.name}
              {...author}
            />
          ))}

        </div>

      </section>

      {/* Discussions */}

      <section>

        <div className="mb-6 flex items-center justify-between">

          <h2 className="text-3xl font-semibold">
            Latest Discussions
          </h2>

          <button className="text-primary hover:underline">
            View all
          </button>

        </div>

        <div className="grid gap-6 lg:grid-cols-2">

          {discussions.map((discussion) => (
            <DiscussionCard
              key={discussion.title}
              {...discussion}
            />
          ))}

        </div>

      </section>

      {/* Blogs */}

      <section>

        <div className="mb-6 flex items-center justify-between">

          <h2 className="text-3xl font-semibold">
            Featured Blogs
          </h2>

          <button className="text-primary hover:underline">
            View all
          </button>

        </div>

        <div className="grid gap-6 lg:grid-cols-2">

          {blogs.map((blog) => (
            <BlogCard
              key={blog.title}
              {...blog}
            />
          ))}

        </div>

      </section>

    </div>
  );
}