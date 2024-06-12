import { useState } from "react"

const horas_disponibles = ["9:00 am", "10:00 am", "11:00 am", "2:00 pm", "3:00 pm", "4:00 pm"]

export default function AllowHours({onChange}) {

    const [selectedIndex, setSelectedIndex] = useState()

    const changeSelectedIndex = (index) => {
        setSelectedIndex(index)
        if (onChange){
            onChange(horas_disponibles[index])
        }
    }

    return (<>
        {horas_disponibles.map((hora, i) => <span key={i} onClick={() => changeSelectedIndex(i)} className={`cursor-pointer py-2 text-xl border-2 border-gray-500 w-3/5 text-center 
        ${selectedIndex == i? 'bg-blue-400': ''}`}>{hora}</span>)}
    </>)
}