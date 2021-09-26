import React from 'react';
import './Programmer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'

const Programmer = (props) => {
    // console.log(props)
    const { img, name, email, skill, country, salary } = props.programmer;
    const icon = <FontAwesomeIcon icon={faPlusCircle} />
    return (
        <div className="col-md-4 g-3 programmers">
            <div className="card h-100 programmer">
                <img src={img} className="card-img-top img-fluid p-2" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Name: {name}</h5>
                    <h6 className="card-text my-2">Email: {email}</h6>
                    <h6 className="card-text my-2">Skill: {skill}</h6>
                    <h6 className="card-text my-2">Country: {country}</h6>
                    <h6 className="card-text my-2">Salary: {salary}</h6>
                </div>
                <div className="p-3">
                    <button
                        onClick={() => props.handleButton(props.programmer)}
                        type="button" className="btn btn-primary">{icon} Hire A Programmer</button>

                </div>
            </div>
        </div>
    );
};

export default Programmer;