import React, {useState} from 'react';

const AddPostForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  return (
    <section>
      <h2>Add a New Post</h2>
    </section>
  )
}

export default AddPostForm