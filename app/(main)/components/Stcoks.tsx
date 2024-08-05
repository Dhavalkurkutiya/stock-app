"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { MountainSnowIcon } from "lucide-react"

import React, { useEffect, useState } from 'react'
import Image from "next/image"
interface StockData {
    marketIndex: number;
    gainers: { name: string; change: number; price: number }[];
    losers: { name: string; change: number; price: number }[];
    quotes: { name: string; price: number; change: number }[];
}

const generateRandomData = (): StockData => {
    const randomValue = (min: number, max: number) =>
        (Math.random() * (max - min) + min).toFixed(2);

    return {
        marketIndex: parseFloat(randomValue(40000, 42000)),
        gainers: [
            { name: 'Reliance', change: parseFloat(randomValue(1, 5)), price: parseFloat(randomValue(2400, 2500)) },
            { name: 'TCS', change: parseFloat(randomValue(1, 5)), price: parseFloat(randomValue(3200, 3300)) },
            { name: 'HDFC Bank', change: parseFloat(randomValue(1, 5)), price: parseFloat(randomValue(1400, 1500)) },
            { name: 'Reliance', change: parseFloat(randomValue(1, 5)), price: parseFloat(randomValue(2400, 2500)) },
            { name: 'HDFC Bank', change: parseFloat(randomValue(1, 5)), price: parseFloat(randomValue(1400, 1500)) },
        ],
        losers: [
            { name: 'Infosys', change: parseFloat(randomValue(-5, -1)), price: parseFloat(randomValue(1600, 1700)) },
            { name: 'ICICI Bank', change: parseFloat(randomValue(-5, -1)), price: parseFloat(randomValue(800, 900)) },
            { name: 'Axis Bank', change: parseFloat(randomValue(-5, -1)), price: parseFloat(randomValue(600, 700)) },
        ],
        quotes: [
            { name: 'Reliance', price: parseFloat(randomValue(2400, 2500)), change: parseFloat(randomValue(1, 5)) },
            { name: 'TCS', price: parseFloat(randomValue(3200, 3300)), change: parseFloat(randomValue(1, 5)) },
            { name: 'HDFC Bank', price: parseFloat(randomValue(1400, 1500)), change: parseFloat(randomValue(1, 5)) },
            { name: 'Infosys', price: parseFloat(randomValue(1600, 1700)), change: parseFloat(randomValue(-5, -1)) },
            { name: 'ICICI Bank', price: parseFloat(randomValue(800, 900)), change: parseFloat(randomValue(-5, -1)) },
            { name: 'Axis Bank', price: parseFloat(randomValue(600, 700)), change: parseFloat(randomValue(-5, -1)) },
        ],
    };
};


export const Stocks = () => {

    const [data, setData] = useState<StockData>(generateRandomData());

    useEffect(() => {
        const interval = setInterval(() => {
            setData(generateRandomData());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex flex-col min-h-screen">
            <main className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-4 p-4 sm:p-6">
                <div className="col-span-1 md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Card>
                        <CardHeader>
                            <CardTitle>Market Index</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="flex items-center justify-between">
                                <div className="text-4xl font-bold">{data.marketIndex.toFixed(2)}</div>
                                <div className="text-green-500 font-medium">+1.42%</div>
                            </div>
                            <div className="text-sm text-muted-foreground">As of 10:30 AM IST</div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>Top Gainers</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="grid grid-cols-3 gap-2">
                                {data.gainers.map((gainer, index) => (
                                    <React.Fragment key={index}>
                                        <div className="col-span-2 flex items-center gap-2">
                                            <div className="font-medium">{gainer.name}</div>
                                            <div className="text-green-500 font-medium">+{gainer.change}%</div>
                                        </div>
                                        <div className="text-right">{gainer.price.toFixed(2)}</div>
                                    </React.Fragment>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>Top Losers</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="grid grid-cols-3 gap-2">
                                {data.losers.map((loser, index) => (
                                    <React.Fragment key={index}>
                                        <div className="col-span-2 flex items-center gap-2">
                                            <div className="font-medium">{loser.name}</div>
                                            <div className="text-red-500 font-medium">{loser.change}%</div>
                                        </div>
                                        <div className="text-right">{loser.price.toFixed(2)}</div>
                                    </React.Fragment>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>Stock Quotes</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="grid grid-cols-3 gap-2">
                                {data.quotes.map((quote, index) => (
                                    <React.Fragment key={index}>
                                        <div className="font-medium">{quote.name}</div>
                                        <div className="text-right">{quote.price.toFixed(2)}</div>
                                        <div className={`text-right ${quote.change >= 0 ? 'text-green-500' : 'text-red-500'} font-medium`}>
                                            {quote.change}%
                                        </div>
                                    </React.Fragment>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </div>
                <div className="col-span-1 grid grid-cols-1 gap-4">
                    <Card>
                        <CardHeader>
                            <CardTitle>Market News</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="grid gap-4">
                                <div className="flex items-start gap-2">
                                    <Image
                                        src="/placeholder.svg"
                                        width="48"
                                        height="48"
                                        alt="News thumbnail"
                                        className="rounded-md"
                                        style={{ aspectRatio: "48/48", objectFit: "cover" }}
                                    />
                                    <div className="flex-1">
                                        <div className="font-medium">Sensex, Nifty end higher; Reliance, TCS among top gainers</div>
                                        <div className="text-xs text-muted-foreground">2 hours ago</div>
                                    </div>
                                </div>
                                <div className="flex items-start gap-2">
                                    <Image
                                        src="/placeholder.svg"
                                        width="48"
                                        height="48"
                                        alt="News thumbnail"
                                        className="rounded-md"
                                        style={{ aspectRatio: "48/48", objectFit: "cover" }}
                                    />
                                    <div className="flex-1">
                                        <div className="font-medium">Indian rupee gains 12 paise to 82.42 against US dollar</div>
                                        <div className="text-xs text-muted-foreground">4 hours ago</div>
                                    </div>
                                </div>
                                <div className="flex items-start gap-2">
                                    <Image
                                        src="/placeholder.svg"
                                        width="48"
                                        height="48"
                                        alt="News thumbnail"
                                        className="rounded-md"
                                        style={{ aspectRatio: "48/48", objectFit: "cover" }}
                                    />
                                    <div className="flex-1">
                                        <div className="font-medium">Nifty Bank index hits record high, up 1.5%</div>
                                        <div className="text-xs text-muted-foreground">6 hours ago</div>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>Market Calendar</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="grid gap-4">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <div className="font-medium">Monetary Policy Review</div>
                                        <div className="text-xs text-muted-foreground">August 6, 2024</div>
                                    </div>
                                    <div className="bg-primary text-primary-foreground px-2 py-1 rounded-md text-xs font-medium">
                                        Upcoming
                                    </div>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div>
                                        <div className="font-medium">Q2 Earnings Announcement</div>
                                        <div className="text-xs text-muted-foreground">September 15, 2024</div>
                                    </div>
                                    <div className="bg-primary text-primary-foreground px-2 py-1 rounded-md text-xs font-medium">
                                        Upcoming
                                    </div>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div>
                                        <div className="font-medium">Annual General Meeting</div>
                                        <div className="text-xs text-muted-foreground">October 1, 2024</div>
                                    </div>
                                    <div className="bg-primary text-primary-foreground px-2 py-1 rounded-md text-xs font-medium">
                                        Upcoming
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </main>
        </div>
    )
}
