"use client"
const ProductsErrorPage = ({error}: {error: Error}) => {
  return (
    <div>{error.message}</div>
  )
}

export default ProductsErrorPage