import React from 'react';
import CertificateCard from './CertificateCard';

import c1 from "./c1.jpeg";
import c2 from "./c2.jpeg";
import c3 from "./c3.jpeg";
import c4 from "./c4.jpeg";

const Certificate = (props) => {
  return (
    <div>
    <h1 classname="certificatehead">"Achievement Showcase"</h1>
    <div className='flex gap2'>
    
      <CertificateCard name="Meta Participation Certificate" img={c1} dlink="URL_1" />
      <CertificateCard name="Udemy Certificate" img={c2} dlink="URL_2" />
      <CertificateCard name="Great Learning Certificate" img={c3} dlink="URL_3" />
      <CertificateCard name="GDG certificate" img={c4} dlink="URL_4" />
    </div>
    </div>
  );
};

export default Certificate