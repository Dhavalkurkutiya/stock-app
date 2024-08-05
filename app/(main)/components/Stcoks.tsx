import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { MountainSnowIcon } from "lucide-react"

import React from 'react'

export const Stocks = () => {
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
                                <div className="text-4xl font-bold">42,069.42</div>
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
                                <div className="col-span-2 flex items-center gap-2">
                                    <div className="font-medium">Reliance</div>
                                    <div className="text-green-500 font-medium">+5.42%</div>
                                </div>
                                <div className="text-right">2,450.00</div>
                                <div className="col-span-2 flex items-center gap-2">
                                    <div className="font-medium">TCS</div>
                                    <div className="text-green-500 font-medium">+3.14%</div>
                                </div>
                                <div className="text-right">3,250.00</div>
                                <div className="col-span-2 flex items-center gap-2">
                                    <div className="font-medium">HDFC Bank</div>
                                    <div className="text-green-500 font-medium">+2.87%</div>
                                </div>
                                <div className="text-right">1,450.00</div>
                            </div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>Top Losers</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="grid grid-cols-3 gap-2">
                                <div className="col-span-2 flex items-center gap-2">
                                    <div className="font-medium">Infosys</div>
                                    <div className="text-red-500 font-medium">-2.42%</div>
                                </div>
                                <div className="text-right">1,650.00</div>
                                <div className="col-span-2 flex items-center gap-2">
                                    <div className="font-medium">ICICI Bank</div>
                                    <div className="text-red-500 font-medium">-1.87%</div>
                                </div>
                                <div className="text-right">850.00</div>
                                <div className="col-span-2 flex items-center gap-2">
                                    <div className="font-medium">Axis Bank</div>
                                    <div className="text-red-500 font-medium">-1.42%</div>
                                </div>
                                <div className="text-right">650.00</div>
                            </div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>Stock Quotes</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="grid grid-cols-3 gap-2">
                                <div className="font-medium">Reliance</div>
                                <div className="text-right">2,450.00</div>
                                <div className="text-right text-green-500 font-medium">+5.42%</div>
                                <div className="font-medium">TCS</div>
                                <div className="text-right">3,250.00</div>
                                <div className="text-right text-green-500 font-medium">+3.14%</div>
                                <div className="font-medium">HDFC Bank</div>
                                <div className="text-right">1,450.00</div>
                                <div className="text-right text-green-500 font-medium">+2.87%</div>
                                <div className="font-medium">Infosys</div>
                                <div className="text-right">1,650.00</div>
                                <div className="text-right text-red-500 font-medium">-2.42%</div>
                                <div className="font-medium">ICICI Bank</div>
                                <div className="text-right">850.00</div>
                                <div className="text-right text-red-500 font-medium">-1.87%</div>
                                <div className="font-medium">Axis Bank</div>
                                <div className="text-right">650.00</div>
                                <div className="text-right text-red-500 font-medium">-1.42%</div>
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
                                    <img
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
                                    <img
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
                                    <img
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
