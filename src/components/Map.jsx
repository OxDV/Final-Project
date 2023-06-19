import React from 'react';
import "../styles/components/mapComponent.scss"
const MapComponent = () => {

  return (
    <div className='google-map'>
     <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10650.327508553266!2d11.569008653800724!3d48.137586268813465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a84e248d37632d%3A0xdead51b35f0e0bb3!2z0JzQsNGA0LjQtdC90L_Qu9Cw0YY!5e0!3m2!1sru!2sde!4v1687195047233!5m2!1sru!2sde"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
  </div>
  );
};

export default MapComponent;
