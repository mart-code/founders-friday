const Button = (props: any) => {
  const { text, dark, radius, icon, clickHandler } = props;
  return (
    <button
      onClick={clickHandler}
      className={
        `border-2 rounded-2xl border-solid border-[--primary500] lg:text-[24px] md:text-lg sm:text-sm px-4 py-2 hover:bg-[--primary500] hover:text-[--baseWhite] duration-200` +
        (dark
          ? " text-[--baseWhite] bg-[--primary500] "
          : " text-[--primary500] ")
      }
    >
      {text}
      {icon}
    </button>
  );
};

export default Button;
