import styled from 'styled-components';

export const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1rem;
    
`;

export const MovieList = styled.ul`
    list-style: none;
    text-align: center;
`;

export const MovieListDescription = styled.li`
    text-align: justify;
    margin-top: 2rem;
`;

export const MoviePoster = styled.img`
    max-width: 100%;
`;