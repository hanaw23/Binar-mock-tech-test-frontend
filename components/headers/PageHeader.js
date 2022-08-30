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
    <div>
      <div className="flex justify-between mx-20">
        <div className="flex gap-8">
          <div className="text-4xl font-semibold">{props.title}</div>
          <div className="mt-1">
            <CreateButton titleButton={props.titleButton} />
          </div>
        </div>
        <div className="mt-2 cursor-pointer">
          <h3 className="text-blue-500 font-semibold" onClick={handleLogout}>
            Logout
          </h3>
        </div>
      </div>
    </div>
  );
}
