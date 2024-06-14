import DatePicker from "../components/DatePicker";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import AllowHours from "../components/AllowHours";
import { useEffect, useState } from "react";
import { authStore } from "../store/auth.store";
import { postDate } from "../requests/dates.request";
import Alert from "../components/Alert";
import AlertError from "../components/AlertError";
import { useNavigate } from "react-router-dom";

const format_hours = {
  "9:00 am": 9,
  "10:00 am": 10,
  "11:00 am": 11,
  "2:00 pm": 14,
  "3:00 pm": 15,
  "4:00 pm": 16,
};

export default function DatesPage() {
  const formatDate = (date) =>
    date.getFullYear() +
    "-" +
    (date.getMonth() + 1) +
    "-" +
    date.getDate() +
    " " +
    date.getHours() +
    ":00:00";

  const [date, setDate] = useState(new Date());
  const [openAlert, setOpenAlert] = useState(false);
  const [openAlertError, setOpenAlertError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const { user } = authStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (user.rol == 2) {
      navigate("/pacientes");
    }
  }, []);

  const handleChangeDate = (newValue = new Date()) => {
    const newDate = new Date(date.toDateString());
    newDate.setHours(date.getHours());
    newDate.setFullYear(
      newValue.getFullYear(),
      newValue.getMonth(),
      newValue.getDate()
    );
    setDate(newDate);
  };

  const handleChangeHour = (newValue) => {
    const newDate = new Date(date.toDateString());
    newDate.setHours(format_hours[newValue]);
    setDate(newDate);
  };

  const submitDate = async () => {
    const data = {
      date: {
        fecha_destino: formatDate(date),
        paciente: user.idPaciente,
      },
    };

    try {
      setLoading(true);
      const response = await postDate(data);
      if (response.status === 201) {
        setOpenAlert(true);
      } else {
        setErrorMsg(response.data.msg);
        setOpenAlertError(true);
        console.log("Error posting date");
      }
      setLoading(false);
    } catch (error) {
      setErrorMsg(error);
      setOpenAlertError(true);
      setLoading(false);
    }
  };

  return (
    <div className="w-full h-screen items-center flex flex-col">
      <Header></Header>
      <main className="h-full w-full flex">
        <SideBar></SideBar>
        <div className="flex w-full">
          <section className="flex flex-col w-2/3 items-center justify-center gap-4 border-r-2 border-gray-500">
            <h2 className="text-3xl font-semibold">Agendar cita</h2>
            <DatePicker
              date={date.toDateString()}
              onChange={handleChangeDate}
              loading={loading}
            ></DatePicker>
          </section>
          <section className="flex flex-col items-center w-1/3 justify-center gap-4">
            <h2 className="text-2xl font-semibold">Hora de la cita</h2>
            <p className="w-4/5 text-lg">Horas disponibles: </p>
            <AllowHours
              onChange={handleChangeHour}
              loading={loading}
            ></AllowHours>
            <button
              onClick={submitDate}
              className="bg-[#00162E] hover:bg-[#003366] text-white rounded-full py-2 w-3/5"
            >
              Confirmar
            </button>
          </section>
        </div>
      </main>
      <Alert
        msg="Cita agendada exitosamente"
        open={openAlert}
        handleClose={() => setOpenAlert(false)}
      ></Alert>
      <AlertError
        msg={errorMsg}
        open={openAlertError}
        handleClose={() => setOpenAlertError(false)}
      ></AlertError>
    </div>
  );
}
