/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */

import EditButton from "../buttons/EditButton";
import DeleteButton from "../buttons/DeleteButton";

export default function ProductCard(props) {
  return (
    <div>
      <div className="h-fit w-fit border border-gray-900" style={{ backgroundImage: `url(${props.image})`, backgroundRepeat: `no-repeat`, backgroundSize: `cover` }}>
        <div className="h-[300px] w-[350px] flex justify-end gap-5 pt-4 pr-5">
          <EditButton name={props.name} price={props.price} id={props.id} image={props.image} />
          <DeleteButton name={props.name} id={props.id} />
        </div>
        <div className="bg-white h-[100px] w-full border border-t-gray-900">
          <div className="mx-6 py-6">
            <p className="text-xl mb-2">{props.name}</p>
            <p className="text-sm">$ {props.price}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
