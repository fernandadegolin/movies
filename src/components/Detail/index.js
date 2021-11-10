import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Favourite } from '../Favourite';
import Tomato from './../../assets/tomato.png';
import Return from './../../assets/seta-curva.png';
import * as S from './styles';

export const Detail = () => {
    const [movies, setMovies] = useState({});
    const [people, setPeople] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        fetch (`https://ghibliapi.herokuapp.com/films/${id}`)
        .then((res) => res.json())
        .then((res) => {
            setMovies(res);
    });
    }, [id]);


    
    useEffect(() => {
        fetch (`https://ghibliapi.herokuapp.com/people/`)
        .then((res) => res.json())
        .then((res) =>{
            setPeople(res);
        });
    }, []);
    

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


            <S.Details>
                <S.DetailsList>
                <h1>Character</h1>
                <h4>coming soon...</h4>
                {/* {movies.people && movies.people.map((item) => (
                    <ul key={item.id}>
                        <li>{item.name}</li>
                        <li>{item.gender}</li>
                        <li>{item.age}</li>
                    </ul>   
                    ))} */}
                    </S.DetailsList>
            </S.Details>

        <S.Return href="/">
               <img src={Return} alt="Return"/>
        </S.Return>
        </S.Container>
    )

}