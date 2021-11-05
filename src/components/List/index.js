import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import * as S from './styles';

export const List = () => {
    const [movies, setMovies] = useState (null);

    useEffect(() => {
        fetch('https://ghibliapi.herokuapp.com/films/')
        .then((res) => res.json())
        .then((res) => {
            setMovies(res);
            console.log(res)
        });
    }, []);

    if (!movies) {
        return null;
    }
    
    return(
        <S.Container>
            {movies.map((item) => (
                <S.MovieList key={item.id}>
                    <S.MoviePoster src={item.image} alt={item.description} />
                        <li>{item.title}</li>
                        <li>{item.director}</li>
                        <S.MovieListDescription>{item.description}</S.MovieListDescription>
                    <Link to={`films/${item.id}`}>
                        <button>Conheça</button>
                    </Link>
                </S.MovieList>
            ))}
        </S.Container>
    )
}


