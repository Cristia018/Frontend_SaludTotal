import Header from "../components/Header";
import SideBar from "../components/SideBar";


export default function DatesPage() {

    return (
        <div className="w-full h-screen items-center flex flex-col">
            <Header></Header>
            <main className='h-full w-full flex'>
                <SideBar></SideBar>
                <div className="flex w-full">
                    <section className="flex flex-col w-2/3 items-center justify-center gap-4">
                    </section>
                </div>
            </main>
        </div>
    )
}