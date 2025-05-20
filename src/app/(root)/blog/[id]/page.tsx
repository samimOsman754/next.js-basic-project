// /app/blog/[id]/page.tsx
import getBlogById, { Blog } from "@/app/(root)/blog/getBlogById"; // Adjust the import path as needed

export default async function BlogDetailPage({ params }: { params: { id: string } }) {
  const blog: Blog = await getBlogById(params.id);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
      <p className="">{blog.body}</p>
    </div>
  );
}
