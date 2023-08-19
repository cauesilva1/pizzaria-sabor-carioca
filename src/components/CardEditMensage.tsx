"use client";

import { useState } from "react"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/Card"
import { Button } from "@/components/ui/Button"

interface cardMensage {
    title: String
    selected?: Boolean
}

export function CardEditMensage(props: cardMensage) {
    const [selectedCard, setSelectedCard] = useState(true);

    // const handleSelectedCard = (value: any) => {
    //     setSelectedCard()
    //     setSelectedCard(value)
    // }
        
    return (
        <Card
            className={`w-[24.74rem] flex flex-col items-center 
            ${selectedCard === props.selected ? "bg-slate-50 w-[27rem] rounded-none rounded-l-lg" : "bg-gray-300"}`}>
            <CardHeader className="flex flex-row gap-x-3">
                <CardTitle className="text-base">{props.title}</CardTitle>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                        <path d="M0 18V2C0 0.89543 0.89543 0 2 0H16C17.1046 0 18 0.89543 18 2V12C18 13.1046 17.1046 14 16 14H6C5.56713 13.9992 5.14582 14.1396 4.8 14.4L0 18ZM2 2V14L4.134 12.4C4.47964 12.1393 4.90107 11.9988 5.334 12H16V2H2Z" fill="#25D366" />
                    </svg>

                </div>
            </CardHeader>

            <CardFooter>
                <Button
                    variant="outline"
                    className={`w-[11.93rem] h-[3.125rem] text-green-400 border-green-400
                    ${selectedCard === props.selected ? "bg-slate-50" : "bg-gray-300 border-black text-black"}`}
                >Editar</Button>
            </CardFooter>
        </Card>
    )
}