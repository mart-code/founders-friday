// const Button = (props: any) => {
//   const { text, dark, color, icon, clickHandler } = props;
//   return (
//     <button
//       onClick={clickHandler}
//       className={
//         `border-2 rounded-2xl border-solid text-[--${color}] border-[--${color}] lg:text-[24px] md:text-lg sm:text-sm px-8 py-3 duration-200 flex items-center gap-1` +
//         (dark
//           ? ` text-[--baseWhite] bg-[--${color}]  hover:bg-transparent hover:text-[--${color}]`
//           : ` text-[--${color}]  hover:bg-[--${color}] hover:text-[--baseWhite]`)
//       }
//     >
//       {text}
//       {icon}
//     </button>
//   );
// };

// export default Button;

import Image from "next/image";

type ButtonProps = {
  type: "button" | "submit";
  title: string;
  icon?: any;
  variant: string;
  full?: boolean;
};

const Button = ({ type, title, icon, variant, full }: ButtonProps) => {
  return (
    <button
      className={`xl:text-[24px] duration-200 xl:text-xl lg:text-lg md:text-md text-base flex justify-center items-center flex-nowrap gap-3 rounded-full border ${variant} ${
        full && "w-full"
      }`}
      type={type}
    >
      <label className="bold-16 whitespace-nowrap cursor-pointer text-inherit">
        {title}
      </label>
      {icon}
    </button>
  );
};

export default Button;
