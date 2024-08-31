'use client';
import React from 'react'
import HomeCard from './HomeCard'
import CalendarComp from './CalendarComp'
import { Bar, BarChart, LabelList, XAxis, YAxis } from 'recharts'
import { ChartConfig, ChartContainer, ChartLegend, ChartLegendContent } from './ui/chart'
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Calendar } from './ui/calendar';

const chartData = [
    { day: "January", desktop: 80 },
    { day: "February", desktop: 90 },
    { day: "March", desktop: 70 },
    { day: "April", desktop: 60 },
    { day: "May", desktop: 98 },
    { day: "June", desktop: 85 },
    { day: "July", desktop: 90 },
    { day: "August", desktop: 75 },
    { day: "September", desktop: 60 },
    { day: "October", desktop: 80 },
    { day: "November", desktop: 90 },
    { day: "December", desktop: 70 },
  ]
   
  const chartConfig = {
    desktop: {
      label: "Attendance Presentation",
      color: "#2563eb",
    },
  } satisfies ChartConfig

const HomeContent = () => {
    const data = [
        {
          task: "Zoom Meeting with client",
          date: "11 Jan 2024",
          host: "Michel Jeksone"
        },
        {
          task: "Zoom Meeting with client",
          date: "11 Jan 2024",
          host: "Michel Jeksone"
        },
        {
          task: "Zoom Meeting with client",
          date: "11 Jan 2024",
          host: "Michel Jeksone"
        },
        {
          task: "Zoom Meeting with client",
          date: "11 Jan 2024",
          host: "Michel Jeksone"
        },
      ]
  return (
    <div className='home-content -mt-7'>    
        <div className='home-content-left flex flex-col'>
            <HomeCard />
            {/* Attendance bar chart */}
            <div className='mx-4 mt-1'>
            <Card>
            <ChartContainer config={chartConfig} className="min-h-[200px] w-full pt-5">
                <BarChart accessibilityLayer data={chartData} >
                    <XAxis
                        dataKey="day"
                        tickLine={false}
                        tickMargin={10}
                        axisLine={false}
                        tickFormatter={(value) => value.slice(0, 3)}
                    />
                    <YAxis
                        dataKey="desktop"
                        tickLine={false}
                        tickMargin={15}
                        axisLine={false}
                        tickCount={6}
                        
                    />
                    <ChartLegend content={<ChartLegendContent />} />
                    <Bar dataKey="desktop" fill="var(--color-desktop)" radius={8}>
                        <LabelList
                            position="center"
                            offset={12}
                            className="fill-white"
                            fontSize={11}
                        />
                    </Bar>
                </BarChart>
            </ChartContainer>
            </Card>
            </div>
        </div>
        <Card className='mt-4'>
        <div className='home-content-right '>
            <div className='mx-2'>
                <Calendar/>
                <div className="space-y-5 mb-2">
                {
                    data.map((item, index) => (
                    <div
                        className="flex justify-between items-center gap-4 pl-4 relative before:absolute before:top-0 before:left-0 before:h-full before:w-1 before:bg-default-200"
                        key={`works-note-${index}`}
                    >
                        <div>
                        <div className="text-xs text-default-500 mb-0.5">{item.date}</div>
                        <div className="text-sm font-medium text-default-800">{item.task}</div>
                        <div className="text-xs text-default-600">Lead By
                            <span className="font-medium text-primary/90 ml-1">{item.host}</span>
                        </div>
                        </div>
                        <Button
                        type="button"
                        color="secondary"
                        size="sm"
                        className="h-8 border-gray-200"
                        >
                        View
                        </Button>
                    </div>
                    ))
                }
                </div>
            </div>
        </div>
        </Card>
    </div>
  )
}

export default HomeContent