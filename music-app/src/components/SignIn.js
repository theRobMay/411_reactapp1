import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button";

export default function SignIn(props) {
    return (
        <Box
            component="form"
            sx={{
                margin: '64px auto',
                display: 'grid',
                maxWidth: 300,
                gridGap: '8px'
            }}
            noValidate
            autoComplete="off"
        >
            <TextField type={"email"} id="outlined-basic" label="Email" variant="outlined" />
            <TextField type={"password"} id="outlined-basic" label="Password" variant="outlined" />
            <Button variant={"contained"} onClick={props.setIsLoggedIn(!props.isLoggedIn)}>Login</Button>
        </Box>
    );
}
