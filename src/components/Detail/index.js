import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Favourite } from '../Favourite';
import Tomato from './../../assets/tomato.png';
import Return from './../../assets/seta-curva.png';
import * as S from './styles';

export const Detail = () => {
    const [movies, setMovies] = useState({});
    const { id } = useParams();

    useEffect(() => {
        fetch (`https://ghibliapi.herokuapp.com/films/${id}`)
        .then((res) => res.json())
        .then((res) => {
            setMovies(res);
            
        });
        
    }, [id])

    if (!movies) {
        return null;
    }

    
    return(
        <S.Container>
            <S.Details>
                <S.Banner src={movies.movie_banner} alt={movies.title} />

                <S.DetailsList>
                    <Favourite />
                    <h1>{movies.title} | <span> {movies.release_date} </span></h1>
                        <p>{movies.description}</p>
                    <h4>Director: <span> {movies.director} </span>  |  Producer: <span>{movies.producer}</span></h4>
                
                    <S.Score>
                        <img src={Tomato} alt="Tomato" />
                        <h4>{movies.rt_score}</h4>
                    </S.Score>
                </S.DetailsList>
            </S.Details>
           <S.Return href="/">
               <img src={Return} alt="Return"/>
           </S.Return>
                       
        </S.Container>
    )

}