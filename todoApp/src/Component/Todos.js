import React from 'react';

import {
    ListGroup,
    ListGroupItem
} from 'reactstrap'

//import {FaCheckDouble} from 'react-icons/fa'
import {MdCancel} from 'react-icons/md'


const Todos=({todos,markComplete})=>{
    return(
        <ListGroup className="">
            {todos.map(
                todo=>(
                    <ListGroupItem key= {todo.id} className='text-wrap'>
                       
                       {todo.todoString}
                       <span className="float-end" onClick={()=>(markComplete(todo.id))}> <MdCancel/> </span>
                        
                    </ListGroupItem>
                )
            )}

        </ListGroup>
    )
    // return(
    //     <ListGroup className="">
    //         {todos.map(
    //             todo=>(
    //                 <ListGroupItem key= {todo.id} >
    //                    <div className='text-wrap'>
    //                    {todo.todoString}
    //                    <span className="float-end" onClick={()=>(markComplete(todo.id))}> <MdCancel/> </span>
    //                     </div> 
                        
    //                 </ListGroupItem>
    //             )
    //         )}

    //     </ListGroup>
    // )
}

export default Todos