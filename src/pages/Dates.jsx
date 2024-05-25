import Header from "../components/Header";
import SideBar from "../components/SideBar";

export default function DatesPage(){


    return (
        <div className="w-full h-screen items-center flex flex-col">
            <Header></Header>
            <main className='h-full w-full flex gap-5'>
                <SideBar></SideBar>
            </main>
        </div>
    )
}