import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Footer, Header } from '../../components';
import CreateBlog from '../CreateBlog';
import DetailBlog from '../DetailBlog';
import Home from '../Home';
import './mainapp.scss'

const MainApp = () => {
  return (
    <div className='main-app-wrapper'>
      <div className='header-wrapper'>
        <Header />
      </div>
      <div className='content-wrapper'>
        <Routes>
            <Route path="create-blog" element={<CreateBlog />} />
            <Route path="detail-blog" element={<DetailBlog />} />
            <Route path="" element={<Home />} />
        </Routes>
      </div>
      <div className='footer-wrapper'>
        <Footer />
      </div>
    </div>
  )
}

export default MainApp