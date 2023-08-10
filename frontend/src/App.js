import { useContext } from 'react';
import './App.css';
import Loading from './components/alert/Loading';
import Routers from './components/routes/RoutersPage';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import contextStore from './context/ContextFile';
AOS.init();

const App=()=> {
  const {isLoading} = useContext(contextStore)
  return (
    <>  
    {isLoading && <Loading/>}

      <Routers/>
    </>
  );
}

export default App;
