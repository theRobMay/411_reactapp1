import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const label = { inputProps: { 'aria-label': 'Size switch demo' } };


export default function CardController(props) {
    const {title, description, component: Component, action} = props;
    return (
        <Card sx={{ maxWidth: 275 }}>
            <CardContent>
                <Typography variant="h5" component="div">
                    {title}
                </Typography>
                <Typography variant="body2">
                    {description}
                    <br />
                </Typography>
            </CardContent>
            <CardActions>
                <Component {...label} onChange={action}></Component>
            </CardActions>

        </Card>
    );
}