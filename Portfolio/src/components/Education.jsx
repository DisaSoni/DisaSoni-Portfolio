import React, { useEffect, useState } from 'react'
import educations from './data/educations.json'
const Education = () => {

    const [educationList, setEducationList] = useState();

    useEffect(() => {
        let educationArr = educations.filter((item) => item?.user_id === 1)
        setEducationList(educationArr);
    }, []);
    
  return (
    <section id="education">
                <p className="topic"></p>
                <h2 className="my-3">Education</h2>
                <div className="row ">
                    {educationList && educationList.map((item, index) => {
                        return(
                            <div key={index} className={`col-md-6 ${index % 2 === 1 ? 'offset-md-6' : ''}`}>
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">{item?.institution}</h5>
                                        <span>{item?.start_year} - {item?.end_year}</span><br />
                                        <em>{item?.course}</em>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </section>
  )
}

export default Education