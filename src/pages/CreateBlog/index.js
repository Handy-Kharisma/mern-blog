import React from 'react'
import { Button, Gap, Input, Link, TextArea, Upload } from '../../components';
import './createblog.scss';
import { useNavigate } from 'react-router-dom'

const CreateBlog = () => {
  const navigate = useNavigate();
  return (
    <div className='blog-post'>
      <Link title="Kembali" onClick={() => navigate('/')} />
      <p className='title'>Create New Blog Post</p>
      <Input label="Post Title"/>
      <Upload />
      <TextArea />
      <Gap height={20} />
      <div className="button-action">
      <Button title="Save" onClick={() => navigate('/')} />
      </div>
    </div>
  )
}

export default CreateBlog