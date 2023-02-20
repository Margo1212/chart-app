import { Button } from '../Components/Button';
import { router, usePage } from '@inertiajs/react';
import React, { FormEventHandler, useEffect, useState } from "react";
import {Channel} from '../models/channel';
import { Input } from '../Components/Input';

type ChannelProps = {
    channel : Channel;
}

const EditPage = ({channel} : ChannelProps ) => {
    const { errors } = usePage().props

    const [name, setName] = useState<string>("");
    const [amount, setAmount] = useState<number>(0);
    const [color, setColor] = useState<string>("");

    useEffect(() => {
        setName(channel.name);
        setAmount(channel.amount);
        setColor(channel.color)
    }, []);

    console.log(channel.name)

    const updateChannel : FormEventHandler<HTMLFormElement> = (event ) => {
        event.preventDefault();
        router.put(`/update/${channel.id}`, {name, amount, color})
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
        <div className="container flex justify-center">
            <div className="w-1/2 h-full m-2 flex flex-col p-12 overflow-hidden rounded-lg border border-gray-200 shadow-md">
        <h2 className="mb-8 self-center font-medium leading-tight text-4xl mt-0 ">Edit channel</h2>
        <form className="flex flex-col justify-around" onSubmit={updateChannel}>
            <Input label="Name" value={name} type="text" onChange={handleNameChange} />
            {errors.name && <div className="text-red-500 text-xs">{errors.name}</div>}
            <Input label="Amount" value={amount} type="number" onChange={handleAmountChange} />
            {errors.amount && <div className="text-red-500 text-xs">{errors.amount}</div>}
            <Input label="Color" value={color} type="color" onChange={handleColorChange} />
            {errors.color && <div className="text-red-500 text-xs">{errors.color}</div>}
            <Button size="sm">Save</Button>
        </form>
        </div>
        </div>
    )
}

export default EditPage;
