import Header from '@/components/header'
import { getProviders } from 'next-auth/react'

export default function Signin({ providers }) {
  console.log(providers)
  return (
    <div>
      <Header />
      <div className='items-center justify-center'>
        <div className=''>
          <img
            src='/fj.jpg'
            alt='sign-in-img'
            className='rotate-6 h-32 w-10 object-cover'
          />
        </div>
        <div className='flex flex-col'>
          <img src="/Instagram_logo_2022.svg.png" alt="" className="h-24 w-24 object-fill" />
          {Object.values(providers).map((p) => (
            <button className='bg-red-400'>Sign in with {p.name}</button>
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
