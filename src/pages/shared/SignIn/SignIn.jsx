/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";

function SignIn() {
  return (
    <div>
      <div className="card shrink-0 w-full md:w-[550xp] mx-auto max-w-sm shadow-2xl bg-base-100">
        <form className="card-body">
          <h1 className="text-center text-3xl font-semibold">Login Form</h1>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
          <p className="font-medium text-gray-600 text-center">
            I don't have account{" "}
            <Link className="link text-blue-600" to="/register">
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
