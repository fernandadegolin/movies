import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import * as S from './styles';

export const Details = () => {
    const [movies, setMovies] = useState(null);
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
        <div>
           <h1>Details</h1>
           <a href="/">Voltar</a>
        </div>
    )

}