import { useEffect, useState } from "react";
import DownMenuBar from "../components/DownMenuBar";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import TableDates from "../components/TableDates";
import { getAllDates } from "../requests/dates.request";

export default function ListDates(){
    const [dates, setDates] = useState([])

    useEffect(() => {
        (async () => {
            try {
                const response = await getAllDates()
                console.log(response.status)
                if (response.status == 200){
                    setDates(response.data.dates)
                }
            } catch (error) {
                console.log(error);
            }
        })()
    }, [])

    return (
        <div className="w-full h-screen items-center flex flex-col">
            <Header></Header>
            <main className='h-full w-full flex'>
                <SideBar></SideBar>
                <div className="flex w-full p-5">
                    <TableDates dates={dates}></TableDates>
                </div>
            </main>
            <DownMenuBar></DownMenuBar>
        </div>
    )
}