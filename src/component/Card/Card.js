import React from 'react';

const Card = (props) => {
    const { card } = props;

    // const total = card.reduce((priv, curr) => priv + parseInt(curr.salary), 0)

    let total = 0;
    // let names;
    for (const obj of card) {
        total = total + parseInt(obj.salary);
        // names = obj.name
    }

    return (
        <div>
            <h4 className="mt-2">Programmers: {card.length}</h4>
            <h4 className="mb-4">Total Salary: {total}</h4>
            {
                card.map(obj => <h6><span className="fw-bold">Hired</span> {obj.name}</h6>)
            }
        </div>
    );
};

export default Card;