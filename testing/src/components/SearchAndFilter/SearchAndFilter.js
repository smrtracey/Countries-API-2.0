import {useState} from 'react'

import {Container,
SearchWrapper,
FilterWrapper,
DropDownMenu} from './SearchAndFilterElements'

const SearchAndFilter = ( {theme,changeRegion,currentRegion, searchCountries}) => {

const [showMenu, setMenu] = useState(false)

const toggleMenu =()=>{
    setMenu(!showMenu);
}

const searchHandle = () =>{
    const searchBar = document.getElementById('searchBar')
    searchBar.addEventListener('input', (e) =>{
    const value = e.target.value
    searchCountries(value)
    })
}

   
    return (
        <Container theme = {theme} changeRegion ={changeRegion}>
            <SearchWrapper theme = {theme}>
             
            <i className="fas fa-search"></i> 
            <input placeholder='Search for a Country' id ='searchBar' onChange = {searchHandle}/>

            </SearchWrapper>

            <FilterWrapper theme = {theme} onClick ={toggleMenu}>
                <p>{currentRegion === '' ?  'Filter by region': currentRegion}</p>
                <div className='downArrow' theme ={theme}/>
                <DropDownMenu showMenu = {showMenu ? true: false} theme = {theme}>
                    <li onClick={()=>changeRegion('Africa')}>Africa</li>
                    <li onClick={()=>changeRegion('Americas')}>Americas</li>
                    <li onClick={()=>changeRegion('Asia')}>Asia</li>
                    <li onClick={()=>changeRegion('Europe')}>Europe</li>
                    <li onClick={()=>changeRegion('Oceania')}>Oceania</li>
                </DropDownMenu>
            </FilterWrapper>    
        </Container>
    )
}

export default SearchAndFilter
