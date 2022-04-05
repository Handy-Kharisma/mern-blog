import Axios from 'axios';
import React, { useEffect, useState } from 'react'
// import { DetailImage } from '../../assets';
import { Link, Gap } from '../../components';
import './detailblog.scss';
import { useNavigate, useLocation, useParams } from 'react-router-dom'

function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return (
      <Component
        {...props}
        router={{ location, navigate, params }}
      />
    );
  }

  return ComponentWithRouterProp;
}

const DetailBlog = (props) => {
  const [data, setData] = useState({});
  useEffect(() => {
    // console.log('params: ', props.router.params.id)
    const id = props.router.params.id
    Axios.get(`http://localhost:4000/v1/blog/post/${id}`)
    .then(res => {
      // console.log('success: ', res);
      setData(res.data.data)
    })
    .catch(err => {
      console.log('err: ', err);
    })
  }, [props])
  const navigate = useNavigate();
  if(data.author){
    return (
      <div className='detail-blog-wrapper'>
        <img className='img-cover' src={`http://localhost:4000/${data.image}`} alt="thumb" />
        <p className='blog-title'>{data.title}</p>
        <p className='blog-author'>{data.author.name} - {data.createdAt}</p>
        <p className='blog-body'>{data.body}</p>
        <Gap height={20} />
        <Link title="Kembali ke Home" onClick={() => navigate('/')} />
      </div>
    )
  }
  return <p>Loading data ...</p>
}

export default withRouter(DetailBlog)