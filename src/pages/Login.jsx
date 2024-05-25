import Header from '../components/Header'
import Logo from '../assets/img/Logo.png'

export default function Login() {

    return (
        <div className="w-full h-screen items-center flex flex-col">
            <Header></Header>
            <main className='h-full flex flex-col items-center py-6 gap-5'>
                <h1 className='text-2xl font-semibold'>Iniciar Sesion</h1>
                <div className='shadow-lg shadow-gray-400 rounded-md flex flex-col border border-cyan-100 p-7 gap-2 min-w-80'>
                    <div className='flex justify-center'>
                        <img src={Logo} width="110px" alt="" />
                    </div>
                    <form className='flex flex-col gap-2' action="">

                        <label className='font-semibold' htmlFor="">Usuario</label>
                        <input placeholder='Nombre de usuario' className='border border-[#A59E9E] rounded-lg py-1 px-2' type="text" />

                        <label className='font-semibold' htmlFor="">Contraseña</label>
                        <input placeholder='Contraseña' className='border border-[#A59E9E] rounded-lg py-1 px-2' type="password" />

                        <button className='rounded-2xl bg-[#00162E] hover:bg-slate-700 text-white font-semibold py-1.5 mt-4'>Ingresar</button>
                    </form>
                    <div className='flex items-center flex-col w-full'>
                        <p>¿No tienes una cuenta?</p>
                        <button className='rounded-2xl bg-[#A04000] text-white font-semibold py-1.5 mt-4 w-full hover:bg-orange-600'>Registrarse</button>
                    </div>
                </div>
            </main>
        </div>
    )
}
