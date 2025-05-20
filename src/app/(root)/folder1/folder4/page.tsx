import Link from 'next/link'
import React from 'react'

export default function folder4() {
  return (
    <div className="p-20 flex flex-col gap-10">
        <h1 className='text-2xl'>Folder 4</h1>
        <Link href="/folder1/folder3" className='text-blue-400'>Folder3</Link>
        <Link href="/contact" className='text-blue-400'>Contact</Link>
    </div>
  )
}
