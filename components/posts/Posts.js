import Post from './Post'

export default function Posts() {
  const dummyData = [
    {
      id: 1,
      username: 'liuhoom',
      image: '/montain1.jpg',
      userimg: 'https://avatars.githubusercontent.com/u/6359476?v=4',
      comment: 'A huge montain!',
    },
    {
      id: 2,
      username: 'liuhoom',
      image: '/sea.jpg',
      userimg: 'https://avatars.githubusercontent.com/u/6359476?v=4',
      comment: 'beautiful sea!',
    },
    {
      id: 3,
      username: 'codewithpbliu',
      userimg: 'https://avatars.githubusercontent.com/u/6359476?v=4',
      image: '/something.jpg',
      comment: "What's this?",
    },
  ]

  return (
    <div className=''>
      {dummyData.map((i) => (
        <div className=''>
          <Post
            key={i.id}
            username={i.username}
            userimg={i.userimg}
            image={i.image}
            comment={i.comment}
          />
        </div>
      ))}
    </div>
  )
}
