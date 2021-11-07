import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    text-align: center;

    margin-top: 1rem;
    box-shadow: 13px 0px 10px var(--light-shadow);

    a{
        text-decoration: none;
        color: var(--link);
    }
`;