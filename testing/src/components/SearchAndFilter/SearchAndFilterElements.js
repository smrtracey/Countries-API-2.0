import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: auto;
    padding: 20px 0;
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.input};
    display:flex;
    flex-direction: column;
    justify-content:space-between;
    align-items:flex-start;

    i{
        margin-left: 5%;
    }

    input{
        border:none;
        width:100%;
        height:100%;
        margin-left: 5%;
        background: inherit;
        color: inherit;
        border-radius: 10px;
        padding:0;
        
        &::placeholder{
            color:inherit;
        }

        &:active,
        &:focus{
            outline:0;
            border:0;
        }

    }


    @media(min-width:768px){
        flex-direction: row;
        align-items:center;
    }
`;

export const SearchWrapper = styled.div`
    margin-left: 5%;
    width: 90%;
    display: flex;
    align-items:center;
    background: ${({ theme }) => theme.elements};
    padding: 10px 0;
    border-radius: 10px;


    @media(min-width:768px){
        width: 35%;
        padding: 20px 0;
    }
`;

export const FilterWrapper = styled.div`
       margin-left: 5%; 
       margin-top: 20px;
       width: 60%;
       display: flex;
       justify-content:space-between;
       align-items:center;
       background: ${({ theme }) => theme.elements};
       position:relative;
       border-radius: 10px;
       padding: 10px 0;

    p{
        
        padding:0;
        margin:0;
        margin-left: 5%;
        
    }

    .downArrow{
        width:4%;
        aspect-ratio:1;
        border-bottom: 1px solid ${({ theme }) => theme.text};
        border-right: 1px solid  ${({ theme }) => theme.text};
        margin-right: 5%;
        transform: rotate(45deg)translateX(-30%);
    }


    @media(min-width:768px){
         width:15%;
         margin-right: 5%;
         margin-top: 0;
         padding: 20px 0;
    }
`;

export const DropDownMenu = styled.ul`
    
    position:absolute;
    top:110%;
    left:0;    
    width:100%;
    margin:0;
    padding:0;

    display:${({ showMenu }) => showMenu? 'flex':'none'};
    background: ${({ theme }) => theme.elements};

    flex-direction:column;
    list-style: none;
    border-radius: 10px;

    li{
        width:80%;
        margin: 0 auto;
        padding: 5px 0;

    }

    li:hover{
        font-weight: 600;
    }
`