import React, { FC, useState } from 'react';
import { Box, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import ConfirmationNumberOutlinedIcon from '@mui/icons-material/ConfirmationNumberOutlined';
import ConfirmationNumberRoundedIcon from '@mui/icons-material/ConfirmationNumberRounded';
interface MyCodeParams {
    user: {
        name: string,
        roll: string,
        img: string
    },

}
const Actor: FC<MyCodeParams> = ({ user, }) => {
    const [select, SetSelect] = useState<Boolean>(false)
    return (

        <Card
            className='actorsBc'
            sx={{
                my: '20px',
                maxWidth: '286px', color: 'white', bgcolor: '#111229',borderRadius:'8px'
            }} >
            <CardMedia
                component="img"
                alt="green iguana"
                height="250"
                image={user.img}
            />
            <CardContent sx={{ pb: '0' }}>
                <Box sx={{ bgcolor: '#E5C558', display: 'inline', color: 'black', px: '5px', fontSize: '.9rem' }}>{user.roll}</Box>
                <Typography mt={1} gutterBottom variant="h5" component="div">
                    {user.name}
                </Typography>

            </CardContent>
            <CardActions sx={{ display: 'flex', justifyContent: 'space-between', pl: '15px' }}>
                <Box display={'flex'} borderRadius={'5px'} color={'#0259EB'} alignItems={'center'}>
                    <p>More Info</p> &nbsp;
                    <ArrowRightAltIcon></ArrowRightAltIcon>
                </Box>
                <Box paddingX={'23px'} borderLeft={'1px solid darkGray'}>
                    {select ?
                        <ConfirmationNumberRoundedIcon
                            onClick={() => SetSelect(false)} className='iconRou'
                        > </ConfirmationNumberRoundedIcon>
                        :
                        <ConfirmationNumberOutlinedIcon
                            onClick={() => SetSelect(true)} className='iconRou'
                        ></ConfirmationNumberOutlinedIcon>
                    }
                </Box>
            </CardActions>
        </Card>
    );
};

export default Actor