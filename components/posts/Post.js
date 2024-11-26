import Image from 'next/image'
import { DotsHorizontalIcon } from '@heroicons/react/outline'

export default function Post({ username, userimg, image, comment }) {
  return (
    <div>
      <div className='flex items-center'>
        <img
          src={userimg}
          className='h-12 mr-2 rounded-full border cursor-pointer'
        />
        <p className='text-sm font-semibold flex-1'>{username}</p>
        <DotsHorizontalIcon className='h-5 cursor-pointer' />
      </div>
      <div className='object-contain'>
        <Image src={image} fill className='object-contain' />
      </div>
    </div>
  )
}
