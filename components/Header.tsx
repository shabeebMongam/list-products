import Link from 'next/link'
import React from 'react'

const Header = () => {
    return (
        <div className='w-screen  h-20 flex justify-center gap-3 bg-slate-400 items-center text-2xl ' >
            <Link href='/'>
                Home
            </Link>
            <Link href='/products'>
                Products
            </Link>
        </div>
    )
}

export default Header