import React, { useState } from 'react';

const AddTodo = ({addTodo}) => {
    const[title,seTitle]=useState("");
    const[desc,setDesc]=useState("");

    const submit=(e)=> {
        e.preventDefault();
        if(!title || !desc) {
            alert("Please fill in all fields");

    }
    else{
    addTodo(title,desc);
    seTitle("");
    setDesc("");
    
    }
   

}
    return (
        <div className="container my-3">
            <h3>Add a TODO</h3>

            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Todo Title</label>
                    <input type="text" value={title} onChange={(e)=>seTitle(e.target.value)} className="form-control" id="title" aria-describedby="emailHelp"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">todo description</label>
                    <input type="text" value={desc} onChange={(e)=>setDesc(e.target.value)} className="form-control" id="desc"/>
                </div>
                <button type="submit" className="btn btn-sm btn-success">ADD TODO</button>
            </form>

        </div>
    )
}


export default AddTodo
