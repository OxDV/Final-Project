import React from 'react'
import "../styles/pages/contacts.scss"
import MapComponent from '../components/Map'

export default function Contacts() {
  return (
    <div className='contacts-container'>
      <div className='contacts-content-field'>
        <h1 className='contacts-tittel'>Contacts</h1>
        <div className='contacts-info-container'>
          <div className='social-links-container'>
            <div className='telegram-info'>
            <img src="./images/telegram-icon.png" alt="" />
            <div>
              <p>Telegram</p>
              <h3>e<span>X</span>change</h3>
            </div>
            </div>
            <div className='email-info'>
            <img src="./images/email-icon.png" alt="" />
            <div className='test'>
              <p>E-mail</p>
              <h3>ask@exchange.com</h3>
            </div>
            </div>
            <div className='address-info'>
            <img src="./images/map-icon.png" alt="" />
            <div >
              <p>Address</p>
              <h3 className='address-company'>Marienplatz 15, Munich 80333, Germany</h3>
            </div>
            </div>
            
          </div>
          <div className='map-container'>
            <MapComponent/>
          </div>
        </div>
      </div>
    </div>
  )
}
