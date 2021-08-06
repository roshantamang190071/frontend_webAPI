
import './App.css';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Mid from './Mid/Mid'
import {BrowserRouter} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
   <div className = "main">
      <Header/>
      <div className = "container">
          
        <Mid/>
        
      
      </div>
      <Footer/>
   </div>
   </BrowserRouter>
  );
}

export default App;
