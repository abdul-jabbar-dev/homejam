import { Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import NavBar from './NavBar';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const TopSection = () => {
    return (
        <Box className='topSection' sx={{ height: '100vh' }} >
            <Container maxWidth={'xl'}>
                <NavBar></NavBar>
                <Box my={'15%'}>
                    <h1 className='topTitle'>
                        Cari Cari
                    </h1>
                    <Typography width={'35%'} fontFamily={'Nunito'} variant='h5' >
                        Live from their sofa to yours. Get closer to your favorite artists, and never miss out.
                    </Typography>
                </Box>
            </Container>
            <Box display={'flex'} justifyContent={'space-evenly'}>
                <Box className='fancy-border' flexDirection={'column'} >
                    <FavoriteBorderIcon color={'primary'}></FavoriteBorderIcon>
                    <Typography variant='h4'>0</Typography>
                    <Typography variant='body1'>Lebel</Typography>
                </Box>
                <Box className='border' flexDirection={'column'} >
                    <FavoriteBorderIcon color={'primary'}></FavoriteBorderIcon>
                    <Typography variant='h4'>0</Typography>
                    <Typography variant='body1'>Lebel</Typography>
                </Box>
                <Box className='border' flexDirection={'column'} >
                    <FavoriteBorderIcon color={'primary'}></FavoriteBorderIcon>
                    <Typography variant='h4'>0</Typography>
                    <Typography variant='body1'>Lebel</Typography>
                </Box>
                <Box className='border' flexDirection={'column'} >
                    <FavoriteBorderIcon color={'primary'}></FavoriteBorderIcon>
                    <Typography variant='h4'>0</Typography>
                    <Typography variant='body1'>Lebel</Typography>
                </Box>

            </Box>
        </Box>
    );
};

export default TopSection;