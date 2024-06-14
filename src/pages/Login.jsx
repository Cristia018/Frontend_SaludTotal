import Header from '../components/Header'
import {useForm} from 'react-hook-form'
import Logo from '../assets/img/Logo.png'
import {authStore} from '../store/auth.store.js'
import {useNavigate} from 'react-router-dom'

export default function Login() {

    const {handleSubmit, register} = useForm()

    const {logOut, signIn} = authStore()
    const navigate = useNavigate()

    const onSubmit = handleSubmit(async(data)=>{
        try {
            await signIn(data)
            navigate('/dates')
        } catch (error) {
            console.log(error);
        }
    })

    return (
        <div className="w-full h-screen items-center flex flex-col">
            <Header></Header>
            <main className='h-full flex flex-col items-center py-6 gap-5'> 
                <h1 className='text-2xl font-semibold'>Iniciar Sesion</h1>
                <div className='shadow-lg shadow-gray-400 rounded-md flex flex-col border border-cyan-100 p-7 gap-2 min-w-80'>
                    <div className='flex justify-center'>
                        <img src={Logo} width="110px" alt="" />
                    </div>
                    <form className='flex flex-col gap-2' onSubmit={onSubmit}>

                        <label className='font-semibold' htmlFor="">Correo</label>
                        <input {...register('correo')} placeholder='Correo' className='border border-[#A59E9E] rounded-lg py-1 px-2' type="text" />

                        <label className='font-semibold' htmlFor="">Contraseña</label>
                        <input {...register('clave')} placeholder='Contraseña' className='border border-[#A59E9E] rounded-lg py-1 px-2' type="password" />

                        <button className='rounded-2xl bg-[#00162E] hover:bg-slate-700 text-white font-semibold py-1.5 mt-4'>Ingresar</button>
                    </form>
                    <div className='flex items-center flex-col w-full'>
                        <p>¿No tienes una cuenta?</p>
                        <a href='/register' className='text-center rounded-2xl bg-[#A04000] text-white font-semibold py-1.5 mt-4 w-full hover:bg-orange-600'>Registrarse</a>
                    </div>
                </div>
            </main>
        </div>
    )
}
