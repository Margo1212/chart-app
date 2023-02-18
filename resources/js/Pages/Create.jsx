import { router } from '@inertiajs/react'
import React, { useState } from "react";


const Create = ({success, error}) => {
    const [name, setName] = useState("");
    const [amount, setAmount] = useState("");

    const saveData = (e) => {
        e.preventDefault();
       router.post('/save', {name, amount})
    }

    return (
        <><h2>Create new user</h2>
        {/* {success ?? 
            <div>{success}</div>
        } */}
        <form onSubmit={saveData}>
        <label>
            name<input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="enter name" />
        </label>
        <label>
            amount<input type="number" value={amount} onChange={e => setAmount(e.target.value)} />
        </label>
        <button>Save</button>
        </form>
        </>
    )
}

export default Create;