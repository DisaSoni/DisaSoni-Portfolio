import React, { useEffect, useState } from 'react'
import certifications from './data/certifications.json';

const Certificates = () => {

    const [certificationsList, setCertificationsList] = useState();

    useEffect(() => {
        let certificationsArr = certifications.filter((item) => item?.user_id === 1)
        setCertificationsList(certificationsArr);
    }, []);
    

  return (
    <section id="certificates">
                <p className="topic"></p>
                <h2 className="my-3">Certificates</h2>
                <div className="row ">
                    {certificationsList && certificationsList.map((item, index) => {
                        return(
                            <div key={index} className="col-md-3">
                                <div className="card">
                                    <div className="card-body text-center p-2">
                                        <h5 className="card-title mt-3">{item?.title}</h5>
                                        {item?.certificate_uid && <p className="card-text">{item?.certificate_uid}</p>}
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                    
                </div>
            </section>
  )
}

export default Certificates