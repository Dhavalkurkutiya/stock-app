import React from 'react'
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet"
import { AlignRight, ArrowBigDownDash, IndianRupeeIcon, NewspaperIcon, PocketKnifeIcon, SearchIcon, StoreIcon } from 'lucide-react'
import Image from 'next/image'

export const Header = () => {



    return (
        <header className="flex items-center justify-between bg-background px-4 py-3 shadow-sm sm:px-6 lg:px-8">
            <div className="flex items-center gap-4">
                <Link href="#" className="flex items-center gap-2" prefetch={false}>
                    <Image
                        src="/logo.png"
                        alt="Stockify"
                        width={32}
                        height={32}
                    />
                    <span className="text-lg font-semibold">Stockify</span>
                </Link>
                <nav className="hidden items-center gap-4 text-sm font-medium md:flex">
                    <Link href="#" className="text-muted-foreground hover:text-foreground" prefetch={false}>
                        Stocks
                    </Link>
                    <Link href="#" className="text-muted-foreground hover:text-foreground" prefetch={false}>
                        News
                    </Link>
                    <Link href="#" className="text-muted-foreground hover:text-foreground" prefetch={false}>
                        Research
                    </Link>
                    <Link href="#" className="text-muted-foreground hover:text-foreground" prefetch={false}>
                        Portfolio
                    </Link>
                </nav>
            </div>
            <div className="relative flex-1 max-w-md">
                <div className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                    type="search"
                    placeholder="Search stocks, news, and more"
                    className="w-full rounded-md bg-muted pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary"
                />
                <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            </div>
            <div className="hidden items-center gap-4 md:flex">
                <Link href="http://localhost:3000/sign-in" className="flex items-center gap-2 text-muted-foreground hover:text-foreground" prefetch={false}>
                    <Button variant="outline" size="sm">
                        Sign In
                    </Button>
                </Link>
                <Button size="sm">Get Started</Button>
            </div>
            <Sheet>
                <SheetTrigger asChild>
                    <Button variant="outline" size="icon" className="md:hidden">
                        <AlignRight className="h-6 w-6" />
                        <span className="sr-only">Toggle menu</span>
                    </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-full max-w-xs">
                    <div className="grid gap-4 p-4">
                        <Link
                            href="#"
                            className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
                            prefetch={false}
                        >
                            <StoreIcon className="h-5 w-5" />
                            <span>Stocks</span>
                        </Link>
                        <Link
                            href="#"
                            className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
                            prefetch={false}
                        >
                            <NewspaperIcon className="h-5 w-5" />
                            <span>News</span>
                        </Link>
                        <Link
                            href="#"
                            className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
                            prefetch={false}
                        >
                            <SearchIcon className="h-5 w-5" />
                            <span>Research</span>
                        </Link>
                        <Link
                            href="#"
                            className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
                            prefetch={false}
                        >
                            <PocketKnifeIcon className="h-5 w-5" />
                            <span>Portfolio</span>
                        </Link>
                        <div className="flex flex-col gap-2">
                            <Button variant="outline" size="sm">
                                Sign In
                            </Button>
                            <Button size="sm">Get Started</Button>
                        </div>
                    </div>
                </SheetContent>
            </Sheet>
        </header>
    )
}
