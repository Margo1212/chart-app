import { PieChart } from 'react-minimal-pie-chart';
import React from "react";
import { Channel } from '../models/channel';

type ChannelsProps =  {
  channels: Channel[];
}

const Chart = ({channels} : ChannelsProps) => {
  return (
    <PieChart
      data={channels.map(channel => {
        return { title: channel.name, value: channel.amount, color: channel.color }
      })}
    />
  )
}

export default Chart;
