import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import NotFound from '../components/global/NotFound';
import { RootStore } from '../utils/TypeScript';

const CreateBlog = () => {

    const initialState = {
        user: '',
        title: '',
        content: '',
        description: '',
        thumbnail: '',
        category: '',
        createdAt: new Date().toISOString()
    }

    const [ blog, setBlog ] = useState(initialState);

    const { authReducer, categories } = useSelector((state: RootStore) => state)
    const dispatch = useDispatch();

    if(!authReducer.access_token) return <NotFound />
  return (
    <div className='my-4 create_blog'>
        <h2>Create Blog</h2>
        <div className="row mt-4"></div>
    </div>
  )
}

export default CreateBlog