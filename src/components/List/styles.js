import styled from 'styled-components';

export const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1rem;

    @media screen and (max-width: 980px) {
        display: block;
        padding: 0 2rem;
    }
`;

export const MovieList = styled.ul`
    list-style: none;
    text-align: center;
    padding: 2rem;
`;

export const MovieTitle = styled.li`
    font-size: x-large;
    font-weight: 600;
`;

export const MovieListDescription = styled.li`
    text-align: justify;
    margin-top: 2rem;
`;



export const MoviePoster = styled.img`
    max-width: 100%;
`;