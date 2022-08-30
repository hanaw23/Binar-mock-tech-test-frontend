import CreateButton from "../buttons/CreateButton";

export default function PageHeader(props) {
  return (
    <div>
      <div className="flex justify-between mx-8">
        <div className="flex gap-8">
          <div className="text-4xl font-semibold">{props.title}</div>
          <div className="mt-1">
            <CreateButton titleButton={props.titleButton} />
          </div>
        </div>
        <div className="mt-2">
          <h3 className="text-blue-500 font-semibold">Logout</h3>
        </div>
      </div>
    </div>
  );
}
