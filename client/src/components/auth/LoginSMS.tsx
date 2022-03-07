import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginSMS } from "../../redux/actions/authAction";
import { FormSubmit } from "../../utils/TypeScript";

const LoginSMS = () => {
  const [phone, setPhone] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e: FormSubmit) => {
    e.preventDefault();
    dispatch(loginSMS(phone))
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group mb-3">
        <label htmlFor="phone" className="form-label">
          Phone number
        </label>
        <input
          type="text"
          className="form-control"
          name="phone"
          id="phone"
          value={phone}
          placeholder="+911234567890"
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>

      <button
        disabled={phone ? false : true}
        type="submit"
        className="btn btn-dark w-100 "
      >
        Login
      </button>
    </form>
  );
};

export default LoginSMS;
