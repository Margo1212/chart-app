import React from "react";
import { Link } from '@inertiajs/react'

const Channels = ({channels}) => {
    return (
        <><Link href="/create">Create user</Link><table>
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
                        <td><Link href="/"></Link></td>
                    </tr>
                ))}

            </tbody>
        </table></>
    )
}

export default Channels;