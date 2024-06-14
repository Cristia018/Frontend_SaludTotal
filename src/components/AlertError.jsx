import { Alert, Snackbar } from "@mui/material";

export default function AlertError({open, msg, handleClose}){

    return (
        <div>
          <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
            <Alert
              onClose={handleClose}
              severity="error"
              variant="filled"
              sx={{ width: '100%' }}
            >
              {msg}
            </Alert>
          </Snackbar>
        </div>
      );
}