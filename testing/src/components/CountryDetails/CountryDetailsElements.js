import styled from 'styled-components'

export const DetailsWrapper = styled.div`
    min-height: 120vh;
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    height: auto;
   
    
    
    .btnWrapper{
        
        padding: 40px 0;
    }

    .link{
        display:flex;
        justify-content: center;
        margin-left:5%;
        width:100px;

    }

    button{
        width: 100%;
        padding: 5px 20px;
        border:none;
        border-radius: 5px;
        box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
        background: ${({ theme }) => theme.elements};
        color: ${({ theme }) => theme.input};
        
    }
    
    i{
        margin-right: 15%;
    }

    .infoWrapper{
        width:90%;
        margin: 40px auto;
        display:flex;
        flex-direction:column; 
        justify-content:space-between;
        align-items:center;

        @media(min-width: 768px){
            flex-direction: row;
        }
    }

    .flagContainer{
        width: 100%;
        aspect-ratio: 16/9;

        @media(min-width:768px){
            width:40%;
        }
    }

    img{
        width:100%;
        height:100%;
        object-fit:cover;
    }

    .info{
        width: 100%;
        display: flex;
        flex-direction:column;
        align-items: center;

        @media(min-width: 768px){
            align-items: flex-start;
            width: 50%;
        }
    }

    .infoGrid{
        margin:0;
        display:grid;

        grid-template-columns: 1fr;

        @media(min-width: 768px){
            grid-template-columns: 1fr 1fr;
        }
    }

    .listP{
        margin:5px 0;
        padding:0;

    }

    .subheading{
        font-weight: 600;
        margin-right: 5px;
    }

    .currency{
        margin-left: 5px;
    }

    .borderCountries{
        margin-top:30px;
        width:100%;
        
    }
    

    .borderList{
        margin-top:10px;
        width: 100%;
        display:grid;
        grid-template-rows: 1fr 1fr;
        grid-auto-flow: column;


        @media(min-width:768px){
            grid-template-rows: 1fr;
        }
    }

    .border{
        padding: 5px 10px;
        margin: 5px 5px;
        box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
        border-radius: 5px;
        background: ${({ theme }) => theme.elements};
        color: ${({ theme }) => theme.text};
    }


    
    
`;