import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Contact from './components/Contact';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";



function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" render={()=>{
            return (
              <Main/>
            )
          }}>
          </Route>
  

          <Route exact path="/contact" >
             <Contact/>
          </Route>
         
          
        </Switch>
       
        <Footer />
      </Router>

    </div>
  );
}

export default App;
