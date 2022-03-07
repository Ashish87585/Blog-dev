import React from 'react';
import { useDispatch } from 'react-redux';
import { GoogleLogin, GoogleLoginResponse } from 'react-google-login-lite';
import { googleLogin } from '../../redux/actions/authAction';

const SocialLogin = () => {
  const dispatch = useDispatch();

  const onSuccess = (googleUser: GoogleLoginResponse) => {
      const id_token = googleUser.getAuthResponse().id_token
      dispatch(googleLogin(id_token))
  };

  return (
    <div className='my-3'>
      <GoogleLogin
        client_id='1033913890193-ur9195lol5ni6rt0dejnen4a5qifc5uq.apps.googleusercontent.com'
        cookiepolicy='single_host_origin'
        onSuccess={onSuccess}
      />
    </div>
  );
};

export default SocialLogin;
