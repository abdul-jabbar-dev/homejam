import React, { FC } from 'react';
import { Box, Card, CardContent, Typography } from '@mui/material';

interface MyCodeParams {
    user: {
        name: string,
        img: string,
        flag: string,
        address: string,
        review: string,
    }
}
const Reviews: FC<MyCodeParams> = ({ user }) => {


    return (

        <Card
            className='reviewsBc'
            sx={{

                my: '20px',
                maxWidth: '400px', color: 'white', bgcolor: '#0A0B1A',
                borderRadius: '16px'
            }} >


            <CardContent sx={{ pb: '0' }}>
                <Box display={'flex'} gap="15px" alignItems="center">
                    <img src={user.img} height="48"
                        width="48" alt="" />
                    <samp>
                        <Typography mt={1} fontFamily="Quattrocento" gutterBottom variant="h5" component="div">
                            {user.name}
                        </Typography>
                        <Typography mt={1} color={'#E5C558'} display={'flex'} alignItems={'center'} fontFamily="Nunito" gutterBottom variant="body2" component="div">
                            <img src={user.flag} height="24"
                                width="24" alt="" />&nbsp;
                            {user.address}
                        </Typography>
                    </samp>
                </Box>
                <Typography mt={1} fontFamily="Nunito" gutterBottom variant="body1" component="div">
                    {user.review}
                </Typography>
            </CardContent>


        </Card>
    );
};

export default Reviews