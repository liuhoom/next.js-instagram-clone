import { useEffect, useState } from 'react';
import minifaker from 'minifaker';
import 'minifaker/locales/en';
import Suggestions from './Suggestions';

export default function Rightbar() {
  const [suggestions, setSuggestions] = useState([]);
  useEffect(() => {
    const suggestions = minifaker.array(5, (i) => ({
      id: i,
      img: `https://i.pravatar.cc/150?img=${Math.ceil(Math.random() * 70)}`,
      username: minifaker.username({ locale: 'en' }).toLocaleLowerCase(),
      job: minifaker.jobTitle(),
    }));

    setSuggestions(suggestions);
  }, []);
  return (
    <div className='mt-16 ml-10 fixed w-[380px]'>
      {/* Mini Profile */}
      <div className='flex items-center'>
        <img
          src='https://avatars.githubusercontent.com/u/6359476?v=4'
          className='h-16 p-[1.5px] border rounded-full'
          alt='user-img'
        />
        <div className='flex flex-col ml-4 flex-1'>
          <h3 className='font-bold'>liuhoom</h3>
          <p className='text-gray-400'>Welcome to instagram</p>
        </div>
        <button className='text-blue-400 font-semibold text-sm'>
          Sign out
        </button>
      </div>

      {/* some Suggestion */}
      <div className='mt-4'>
        <div className='flex justify-between text-sm'>
          <h2 className='text-gray-400 font-bold'>Suggestion for you</h2>
          <button className='text-gray-600 font-semibold'>See all</button>
        </div>

        {suggestions.map((sugg) => (
          <Suggestions
            key={sugg.id}
            username={sugg.username}
            img={sugg.img}
            job={sugg.job}
          />
        ))}
      </div>
    </div>
  );
}
