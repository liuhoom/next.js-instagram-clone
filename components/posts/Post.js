import {
  BookmarkIcon,
  ChatIcon,
  DotsHorizontalIcon,
  EmojiHappyIcon,
  HeartIcon,
} from '@heroicons/react/outline'
import Image from 'next/image'

export default function Post({ username, userimg, image, comment }) {
  return (
    <div className=' bg-white my-8'>
      <div className='flex  p-4 items-center border rounded-b-none rounded-md'>
        <img
          src={userimg}
          className='h-12 mr-2 rounded-full border p-[2px] cursor-pointer'
        />
        <p className='text-sm font-semibold flex-1'>{username}</p>
        <DotsHorizontalIcon className='h-5 cursor-pointer' />
      </div>

      <img src={image} className='object-contain' />

      <div className='flex flex-row'>
        <div className='flex flex-1 space-x-2'>
          <HeartIcon className='post-icon' />
          <ChatIcon className='post-icon' />
        </div>
        <BookmarkIcon className='post-icon' />
      </div>

      <div className='flex items-center'>
        <h className='font-bold'>{username}</h>
        <p className='text-sm'>{comment}</p>
      </div>
      <div className='relative'>
        <EmojiHappyIcon className='h-6 absolute top-2 left-2' />
        <input type='text' className='pl-10 w-full border-none' placeholder='Enter your comment..'/>
      </div>
    </div>
  )
}
