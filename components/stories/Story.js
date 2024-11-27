import { PlusIcon } from '@heroicons/react/solid';

export default function Story({ username, img, isUser }) {
  return (
    <div className='relative group cursor-pointer'>
      {isUser && (
        <div className=''>
          <PlusIcon className='h-6 absolute top-4 left-4 group text-white z-10' />
        </div>
      )}
      <img
        src={img}
        alt={username}
        className='h-14 p-[1.5px] rounded-full border-2 border-red-600 group-hover:scale-125 transition-transform ease-out duration-200'
      />
      <div className='text-sm w-14 truncate'>{username}</div>
    </div>
  );
}
