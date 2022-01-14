import {useState,useEffect} from 'react'
import {useParams} from 'react-router-dom'

import CountryDetails from '../components/CountryDetails/CountryDetails'
const Details = ({theme}) => {

const {name} = useParams()


    const[country, setCountry] = useState([])

    const fetchSingleCountry = async() =>{
        const res = await fetch(`https://restcountries.com/v2/name/${name}`)
        const data = await res.json()
        await setCountry(data)
    }

    useEffect(() =>{
        fetchSingleCountry()
     }, [])

     
    

   
    return (
        <>
        
            
            <CountryDetails country = {country} theme ={theme}/>
            
            
        

        
        </>
    )
}

export default Details
