import Banner from "@/commponents/home/Banner";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  // You can fetch data here or use props
  return {
    title: "Dynamic Page Title",
    description: "Dynamic description for this page.",
  };
}

const Homepage = () => {
  return (
    <>
      <Banner />
    </>
  );
};

export default Homepage;
