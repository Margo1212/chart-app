import React, { useState } from "react";
import { Link } from '@inertiajs/react'

const Create = () => {
    const [name, setName] = useState('');
    const [amount, setAmount] = useState('');

    const saveData = (e) => {
        e.preventDefault();
        Inertia.post('/save', {name, amount});
    }

    return (
        <><h1>Create user</h1>
        <form onSubmit={saveData}> 
            <label>
            Name
                <input type="text" onChange={e=>setName(e.target.value)} value={name} placeholder="Enter name" />
            </label>
            <label>
            Amount
                <input value={amount} onChange={e=>setAmount(e.target.value)} type="number" />
            </label>
            <button>Save</button>
        </form>
        </>
    )
}

export default Create;