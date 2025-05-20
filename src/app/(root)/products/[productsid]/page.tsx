import { Metadata } from "next";

type Props = {
  params: { productsid: string }; // Correct type for params
};

export const dynamicParams = false;

export async function generateStaticParams() {
  return [ { productsid: "1"}, { productsid: "2" }, { productsid: "3" }];
}
export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const { productsid: id } = params; // Correct casing for the dynamic route parameter
  return {
    title: `Product ${id}`,
    description: `Details about Product ${id}`,
  };
};

const ProductDetailspage = async ({ params }: Props) => {
  const { productsid: id } = params; // Correct casing for the dynamic route parameter
  return <div>Product Details page - {id}</div>;
};

export default ProductDetailspage;
