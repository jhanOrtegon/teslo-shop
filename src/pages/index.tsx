import { ShopLayout } from '@/components/layouts';
import { Typography } from '@mui/material';

import { NextPage } from 'next';
import React from 'react';

const Home:NextPage = () => {
    return (
        <ShopLayout 
            pageDescription='Encuentra los mejores productos del mercado' 
            title='Teslo - Shop - Home'
        >
            <Typography variant='h1' component={'h1'} >Tienda</Typography>
            <Typography variant='h2' sx={{mb:'1'}}>Todos los productos</Typography>
        </ShopLayout> 
    );
};

export default Home;
