import Row from "./Row";

export default function TablePatients({patients = []}) {

    return (
        <div className="container mx-auto py-8">
            <table className="min-w-full border-collapse block md:table">
                <thead className="block md:table-header-group">
                    <tr className="border border-gray-300 md:border-none block md:table-row">
                        <th className="bg-gray-200 p-2 text-gray-600 font-bold md:border md:border-gray-300 text-left block md:table-cell">
                            <input type="checkbox" className="form-checkbox h-5 w-5 text-gray-600"/>
                        </th>
                        <th className="bg-gray-200 p-2 text-gray-600 font-bold md:border md:border-gray-300 text-left block md:table-cell">Nombre</th>
                        <th className="bg-gray-200 p-2 text-gray-600 font-bold md:border md:border-gray-300 text-left block md:table-cell">Correo</th>
                        <th className="bg-gray-200 p-2 text-gray-600 font-bold md:border md:border-gray-300 text-left block md:table-cell">Telefono</th>
                        <th className="bg-gray-200 p-2 text-gray-600 font-bold md:border md:border-gray-300 text-left block md:table-cell">Direccion</th>
                        <th className="bg-gray-200 p-2 text-gray-600 font-bold md:border md:border-gray-300 text-left block md:table-cell">EPS</th>
                        <th className="bg-gray-200 p-2 text-gray-600 font-bold md:border md:border-gray-300 text-left block md:table-cell">Acciones</th>
                    </tr>
                </thead>
                <tbody className="block md:table-row-group">
                    {patients.map((patient, i) => <Row paciente={patient} key={i} />)}
                </tbody>
            </table>
        </div>
    )
}