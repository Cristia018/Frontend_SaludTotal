
export default function Row({paciente}) {

    const {nombre, telefono, direccion, eps, user:{correo}} = paciente

    return (
        <tr className="bg-gray-100 border border-gray-300 md:border-none block md:table-row">
            <td className="p-2 md:border md:border-gray-300 text-left block md:table-cell">
                <input type="checkbox" className="form-checkbox h-5 w-5 text-gray-600" />
            </td>
            <td className="p-2 md:border md:border-gray-300 text-left block md:table-cell">{nombre}</td>
            <td className="p-2 md:border md:border-gray-300 text-left block md:table-cell"><a href="mailto:mario@gmail.com" className="text-blue-500">{correo}</a></td>
            <td className="p-2 md:border md:border-gray-300 text-left block md:table-cell">{telefono}</td>
            <td className="p-2 md:border md:border-gray-300 text-left block md:table-cell">{direccion}</td>
            <td className="p-2 md:border md:border-gray-300 text-left block md:table-cell">{eps}</td>
            <td className="p-2 md:border md:border-gray-300 text-left block md:table-cell">
                <button className="text-blue-500 hover:text-blue-700">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M17.414 2.586a2 2 0 00-2.828 0L6 11.172V14h2.828l8.586-8.586a2 2 0 000-2.828zM4 12v2a1 1 0 001 1h2l7.586-7.586-3-3L4 12z" />
                    </svg>
                </button>
                <button className="text-red-500 hover:text-red-700">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M8.707 10.707a1 1 0 010-1.414L12.586 6H7a1 1 0 100 2h5.586L8.707 9.293a1 1 0 000 1.414zM2 10a8 8 0 1116 0 8 8 0 01-16 0z" clipRule="evenodd" />
                    </svg>
                </button>
            </td>
        </tr>
    )
}