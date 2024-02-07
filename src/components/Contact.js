import React from 'react'

export const Contact = () => {

  const correo ="alonsoantgomez@gmail.com"

  return (
    /**<form className='contactMe'>
    <div className="formGroup">
      <label htmlFor="name">Nombre y apellidos:</label>
      <input type="text" id="name" name="name" />
    </div>
    <div className="formGroup">
      <label htmlFor="email">Email:</label>
      <input type="email" id="email" name="email" />
    </div>
    <div className="formGroup">
      <label htmlFor="phone">Número de teléfono:</label>
      <input type="tel" id="phone" name="phone" />
    </div>
    <div className="formGroup">
    <div className="formGroup">
          <label htmlFor="message">Mensaje:</label>
          <textarea id="message" name="message" rows="4" placeholder='Motivo de contacto'></textarea>
        </div>
    </div>
    <input type="submit" value="Enviar" className="submitButton" />
    </form>
    */
    <div>
    <h2>Tienes alguna duda?, Contactame mediante los siguientes enlaces</h2>
    <div className='contactLogo'>
      <div className ="email">
      <a href={`mailto:${correo}`}>
        <img className ="icon" src='/images/email.png' alt='Correo electrónico' />
      </a>
      <span>alonsoantgomez@gmail.com</span>
      </div>
      <div className ="git">
      <a href='https://github.com/uo282834'>
        <img className ="icon" src='/images/github.png' alt='Perfil de GitHub' />
      </a>
      <span>@uo282834</span>
      </div>
      <div className ="linkedin">
      <a href='https://www.linkedin.com/in/alonsoantu%C3%B1agomez/'>
        <img className ="icon" src='/images/linkedin.png' alt='Número de teléfono' />
      </a>
      <span>alonsoantuñagomez</span>
      </div>
    </div>
  </div>
  )
}
