import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { IParams, RootStore } from '../../utils/TypeScript';
import UserBlogs from '../../components/profile/UserBlogs';
import OtherInfo from '../../components/profile/OtherInfo';
import UserInfo from '../../components/profile/UserInfo';

const Profile = () => {
  const { slug }: IParams = useParams();
  const { authReducer } = useSelector((state: RootStore) => state);
  return (
    <>
      <div className='row my-3'>
        <div className='col-md-5 mb-3'>
          {authReducer.user?._id === slug ? (
            <UserInfo />
          ) : (
            <OtherInfo id={slug} />
          )}
        </div>

        <div className='col-md-7'>
          <UserBlogs />
        </div>
      </div>
    </>
  );
};

export default Profile;
