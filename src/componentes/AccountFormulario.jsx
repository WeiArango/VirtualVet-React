import React, { useState } from "react";
import "../hojas-de-estilo/AccountFormulario.css";
import { MdEmail } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import { PiLockKeyFill } from "react-icons/pi";
import { IoMdEyeOff } from "react-icons/io";
import { IoPhonePortrait } from "react-icons/io5";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoDocumentText } from "react-icons/io5";

function LoginFormulario() {
  
return (
  <form className="account-formulario">

    <div>
      <h1>Datos Básicos</h1>
    </div>

    <div className='input-container'>
      <MdEmail className='email-icono' />
      <input                   
        className="account-email"
        type="email"
        placeholder="Correo Electrónico"
        name="email"        
      />   
    </div>

    <div className='input-container'>
      <FaUserCircle className='name-icono' />
      <input                   
        className="account-name"
        type="text"
        placeholder="Nombre Y Apellido"
        name="name"        
      />   
    </div>

    <div className='input-container'>
      <IoPhonePortrait className='phone-icono' />
      <input                   
        className="account-phone"
        type="tel"
        placeholder="Celular"
        name="phone"        
      /> 
    </div>

    <div className='input-container'>
      <FaMapMarkerAlt className='adress-icono' />
      <input                   
        className="account-adress"
        type="text"
        placeholder="Dirección"
        name="adress"        
      /> 
    </div>

    <div className='input-container'>
      <PiLockKeyFill className='password-icono' />
      <input         
        className="account-password"
        type="password"
        placeholder="Contraseña"
        name="password"       
      />   
      <IoMdEyeOff className='show-password-icono' />
    </div>

    <div className='input-container'>
      <IoDocumentText className='certificate-icono' />
      <input         
        className="account-certificate"
        type="file"        
        name="certificate"       
      />         
    </div>

    <div className="boton-container">
        <button                                
            className="create-boton"
            >  
            Crear Cuenta              
        </button>

        <button                                
            className="reset-boton"
            >  
            Reset              
        </button>
    </div>

    <div>
      <p>Señor usuario en caso de registrarse como Médico Veterinario, Auxiliar Veterinario y/ o Estilista de Mascotas, por favor adjunte copia <br /> de su tarjeta profesional o diploma que lo acredite legalmente para ejercer su profesión en formato pdf o jpg</p>
    </div>

  </form>
  );
};

export default LoginFormulario;
