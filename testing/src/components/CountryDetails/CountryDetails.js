
import {Link} from 'react-router-dom'

import {DetailsWrapper} from './CountryDetailsElements'
const CountryDetails = ({country,theme}) => {


   
    
    return (
        <>
        <DetailsWrapper theme ={theme}>
            
            <div className ="btnWrapper">

                <Link to = '/' style={{ textDecoration: 'none'}} className = "link">
                <button theme ={theme}>
                    <i className="fas fa-arrow-left"></i>Back
                </button>
            
                </Link>
            </div>

            


            

                {country.map( (c)=>{

                    const{numericCode,flag,name,nativeName,population,region,subregion,capital,topLevelDomain,currencies,languages, borders} = c
                    return(
                    <>
                        <div className = 'infoWrapper' key = {numericCode}>
                            <div className = 'flagContainer'>

                                <img src ={flag} alt='national flag'/>
                        
                            </div>


                            <div className = 'info'>


                                <h2>{name}</h2>
                                <div className ='infoGrid'>
                                    <p className = "listP"><span className ='subheading'>Native Name:</span> {nativeName}</p>
                                    <p className = "listP"><span className ='subheading'>Top Level Domain:</span>{topLevelDomain}</p>
                                    <p className = "listP"><span className ='subheading'>Population:</span>{population}</p>
                                    <p className = "listP"><span className ='subheading'>Currencies:</span>
                                    
                                    
                                    {currencies.map((curr) =>{
                                        const { name} = curr
                                        return(
                                        <>
                                        <span className ="currency">{name},</span>
                                        </>
                                        )
                                    })}
                                    
                                    
                                    </p>
                                    <p className = "listP"><span className ='subheading'>Region:</span>{region}</p>

                                    <p className = "listP"><span className ='subheading'>Languages:</span>
                                    {languages.map((lang) =>{
                                        const { name} = lang
                                        return(
                                            <>
                                            <span className ="language">{name},</span>
                                            </>
                                        )
                                    })}
                                    
                                    
                                    </p>
                                    <p className = "listP"><span className ='subheading'>Sub Region:</span>{subregion}</p>
                                    <p className = "listP"><span className ='subheading'>Capital:</span>{capital}</p>
                                    
                                    


                                    {/* <p className = "listP"><span>Languages:</span>{languages}</p> */}
                                </div>
                                        
                                <div className = 'borderCountries'>

                                    
                                    <span className ='subheading'>Border Countries: </span>
                                    <div className = 'borderList'>
                                    {
                                        borders ? borders.map((border)=>{
                                            return(
                                                <>
                                                <div className ='border' theme ={theme}>{border}</div>
                                                </>
                                            )
                                            
                                        }) : 'None'
                                    }
                                    </div>
                                </div>

                            </div>
                        </div>
                    </>
                    )})}
                    

              
                

                
        </DetailsWrapper>

        </>
    )
}

export default CountryDetails
