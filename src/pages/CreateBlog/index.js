import React from 'react'
import { Button, Gap, Input, Link, TextArea, Upload } from '../../components';
import './createblog.scss';
import { useNavigate } from 'react-router-dom'
// import Axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { postToAPI, setForm, setImgPreview } from '../../config/redux/action';

const CreateBlog = () => {
  const {form, imgPreview} = useSelector(state => state.createBlogReducer);
  const {title, body} = form;
  const dispatch = useDispatch();

  // const [title,setTitle] = useState('');
  // const [image, setImage] = useState('');
  // const [imagePreview, setImagePreview] = useState(null);
  // const [body, setBody] = useState('');
  const navigate = useNavigate();

  const onSubmit = () => {
    postToAPI(form);
    // console.log('title: ', title);
    // console.log('image: ', image);
    // console.log('body: ', body);
  }
  
  const onImageUpload = (e) => {
    const file = e.target.files[0];
    dispatch(setForm('image', file));
    dispatch(setImgPreview(URL.createObjectURL(file)));
  }

  return (
    <div className='blog-post'>
      <Link title="Kembali" onClick={() => navigate('/')} />
      <p className='title'>Create New Blog Post</p>
      <Input
      label="Post Title"
      defaultValue={title}
      onChange={(e) => dispatch(setForm('title', e.target.value))} />
      
      <Upload
      onChange={(e) => onImageUpload(e)} img={imgPreview} />
      
      <TextArea 
      defaultValue={body} 
      onChange={(e) => dispatch(setForm('body', e.target.value))} />
      
      <Gap height={20} />
      <div className="button-action">
      <Button title="Save" onClick={onSubmit} />
      </div>
    </div>
  )
}

export default CreateBlog