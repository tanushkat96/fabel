import FloatingSidebar from "@/components/dashboard/sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
   
  return (
    <div className="min-h-screen bg-background">
      <FloatingSidebar />

      <main className="ml-32 p-6">
        {children}
      </main>
    </div>
  );
}