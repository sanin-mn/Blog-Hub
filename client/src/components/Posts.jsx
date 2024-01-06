import React, { useState } from 'react'

import Thumbnail1 from '../images/blog1.jpg'
import Thumbnail2 from '../images/blog2.jpg'
import Thumbnail3 from '../images/blog3.jpg'
import Thumbnail4 from '../images/blog4.jpg'
import PostItem from './PostItem'


const DUMMY_POSTS = [
    {
        id:'1',
        thumbnail:Thumbnail1,
        category:'category',
        title:'This is sample title This is sample title',
        description:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis laborum cum voluptates harum necessitatibus id error cumque hic laboriosam assumenda, adipisci praesentium vitae rem doloremque nemo quod cupiditate quisquam? Place',
        authorID:3
    },
    {
        id:'2',
        thumbnail:Thumbnail2,
        category:'category',
        title:'This is sample title',
        description:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis laborum cum voluptates harum necessitatibus id error cumque hic laboriosam assumenda, adipisci praesentium vitae rem doloremque nemo quod cupiditate quisquam? Place',
        authorID:3
    },
    {
        id:'3',
        thumbnail:Thumbnail3,
        category:'category',
        title:'This is sample title',
        description:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis laborum cum voluptates harum necessitatibus id error cumque hic laboriosam assumenda, adipisci praesentium vitae rem doloremque nemo quod cupiditate quisquam? Place',
        authorID:3
    },
    {
        id:'4',
        thumbnail:Thumbnail4,
        category:'category',
        title:'This is sample title',
        description:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis laborum cum voluptates harum necessitatibus id error cumque hic laboriosam assumenda, adipisci praesentium vitae rem doloremque nemo quod cupiditate quisquam? Place',
        authorID:3
    }
]

const Posts = () => {
    const [posts,setPosts] = useState(DUMMY_POSTS)
  return (
    <section className='posts'>
        <div className="container posts__container">
        {
            posts.map(({id,thumbnail,category,title,description,authorID})=> <PostItem key={id} PostID={id} thumbnail={thumbnail} category={category} title={title} description={description} authorID={authorID} />)
        }
        </div>
    </section>
  )
}

export default Posts