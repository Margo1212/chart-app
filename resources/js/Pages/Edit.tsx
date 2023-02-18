import { Button } from '../Components/Button';
import { router } from '@inertiajs/react'
import React, { useEffect, useState } from "react";
import {Channel} from '../models/channel'


const Edit = (channel: Channel) => {
    const [name, setName] = useState<string>("");
    const [amount, setAmount] = useState<number>(0);

    useEffect(() => {
        setName(channel.name);
        setAmount(channel.amount);
    }, []);

    const updateChannel = (e) => {
        e.preventDefault();
        router.post(`/update/${channel.id}`, {name, amount})
    }

    return (
        <><h2>Edit user</h2>
        <form onSubmit={updateChannel}>
        <label>
            name<input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="enter name" />
        </label>
        <label>
            amount<input type="number" value={amount} onChange={e => setAmount(e.target.value)} />
        </label>
        <Button size="sm">Save</Button>
        </form>
        </>
    )
}

export default Edit;