import './App.css';
import AccountFormulario from './componentes/AccountFormulario';
import Logo from './imagenes/Logo.png';

function App( ) {     

  return (
    <div className="CreateAccount">
      <div className='logo-contenedor'>
        <img
          src={Logo}
          className='logo'/>
      </div>

      <div className="account-contenedor">
        <AccountFormulario/>
      </div>    
      
    </div>    
  );
}

export default App;
