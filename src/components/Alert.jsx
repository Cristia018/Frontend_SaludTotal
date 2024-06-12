import { Snackbar, Alert } from "@mui/material";


export default function AlertSucces({open, msg, handleClose}){

    return (
        <div>
          <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
            <Alert
              onClose={handleClose}
              severity="success"
              variant="filled"
              sx={{ width: '100%' }}
            >
              {msg}
            </Alert>
          </Snackbar>
        </div>
      );
}