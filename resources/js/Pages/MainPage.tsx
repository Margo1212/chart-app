import React from "react";
import { Link } from '@inertiajs/react';
import Chart from "../Components/Chart";
import { Channel } from "../models/channel";
import { FaStar, FaPen, FaTrashAlt } from "react-icons/fa";

type ChannelsProps =  {
    channels: Channel[];
}

const MainPage = ({channels}: ChannelsProps) => {
    return (
        <div className="container flex flex-row">
        <div className="self-start w-1/2 overflow-hidden rounded-lg border border-gray-200 shadow-md m-5">
        <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
            <thead className="bg-gray-50">
                <tr>
                    <th scope="col" className="px-6 py-4 font-medium text-gray-900v">Name</th>
                    <th scope="col" className="px-6 py-4 font-medium text-gray-900v">Amount</th>
                    <th scope="col" className="px-6 py-4 font-medium text-gray-900v">Color</th>
                    <th scope="col" className="px-6 py-4 font-medium text-gray-900v" />
                </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 border-t border-gray-100">
                {channels.map((channel, index) => (
                    <tr className="hover:bg-gray-50" key={index}>
                        <td className="px-6 py-4">{channel.name}</td>
                        <td className="px-6 py-4">{channel.amount}</td>
                        <td className="px-6 py-4"><FaStar color={channel.color} /></td>
                        <td className="px-6 py-5 flex justify-around">
                            <Link href={`/edit/${channel.id}`}><FaPen /></Link>
                            <Link href={`/delete/${channel.id}`}><FaTrashAlt /></Link>
                        </td>
                    </tr>
                ))}

            </tbody>
        </table>
        <div className="flex items-center justify-center m-5 text-sm w-40 h-10 px-4 py-2 font-medium leading-6 text-white whitespace-no-wrap bg-indigo-400 border border-gray-200 rounded-md shadow-md hover:bg-indigo-500 focus:outline-none focus:shadow-none"><Link href="/create">Add new channel</Link></div>
        </div>
        <div className="w-1/2">
        <Chart channels={channels} />
        </div>
        </div>
    )
}

export default MainPage;
