import BlogPage from "@/commponents/Blog/Blog";

export interface Blog {
  id: number;
  title: string;
  body: string;
}

export default async function Page() {
  // Fetching blog data from the API
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=15",
    {
      next: {
        revalidate: 10,
      },
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch blogs");
  }

  const blogs: Blog[] = await res.json();

  // Simulating a delay (optional)
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return (
    <>
      {blogs.map((blog: Blog) => (
        <BlogPage blog={blog} key={blog.id} />
      ))}
    </>
  );
}
