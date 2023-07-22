import React from 'react';
import './map.scss';

const Map = () => {
  const mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11398.646451115346!2d77.30345549781539!3d28.479764443585438!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce71647de8197%3A0xe58a736ad59b2397!2sSector%2037%2C%20Faridabad%2C%20Haryana!5e0!3m2!1sen!2sin!4v1689753227032!5m2!1sen!2sin";

  return (
    <div className='map'>
      {/* You can add any comments here */}
      <iframe
        title="Google Map"
        src={mapSrc}
        width="2300"
        height="750"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Map;
