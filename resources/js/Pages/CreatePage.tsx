import { Button } from '../Components/Button';
import { router } from '@inertiajs/react'
import React, { FormEventHandler, useState } from "react";
import { Input } from '../Components/Input';


const CreatePage = () => {
    const [name, setName] = useState<string | undefined>("");
    const [amount, setAmount] = useState<number | undefined>(0);
    const [color, setColor] = useState<string | undefined>("#000");

    const saveData :FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault();
        router.post('/save', {name, amount, color})
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
        <>
        <h2>Create new user</h2>
        <form onSubmit={saveData}>
            <Input label="Name" type="text" onChange={handleNameChange} />
            <Input label="Amount" type="number" onChange={handleAmountChange} />
            <Input label="Color" type="color" onChange={handleColorChange} />
            <Button size="sm">Save</Button>
        </form>
        </>
    )
}

export default CreatePage;
