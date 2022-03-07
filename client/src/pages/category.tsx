import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import NotFound from '../components/global/NotFound';
import { createCategory, deleteCategory, updateCategory } from '../redux/actions/categoryAction';
import { FormSubmit, RootStore, ICategory } from '../utils/TypeScript';

const Category = () => {
  const [name, setName] = useState('');
  const [edit, setEdit] = useState<ICategory | null>(null);

  const { authReducer, categories } = useSelector((state: RootStore) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    if(edit) setName(edit.name)
  }, [edit])

  const handleSubmit = (e: FormSubmit) => {
    e.preventDefault();
    if (!authReducer.access_token || !name) return;

    if(edit) {
      if(edit.name === name) return;
      const data = {...edit, name};
      dispatch(updateCategory(data, authReducer.access_token));
    } else {
      dispatch(createCategory(name, authReducer.access_token));
    }

    setName('');
    setEdit(null);
  };

  const handleDelete = (id: string) => {
    if(!authReducer.access_token) return;
    dispatch(deleteCategory(id, authReducer.access_token))
  }

  if (authReducer.user?.role !== 'admin') return <NotFound />;

  return (
    <div className='category'>
      <form onSubmit={handleSubmit}>
        <label htmlFor='category'>Category</label>

        <div className='d-flex align-items-center'>
          
          {
            edit && <i className='fas fa-times mx-2' style={{ cursor: 'pointer' }} onClick={() => setEdit(null)} />
          }

          <input
            type='text'
            name='category'
            id='category'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <button type='submit'>{ edit ? 'Update' : 'Create' }</button>
        </div>
      </form>
      <div>
        {categories.map((category) => (
          <div className='category_row' key={category._id}>
            <p className='m-0 text-capitalize'>{ category.name }</p>

            <div>
              <i className='fas fa-edit mx-2' onClick={() => setEdit(category)} />
              <i className='fas fa-trash-alt' onClick={() => handleDelete(category._id)} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
