/* eslint-disable @next/next/no-html-link-for-pages */
import RegisterForm from "../../components/forms/RegisterForm";

export default function index() {
  return (
    <div className="flex flex-col justify-center">
      <div className="mx-auto mt-20">
        <div>
          <RegisterForm />
        </div>
        <div className="flex ml-[150px] -mt-8 text-sm">
          <p className="text-gray-800 ">Already have account?</p>
          <a href="/login" className="text-blue-600 underline ml-3">
            <p>Login</p>
          </a>
        </div>
      </div>
    </div>
  );
}
