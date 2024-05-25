import Header from '../components/Header'

export default function Register() {

    return (
        <div className="w-full h-screen items-center flex flex-col">
            <Header></Header>
            <main className='h-full flex flex-col items-center py-6 gap-5'>
                <h1 className='text-2xl font-semibold'>Registrarse</h1>
                <div className='shadow-lg shadow-gray-400 rounded-md flex flex-col border border-cyan-100 p-7 gap-2 min-w-80'>
                    <form className='flex flex-col gap-2' action="">
                        <label className='font-semibold' htmlFor="">Nombres</label>
                        <input placeholder='Nombre del paciente' className='border border-[#A59E9E] rounded-lg py-1 px-2' type="text" />

                        <label className='font-semibold' htmlFor="">Apellidos</label>
                        <input placeholder='Apeliidos del paciente' className='border border-[#A59E9E] rounded-lg py-1 px-2' type="text" />

                        <label className='font-semibold' htmlFor="">N. de documento</label>
                        <input placeholder='CC o tarjeta de identidad' className='border border-[#A59E9E] rounded-lg py-1 px-2' type="text" />

                        <label className='font-semibold' htmlFor="">Correo electronico</label>
                        <input placeholder='Correo electrónico' className='border border-[#A59E9E] rounded-lg py-1 px-2' type="email" />

                        <label className='font-semibold' htmlFor="">Nombre de usuario</label>
                        <input placeholder='Cree su nombre de usuario' className='border border-[#A59E9E] rounded-lg py-1 px-2' type="text" />

                        <label className='font-semibold' htmlFor="">Crear contraseña</label>
                        <input placeholder='Contraseña' className='border border-[#A59E9E] rounded-lg py-1 px-2' type="password" />

                        <button className='rounded-2xl bg-[#00162E] hover:bg-slate-700 text-white font-semibold py-1.5 mt-4'>Registrarse</button>
                    </form>
                </div>
            </main>
        </div>
    )
}