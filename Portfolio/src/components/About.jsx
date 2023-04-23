import React, { useEffect, useState } from 'react'
import skills from './data/skills.json'

const About = () => {
    
    const [skillsList, setSkillsList] = useState();

    useEffect(() => {
        let skillsArr = skills.filter((item) => item?.user_id === 1)
        setSkillsList(skillsArr);
    }, []);
    
  return (
    <section id="about">
    <div className="row">
        <div className="col-md-12">
            <div className="card">
                <div className="row">
                    <div className="col-lg-4 col-md-6 text-center">
                        <img src="./avatar.jpeg" alt="avatar" className="avatar" />
                    </div>
                    <div className="col-lg-6 col-md-6 align-self-center">
                        <p className="topic">ABOUT ME</p>
                        <h2 className="my-3">Creative and efficient developer</h2>
                        <p className="desc">I am a web developer and I have overall 3 years of experience in the IT Field, I created responsive web design using Html, CSS, and JavaScript. I have advanced knowledge in Java, C++, C#, C, jQuery, MERN technology, PHP, Laravel, .NET Web API, Software testing, agile methodology, Framework, API, and My technical skill set combined with my experience working with developers and pushes me to build applications. I am a continuous learner and I'm never afraid to take on new challenges. As a developer, I bring new ideas, knowledge sharing, a collaborative mindset, and a drive to keep the team moving in the right direction. Coding is my passion and I enjoy making beautiful, functional, and accessible websites. I am ready to take on this new adventure!</p>

{skillsList && skillsList.map((item, index) => {
    return(
        <span key={index} className="badge bg-light text-dark">{item?.name}</span>
    )
})}
                        <span className="badge bg-light text-dark">Light</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}

export default About