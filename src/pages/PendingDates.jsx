import { useEffect, useState } from "react";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import { getDates } from "../requests/dates.request";
import PendingDateCard from "../components/PendingDateCard";
import {authStore} from "../store/auth.store"

export default function PendingDates() {

    const [dates, setDates] = useState([])
    const {user} = authStore()

    useEffect(() => {
        (async () => {
            try {
                console.log(user);
                const response = await getDates(user.idPaciente)
                console.log(response.data);
                if (response.status == 200) {
                    setDates(response.data.dates)
                }
            } catch (error) {
                // console.log(error);
            }
        })()
    }, [])

    return (
        <div className="w-full h-screen items-center flex flex-col">
            <Header></Header>
            <main className='h-full w-full flex'>
                <SideBar></SideBar>
                <div className="flex w-full">
                    <section className="flex flex-col w-full items-center gap-1 pt-5 overflow-auto max-h-[calc(100vh-48px)]">
                        {dates.map((date, i) => <PendingDateCard key={i} date={date}></PendingDateCard>)}
                    </section>
                </div>
            </main>
        </div>
    )
}