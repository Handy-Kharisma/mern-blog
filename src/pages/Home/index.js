import React from 'react'
import { Button, BlogItem, Gap } from '../../components'
import './home.scss'

const Home = () => {
  return (
    <div className="home-page-wrapper">
      <div className="create-wrapper">
        <Button title="create blog"/>
      </div>
      <Gap height={20} />
      <div className="content-wrapper" >
        <BlogItem />
        <BlogItem />
        <BlogItem />
        <BlogItem />
      </div>
      <div className="pagination">
        <Button title="previous" />
        <Gap width={40} />
        <Button title="next" />
      </div>
      <Gap height={20} />
    </div>
  )
}

export default Home