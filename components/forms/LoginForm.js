import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/router";

import { urlWebApi } from "../../utility/urlApi";
import { setUserLocal } from "../../utility/localStorage";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleChangePass = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmitLogin = async (event) => {
    event.preventDefault();

    try {
      const reponse = await axios.post(`${urlWebApi}auth/login`, {
        email: email,
        password: password,
      });
      setUserLocal(reponse.data.result.access_token);
      router.push("/product");
    } catch (error) {
      setError(error);
    }
  };

  return (
    <div className="h-full bg-gray-white w-[500px]">
      <div className="h-full ">
        <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 ">
          <div className="max-w-md w-full space-y-8 ">
            <div>
              <h2 className="mt-6 text-center text-5xl font-thin text-gray-900 ">Login</h2>
            </div>
            {error && <h3 className="text-center font-semibold text-red-700">{error}</h3>}
            <div className="mt-8 space-y-6 border border-gray-600 rounded  px-10 py-10">
              <div className="rounded-md shadow-sm space-y-5">
                <div className="relative">
                  <input
                    id="email-address"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={email}
                    onChange={handleChangeEmail}
                    required
                    className="block px-2.5 pb-1 pt-4 w-full text-sm text-gray-900 bg-transparent rounded border border-gray-400 appearance-none focus:outline-none focus:ring-0 focus:border-gray-600 peer"
                    placeholder=" "
                  />
                  <label
                    htmlFor="email-address"
                    className="absolute text-sm text-gray-500  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-gray-800  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                  >
                    Email
                  </label>
                </div>

                <div className="relative">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    value={password}
                    onChange={handleChangePass}
                    required
                    className="block px-2.5 pb-1 pt-4 w-full text-sm text-gray-900 bg-transparent rounded border border-gray-400 appearance-none focus:outline-none focus:ring-0 focus:border-gray-600 peer"
                    placeholder=" "
                  />
                  <label
                    htmlFor="password"
                    className="absolute text-sm text-gray-500  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-gray-800  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                  >
                    Password
                  </label>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="group relative w-full flex justify-center py-4 px-4 border border-transparent text-m font-semibold rounded-md text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                  onClick={handleSubmitLogin}
                >
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
