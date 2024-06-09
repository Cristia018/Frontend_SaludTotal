import DatePicker from "../components/DatePicker";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import AllowHours from "../components/AllowHours";

const horas_disponibles = ["9:00 am", "10:00 am", "11:00 am", "2:00 pm", "3:00 pm", "4:00 pm"]

export default function DatesPage() {

    const submit = (e) => {
        
    }
    
    const formatDate = (date) => (date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + " " + (date.getHours() - 5) + ":00:00")

    return (
        <div className="w-full h-screen items-center flex flex-col">
            <Header></Header>
            <main className='h-full w-full flex'>
                <SideBar></SideBar>
                <div className="flex w-full">
                    <section className="flex flex-col w-2/3 items-center justify-center gap-4 border-r-2 border-gray-500">
                        <h2 className="text-3xl font-semibold">Agendar cita</h2>
                        <DatePicker></DatePicker>
                    </section>
                    <section className="flex flex-col items-center w-1/3 justify-center gap-4">
                        <h2 className="text-2xl font-semibold">Hora de la cita</h2>
                        <p className="w-4/5 text-lg">Horas disponibles: </p>
                        <AllowHours></AllowHours>
                        <button onClick={submit} className="bg-[#00162E] hover:bg-[#003366] text-white rounded-full py-2 w-3/5">Confirmar</button>
                    </section>
                </div>
            </main>
        </div>
    )
}