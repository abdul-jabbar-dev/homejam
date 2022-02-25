import React from 'react';
import { Box, Link, Typography } from '@mui/material'
import logo from '../Media/logo.png';
import SearchIcon from '@mui/icons-material/Search';
import LocalMallIcon from '@mui/icons-material/LocalMall';
const NavBar = (): JSX.Element => {
    return (
        <div >
            <Box  sx={{pt:'10px' ,justifyContent: 'space-between', alignContent: 'center', display: 'flex' }} >
                <img src={logo} width={'90px'} alt="Company logo" />

                <Box display={'flex'} alignContent={'center'} gap={5} className={'hideTitle'} >
                    <Link color={'white'} display={'flex'} alignContent={'center'} href="#" underline="none">
                        <SearchIcon></SearchIcon>
                        <Typography className='hideTitleRes' display={'inline'}>Search</Typography>
                    </Link>
                    <Link color={'white'} href="#" underline="none">
                        <Typography className='hideTitleRes' display={'inline'}>Help</Typography>
                    </Link>
                    <Link color={'white'} href="#" underline="none">
                        <Typography className='hideTitleRes' display={'inline'}>Account</Typography>
                    </Link>
                    <Link color={'white'} href="#" underline="none">
                        <Typography display={'inline'}><LocalMallIcon></LocalMallIcon></Typography>
                    </Link>
                </Box>

            </Box>
        </div>
    );
};

export default NavBar;