import { FC } from "react";

const CartNumberIndicator: FC = () => {
  return (
    <div className="absolute flex items-center justify-center p-2 text-sm text-white bg-red-600 border-4 border-white rounded-full shadow-sm shadow-gray-200 h-7 w-7 -bottom-1 -right-1">
      0
    </div>
  );
};

export default CartNumberIndicator;
