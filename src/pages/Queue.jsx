import Header from "../components/Header";
import Logo from "../assets/img/Logo.png";
import QueueTable from "../components/QueueTable";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const turnos = [
  {
    turno: "AC01",
    consultorio: 3,
  },
  {
    turno: "AC02",
    consultorio: 5,
  },
  {
    turno: "AC03",
    consultorio: 3,
  },
  {
    turno: "AC04",
    consultorio: 1,
  },
  {
    turno: "AC05",
    consultorio: 2,
  },
  {
    turno: "AC06",
    consultorio: 3,
  },
  {
    turno: "AC07",
    consultorio: 1,
  },
  {
    turno: "AC08",
    consultorio: 1,
  },
  {
    turno: "AC09",
    consultorio: 5,
  },
  {
    turno: "AC10",
    consultorio: 2,
  },
  {
    turno: "AC11",
    consultorio: 4,
  },
];

export default function Queue() {
  const [queue, setQueue] = useState(turnos);

  const updateQueue = () => {
    const [firstElement, ...rest] = queue;
    setQueue(rest);
  };

  return (
    <div className="w-full h-screen items-center flex flex-col">
      <Header></Header>
      <main className="flex flex-col p-5 gap-8">
        <div className="flex justify-center">
          <img src={Logo} width="80px" alt="" />
        </div>
        <div className="flex justify-center gap-20">
          <div className="flex justify-center items-center">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/tukQLHIgVkM?si=dRdaim878yDqD7pj&amp;controls=0"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
          <div>
            <QueueTable queue={queue}></QueueTable>
          </div>
        </div>
        <div className="w-full flex justify-between">
          <button
            onClick={() => updateQueue()}
            className="p-3 bg-teal-700 text-white font-semibold"
          >
            Siguiente turno
          </button>
          <NavLink to="/" className="p-3 bg-teal-700 text-white font-semibold">
            Volver al inicio
          </NavLink>
        </div>
      </main>
    </div>
  );
}
