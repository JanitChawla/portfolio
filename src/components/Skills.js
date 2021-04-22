import React from "react";
import './Skills.scss'

const Skills = () => {
    return (
        <React.Fragment>
        <div className="skills row">
            <div className="col-lg-5">
                <ul>
                    <li className="html">HTML</li>
                    <li className="css">CSS</li>
                    <li className="js">JavaScript</li>
                    <li className="react">React</li>
                    <li className="react">Node</li>
                </ul>
            </div>
            <div className="col-lg-5">
                <ul>
                    <li className="html">C/C++</li>
                    <li className="html">Python</li>
                    <li className="css">Bootstrap</li>
                    <li className="js">MongoDb</li>
                    <li className="react">Git Bash</li>
                </ul>
            </div>
        </div>
        </React.Fragment>
    );
};

export default Skills;