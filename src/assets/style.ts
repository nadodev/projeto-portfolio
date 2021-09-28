import styled from "styled-components";


export const Container = styled.header`
    background-color: var(--secondary);

    img{
        width: 200px
    }
`;

export const Content = styled.div`
    max-width: 1120px;
    margin: 0 auto;

    padding: 2rem 1rem 10rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    button{
        font-size:1rem;
        color: #fff;
        background-color:var(--terciary);

        height:3rem;
        padding: 0 2rem;
        border-radius:0.3rem;
        border:none;
        transition: filter 0.3s ease;
        &:hover{
            filter: brightness(0.9);
        }
    }
`;