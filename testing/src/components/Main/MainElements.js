import styled from 'styled-components'

export const MainWrapper = styled.div`


    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};

    .countryGrid{
        width:90%;
        margin: 0 auto;
        
        min-height: 90vh;



        display:grid;
        grid-template-columns: 1fr;
        grid-gap: 30px;

        @media(min-width: 768px)
        {
            grid-template-columns: repeat(3, 1fr);
            grid-gap: 60px;
        }


        @media(min-width: 1440px)
        {
            grid-template-columns: repeat(4, 1fr);
            grid-gap: 60px;
        }
        
        
    }

    article{
        background: ${({ theme }) => theme.elements};
        color: ${({ theme }) => theme.text};
        padding-bottom:15px;
        border-radius: 10px;
        overflow:hidden;
        box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
    }

    .flagWrapper{
        width:100%;
        aspect-ratio:5/3;
    }

    img{
        width:100%;
        height:100%;
        object-fit:cover;
    }


    .articleContent{
        width:80%;
        margin: 0 auto;
    }

    span{
        font-weight: 600;
    }

    
`;
