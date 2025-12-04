import Link from "next/link";

export default function ProgramPage({ params }: { params: { slug: string } }) {
  // In a real app, you would fetch data using this slug
  const title = params.slug.replace(/-/g, " ");

  return (
    <main className="container mx-auto px-4 py-20 max-w-4xl min-h-[60vh]">
      <Link href="/#explore" className="text-sm text-muted-foreground hover:text-primary mb-6 inline-block">
        ← Back to Explore
      </Link>
      
      <h1 className="text-4xl font-bold capitalize mb-6">{title}</h1>
      
      <div className="p-8 border rounded-2xl bg-card shadow-sm">
        <p className="text-lg text-muted-foreground">
          This is the placeholder page for <strong>{title}</strong>. 
        </p>
        <p className="mt-4">
          You can edit this file at <code>src/app/programs/[slug]/page.tsx</code> to pull real content or create specific pages for each program.
        </p>
      </div>
    </main>
  );
}