import {Link} from 'react-router-dom'
import{
    MainWrapper,
}from './MainElements'

const Main = ({countries,filtered, theme}) => {

    return (
        <>
        
        <MainWrapper theme={theme}>

            <div className = 'countryGrid'>
        
                    {filtered.length > 0 ?
                        filtered.map((country) =>{
                            const {numericCode, flag, name, population, region,capital} = country

                            return<>
                            <Link to={`/details/${name}`} style={{color:'inherit', textDecoration: 'none'}}>
                            <article key ={numericCode} >
                                <div className='flagWrapper'>
                                    <img src = {flag} alt ='national Flag'/>
                                </div>

                                <div className ="articleContent">
                                    <h2>{name}</h2>

                                    
                                        <p><span>Population: </span> {population}</p>
                                        <p><span>Region: </span> {region}</p>
                                        <p><span>Capital: </span> {capital}</p>
                                    

                                </div>

                            </article>
                            </Link>
                            </>
                        })


                        :

                        countries.map((country) =>{
                            const {numericCode, flag, name, population, region,capital} = country

                            return<>
                            <Link to={`/details/${name}`} style={{color:'inherit', textDecoration: 'none'}}>
                            <article key ={numericCode} >
                                <div className='flagWrapper'>
                                    <img src = {flag} alt ='national Flag'/>
                                </div>

                                <div className ="articleContent">
                                    <h2>{name}</h2>

                                    
                                        <p><span>Population: </span> {population}</p>
                                        <p><span>Region: </span> {region}</p>
                                        <p><span>Capital: </span> {capital}</p>
                                    

                                </div>

                            </article>
                            </Link>
                            </>
                    })}

            </div>

        </MainWrapper>

        </>
    )
}

export default Main
