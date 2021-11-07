import styled from 'styled-components';

export const Container = styled.div`
    span{
        font-weight: 500;
    }
`;

export const Banner = styled.img`
    width: 40vw;
    border-radius: 1rem;
    box-shadow: 0 10px 16px var(--shadow);

    @media screen and (max-width: 980px) {
        width: 100%;
    }
`;

export const Details = styled.div`
    display: flex;
    padding: 2rem 4rem;

    @media screen and (max-width: 980px) {
        display: block;
        padding: 1rem .5rem;
    }
`;

export const DetailsList = styled.div `
    margin: 0 4rem;

    @media screen and (max-width: 980px) {
        margin: 0 2rem;
    }
`;

export const Score = styled.div`
    display: flex;
    align-items: center;

    img{
        height: fit-content;
        width: 2.5vw;
        margin-right: 1rem;

        @media screen and (max-width: 980px) {
            width: 10vw;
            height: auto;
        }
    }

    h4{
        @media screen and (max-width: 980px) {
            margin: inherit
    }
    }
`;