export default function Story({ username, img }) {
  return (
    <div className=''>
      <img
        src={img}
        alt={username}
        className='h-14 p-[1.5px] rounded-full border-2 border-red-600 hover:scale-125 transition-transform ease-out duration-200 cursor-pointer'
      />

      <div className='text-sm w-14 truncate'>{username}</div>
    </div>
  )
}
