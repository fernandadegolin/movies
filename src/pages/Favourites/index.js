import React from 'react';
import { People } from '../../components/Detail/People';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';

export function Favourites() {
    return(
        <>
        <Header />
        <h1>favoritos</h1>

       <People />
       
        <a href="/">
        back
        </a>
        <Footer />
        </>
    )
}