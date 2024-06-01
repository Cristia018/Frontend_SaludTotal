import SideBarItem from "./SideBarItem";
import DateIcon from "../assets/icons/date_icon.png"
import PendingIcon from "../assets/icons/pending_icon.png"
import OffIcon from "../assets/icons/off_icon.png"
import {authStore} from '../store/auth.store.js'


export default function SideBar() {

    const {logOut} = authStore()

    return (
        <aside className="flex flex-col items-center bg-[#2E555C] min-w-72 py-4 justify-between">
            <ul className="w-full flex items-center flex-col gap-3">
                <SideBarItem route="/dates">
                    <img src={DateIcon} width="32px" alt="" />
                    <h2>Agendar Cita</h2>
                </SideBarItem>
                <SideBarItem route="/dates_pending">
                    <img src={PendingIcon} width="32px" alt="" />
                    <h2>Citas Pendientes</h2>
                </SideBarItem>
            </ul>
            <ul className="w-full flex items-center flex-col gap-3">
                <SideBarItem event={() => logOut()}>
                    <img src={OffIcon} width="32px" alt="" />
                    <h2>Cerrar Sesion</h2>
                </SideBarItem>
            </ul>
        </aside>
    )
}