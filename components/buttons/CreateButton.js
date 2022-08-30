export default function CreateButton(props) {
  return (
    <div className="bg-transparent rounded border-transparent cursor-pointer bg-gray-600 h-fit w-fit hover:bg-gray-400">
      <button className=" text-white text-sm px-6 py-2 font-semibold text-center " onClick={props.setOpen}>
        {props.titleButton}
      </button>
    </div>
  );
}
