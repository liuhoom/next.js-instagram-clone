import {
  BookmarkIcon,
  ChatIcon,
  DotsHorizontalIcon,
  EmojiHappyIcon,
  HeartIcon,
} from '@heroicons/react/outline';
import Image from 'next/image';

export default function Post({ username, userimg, image, comment }) {
  return (
    <div className='bg-white my-7 border border-gray-300 rounded-md'>
      <div className='flex p-5 items-center'>
        <img
          src={userimg}
          className='h-12 mr-3 rounded-full border p-[2px] cursor-pointer'
        />
        <p className='font-semibold flex-1'>{username}</p>
        <DotsHorizontalIcon className='h-5 cursor-pointer' />
      </div>

      <img src={image} className='object-cover h-full' />

      <div className='flex my-4 px-4'>
        <div className='flex flex-1 space-x-2'>
          <HeartIcon className='post-icon' />
          <ChatIcon className='post-icon' />
        </div>
        <BookmarkIcon className='post-icon' />
      </div>

      <div className='flex items-center text-center my-1 px-4'>
        <h className='font-bold mr-2'>{username}</h>
        <p className=''>{comment}</p>
      </div>

      <div className='flex items-center p-3'>
        <EmojiHappyIcon className='h-7' />
        <input
          type='text'
          className='w-full border-none focus:ring-0 flex-1'
          placeholder='Enter your comment..'
        />
        <button type='submit' className='text-blue-500 font-bold'>
          Post
        </button>
      </div>
    </div>
  );
}
