/* eslint-disable react/no-unescaped-entities */
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contextApi/AuthProvider";
import swal from "sweetalert";
import { GrValidate } from "react-icons/gr";

function SignUp() {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [photo, setPhoto] = useState(null);
  const [password, setPassword] = useState(null);
  const { createUser, updateUserProfile } = useContext(AuthContext);

  const validation = (name, email, photo, password) => {
    if (name.length < 6) {
      swal({
        title: "Invalid name!",
        text: "Use a Valid name!",
        icon: "warning",
      });
      return false;
    }

    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
      swal({
        title: "Invalid email!",
        text: "Use a Valid email!",
        icon: "warning",
      });
      return false;
    }
    if (photo.length < 6) {
      swal({
        title: "Invalid photo URL!",
        text: "Use a Valid photo URL!",
        icon: "warning",
      });
      return false;
    }
    if (password.length < 6) {
      swal({
        title: "Password is too Short!",
        text: "Password should be 6 characters or longer!",
        icon: "warning",
      });
      return false;
    } else if (!/[A-Z]/.test(password)) {
      swal({
        title: "Weak password!",
        text: "Must include at least one uppercase letter!",
        icon: "warning",
      });
      return false;
    } else if (!/[a-z]/.test(password)) {
      swal({
        title: "Weak password!",
        text: "Must include at least one lowercase letter!",
        icon: "warning",
      });
      return false;
    }

    return true;
  };

  const handleRegisterForm = (e) => {
    e.preventDefault();
    if (!validation(name, email, photo, password)) {
      return;
    }
    const user = { name, email, photo, password };
    console.log(user);
    createUser(email, password)
      .then(() => {
        updateUserProfile(name, photo);
        swal({
          title: "Good job!",
          text: "You have successfully registered!",
          icon: "success",
        });
      })
      .catch(() => {
        swal({
          title: "Registration Failed!",
          text: "Something went wrong, Try later!",
          icon: "warning",
        });
      });
  };

  return (
    <div>
      <div className="card shrink-0 w-full md:w-[550xp] mx-auto max-w-sm shadow-2xl bg-base-100">
        <form onSubmit={handleRegisterForm} className="card-body">
          <h1 className="text-center text-3xl font-semibold">
            Registration Form
          </h1>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="Name"
              className="input input-bordered"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
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
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="text"
              placeholder="Photo URL"
              className="input input-bordered"
              required
              value={photo}
              onChange={(e) => setPhoto(e.target.value)}
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
          </div>
          <div className="flex flex-col space-y-1 mt-2">
            <div
              className={`flex gap-2 items-center ${
                password?.length < 6 ? "text-gray-500" : "text-green-500"
              }`}
            >
              <GrValidate />
              <span className=" text-sm">
                "Password should be 6 characters or longer"
              </span>
            </div>
            <div
              className={`flex gap-2 items-center ${
                !/[A-Z]/.test(password) ? "text-gray-500" : "text-green-500"
              }`}
            >
              {" "}
              <GrValidate />
              <span className="text-sm">
                "Must include at least one uppercase letter"
              </span>
            </div>
            <div
              className={`flex gap-2 items-center ${
                !/[a-z]/.test(password) ? "text-gray-500" : "text-green-500"
              }`}
            >
              {" "}
              <GrValidate />
              <span className="text-sm">
                "Must include at least one lowercase letter"
              </span>
            </div>
          </div>
          <div className="form-control mt-6">
            <button type="submit" className="btn btn-primary">
              Register
            </button>
          </div>
          <p className="font-medium text-gray-600 text-center">
            I have an account{" "}
            <Link className="link text-blue-600" to="/login">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
