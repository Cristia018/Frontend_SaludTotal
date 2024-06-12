export default function QueueTable({ queue }) {

    return (
        <table className="text-xl">
            <thead>
                <tr>
                    <th className="font-semibold text-center text-lg min-w-28">Turno</th>
                    <th className="font-semibold text-center text-lg min-w-28">Consultorio</th>
                </tr>
            </thead>
            <tbody className="bg-gray-100 divide-y divide-gray-200">
                {queue.map((turno, i) => (
                    <tr className={`${i == 0 ? 'bg-teal-700 text-white' : ""} ${i < 4 ? '' : "hidden"}`}>
                        <td className="text-center px-6 py-4 whitespace-nowrap font-medium">
                            {turno.turno}
                        </td>
                        <td className="text-center px-6 py-4 whitespace-nowrap font-medium">
                            {i == 0 ? turno.consultorio : "???"}
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}