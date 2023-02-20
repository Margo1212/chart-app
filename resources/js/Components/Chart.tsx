import { PieChart } from 'react-minimal-pie-chart';
import React from "react";
import { Channel } from '../models/channel';

type ChannelsProps =  {
  channels: Channel[];
}

const Chart = ({channels} : ChannelsProps) => {
  return (
    <PieChart
    className="text-slate-100 shadow-lg"
    radius={30}
    label={({ dataEntry }) => `${Math.round(dataEntry.percentage)} %`}
    labelStyle={{ fontSize: "0.20em", color: "#fff",
    fontWeight: "400",}}
      data={channels.map(channel => {
        return { title: channel.name, value: channel.amount, color: channel.color }
      })}
    />
  )
}

export default Chart;
