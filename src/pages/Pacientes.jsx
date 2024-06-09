import { useEffect, useState } from "react";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import TablePatients from "../components/TablePatients";
import { getPacientes } from "../requests/pacientes.request";


export default function Pacientes() {


    const [pacientes, setPacientes] = useState([])

    useEffect(() => {
        (async () => {
            const response = await getPacientes()
            console.log(response.data.pacientes);
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
                <div className="flex w-full">
                    <TablePatients patients={pacientes}></TablePatients>
                </div>
            </main>
        </div>
    )
}