/* eslint-disable react/no-unescaped-entities */
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import SocialLogin from "../../../components/SocialLogin/SocialLogin";
import { AuthContext } from "../../../contextApi/AuthProvider";
import swal from "sweetalert";

function SignIn() {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const { loginUser } = useContext(AuthContext);

  const handleLoginForm = (e) => {
    e.preventDefault();
    const user = { email, password };
    console.log(user);
    loginUser(email, password)
      .then(() => {
        swal({
          title: "Good job!",
          text: "You have successfully logged in!",
          icon: "success", 
        });
      })
      .catch(() => {
        swal({
          title: "Login Failed",
          text: "Email or password doesn't matched!",
          icon: "warning", 
        });
      });
  };
  return (
    <div>
      <div className="card shrink-0 w-full md:w-[550xp] mx-auto max-w-sm shadow-2xl bg-base-100">
        <form onSubmit={handleLoginForm} className="card-body">
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </div>
          <SocialLogin />
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
