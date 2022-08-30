import EditButton from "../buttons/EditButton";
import DeleteButton from "../buttons/DeleteButton";

export default function ProductCard(props) {
  // const image = props.image;
  return (
    <div>
      <div className="h-fit w-fit border border-gray-800 bg-slate-800">
        <div className="h-[300px] w-[350px] flex justify-end gap-5 pt-4 pr-5">
          <EditButton />
          <DeleteButton name={props.name} id={props.id} />
        </div>
        <div className="bg-white h-[100px]">
          <div className="mx-6 py-6">
            <p className="text-xl mb-2">{props.name}</p>
            <p className="text-sm">$ {props.price}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
