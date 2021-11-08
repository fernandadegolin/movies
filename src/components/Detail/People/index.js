// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router';

// export const People = () => {
//     const [people, setPeople] = useState([]);
//     const { id } = useParams();

//     useEffect(() => {
//         fetch (`https://ghibliapi.herokuapp.com/people?film=${id}`)
//         .then((res) => res.json())
//         .then((res) => {
//             setPeople(res);
//             console.log("people", res)
//         });
//     }, [])

//     if (!people) {
//         return null;
//     }

//     return(
//         <div>
//             <h1>Teste</h1>
            
//             {people.map((item) =>(

//                 <ul>
//                    <li>{item.name}</li>
//                 </ul>
//             ))}

         
                         
//         </div>
//     )
// }