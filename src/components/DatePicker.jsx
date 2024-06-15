import dayjs, { Dayjs } from "dayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { Box, TextField } from "@mui/material";
import { useEffect, useState } from "react";

import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme();

export default function DatePicker({ date, onChange, loading }) {
  const [value, setValue] = useState(dayjs(new Date().toDateString()));

  const handleChange = (newValue) => {
    setValue(newValue);
    if (onChange) {
      onChange(new Date(newValue));
    }
  };

  useEffect(() => {
    if (!loading) {
      setValue(dayjs(new Date().toDateString()));
    }
  }, [loading]);

  return (
    <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={["DateCalendar", "DateCalendar"]}>
          <Box
            sx={{
              "& .MuiDateCalendar-root": {
                width: "560px",
                minHeight: "410px", // Ajusta el ancho del calendario
                "& .MuiPickersDay-root": {
                  fontSize: "1.5rem", // Ajusta el tamaño de la fuente de los días
                  width: "50px", // Ajusta el ancho de cada día
                  height: "50px", // Ajusta la altura de cada día
                },
                "& .MuiPickersCalendarHeader-root": {
                  fontSize: "1.5rem", // Ajusta el tamaño de la fuente del encabezado del calendario
                },
                "& .MuiPickersCalendarHeader-label": {
                  fontSize: "1.8rem", // Ajusta el tamaño de la fuente del mes y el año
                },
                "& .MuiPickersSlideTransition-root": {
                  height: "325px",
                },
                "& .MuiDayCalendar-weekDayLabel": {
                  fontSize: "1.5rem", // Ajusta el tamaño de la fuente de los días de la semana
                  width: "80px",
                },
                "& .MuiDayCalendar-weekContainer": {
                  gap: "25px",
                },
                [theme.breakpoints.down("lg")]: {
                  width: "440px",
                  minHeight: "440px",
                  "& .MuiPickersDay-root": {
                    fontSize: "1.3rem",
                    width: "40px",
                    height: "40px",
                  },
                  "& .MuiPickersCalendarHeader-root": {
                    fontSize: "1.2rem",
                  },
                  "& .MuiPickersCalendarHeader-label": {
                    fontSize: "1.5rem",
                  },
                  "& .MuiPickersSlideTransition-root": {
                    height: "300px",
                  },
                  "& .MuiDayCalendar-weekDayLabel": {
                    fontSize: "1.2rem",
                    width: "60px",
                  },
                  "& .MuiDayCalendar-weekContainer": {
                    gap: "20px",
                  },
                },
                [theme.breakpoints.down("sm")]: {
                  width: "340px",
                  minHeight: "360px",
                  "& .MuiPickersDay-root": {
                    fontSize: "1rem",
                    width: "30px",
                    height: "30px",
                  },
                  "& .MuiPickersCalendarHeader-root": {
                    fontSize: "1.2rem",
                  },
                  "& .MuiPickersCalendarHeader-label": {
                    fontSize: "1.5rem",
                  },
                  "& .MuiPickersSlideTransition-root": {
                    height: "300px",
                  },
                  "& .MuiDayCalendar-weekDayLabel": {
                    fontSize: "1.2rem",
                    width: "60px",
                  },
                  "& .MuiDayCalendar-weekContainer": {
                    gap: "15px",
                  },
                },
              },
            }}
          >
            <DateCalendar value={value} onChange={handleChange} />
          </Box>
        </DemoContainer>
      </LocalizationProvider>
    </ThemeProvider>
  );
}
