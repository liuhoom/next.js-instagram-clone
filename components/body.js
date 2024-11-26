import Stories from '@/components/stories/stories'
import Posts from './posts/Posts'

export default function Body() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 md:max-w-6xl mx-auto'>
      {/* left 2/3 */}

      <div className='md:col-span-2'>
        {/* Stories */}
        <Stories />

        {/* Posts */}
        <Posts />
      </div>

      {/* right 1/3 */}
      <div className='md:col-span-1 hidden md:inline-grid'>right</div>

      <div className=''></div>
    </div>
  )
}
