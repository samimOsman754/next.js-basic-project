// /app/blog/[id]/page.tsx
import getBlogById, { Blog } from "@/app/(root)/blog/getBlogById";
import { Metadata } from "next";

type PageProps = {
  params: {
    id: string;
  };
};

// 👉 Dynamic metadata for each blog post
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const blog: Blog = await getBlogById(params.id);

  return {
    title: blog.title,
    description: blog.body.slice(0, 150) + "...", // first 150 characters as description
  };
}

// 👉 Page component
export default async function BlogDetailPage({ params }: PageProps) {
  const blog: Blog = await getBlogById(params.id);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
      <p>{blog.body}</p>
    </div>
  );
}
