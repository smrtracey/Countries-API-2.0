import {useState} from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'

import Header from './components/Header/Header'
import Home from './pages/Home'
import Details from './pages/Details'

const  App =() =>{


  const [mode, setMode] = useState(true)
  const [theme,setTheme] = useState([])

  const themes = [{
    text:'hsl(0, 0%, 100%)',
    elements:'hsl(209, 23%, 22%)',
    input: 'hsl(0, 0%, 100%)',
    background: 'hsl(207, 26%, 17%)'
  
  },
  {
    text:'hsl(200, 15%, 8%)',
    elements:'hsl(0, 0%, 100%)',
    input: ' hsl(0, 0%, 52%)',
    background: 'hsl(0, 0%, 98%)'
  }]

  const toggleMode = () =>{
    setMode(!mode)
    mode? setTheme(themes[0]) : setTheme(themes[1])
  }

  return (
    <>
      
      <Router>
      <Header toggleMode = {toggleMode} theme = {theme}/>

        <Route exact path ="/">
          <Home theme = {theme}/>
        </Route>

        <Route path ="/details/:name">
          <Details theme = {theme}/>
        </Route>
        
    
      </Router>

    
    </>
    
  );
}

export default App;
