import { useEffect, useState } from 'react';
import minifaker from 'minifaker';
import 'minifaker/locales/en';

import Story from './Story';
import { useSession } from 'next-auth/react';

export default function Stories() {
  const [stories, setStories] = useState([]);
  const { data: session } = useSession();

  useEffect(() => {
    const stories = minifaker.array(20, (i) => ({
      username: minifaker.username({ locale: 'en' }).toLocaleLowerCase(),
      id: i,
      img: `https://i.pravatar.cc/150?img=${Math.ceil(Math.random() * 70)}`,
    }));

    setStories(stories);
  }, []);

  return (
    <div className='flex space-x-2 overflow-x-scroll scrollbar-none mt-10 border p-6 rounded-md border-gray-200 bg-white'>
      {session && (
        <Story
          key={session.user.name}
          username={session.user.name}
          img={session.user.image}
          isUser={true}
        />
      )}
      {stories.map((i) => (
        <Story key={i.id} username={i.username} img={i.img} isUser={false} />
      ))}
    </div>
  );
}
