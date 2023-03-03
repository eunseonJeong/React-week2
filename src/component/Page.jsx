import React from 'react'
import Content from './Content';
import Footer from './Footer';
import Header from './Header';


function Page({isDark,setIsDark}) {
  return (
    <div className='page'>
        <Header  />
        <Content  />
        <Footer isDark={isDark} setIsDark={setIsDark} />
    </div>
  )
}

export default Page;