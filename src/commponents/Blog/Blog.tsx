import { Blog } from "@/app/(root)/blog/page";

const BlogPage = ({ blog }: { blog: Blog }) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">{blog.title}</h2>
        <p className="text-gray-600 leading-relaxed">{blog.body}</p>
      </div>
    </div>
  );
};

export default BlogPage;
