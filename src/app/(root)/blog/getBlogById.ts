export interface Blog {
  id: number;
  title: string;
  body: string;
}

export default async function getBlogById(id: string): Promise<Blog> {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    cache: "force-cache",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch blog");
  }

  const blog: Blog = await res.json();

  // Optional: simulate delay
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return blog;
}
