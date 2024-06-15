import DateRow from "./DateRow";

export default function TableDates({dates = []}) {

    return (
        <div className="container mx-auto py-8">
            <table className="min-w-full border-collapse block md:table">
                <thead className="block md:table-header-group">
                    <tr className="border border-gray-300 md:border-none block md:table-row">
                        <th className="bg-gray-200 p-2 text-gray-600 font-bold md:border md:border-gray-300 text-left block md:table-cell">
                            <input type="checkbox" className="form-checkbox h-5 w-5 text-gray-600"/>
                        </th>
                        <th className="bg-gray-200 p-2 text-gray-600 font-bold md:border md:border-gray-300 text-left block md:table-cell">Estado</th>
                        <th className="bg-gray-200 p-2 text-gray-600 font-bold md:border md:border-gray-300 text-left block md:table-cell">Fecha</th>
                        <th className="bg-gray-200 p-2 text-gray-600 font-bold md:border md:border-gray-300 text-left block md:table-cell">Hora</th>
                        <th className="bg-gray-200 p-2 text-gray-600 font-bold md:border md:border-gray-300 text-left block md:table-cell">Paciente</th>
                        <th className="bg-gray-200 p-2 text-gray-600 font-bold md:border md:border-gray-300 text-left block md:table-cell">Especialidad</th>
                        <th className="bg-gray-200 p-2 text-gray-600 font-bold md:border md:border-gray-300 text-left block md:table-cell">Acciones</th>
                    </tr>
                </thead>
                <tbody className="block md:table-row-group">
                    {dates.map((date, i) => <DateRow date={date} key={i} />)}
                </tbody>
            </table>
        </div>
    )
}