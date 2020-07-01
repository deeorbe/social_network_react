import React from 'react'
import cn from './Content.module.css'
import MyPost from './MainPost/MyPost'
import ProfileInfo from './ProfileInfo/ProfileInfo'

const ContentPage = () => {
  return (
    <div>
      <ProfileInfo />
      <MyPost />
    </div>
  );
}

export default ContentPage;