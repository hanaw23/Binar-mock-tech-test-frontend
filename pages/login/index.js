/* eslint-disable react/no-unescaped-entities */
import LoginForm from "../../components/forms/LoginForm";

export default function index() {
  return (
    <div className="flex flex-col justify-center">
      <div className="mx-auto mt-20">
        <div>
          <LoginForm />
        </div>
        <div className="flex ml-[150px] -mt-8 text-sm">
          <p className="text-gray-800 ">Don't have an account?</p>
          <a href="/register" className="text-blue-600 underline ml-3">
            <p>Register</p>
          </a>
        </div>
      </div>
    </div>
  );
}
