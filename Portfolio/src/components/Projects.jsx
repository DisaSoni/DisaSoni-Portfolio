import React, { useEffect, useState } from 'react'
import project from './data/projects.json';

const Projects = () => {    
    const [projectList, setProjectList] = useState();

    useEffect(() => {
        let projectArr = project.filter((item) => item?.user_id === 1)
        setProjectList(projectArr);
    }, []);

  return (
    <section id="projects">
                <p className="topic"></p>
                <h2 className="my-3">Projects</h2>
                {projectList && projectList.map((item, index) => {
                    return(
                    <>
                    {index % 2 === 1 ? 
                        <div key={index} className="row">
                        <div className="col-md-5 align-self-center">
                        {item?.image && <img src={item?.image} alt="avatar" className="avatar img-fluid" />}
                        </div>
                        <div className="col-md-7 align-self-center">
                        <h2 className="my-3">{item?.title}</h2>
                        <p className="desc">{item?.content}</p>
                        <button className="btn btn-primary" onClick={() => window.open(item?.url, "_blank")}>View</button>
                        </div>
                        </div>  
                        :
                        <div key={index} className="row">
                        <div className="col-md-7 align-self-center">
                                                <h2 className="my-3">{item?.title}</h2>
                                                <p className="desc">{item?.content}</p>
                                                    <button className="btn btn-primary" onClick={() => window.open(item?.url, "_blank")}>View</button>
                                            </div>
                        <div className="col-md-5 align-self-center order-md-0 order-first">
                        {item?.image && <img src={item?.image} alt="avatar" className="avatar img-fluid" />}
                        </div>
                        </div>

                    }
                    
                    </>
                    )})}
            </section>
   

  )
}

export default Projects