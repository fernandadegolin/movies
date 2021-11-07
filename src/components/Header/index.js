import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './styles';


export function Header() {
    return(
        <S.Container>
            <S.Title>ZeeMovies</S.Title>
            <Link to={`/favourites`}>
                <S.ButtonDetails>My Favourites</S.ButtonDetails>
            </Link>
        </S.Container>
       


    )
}