

import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa";

const CartIcon = ({ cartTotal, userId }) => {
    return (
        <div className="">
            <Link href={`/cart/${userId}`}>
                {cartTotal > 0 ?
                    <div className="w-[25px] h-[25px] p-2 flex flex-col items-center justify-center border border-white bg-white text-red-500 font-bold rounded-full absolute translate-x-[20px] -translate-y-[15px]">
                        {cartTotal}
                    </div> : ""
                }
                <span className="cursor-pointer">
                    <FaShoppingCart size={30} color="white" />
                </span>
            </Link>
        </div>

    )
}

export default CartIcon