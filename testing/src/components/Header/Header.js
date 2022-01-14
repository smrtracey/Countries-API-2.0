import {Wrapper} from './HeaderElements'

const Header = ({toggleMode,theme}) => {

    return (
        <>
            <Wrapper theme = {theme}>

                <h1>Where in the World?</h1>

                <div className = "toggle" onClick = {toggleMode} >
                   
                     <i className="fas fa-moon"></i> <p>Dark Mode</p>
                    
                </div>

            </Wrapper>
        </>
    )
}

export default Header
