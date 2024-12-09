const Button = (props: any) => {
  const { text, dark, radius, icon, clickHandler } = props;
  return (
    <button
      onClick={clickHandler}
      className={
        `border-2 rounded-2xl border-solid border-[--primary500] lg:text-[24px] md:text-lg sm:text-sm px-8 py-2 duration-200 flex items-center gap-1` +
        (dark
          ? " text-[--baseWhite] bg-[--primary500]  hover:bg-transparent hover:text-[--primary500]"
          : " text-[--primary500]  hover:bg-[--primary500] hover:text-[--baseWhite]")
      }
    >
      {text}
      {icon}
    </button>
  );
};

export default Button;
