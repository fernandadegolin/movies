import styled from "styled-components";

export const FavouriteButton = styled.button`
    background-color: inherit;
    border: inherit;
    display: flex;
    width: 100%;
    justify-content: flex-end;
    cursor: pointer;

    img{
        height: fit-content;
        width: 2.5vw;

        @media screen and (max-width: 980px) {
            width: 8vw;
            margin-top: 1rem;
        }
    }
`;

