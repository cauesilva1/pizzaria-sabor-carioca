import { CardEditMensage } from "@/components/CardEditMensage";


import { Button } from "@/components/ui/Button"

export function EditMensages() {
    return (
        <main className="border-2 border-red-600 ml-40 flex flex-row h-screen gap-x-8">
            <section className="flex flex-col justify-center gap-y-7">
                <CardEditMensage title='Olá equipe da Pizzaria Delícia!Gostaria de fazer um pedido....' />
                <CardEditMensage title='Olá equipe da Pizzaria Delícia!Gostaria de fazer um pedido....' />
                <CardEditMensage title='Olá equipe da Pizzaria Delícia!Gostaria de fazer um pedido....' />
                <CardEditMensage title='Olá equipe da Pizzaria Delícia!Gostaria de fazer um pedido....' />

                <div className="flex flex-row justify-end">
                    <Button>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M19 10H17V7H14V5H17V2H19V5H22V7H19V10Z" fill="white" />
                            <path d="M21 12H19V15H8.334C7.90107 14.9988 7.47964 15.1393 7.134 15.4L5 17V5H12V3H5C3.89543 3 3 3.89543 3 5V21L7.8 17.4C8.14582 17.1396 8.56713 16.9992 9 17H19C20.1046 17 21 16.1046 21 15V12Z" fill="white" />
                        </svg>
                        Nova mensagem
                    </Button>
                </div>
            </section>

            <section className="flex flex-col justify-around bg-slate-50 rounded-l-lg">
                <h2 className="text-3xl text-center	">Editar mensagem de compra</h2>

                <div>
                    Olá equipe da Pizzaria Delícia! <br />
                    Gostaria de fazer um pedido, por favor. Estou com muita vontade de uma pizza saborosa.
                    Poderia me preparar uma pizza média de Pepperoni?
                    Adicionalmente, se possível, gostaria de acrescentar um pouco de cebola extra.Endereço para entrega:Rua Exemplo, 123Bairro ExemplarCidade, EstadoCEP: 12345-678Fico no aguardo do valor total e do tempo estimado de entrega. Por favor, confirmem o pedido assim que possível.Obrigado![Seu Nome]
                </div>

                <div className="flex flex-row justify-around">
                    <Button>Salvar</Button>
                    <Button>Cancelar</Button>
                </div>
            </section>
        </main>
    )
}