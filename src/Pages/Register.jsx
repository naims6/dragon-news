import React, { use, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import { updateProfile } from "firebase/auth";

const Register = () => {
  const { createUser } = use(AuthContext);
  const [err, setErr] = useState("");
  const navigate = useNavigate();
  // handle user sign up
  const handleUserSignUp = (e) => {
    e.preventDefault();
    setErr("");
    const form = e.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password)
      .then((credential) => {
        updateProfile(credential.user, {
          displayName: name,
          photoURL: photoURL,
        })
          .then(() => {
            navigate("/");
            alert("register successfully");
          })
          .catch((err) => setErr(err.message));
      })
      .catch((err) => setErr(err.message));
  };
  return (
    <div className="mt-12">
      <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          {/* error message box */}
          <div>{err && <p className="text-red-500 text-center">{err}</p>}</div>
          <form onSubmit={handleUserSignUp}>
            <fieldset className="fieldset">
              {/* name */}
              <label className="label">Name</label>
              <input
                type="text"
                name="name"
                className="input"
                placeholder="Name"
                required
              />
              {/* photo url */}
              <label className="label">Photo URL</label>
              <input
                type="text"
                name="photoURL"
                className="input"
                placeholder="Photo URL"
                required
              />
              {/* email */}
              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                className="input"
                placeholder="Email"
                required
              />
              {/* password */}
              <label className="label">Password</label>
              <input
                type="password"
                name="password"
                className="input"
                placeholder="Password"
                required
              />
              {/* accept terms and condition */}
              <div>
                <input type="checkbox" name="terms" id="terms" />
                <a className="link link-hover">Accept Terms & Condition</a>
              </div>
              <button className="btn btn-neutral mt-4">Register</button>
            </fieldset>
            <p className="text-center">
              Already have an account{" "}
              <Link className="text-blue-500 underline" to="/auth/login">
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
