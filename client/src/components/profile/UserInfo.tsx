import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { resetPassword, updateUser } from '../../redux/actions/profileAction';
import { FormSubmit, InputChange, IUserInfo, RootStore } from '../../utils/TypeScript';
import NotFound from '../global/NotFound';

const UserInfo = () => {
  const initialState = {
    name: '',
    account: '',
    avatar: '',
    password: '',
    cf_password: '',
  };

  const { authReducer } = useSelector((state: RootStore) => state);
  const dispatch = useDispatch();

  const [user, setUser] = useState<IUserInfo>(initialState);
  const [typePass, setTypePass] = useState(false);
  const [typeCfPass, setTypeCfPass] = useState(false);

  
  const handleChangeInput = (e: InputChange) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  
  const handleChangeFile = (e: InputChange) => {
    const target = e.target as HTMLInputElement;
    const files = target.files;
    if (files) {
      const file = files[0];
      setUser({ ...user, avatar: file });
    }
  };

  const handleSubmit = (e: FormSubmit) => {
    e.preventDefault();
    if(avatar || name) {
      dispatch(updateUser((avatar as File), name, authReducer))
    }

    if(password && authReducer.access_token) {
      dispatch(resetPassword(password, cf_password, authReducer.access_token))
    }
  }

  const { name, avatar, password, cf_password } = user;
  
  if (!authReducer.user) return <NotFound />;

  return (
    <form className='profile_info' onSubmit={handleSubmit}>
      <div className='info_avatar'>
        <img src={avatar ? URL.createObjectURL(avatar as File) : authReducer.user.avatar} alt='avatar' />

        <span>
          <i className='fas fa-camera'></i>
          <p>Change</p>
          <input
            type='file'
            accept='image/*'
            name='file'
            id='file_up'
            onChange={handleChangeFile}
          />
        </span>
      </div>

      <div className='form-group'>
        <label htmlFor='name' className='form-label'>
          Name
        </label>
        <input
          type='text'
          name='name'
          id='name'
          className='form-control'
          defaultValue={authReducer.user.name}
          onChange={handleChangeInput}
        />
      </div>

      <div className='form-group'>
        <label htmlFor='account' className='form-label'>
          Account
        </label>
        <input
          type='text'
          name='account'
          id='account'
          className='form-control'
          defaultValue={authReducer.user.account}
          onChange={handleChangeInput}
          disabled={true}
        />
      </div>

      {
        authReducer.user.type !== 'register' && 
        <small className='text-danger'>
          * Quick login account with {authReducer.user.type} can`t use this function.
        </small> 
      }

      <div className='form-group'>
        <label htmlFor='password' className='form-label'>
          Password
        </label>
        <div className='pass'>
          <input
            type={typePass ? 'text' : 'password'}
            name='password'
            id='password'
            className='form-control'
            value={password}
            onChange={handleChangeInput}
            disabled={authReducer.user.type !== 'register'}
          />

          <small onClick={() => setTypePass(!typePass)}>
            {typePass ? 'Hide' : 'Show'}
          </small>
        </div>
      </div>

      <div className='form-group'>
        <label htmlFor='cf_password' className='form-label'>
          Confirm Password
        </label>
        <div className='pass'>
          <input
            type={typeCfPass ? 'text' : 'password'}
            name='cf_password'
            id='cf_password'
            className='form-control'
            value={cf_password}
            onChange={handleChangeInput}
            disabled={authReducer.user.type !== 'register'}
          />

          <small onClick={() => setTypeCfPass(!typeCfPass)}>
            {typeCfPass ? 'Hide' : 'Show'}
          </small>
        </div>

        <button className='btn btn-dark w-100 mt-3' type='submit'>
          Update
        </button>
      </div>
    </form>
  );
};

export default UserInfo;
