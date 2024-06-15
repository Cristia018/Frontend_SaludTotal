import { NavLink } from "react-router-dom";

export default function DownMenuItem({text, children, to}) {
  return (
    <NavLink to={to} className="flex grow flex-col justify-center items-center hover:text-blue-500 focus:outline-none px-2 py-2 basis-0">
      {children}
      <span className="text-[10px]">{text}</span>
    </NavLink>
  );
}