/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */

import EditButton from "../buttons/EditButton";
import DeleteButton from "../buttons/DeleteButton";

export default function ProductCard(props) {
  return (
    <div className="desktop:mr-10 tablet:mr-10 mr-6">
      <div className="h-fit w-fit border border-gray-900" style={{ backgroundImage: `url(${props.image})`, backgroundRepeat: `no-repeat`, backgroundSize: `contain` }}>
        <div className="desktop:h-[300px] desktop:w-[350px] tablet:h-[250px] tablet:w-[230px] w-[110px] h-[150px] flex desktop:justify-end tablet:justify-end justify-center gap-5 pt-4 pr-5 ">
          <EditButton name={props.name} price={props.price} id={props.id} image={props.image} />
          <DeleteButton name={props.name} id={props.id} />
        </div>
        <div className="bg-white h-[100px] w-full border border-t-gray-900">
          <div className="mx-6 desktop:py-6 tablet:py-3 py-3">
            <p className="text-[10px] desktop:text-xl tablet:text-base mb-2">{props.name}</p>
            <p className="desktop:text-sm tablet:text-sm text-[8px]">$ {props.price}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
