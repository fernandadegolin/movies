import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;

    margin-bottom: 2rem;
    box-shadow: 0 0px 13px var(--light-shadow);

`;

export const Title = styled.h1`
    text-align: center;
    text-decoration: none;
`;

export const ButtonDetails = styled.button`
    border-radius: 0.5rem;
    border: 1px solid;
    width: 8vw;
    height: 5vh;
    cursor: pointer;

    @media screen and (max-width: 980px) {
        width: auto;
        
    }

    &:hover,
    &:focus {
        background-color: var(--shadow);
        color: var(--white);
    }
`;