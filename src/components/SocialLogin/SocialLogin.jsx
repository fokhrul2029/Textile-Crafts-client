import { useContext } from "react";
import { FaGoogle, FaGithub, FaFacebook } from "react-icons/fa";
import { AuthContext } from "../../contextApi/AuthProvider";

function SocialLogin() {
  const { googleSignIn, githubSignIn, facebookSignIn } =
    useContext(AuthContext);

  const handleSignIn = (signIn) => {
    signIn()
      .then((res) => {
        console.log(res.user);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <fieldset className="border rounded-xl mt-4 mb-2">
      <legend className="text-center font-semibold text-primary">
        Continue With
      </legend>
      <div className="flex gap-4 justify-around items-center py-4">
        <div
          onClick={() => handleSignIn(googleSignIn)}
          className="btn rounded-full bg-red-800 hover:bg-red-900 text-white"
        >
          <FaGoogle />
        </div>
        <div
          onClick={() => handleSignIn(githubSignIn)}
          className="btn rounded-full bg-gray-700 hover:bg-gray-800 text-white"
        >
          <FaGithub />
        </div>
        <div
          onClick={() => handleSignIn(facebookSignIn)}
          className="btn rounded-full bg-blue-500 text-white hover:bg-blue-600"
        >
          <FaFacebook />
        </div>
      </div>
    </fieldset>
  );
}

export default SocialLogin;
