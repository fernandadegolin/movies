import React from 'react';
import * as S from './styles';


export function Footer () {
    return(
        <S.Container>
            <p>This project lives at the GitHub repository: 
                <a 
                href={`https://github.com/fernandadegolin/movies`}
                target="_blank"
                rel="noreferrer">
                https://github.com/fernandadegolin/movies
                </a>
            </p>
        </S.Container>
    )
}