import Stories from '@/components/stories/stories';
import Posts from './posts/Posts';
import Rightbar from './Rightbar';
import { useSession } from 'next-auth/react';

export default function Body() {
  const { data: session } = useSession();
  return (
    // <div className='grid grid-cols-1 md:grid-cols-3 md:max-w-6xl mx-auto'>

    <div
      className={
        session
          ? 'grid grid-cols-1 md:grid-cols-3 md:max-w-6xl mx-auto'
          : 'grid grid-cols-1 md:grid-cols-2 md:max-w-3xl mx-auto'
      }
    >
      {/* left 2/3 */}

      <div className='md:col-span-2'>
        {/* Stories */}
        <Stories />

        {/* Posts */}
        <Posts />
      </div>

      {/* right 1/3 */}

      <div className='md:col-span-1 hidden md:inline-grid'>
        <Rightbar />
      </div>
    </div>
  );
}
