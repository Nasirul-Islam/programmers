import React from 'react';

const Card = (props) => {
    const { card } = props;
    // Using reduce
    const total = card.reduce((priv, curr) => priv + parseInt(curr.salary), 0)
    return (
        <div>
            <h4 className="mt-2 fw-bold text-success">Programmers: {card.length}</h4>
            <h4 className="mb-4 fw-bold text-success">Total Salary: {total}</h4>
            {
                card.map(obj => <h6 key={obj.id}><span className="fw-bold">Hired</span> {obj.name}</h6>)
            }
        </div>
    );
};

export default Card;