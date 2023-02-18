import React from "react";
import { Link } from '@inertiajs/react';
import Chart from "../Components/Chart";
import { Channel } from "../models/channel";

type ChannelsProps =  {
    channels: Channel[];
  }


const MainPage = ({channels}: ChannelsProps) => {
    
    console.log(channels)
    return (
        <>
        <div className="p-3 border-2"><Link href="/create">Create user</Link></div>
        
        <table>
            <thead>
                <tr>
                    <th>Nazwa</th>
                    <th>Ilosc</th>
                </tr>
            </thead>
            <tbody>
                {channels.map((channel, index) => (
                    <tr key={index}>
                        <td>{channel.name}</td>
                        <td>{channel.amount}</td>
                        <td><Link href={`/edit/${channel.id}`}>Edit</Link></td>
                        <td><Link href={`/delete/${channel.id}`}>Delete</Link></td>
                    </tr>
                ))}

            </tbody>
        </table>
        <Chart /></>
    )
}

export default MainPage;