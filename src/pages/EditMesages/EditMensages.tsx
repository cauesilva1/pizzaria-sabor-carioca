"use client";

import { CardEditMensage } from "@/components/CardEditMensage";


import { Button } from "@/components/ui/Button"
import { useState } from "react";

export function EditMensages() {
    const [selectedValue, setSelectedValue] = useState(true);

    const handleSelected = () => {
        setSelectedValue(true)
    }

    return (
        <main className="ml-40 flex flex-row h-screen ">
            <section className="flex flex-col justify-center gap-y-7">
                <CardEditMensage
                    title='Olá equipe da Pizzaria Delícia!Gostaria de fazer um pedido....' 
                    selected={selectedValue}/>

                <CardEditMensage
                    title='Olá equipe da Pizzaria Delícia!Gostaria de fazer um pedido....' 
                    />

                <CardEditMensage
                    title='Olá equipe da Pizzaria Delícia!Gostaria de fazer um pedido....' 
                    />

                <CardEditMensage
                    title='Olá equipe da Pizzaria Delícia!Gostaria de fazer um pedido....' 
                    />

                <div className="flex flex-row justify-end pr-9">
                    <Button>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M19 10H17V7H14V5H17V2H19V5H22V7H19V10Z" fill="white" />
                            <path d="M21 12H19V15H8.334C7.90107 14.9988 7.47964 15.1393 7.134 15.4L5 17V5H12V3H5C3.89543 3 3 3.89543 3 5V21L7.8 17.4C8.14582 17.1396 8.56713 16.9992 9 17H19C20.1046 17 21 16.1046 21 15V12Z" fill="white" />
                        </svg>
                        Nova mensagem
                    </Button>
                </div>
            </section>

            <section className="flex flex-col justify-around bg-slate-50 rounded-l-lg px-8 border-2 border-slate-50	">
                <h2 className="text-3xl text-center	">Editar mensagem de compra</h2>

                <div className="h-[24.56rem] rounded bg-gray-300 px-3">
                    <p className="text-justify">
                        Olá equipe da Pizzaria Delícia! <br /> <br />
                        Gostaria de fazer um pedido, por favor. Estou com muita vontade de uma pizza saborosa. <br />
                        Poderia me preparar uma pizza média de Pepperoni? <br />
                        Adicionalmente, se possível, gostaria de acrescentar um pouco de cebola extra. <br /> <br />
                        Endereço para entrega: <br />
                        Rua Exemplo, 123<br />
                        Bairro <br />
                        ExemplarCidade, <br />
                        EstadoCEP: 12345-678<br /> <br />
                        Fico no aguardo do valor total e do tempo estimado de entrega. Por favor, confirmem o pedido assim que possível.<br />
                        Obrigado![Seu Nome]
                    </p>
                </div>

                <div className="flex flex-row justify-around">
                    <Button className="w-[11.68rem] h-[3.43rem]">Salvar</Button>
                    <Button variant="destructive" className="w-[11.68rem] h-[3.43rem]">Cancelar</Button>
                </div>
            </section>
        </main>
    )
}