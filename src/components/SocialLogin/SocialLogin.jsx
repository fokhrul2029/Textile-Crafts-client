import { FaGoogle, FaGithub, FaFacebook } from "react-icons/fa";

function SocialLogin() {
  return (
    <fieldset className="border rounded-xl mt-4 mb-2">
      <legend className="text-center font-semibold text-primary">
        Continue With
      </legend>
      <div className="flex gap-4 justify-around items-center py-4">
        <div
        //   onClick={handleGoogleSignIn}
          className="btn rounded-full bg-red-800 hover:bg-red-900 text-white"
        >
          <FaGoogle />
        </div>
        <div
        //   onClick={handleGithubSignIn}
          className="btn rounded-full bg-gray-700 hover:bg-gray-800 text-white"
        >
          <FaGithub />
        </div>
        <div
        //   onClick={handleFacebookSignIn}
          className="btn rounded-full bg-blue-500 text-white hover:bg-blue-600"
        >
          <FaFacebook />
        </div>
      </div>
    </fieldset>
  );
}

export default SocialLogin;
