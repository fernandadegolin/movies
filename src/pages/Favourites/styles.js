import styled from "styled-components";


export const Container = styled.div`
    height: 64vh;
    padding: 0 3rem;
`;


export const Return = styled.a`
    display: flex;
    justify-content: flex-end;
    padding: 0 4rem;

    img{
        width: 2vw;

        @media screen and (max-width: 980px) {
            width: 7vw;
            margin-top: 1rem;
        }
    }
`;