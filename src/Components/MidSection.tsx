import { Box, Container, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import Actor from './Actor';
import "swiper/css";
import "swiper/css/pagination";
import Reviews from './Reviews';


const MidSection = () => {
    const [data, setData] = useState([])
    const [review, setReview] = useState([])
    useEffect(() => {
        /* actress loacal rest api */
        (fetch('/profile.json')
            .then((e) => e.json())
            .then((data) => setData(data)));
        /* reviwes loacal rest api */
        (fetch('/reviews.json')
            .then((e) => e.json())
            .then((data) => setReview(data)))
    }, [])
    return (
        <Container maxWidth="xl" >
            <Box display={'flex'}  justifyContent={'space-between'} alignItems={'center'} mt={15} mb={4}>
                <h2 className='underLine' >Upcoming Shows</h2>
                <Typography color={'#E5C558'}>View All</Typography>
            </Box>
            {/* actress prfile cards */}
            <Box >
                <Swiper
                    slidesPerView={4}
                    spaceBetween={15}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        "@0.00": {
                            slidesPerView: 1,
                            spaceBetween: 10,
                        }, "@0.40": {
                            slidesPerView: 1.1,
                            spaceBetween: 5,
                        },
                        "@0.75": {
                            slidesPerView: 2.1,
                            spaceBetween: 10,
                        },
                        "@1.00": {
                            slidesPerView: 2.5,
                            spaceBetween: 10,
                        },
                        "@1.50": {
                            slidesPerView: 4,
                            spaceBetween: 10,
                        }
                    }}
                    className="mySwiper"
                >

                    {
                        data.length > 0 ? data.map((user, index) => <SwiperSlide><Actor key={index} user={user} ></Actor></SwiperSlide>) : 'LODING'
                    }
                </Swiper>
            </Box>
            {/* review cards */}
            <Box my={4}>
                <h2 className='underLine' >Reviews</h2>
            </Box>
            <Box >
                <Swiper
                    style={{ padding: '0 5px' }}
                    slidesPerView={3}
                    spaceBetween={10}
                    breakpoints={{
                        "@0.00": {
                            slidesPerView: 1,
                            spaceBetween: 60,
                        }, "@0.40": {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        }, "@0.60": {
                            slidesPerView: 1.2,
                            spaceBetween: 20,
                        },
                        "@0.75": {
                            slidesPerView: 1.6,
                            spaceBetween: 10,
                        },
                        "@1.00": {
                            slidesPerView: 2,
                            spaceBetween: 10,
                        },
                        "@1.50": {
                            slidesPerView: 3,
                            spaceBetween: 10,
                        }
                    }}
                    className="mySwiper"
                >
                    {
                        review.length > 0 ? review.map((user, index) => <SwiperSlide><Reviews key={index} user={user}></Reviews></SwiperSlide>) : 'LODING'
                    }

                </Swiper>

            </Box>

        </Container >
    );
};

export default MidSection;