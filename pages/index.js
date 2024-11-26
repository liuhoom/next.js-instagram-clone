import Header from '@/components/header'
import Head from 'next/head'

export default function Home() {
  return (
    <div className='bg-gray-50 min-h-screen'>
      <Head>
        <title>Instragram App</title>
        <meta name='Description' content='For learn use' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div className=""></div>
      {/* header */}
      <Header />
    </div>
  )
}
