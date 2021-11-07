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

    border-radius: 1rem;
    box-shadow: 0 8px 10px var(--light-shadow);
`;

export const MovieTitle = styled.li`
    font-size: x-large;
    font-weight: 600;
    margin-top: 1rem;
`;

export const MovieListDescription = styled.li`
    text-align: justify;
    margin-top: 2rem;
`;

export const MoviePoster = styled.img`
    width: 20vw;
    border-radius: 1rem;
    box-shadow: 0 10px 16px var(--shadow);

    @media screen and (max-width: 980px) {
        width: 100%;
    }
`;

export const MovieFavorites = styled.div`
    display: flex;
    flex-direction: column;
    align-items: baseline;
    margin-top: 1rem;
`;

