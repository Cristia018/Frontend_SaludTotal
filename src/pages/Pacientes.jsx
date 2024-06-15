import { useEffect, useState } from "react";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import TablePatients from "../components/TablePatients";
import { getPacientes } from "../requests/pacientes.request";
import DownMenuBar from "../components/DownMenuBar";


export default function Pacientes() {


    const [pacientes, setPacientes] = useState([])

    useEffect(() => {
        (async () => {
            const response = await getPacientes()
            if (response.status == 200){
                setPacientes(response.data.pacientes)
            }
        })()
    }, [])


    return (
        <div className="w-full h-screen items-center flex flex-col">
            <Header></Header>
            <main className='h-full w-full flex'>
                <SideBar></SideBar>
                <div className="flex w-full p-5">
                    <TablePatients patients={pacientes}></TablePatients>
                </div>
            </main>
            <DownMenuBar></DownMenuBar>
        </div>
    )
}