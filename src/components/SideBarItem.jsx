import { useState } from "react";
import { NavLink, Link } from 'react-router-dom'

export default function SideBarItem({ route, children, event }) {
    let url = window.location.href
    if (url.endsWith('/')){
        url += '/dates'
    }
    const urlEndWith = url.endsWith(route) ? true : false;

    const [active, setActive] = useState(urlEndWith)

    return (
        <li onClick={event} className="w-10/12 list-none">
            <a href={route} className={`p-3 w-full inline-block ${active?'bg-[#173545]':'bg-[#2E555C'} text-white flex gap-3 rounded-lg items-center cursor-pointer hover:bg-[#1F5C73] text-xl font-semibold`}>
                {children}
            </a>
        </li>
    )
}