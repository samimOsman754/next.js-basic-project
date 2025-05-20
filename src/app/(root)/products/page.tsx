import Link from 'next/link'
import React from 'react'

const Productspage = () => {
  return (
    <div className='flex flex-col items-center justify-center h-screen gap-1.5'>
        <h1 className='text-3xl'>Products page</h1>
        <Link href="/products/1">products 1</Link>
        <Link href="/products/2">products 2</Link>
        <Link href="/products/3">products 3</Link>
        <Link href="/products/4">products 4</Link>
    </div>
  )
}

export default Productspage