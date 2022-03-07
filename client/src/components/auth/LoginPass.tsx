import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { FormSubmit, InputChange } from "../../utils/TypeScript";
import { login } from "../../redux/actions/authAction";

const LoginPass = () => {
  const initialState = { account: "", password: "" };
  const [userLogin, setUserLogin] = useState(initialState);
  const [typePass, setTypePass] = useState(false);

  const dispatch = useDispatch()

  const { account, password } = userLogin;

  const handleChangeInput = (e: InputChange) => {
    const { value, name } = e.target;
    setUserLogin({ ...userLogin, [name]: value });
  };

  const handleSubmit = (e: FormSubmit) => {
    e.preventDefault();
    dispatch(login(userLogin))
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group mb-3">
        <label htmlFor="account" className="form-label">Email / Phone</label>
        <input
          type="text"
          name="account"
          id="account"
          className="
            form-control"
          value={account}
          onChange={handleChangeInput}
        />

        <label htmlFor="password" className="form-label">Password</label>
        <div className="pass mb-3">
          <input
            type={typePass ? "text" : "password"}
            name="password"
            id="password"
            className="
                form-control"
            value={password}
            onChange={handleChangeInput}
          />

          <small onClick={() => setTypePass(!typePass)}>
            {typePass ? "Hide" : "Show"}
          </small>
        </div>
      </div>

      <button
        type="submit"
        className="btn btn-dark w-100"
        disabled={account && password ? false : true}
      >
        Login
      </button>
    </form>
  );
};

export default LoginPass;
