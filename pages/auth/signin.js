/* eslint-disable @next/next/no-img-element */

import Header from '@/components/header'
import { getProviders, signIn } from 'next-auth/react'

export default function Signin({ providers }) {
  console.log(providers)

  return (
    <div>
      <Header />
      <div className='flex items-center justify-center mt-32 md:space-x-14'>
        <div className='hidden md:inline-flex'>
          <img
            src='/fj.jpg'
            alt='sign-in-img'
            className='rotate-6 h-[300px] w-[200px] object-cover rounded-lg'
          />
        </div>
        <div className='flex flex-col items-center'>
          <img
            src='/Instagram_logo_2022.svg.png'
            alt=''
            className='h-24 w-24 object-fill mb-4'
          />
          <p className='italic text-sm my-4 text-center'>
            This app is for learning purpose;
          </p>
          {Object.values(providers).map((p) => (
            <div className='my-1' key={p.name}>
              <button
                className='bg-red-400 p-3 rounded-md text-white hover:bg-red-500'
                onClick={() => signIn(p.id, { callbackUrl: '/' })}
              >
                Sign in with {p.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export async function getServerSideProps(context) {
  const providers = await getProviders()

  return {
    props: {
      providers,
    },
  }
}
