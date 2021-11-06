import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Tomate from './../../assets/tomate.png'
import * as S from './styles';

export const Details = () => {
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
                    <h1>{movies.title} | <span> {movies.release_date} </span></h1>
                        <p>{movies.description}</p>
                    <h4>Director: <span> {movies.director} </span>  |  Producer: <span>{movies.producer}</span></h4>
                
                    <S.Score>
                        <img src={Tomate} alt={Tomate} />
                        <h4>{movies.rt_score}</h4>
                    </S.Score>
                </S.DetailsList>
            </S.Details>
            
                {/* <People /> */}
              
             
        
           
           <a href="/">Voltar</a>
        </S.Container>
    )

}