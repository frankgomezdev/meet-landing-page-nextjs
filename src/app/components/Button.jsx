export default function Button({backgroundColor, children}) {
  return (
    <button className={`flex flex-row items-center pt-4 pb-4 pl-10 pr-10 rounded-[29px] gap-2 ${backgroundColor}`}
    >
      {children}
    </button>
  );
}