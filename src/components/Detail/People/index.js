import React, { useEffect, useState } from 'react';

export const People = () => {

    const [people, setPeople] = useState([]);


    useEffect(() => {
        fetch (`https://ghibliapi.herokuapp.com/people/`)
        .then((res) => res.json())
        .then((res) => {
            setPeople(res);
            console.log(res)
        });
    }, [])

//     // TESTE DEINHA
//     let arrayPeople = [];

//     const peoples = movies.people && movies.people.map((item) => {
//         return [ item, ...arrayPeople]
//     })

//     const detalhes = peoples && peoples.map((item) => {
//         return console.log(item, "FERNANDINHA")
//     }) 

//     const fetchPeople = detalhes && detalhes.map((item) => {
//         fetch (item)
//         .then((res) => (res.json()))
//         return console.log(item, "ACERTA LOGO" )   
//     })


    return(
        <div>
            <h1>{people.length}</h1>

        {people.map(item => (
            <ul key={item.id}>
               <li> {item.name}</li>  
               <li>{item.films}</li>          
            </ul> 
        ))}

            

        </div>
    )
            }





