// export default function Todo ({task, isDone}) {
//     return( 
//             <li>Task {task}</li>    
//     )
// }



// export default function Todo ({task, isDone}) {
//     if (isDone === true) {
//         return (
//             <li>Finidh: {task} </li>
//         ) 
//     } else {
//         return (
//             <li>Work On: {task} </li>
//         )    
//     }
// }


// export default function Todo ({task, isDone}) {
//     if (isDone) {
//         return  <li>finish {task}</li>          
//     }
//     return  <li>Task {task}</li>  
// }


// export default function Todo ({task, isDone}) {
//     return( 
//         <li> {isDone ? " Finidhid" : " work On"} : {task}</li>    
//     )
// }

// export default function Todo ({task, isDone}) {
//     return( 
//             <li>Task {isDone || " do it"} {task} </li>    
//     )
// }


// export default function Todo ({task, isDone}) {
//     let listItems; 
//     if (isDone) {
//         listItems = <li>Task All {task}</li>  
//     }
//     else {
//         listItems = <li>Task {task}</li> 
//     }
//     return listItems;
// }