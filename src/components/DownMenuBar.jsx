import DownMenuItem from "./DownMenuItem";
import DateIcon from "../assets/icons/date_icon.png";
import PendingIcon from "../assets/icons/pending_icon.png";
import ProfileIcon from "../assets/icons/profile_icon.png";
import PacienteIcon from "../assets/icons/paciente_icon.png";
import HistoryIcon from "../assets/icons/history_icon.png";
import TurnosIcon from "../assets/icons/turnos_icon.png";
import { authStore } from "../store/auth.store";

export default function DownMenuBar() {

    const {user} = authStore()

  return (
    <div className="fixed lg bottom-0 left-0 right-0 text-white shadow-lg bg-[#2E555C] lg:hidden">
      <div className="flex justify-center">
        {user?.rol == 1 ? (
          <>
            <DownMenuItem to="/dates" text="Agendar Cita">
              <img src={DateIcon} width="25px" alt="" />
            </DownMenuItem>
            <DownMenuItem to="/dates_pending" text="Citas pendientes">
              <img src={PendingIcon} width="24px" alt="" />
            </DownMenuItem>
            <DownMenuItem to="/profile" text="Perfil">
              <img src={ProfileIcon} width="25px" alt="" />
            </DownMenuItem>
          </>
        ) : (
          <>
            <DownMenuItem to="/pacientes" text="Pacientes">
              <img src={PacienteIcon} width="25px" alt="" />
            </DownMenuItem>
            <DownMenuItem to="/outer_dates" text="Citas">
              <img src={DateIcon} width="24px" alt="" />
            </DownMenuItem>
            <DownMenuItem to="/history" text="Historial de turnos">
              <img src={HistoryIcon} width="25px" alt="" />
            </DownMenuItem>
            <DownMenuItem to="/queue" text="Gestionar turnos">
              <img src={TurnosIcon} width="25px" alt="" />
            </DownMenuItem>
          </>
        )}
      </div>
    </div>
  );
}
