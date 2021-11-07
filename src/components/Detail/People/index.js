import React, { useEffect, useState } from 'react';

export const People = () => {
    const [people, setPeople] = useState([]);

    useEffect(() => {
        fetch(`https://ghibliapi.herokuapp.com/people/`)
        .then((res) => res.json())
        .then((res) => {
            setPeople(res);
            console.log("people", res)
        });
    }, [])

    if (!people) {
        return null;
    }

    return(
        <div>
            <h1>Teste</h1>
               {people.map((item) =>(
            <ul>
                   <li>{item.name}</li>
                   <li>{item.films}</li>

            </ul>
               ))}
        </div>
    )
}