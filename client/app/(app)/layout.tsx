import Sidebar from "@/components/dashboard/sidebar";
import ThemeToggle from "@/components/theme-toggle";
import ProfileDropdown from "@/components/profile-dropdown";

export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen overflow-hidden bg-background ml-32">
      <Sidebar />

      <main className="flex-1 overflow-y-auto overflow-x-hidden">
        <header className="sticky top-0 z-50 flex h-20 items-center justify-end border-b bg-background/80 px-8 backdrop-blur-xl">
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <ProfileDropdown />
          </div>
        </header>

        <div className="p-8">
          {children}
        </div>
      </main>
    </div>
  );
}