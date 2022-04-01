import Axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Button, BlogItem, Gap } from '../../components'
import { setDataBlog } from '../../config/redux/action'
import './home.scss'




const Home = () => {
  // const [dataBlog, setDataBlog] = useState([]);
  // const {dataBlogs, name} = useSelector(state => state);
  const [counter, setCounter] = useState(1);
  const {dataBlog, page} = useSelector(state => state.homeReducer);
  const dispatch = useDispatch();

  console.log('page: ', page);
  // console.log('data blog global: ', dataBlogs);
  //console.log('data blog global: ', dataBlogs)
  useEffect(() => {
    dispatch(setDataBlog(counter))
    // setTimeout(() => {
      // dispatch({type: 'UPDATE_NAME'})
    // }, 3000)
  }, [counter, dispatch])

  const navigate = useNavigate();

  const previous = (function(){
    setCounter(counter <= 1 ? 1 : counter - 1);
    console.log(counter);
  })

  const next = (function(){
    setCounter(counter === page.totalPage ? page.totalPage : counter + 1);
    console.log(counter);
  })


  return (
    <div className="home-page-wrapper">
      <div className="create-wrapper">
        <Button title="create blog" onClick={() => navigate('/create-blog')} />
      </div>
      <Gap height={20} />
      <div className="content-wrapper" >
        {dataBlog.map(blog => {
          return (
            <BlogItem
              key={blog._id}
              image={`http://localhost:4000/${blog.image}`}
              title={blog.title}
              body={blog.body}
              name={blog.author.name}
              date={blog.createdAt}
              _id={blog._id} />
          )
        })}
      </div>
      <div className="pagination">
        <Button title="Previous" onClick={previous} />
        <Gap width={40} />
        <p className='text-page'>{page.currentPage} / {page.totalPage}</p>
        <Gap width={40} />
        <Button title="Next" onClick={next} />
      </div>
      <Gap height={20} />
    </div>
  )
}

export default Home