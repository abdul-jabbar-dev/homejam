import { Container, Typography, Box } from '@mui/material';
import React from 'react';
import NavBar from './NavBar';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

import { SwiperSlide, Swiper } from 'swiper/react';

const TopSection = () => {
    return (
        <Box className='topSection' sx={{ height: '100vh' }} >
            <Container maxWidth={'xl'}>

                {/* Navigation bar */}
                <NavBar></NavBar>



                {/* top body */}
                <Box my={'15%'}>
                    <h1 className='topTitle'>
                        Cari Cari
                    </h1>
                    <Typography width={'35%'} fontFamily={'Nunito'} variant='h5' className='topSubTitle' >
                        Live from their sofa to yours. Get closer to your favorite artists, and never miss out.
                    </Typography>
                </Box>

                <Box display={'flex'} justifyContent={'space-evenly'}>
                    {/* sate slider swiper */}
                    <Swiper
                        style={{ padding: '0 5px' }}
                        slidesPerView={4}
                        spaceBetween={10}
                        breakpoints={{
                            "@0.00": {
                                slidesPerView: 1.2,
                                spaceBetween: 0,
                            }, "@0.40": {
                                slidesPerView: 1.5,
                                spaceBetween: 0,
                            },
                            "@0.75": {
                                slidesPerView: 2.3,
                                spaceBetween: 10,
                            },
                            "@1.00": {
                                slidesPerView: 4,
                                spaceBetween: 5,
                            },
                            "@1.50": {
                                slidesPerView: 4,
                                spaceBetween: 10,
                            }
                        }}
                        className="mySwiper"
                    >
                        <SwiperSlide><Box className='fancy-border' flexDirection={'column'} >
                            <FavoriteBorderIcon color={'primary'}></FavoriteBorderIcon>
                            <Typography variant='h4'>0</Typography>
                            <Typography variant='body1'>Lebel</Typography>
                        </Box></SwiperSlide>

                        <SwiperSlide>  <Box className='border' flexDirection={'column'} >
                            <FavoriteBorderIcon color={'primary'}></FavoriteBorderIcon>
                            <Typography variant='h4'>0</Typography>
                            <Typography variant='body1'>Lebel</Typography>
                        </Box></SwiperSlide>

                        <SwiperSlide>                 <Box className='border' flexDirection={'column'} >
                            <FavoriteBorderIcon color={'primary'}></FavoriteBorderIcon>
                            <Typography variant='h4'>0</Typography>
                            <Typography variant='body1'>Lebel</Typography>
                        </Box></SwiperSlide>

                        <SwiperSlide>                <Box className='border' flexDirection={'column'} >
                            <FavoriteBorderIcon color={'primary'}></FavoriteBorderIcon>
                            <Typography variant='h4'>0</Typography>
                            <Typography variant='body1'>Lebel</Typography>
                        </Box></SwiperSlide>

                    </Swiper>
                </Box>
            </Container>
        </Box>
    );
};

export default TopSection;