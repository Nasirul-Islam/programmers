import React from 'react';
import './Programmer.css'

const Programmer = (props) => {
    // console.log(props)
    const { img, name, email, skill, country, salary } = props.programmer;
    return (
        <div className="col-md-4 g-3 programmers">
            <div className="card h-100 programmer">
                <img src={img} className="card-img-top img-fluid p-2" alt="..." />
                <div class="card-body">
                    <h5 className="card-title">Name: {name}</h5>
                    <h6 className="card-text m-0">Email: {email}</h6>
                    <h6 className="card-text m-0">Skill: {skill}</h6>
                    <h6 className="card-text m-0">Country: {country}</h6>
                    <h6 className="card-text m-0">Salary: {salary}</h6>
                </div>
                <div className="p-3">
                    <button
                        onClick={() => props.handleButton(props.programmer)}
                        type="button" className="btn btn-primary">Hire Now</button>
                </div>
            </div>
        </div>
    );
};

export default Programmer;