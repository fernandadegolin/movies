import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './styles';


export function Header() {
    return(
        <S.Container>
            <Link to={`/`}>
                <S.Title>ZeeMovies</S.Title>
            </Link>
            <Link to={`/favourites`}>
                <S.ButtonDetails>My Favourites</S.ButtonDetails>
            </Link>
        </S.Container>
       


    )
}