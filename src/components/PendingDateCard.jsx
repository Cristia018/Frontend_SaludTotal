

export default function PendingDateCard({date}) {
    const {fecha_destino, espec:{nombre_especialidad}} = date

    const date_time = new Date(fecha_destino)

    const fecha_completa = (date_time.getFullYear() + "-" + (date_time.getMonth() + 1) + "-" + date_time.getDate() + " " + (date_time.getHours()) + ":00:00")

    const [fecha, hora] = fecha_completa.split(' ')

    return (
        <div className="flex px-5 py-2 justify-between w-full items-center gap-7">
            <div className="border border-gray-500 w-full p-5 flex justify-between items-center gap-16">
                <section className="flex justify-between items-center w-full ">
                    <span>
                        <p className="w-full min-w text-lg font-semibold text-left">Fecha</p>
                        <p className="w-full min-w text-lg font-semibold text-right">{fecha}</p>
                    </span>
                    <span>
                        <p className="w-full min-w text-lg font-semibold text-left">Hora</p>
                        <p className="w-full min-w text-lg font-semibold text-right">{hora}</p>
                    </span>
                    <span>
                        <p className="w-full min-w text-lg font-semibold text-left">Especialidad</p>
                        <p className="w-full min-w text-lg font-semibold text-right">{nombre_especialidad}</p>
                    </span>
                </section>
                <section className="flex flex-col justify-center items-center min-w-36 gap-2">
                    <button className="py-1 w-full text-base font-semibold rounded-lg border border-gray-700 bg-blue-300">Posponer Cita</button>
                    <button className="py-1 w-full text-base font-semibold rounded-lg border border-gray-700 bg-red-300">Cancelar cita</button>
                </section>
            </div>

            <button className="py-2 font-semibold text-sm min-w-32 text-white bg-green-700 rounded-xl">Ver Detalles</button>
        </div>
    )
}