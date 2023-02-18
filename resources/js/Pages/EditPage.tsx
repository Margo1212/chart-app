import { Button } from '../Components/Button';
import { router } from '@inertiajs/react';
import React, { FormEventHandler, useEffect, useState } from "react";
import {Channel} from '../models/channel';
import { Input } from '../Components/Input';

type ChannelProps = {
    channel : Channel;
}

const EditPage = ({channel} : ChannelProps ) => {
    const [name, setName] = useState<string>("");
    const [amount, setAmount] = useState<number>();
    const [color, setColor] = useState<string>("#000");

    console.log(channel)

    useEffect(() => {
        setName(channel.name);
        setAmount(channel.amount);
        setColor(channel.color)
    }, []);

    console.log(channel.name)

    const updateChannel : FormEventHandler<HTMLFormElement> = (event ) => {
        event.preventDefault();
        router.post(`/update/${channel.id}`, {name, amount, color})
    }

    const handleNameChange = (value: string) => {
        setName(value);
    };

    const handleAmountChange = (value: number) => {
        setAmount(value);
    };

    const handleColorChange = (value: string) => {
        setColor(value);
    };


    return (
        <><h2>Edit user</h2>
        <form onSubmit={updateChannel}>
            <Input label="Name" value={name} type="text" onChange={handleNameChange} />
            <Input label="Amount" value={amount} type="number" onChange={handleAmountChange} />
            <Input label="Color" value={color} type="color" onChange={handleColorChange} />
            <Button size="sm">Save</Button>
        </form>
        </>
    )
}

export default EditPage;
