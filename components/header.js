import Image from 'next/image'
import React from 'react'
import { HomeIcon } from '@heroicons/react/solid'
import { PlusCircleIcon, SearchIcon } from '@heroicons/react/outline'
import { useRouter } from 'next/router'

export default function Header() {
  const router = useRouter()
  return (
    <div className='sticky top-0 border-b bg-white'>
      <div className='flex justify-between items-center max-w-6xl mx-4 xl:mx-auto'>
        <div className='cursor-pointer h-24 w-24 relative hidden md:inline'>
          <Image
            src='/Instagram_logo_black.png'
            fill
            alt='logo-img'
            className='object-contain'
            onClick={() => router.push('/')}
          />
        </div>
        <div className='cursor-pointer h-24 w-10 relative md:hidden items-center text-center'>
          <Image
            src='/Instagram_logo_2022.svg.png'
            fill
            alt='logo-img'
            className='object-contain'
            onClick={() => router.push('/')}
          />
        </div>

        <div className='relative flex mt-1'>
          <SearchIcon className='absolute top-2 left-2 h-8 text-gray-500' />
          <input
            type='text'
            placeholder='Search'
            className='pl-12 h-12 rounded-lg border-none focus:border-black focus:ring-black'
          />
        </div>

        <div className='flex space-x-4 items-center'>
          <HomeIcon
            className='h-8 w-8 hidden md:inline-flex header-icon'
            onClick={() => router.push('/')}
          />
          <PlusCircleIcon className='h-8 w-8  header-icon' />
          <Image
            src='https://avatars.githubusercontent.com/u/6359476?v=4'
            height={64}
            width={64}
            alt='user-img'
            className='h-10 w-10 cursor-pointer rounded-full'
          />
        </div>
      </div>
    </div>
  )
}
