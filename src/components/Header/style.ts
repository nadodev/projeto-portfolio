import styled from "styled-components";


export const Container = styled.header`
    display: grid;
    grid-template-columns: auto auto auto;
   grid-template-areas:
   "content content iside iside"
   "Trabalhos Trabalhos Trabalhos Trabalhos";
`;

export const Content = styled.div`
  grid-area: content;
  background-color:#fff;
  img{
      width:200px;
  }
`;
export const Wraper = styled.div`
    width:500px ;
    margin: 0 auto;
`;
export const Iside = styled.div`

  grid-area: iside;
  background-color:var(--secondary);
  min-height: 100vh;
`;
export const Nav = styled.nav`
    margin-left: 40px;

    ul{
        height:40px;
        display: flex;
        list-style: none;
        align-items: center;
    
    li{
      a{
        margin-left:10px;
        color: white;
        cursor: pointer;
        transition:  0.3s;
        text-decoration: none;
        &:hover{
            color: black;
        }
      }
    }
}
`;
export const WraperTexto = styled.div`
    min-height:70vh;
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
        span{
            display: flex;
            align-items: center;
            margin-bottom: 0.5rem;
           font-size:1.2rem;
           color: var(--text-body);
           img{
               margin-right: 20px;
               width:35px;
               height:45px;
           }
        }

       h1{
           font-size:4.5rem;
            line-height:4rem;
            font-weight: 700;
       }
       p{
           margin-top: 1rem;
           font-size:1.2rem;
           color: var(--text-body);
       }
       a{
           margin-top: 1rem;
           padding:0.5rem 1rem;
        font-size:1rem;
        text-decoration: none;
        color: #fff;
        background-color:var(--secondary);
        border-radius:0.3rem;
        border:none;
        transition: filter 0.3s ease;
        &:hover{
            filter: brightness(0.9);
        }
    }


`;
export const WraperTela = styled.div`
        margin-top: 5rem;
        img{
            position: absolute;
            left: 50%;

        }
`;

export const Trabalhos = styled.div`
grid-area:Trabalhos;
width: auto;
    padding: 3rem 0;
`;
export const WraperFooter = styled.div`
width:1300px ;
margin: 0 auto;
display: flex;
justify-content:space-around;
`;
export const Sobre = styled.div`
    margin-right: 50px;
`;
export const Trampo = styled.div`
display: flex;
width: 900px;
    .items{
        margin-right:20px;
        img{
            width:300px;
        }
    
    }
`;