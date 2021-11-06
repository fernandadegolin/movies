import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import * as S from './styles';

export const List = () => {
    const [movies, setMovies] = useState (null);

    useEffect(() => {
        fetch('https://ghibliapi.herokuapp.com/films/')
        .then((res) => res.json())
        .then((res) => {
            setMovies(res);
        });
    }, []);

    if (!movies) {
        return null;
    }
    
    return(
        <S.Container>
            {movies.map((item) => (
                <S.MovieList key={item.id}>
                    <S.MoviePoster src={item.image} alt={item.title} />
                        <S.MovieTitle>{item.title}</S.MovieTitle>
                        <li>{item.director}</li>
                        <S.MovieListDescription>{item.description}</S.MovieListDescription>
                    <S.MovieFavorites>
                        <Link to={`/details/${item.id}`}>
                            <button>Conheça</button>
                        </Link>
                            <label>Favorites:</label>
                            <input type={'checkbox'} />
                    </S.MovieFavorites>
                </S.MovieList>
            ))}
        </S.Container>
    )
}


