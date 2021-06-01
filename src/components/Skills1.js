import React from 'react'
import './Skills.scss'

const skillsBar = [
    {
      name: "HTML5",
      faClass: "fab fa-html5",
    },
    {
      name: "CSS3",
      faClass: "fab fa-css3",
    },
    {
      name: "Javascript",
      faClass: "fab fa-js",
    },
    {
      name: "SASS",
      faClass: "fab fa-sass",
    },
    {
      name: "Node",
      faClass: "fab fa-node",
    },
    {
        name: "React/Redux",
        faClass: "fab fa-react"
    },
    {
      name: "Python",
      faClass: "fab fa-python",
    },
    {
        name: "C/C++",
        faClass: "fab fa-cuttlefish"
    },
    {
      name: "MongoDb",
      faClass: "fas fa-database",
    },
    {
      name: "Git",
      faClass: "fa fa-git"
    }
  ];


const Skills = () => {
    return (    
        <React.Fragment>
            <div id="Skills">
                {/* <div className="skillsheader">MY SKILLSET</div> */}
                <div className="row d-flex justify-content-center skills">
                    {skillsBar.map((x,i) => 
                        <div data-aos="fade-up" key={i} className="skill__square col-3 col-sm-2 my-3 mx-auto" style={{display: 'inline', textAlign: 'center'}}>
                            <i className={`${x.faClass} mx-auto my-auto`}></i>
                            <h6 className="mt-2">{x.name}</h6>
                        </div>
                    )}
                </div> 
            </div>
        </React.Fragment>
    )
}

export default Skills