export default function Suggestions({ username, img, job }) {
  return (
    <div className='flex items-center my-3'>
      <img src={img} alt='' className='rounded-full h-10 border p-[2px]' />
      <div className='flex flex-col ml-4 flex-1'>
        <h3 className='text-sm font-semibold'>{username}</h3>
        <p className='text-gray-400 text-sm truncate w-[230px]'>{job}</p>
      </div>
      <button className='text-blue-400 text-sm font-semibold'>Follow</button>
    </div>
  );
}
