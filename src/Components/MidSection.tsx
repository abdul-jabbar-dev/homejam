import { Box, Container, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import Actor from './Actor';
import "swiper/css";
import "swiper/css/pagination";
import Reviews from './Reviews';


const MidSection = () => {
    const [select, SetSelect] = useState<Boolean>(false)
    const [data, setData] = useState([])
    const [review, setReview] = useState([])
    useEffect(() => {
        (fetch('/profile.json')
            .then((e) => e.json())
            .then((data) => setData(data)));
        (fetch('/reviews.json')
            .then((e) => e.json())
            .then((data) => setReview(data)))
    }, [])


    return (
        <Container maxWidth="xl" >
            <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'} my={4}>
                <h2 className='underLine' >Upcoming Shows</h2>
                <Typography color={'#E5C558'}>View All</Typography>
            </Box>
            <Box >
                <Swiper
                    slidesPerView={4}
                    spaceBetween={15}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        "@0.00": {
                            slidesPerView: 1.3,
                            spaceBetween: 0,
                        },
                        "@0.75": {
                            slidesPerView: 2.1,
                            spaceBetween: 10,
                        },
                        "@1.00": {
                            slidesPerView: 3.1,
                            spaceBetween: 0,
                        },
                        "@1.50": {
                            slidesPerView: 4,
                            spaceBetween: 10,
                        }
                    }}
                    className="mySwiper"
                >

                    {
                        data.length > 0 ? data.map((user, index) => <SwiperSlide><Actor key={index} user={user} select={select} SetSelect={SetSelect}></Actor></SwiperSlide>) : 'LODING'
                    }
                </Swiper>
            </Box>
            <Box my={4}>
                <h2 className='underLine' >Reviews</h2>
            </Box>
            <Box >
                <Swiper

                    slidesPerView={3}
                    spaceBetween={2}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        "@0.00": {
                            slidesPerView: 1.3,
                            spaceBetween: 0,
                        },
                        "@0.75": {
                            slidesPerView: 2.1,
                            spaceBetween: 10,
                        },
                        "@1.00": {
                            slidesPerView: 3.1,
                            spaceBetween: 0,
                        },
                        "@1.50": {
                            slidesPerView: 4,
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