import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Switch from '@mui/material/Switch';

const label = { inputProps: { 'aria-label': 'Size switch demo' } };


export default function OnlineCard(props) {
    return (
        <Card sx={{ maxWidth: 275 }}>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    Word of the Day
                </Typography>
                <Typography variant="h5" component="div">
                    Online Mode
                </Typography>
                <Typography variant="body2">
                   Is This Online?
                    <br />
                    {'"a benevolent smile"'}
                </Typography>
            </CardContent>
            <CardActions>
                <Switch {...label} onChange={() => props.setIsOnline(!props.isOnline)}/>
            </CardActions>
            {props.isOnline && (
                <p>Your application is offline. You won't be able to share or stream music to other devices.</p>
            )}
        </Card>
    );
}
