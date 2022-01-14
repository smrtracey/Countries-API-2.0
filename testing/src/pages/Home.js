import {useState, useEffect} from 'react'
import SearchAndFilter from '../components/SearchAndFilter/SearchAndFilter'
import Main from '../components/Main/Main'

const Home = ({theme}) => {
    
    const [countries, setCountries] = useState([])
    const [currentRegion, setCurrentRegion]= useState('')
    const [filtered, setFiltered] =useState([])
    const [searchTerm, setSearchTerm] = useState('')
    
    const changeRegion = (region) =>{
        setCurrentRegion(region)
        fetchByRegion( region)
    }

    const fetchAllCountries = async() =>{
        const res = await fetch(`https://restcountries.com/v2/all`)
        const data = await res.json()
        setCountries(data)
    }

    const fetchByRegion = async(region) =>{
        const res = await fetch(`https://restcountries.com/v2/region/${region}`)
        const data = await res.json()
        setCountries(data)
    }


    const searchCountries = async(searchInput) =>{
        setSearchTerm(searchInput)
        if(searchTerm.length> 2)
        {    
            const res = await fetch(`https://restcountries.com/v2/name/${searchInput}`)
            const data = await res.json()
            setFiltered(data)
            
            
        }


    }

    useEffect(() =>{
       fetchAllCountries()
    }, [])


    return (
        <>
            <SearchAndFilter theme = {theme} changeRegion ={changeRegion} searchCountries={searchCountries} currentRegion ={currentRegion} />

            <Main filtered = {filtered} countries ={countries} theme = {theme}/>
        </>
    )
}

export default Home
