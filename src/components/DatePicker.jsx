import dayjs, { Dayjs } from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { Box, TextField } from "@mui/material";
import { useState } from "react";

export default function DatePicker({date, onChange}) {

    const [value, setValue] = useState(dayjs(new Date().toDateString()))

    const handleChange = (newValue) => {
        setValue(newValue)
        if (onChange) {
            onChange(new Date(newValue))
        }
    }

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={['DateCalendar', 'DateCalendar']}>
                <Box
                    sx={{
                        '& .MuiDateCalendar-root': {
                            width: '560px',
                            minHeight: '410px', // Ajusta el ancho del calendario
                            '& .MuiPickersDay-root': {
                                fontSize: '1.5rem', // Ajusta el tamaño de la fuente de los días
                                width: '50px', // Ajusta el ancho de cada día
                                height: '50px', // Ajusta la altura de cada día
                            },
                            '& .MuiPickersCalendarHeader-root': {
                                fontSize: '1.5rem', // Ajusta el tamaño de la fuente del encabezado del calendario
                            },
                            '& .MuiPickersCalendarHeader-label': {
                                fontSize: '1.8rem', // Ajusta el tamaño de la fuente del mes y el año
                            },
                            '& .MuiPickersSlideTransition-root': {
                                height: '325px',
                            },
                            '& .MuiDayCalendar-weekDayLabel': {
                                fontSize: '1.5rem', // Ajusta el tamaño de la fuente de los días de la semana
                                width: '80px'
                            },
                            '& .MuiDayCalendar-weekContainer': {
                                gap: '25px'
                            }
                        },
                    }}>
                    <DateCalendar value={value} onChange={handleChange} />
                </Box>
            </DemoContainer>
        </LocalizationProvider>
    )
}