import { useEffect, useState } from "react";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import { getDates } from "../requests/dates.request";
import PendingDateCard from "../components/PendingDateCard";
import { authStore } from "../store/auth.store"
import BasicModal from "../components/Modal";
import Alert from '../components/Alert'
import { deleteDate } from '../requests/dates.request.js'

export default function PendingDates() {

    const [dates, setDates] = useState([])
    const [openModal, setOpenModal] = useState(false)
    const [openAlert, setOpenAlert] = useState(false)
    const { user } = authStore()

    const [citaActual, setCitaActual] = useState(null)

    const obtenerCitas = async () => {
        try {
            console.log(user);
            const response = await getDates(user.idPaciente)
            console.log(response.data);
            if (response.status == 200) {
                setDates(response.data.dates)
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        obtenerCitas()
    }, [])

    const eliminarCita = async () => {
        try {
            const response = await deleteDate(citaActual)
            if (response.status == 200) {
                obtenerCitas()
                setOpenAlert(true)
                setOpenModal(false)
            } else {
                console.log(response.data)
            }
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <>
            <div className="w-full h-screen items-center flex flex-col">
                <Header></Header>
                <main className='h-full w-full flex'>
                    <SideBar></SideBar>
                    <div className="flex w-full">
                        <section className="flex flex-col w-full items-center gap-1 pt-5 overflow-auto max-h-[calc(100vh-48px)]">
                            {dates.map((date, i) => <PendingDateCard setDateId={setCitaActual} key={i} date={date} onCancel={() => setOpenModal(true)}></PendingDateCard>)}
                        </section>
                    </div>
                </main>
            </div>
            <BasicModal open={openModal} handleClose={() => setOpenModal(false)}>
                <div className="w-full h-full flex items-center flex-col p-3">
                    <h1>¿Seguro que desea cancelar la cita?</h1>
                    <div className="flex justify-center gap-5 w-full">
                        <button onClick={() => eliminarCita(citaActual)} className="text-center rounded-2xl bg-green-700 px-6 text-white font-semibold py-1.5 mt-4 hover:bg-green-600">Sí</button>
                        <button onClick={() => setOpenModal(false)} className="text-center rounded-2xl bg-[#A04000] px-6 text-white font-semibold py-1.5 mt-4 hover:bg-orange-600">No</button>
                    </div>
                </div>
            </BasicModal>
            <Alert msg="Cita eliminada exitosamente" open={openAlert} handleClose={() => setOpenAlert(false)}></Alert>
        </>

    )
}