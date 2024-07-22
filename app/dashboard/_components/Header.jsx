"use client"
import { UserButton } from '@clerk/nextjs'
import { usePathname } from 'next/navigation'
import React, { useEffect } from 'react'

function Header() {

const path = usePathname();

useEffect(()=>{
console.log(path);
},[])

  return (
    <div className='flex p-4 items-center justify-between bg-secondery shadow-sm'>
        <img src={"/logo.svg"} width={40} height={40} alt="Logo" />
        <ul className='hidden md:flex gap-6'>
            <li className={`hover:text-blue-800 hover:font-bold hover:cursor-pointer transition-all ${path=='/dashboard'&&'text-blue-700 font-bold' }`}>
                Tableau de bord
            </li>
            <li className={`hover:text-blue-800 hover:font-bold hover:cursor-pointer transition-all ${path=='/dashboard/questions'&&'text-blue-700 font-bold' }`}>
               Questions 
            </li>
            <li className={`hover:text-blue-800 hover:font-bold hover:cursor-pointer transition-all ${path=='/dashboard/upgrade'&&'text-blue-700 font-bold' }`}>
                Premium
            </li>
            <li className={`hover:text-blue-800 hover:font-bold hover:cursor-pointer transition-all ${path=='/dashboard/how'&&'text-blue-700 font-bold' }`}>
                Comment ca marche ?
            </li>
        </ul>
        <UserButton/>
    </div>
  )
}

export default Header