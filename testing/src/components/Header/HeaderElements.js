import styled from 'styled-components'

export const Wrapper = styled.header`
    display: flex;
    justify-content: space-between;
    align-items:center;
    box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
    background: ${({ theme }) => theme.elements};
    color: ${({ theme }) => theme.text};


    h1{
        margin-left: 5%;
        font-size: .8rem;
        
        @media(min-width: 768px){
             font-size: 1.5rem;
        }

        
    }
    .toggle{
        display: flex;
        align-items:center;
        font-size: .8rem;
        margin-right: 1%;
         margin-right: 5%;

        @media(min-width: 768px){
            margin-right: 5%;
            font-size: 1rem;
        }
        
    }

    i{
        margin-right: 5px;

        @media(min-width: 768px){
            margin-right: 10px;
        }
        
    }


`;