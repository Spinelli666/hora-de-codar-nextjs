import Link from 'next/link'
import React from 'react'

const PostsPage = () => {

    const postsIds = [1, 2, 3, 4, 5]

    // [{id: 1, title: 'Post 1'}, {id: 2, title: 'Post 2'}, ...]

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {postsIds.map((id) => (
            <li key={id}>
                <Link href={`/posts/${id}`}>Ver post {id}</Link>
            </li>
        ))}
      </ul>
    </div>
  )
}

export default PostsPage
