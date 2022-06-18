import React from 'react'

const Post = () => {
  return (
    <div>
        <h1>Post</h1>
        <form>
            <label>Title</label>
            <input type="text" name="title" />
            <label>Content</label>
            <textarea name="content" cols="30" rows="10"></textarea>
            
            <label>Meta</label> 
            <input type="text" name="meta" />
            <label>Meta Desc</label>
            <input type="text" name="metadesc" />
            <label>Meta Keywords</label>
            <input type="text" name="metakeywords" />
            <label>Slug</label>
            <input type="text" name="slug" />
            <label>Image</label>
            <input type="text" name="image" />

            <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default Post