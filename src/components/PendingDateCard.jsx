export default function PendingDateCard({ date, onCancel, setDateId }) {
  const {
    fecha_destino,
    espec: { nombre_especialidad },
    id,
  } = date;

  const date_time = new Date(fecha_destino);

  const fecha_completa =
    date_time.getFullYear() +
    "-" +
    (date_time.getMonth() + 1) +
    "-" +
    date_time.getDate() +
    " " +
    date_time.getHours() +
    ":00:00";

  const [fecha, hora] = fecha_completa.split(" ");

  const cancelClick = () => {
    setDateId(id);
    onCancel();
  };

  return (
    <div className="flex px-5 py-2 justify-between w-full items-center gap-7">
      <div className="border border-gray-500 w-full p-5 flex flex-col md:flex-row justify-between items-center md:gap-16 gap-5">
        <section className="flex justify-between items-center w-full ">
          <span>
            <p className="w-full min-w font-semibold text-left">Fecha</p>
            <p className="w-full min-w md:text-lg font-semibold text-right">
              {fecha}
            </p>
          </span>
          <span>
            <p className="w-full min-w font-semibold text-left">Hora</p>
            <p className="w-full min-w md:text-lg font-semibold text-right">
              {hora}
            </p>
          </span>
          <span>
            <p className="w-full min-w font-semibold text-left">Especialidad</p>
            <p className="w-full min-w md:text-lg font-semibold text-right">
              {nombre_especialidad}
            </p>
          </span>
        </section>
        <section className="flex flex-row md:flex-col w-full md:w-auto justify-center items-center min-w-36 gap-2">
          <button
            onClick={() => cancelClick()}
            className="py-1 w-full text-base font-semibold rounded-lg border border-gray-700 bg-red-300"
          >
            Cancelar cita
          </button>
        </section>
      </div>
      <button className="py-2 hidden md:inline-block font-semibold text-sm min-w-32 text-white bg-green-700 rounded-xl">
        Ver Detalles
      </button>
    </div>
  );
}
