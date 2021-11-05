import React from 'react';
import { List } from '../../components/List';
import * as S from './styles';


export function Home() {
    return(
        <div>
            <S.Title>ZeeMovies</S.Title>
            <List />
        </div>


    )
}