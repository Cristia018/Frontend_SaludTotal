import SideBarItem from "./SideBarItem";
import DateIcon from "../assets/icons/date_icon.png";
import PendingIcon from "../assets/icons/pending_icon.png";
import OffIcon from "../assets/icons/off_icon.png";
import ProfileIcon from "../assets/icons/profile_icon.png";
import PacienteIcon from "../assets/icons/paciente_icon.png";
import HistoryIcon from "../assets/icons/history_icon.png";
import TurnosIcon from "../assets/icons/turnos_icon.png";



import { authStore } from "../store/auth.store.js";

export default function SideBar() {
  const { logOut, user } = authStore();

  return (
    <aside className="flex flex-col items-center bg-[#2E555C] min-w-72 py-4 justify-between">
      <ul className="w-full flex items-center flex-col gap-3">
        {user?.rol == 1 ? (
          <>
            <SideBarItem route="/dates">
              <img src={DateIcon} width="32px" alt="" />
              <h2>Agendar Cita</h2>
            </SideBarItem>
            <SideBarItem route="/dates_pending">
              <img src={PendingIcon} width="32px" alt="" />
              <h2>Citas Pendientes</h2>
            </SideBarItem>
            <SideBarItem route="/profile">
              <img src={ProfileIcon} width="32px" alt="" />
              <h2>Mi perfil</h2>
            </SideBarItem>
          </>
        ) : (
          <>
            <SideBarItem route="/pacientes">
              <img src={PacienteIcon} width="32px" alt="" />
              <h2>Pacientes</h2>
            </SideBarItem>
            <SideBarItem route="/outer_dates">
              <img src={DateIcon} width="32px" alt="" />
              <h2>Citas</h2>
            </SideBarItem>
            <SideBarItem route="/history">
              <img src={HistoryIcon} width="32px" alt="" />
              <h2>Historial de turnos</h2>
            </SideBarItem>
            <SideBarItem route="/history">
              <img src={TurnosIcon} width="32px" alt="" />
              <h2>Administrar turnos</h2>
            </SideBarItem>
          </>
        )}
      </ul>
      <ul className="w-full flex items-center flex-col gap-3">
        <SideBarItem event={() => logOut()}>
          <img src={OffIcon} width="32px" alt="" />
          <h2>Cerrar Sesion</h2>
        </SideBarItem>
      </ul>
    </aside>
  );
}
