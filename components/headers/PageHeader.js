import { useRouter } from "next/router";

import { removeToken } from "../../utility/localStorage";

import CreateButton from "../buttons/CreateButton";

export default function PageHeader(props) {
  const router = useRouter();

  const handleLogout = () => {
    removeToken();
    router.replace("/login");
  };

  return (
    <div className="w-screen">
      <div className="flex flex-col desktop:flex-row tablet:flex-row justify-between mx-10 desktop:mx-20">
        <div className="flex gap-8">
          <div className="text-4xl font-semibold">{props.title}</div>
          <div className="mt-1">
            <CreateButton titleButton={props.titleButton} />
          </div>
        </div>
        <div className="desktop:mt-2 tablet:mt-2 mt-6 cursor-pointer">
          <h3 className="text-blue-500 font-semibold" onClick={handleLogout}>
            Logout
          </h3>
        </div>
      </div>
    </div>
  );
}
