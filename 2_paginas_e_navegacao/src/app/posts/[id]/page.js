import React from 'react'

const PostPage = ({params}) => {

    // Load e dados baseado em params.id

    const id = params.id

  return (
    <div>
      <h1>Post {id}</h1>
    </div>
  )
}

export default PostPage
