import React from 'react';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import Return from './../../assets/seta-curva.png';
import * as S from './styles';


export function Favourites() {
    return(
        <>
        <Header />
            <S.Container>
                <h1>Favourite List</h1>
                <h4>coming soon...</h4>
            </S.Container>



            <S.Return href="/">
                <img src={Return} alt="Return"/>
            </S.Return>
        <Footer />
        </>
    )
}