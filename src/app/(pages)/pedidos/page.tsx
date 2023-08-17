import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/Card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";



export default function Home() {
  return (

    <div className="flex h-screen w-full justify-center items-center relative ml-28">

        <Card className="flex flex-col bg-slate-50 h-5/6 w-3/4" >

            <CardTitle className="flex justify-center w-full mt-5 mb-6">
              Pedidos
            </CardTitle>

            <ScrollArea>
            <CardContent className="flex flex-col gap-5 justify-center items-center w-full">

            <Card className="w-10/12 h-36 flex flex-col justify-center items-center border border-slate-900 ">
              <CardHeader className="w-full flex flex-row justify-between pt-0 pb-2 px-4">
                <div className="flex justify-center  bg-green-600 rounded-full p-1">
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 0C6.71371 0 0 6.71371 0 15C0 23.2863 6.71371 30 15 30C23.2863 30 30 23.2863 30 15C30 6.71371 23.2863 0 15 0ZM15 27.0968C8.31653 27.0968 2.90323 21.6835 2.90323 15C2.90323 8.31653 8.31653 2.90323 15 2.90323C21.6835 2.90323 27.0968 8.31653 27.0968 15C27.0968 21.6835 21.6835 27.0968 15 27.0968ZM18.7379 20.7823L13.6028 17.0504C13.4153 16.9113 13.3065 16.6935 13.3065 16.4637V6.53226C13.3065 6.13306 13.6331 5.80645 14.0323 5.80645H15.9677C16.3669 5.80645 16.6935 6.13306 16.6935 6.53226V15.1028L20.7339 18.0423C21.0605 18.2782 21.127 18.7319 20.8911 19.0585L19.754 20.625C19.5181 20.9456 19.0645 21.0181 18.7379 20.7823Z" fill="black"/>
                </svg>
                </div>

                <span>
                Total: 00:00:10
                </span>

              </CardHeader>

            <CardContent className="flex justify-between items-center px-2 py-0  w-10/12 h-16 border border-slate-900 rounded-lg">
                <Button className="rounded-full">
                  OI
                </Button>

                <Label>Jailson pé de Gato</Label>

                <Label>N°3</Label>

                <Label>dropdown</Label>


                <Label>Valor: R$70,00</Label>
                

            </CardContent>

            </Card>

            <Card className="w-10/12 h-36 flex flex-col justify-center items-center border border-slate-900 ">
              <CardHeader className="w-full flex flex-row justify-between pt-0 pb-2 px-4">
                <div className="flex justify-center  bg-green-600 rounded-full p-1">
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 0C6.71371 0 0 6.71371 0 15C0 23.2863 6.71371 30 15 30C23.2863 30 30 23.2863 30 15C30 6.71371 23.2863 0 15 0ZM15 27.0968C8.31653 27.0968 2.90323 21.6835 2.90323 15C2.90323 8.31653 8.31653 2.90323 15 2.90323C21.6835 2.90323 27.0968 8.31653 27.0968 15C27.0968 21.6835 21.6835 27.0968 15 27.0968ZM18.7379 20.7823L13.6028 17.0504C13.4153 16.9113 13.3065 16.6935 13.3065 16.4637V6.53226C13.3065 6.13306 13.6331 5.80645 14.0323 5.80645H15.9677C16.3669 5.80645 16.6935 6.13306 16.6935 6.53226V15.1028L20.7339 18.0423C21.0605 18.2782 21.127 18.7319 20.8911 19.0585L19.754 20.625C19.5181 20.9456 19.0645 21.0181 18.7379 20.7823Z" fill="black"/>
                </svg>
                </div>

                <span>
                Total: 00:00:10
                </span>

              </CardHeader>

            <CardContent className="flex justify-between items-center px-2 py-0  w-10/12 h-16 border border-slate-900 rounded-lg">
                <Button className="rounded-full">
                  OI
                </Button>

                <Label>Jailson pé de Gato</Label>

                <Label>N°3</Label>

                <Label>dropdown</Label>


                <Label>Valor: R$70,00</Label>
                

            </CardContent>

            </Card>

            <Card className="w-10/12 h-36 flex flex-col justify-center items-center border border-slate-900 ">
              <CardHeader className="w-full flex flex-row justify-between pt-0 pb-2 px-4">
                <div className="flex justify-center  bg-green-600 rounded-full p-1">
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 0C6.71371 0 0 6.71371 0 15C0 23.2863 6.71371 30 15 30C23.2863 30 30 23.2863 30 15C30 6.71371 23.2863 0 15 0ZM15 27.0968C8.31653 27.0968 2.90323 21.6835 2.90323 15C2.90323 8.31653 8.31653 2.90323 15 2.90323C21.6835 2.90323 27.0968 8.31653 27.0968 15C27.0968 21.6835 21.6835 27.0968 15 27.0968ZM18.7379 20.7823L13.6028 17.0504C13.4153 16.9113 13.3065 16.6935 13.3065 16.4637V6.53226C13.3065 6.13306 13.6331 5.80645 14.0323 5.80645H15.9677C16.3669 5.80645 16.6935 6.13306 16.6935 6.53226V15.1028L20.7339 18.0423C21.0605 18.2782 21.127 18.7319 20.8911 19.0585L19.754 20.625C19.5181 20.9456 19.0645 21.0181 18.7379 20.7823Z" fill="black"/>
                </svg>
                </div>

                <span>
                Total: 00:00:10
                </span>

              </CardHeader>

            <CardContent className="flex justify-between items-center px-2 py-0  w-10/12 h-16 border border-slate-900 rounded-lg">
                <Button className="rounded-full">
                  OI
                </Button>

                <Label>Jailson pé de Gato</Label>

                <Label>N°3</Label>

                <Label>dropdown</Label>


                <Label>Valor: R$70,00</Label>
                

            </CardContent>

            </Card>

            <Card className="w-10/12 h-36 flex flex-col justify-center items-center border border-slate-900 ">
              <CardHeader className="w-full flex flex-row justify-between pt-0 pb-2 px-4">
                <div className="flex justify-center  bg-green-600 rounded-full p-1">
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 0C6.71371 0 0 6.71371 0 15C0 23.2863 6.71371 30 15 30C23.2863 30 30 23.2863 30 15C30 6.71371 23.2863 0 15 0ZM15 27.0968C8.31653 27.0968 2.90323 21.6835 2.90323 15C2.90323 8.31653 8.31653 2.90323 15 2.90323C21.6835 2.90323 27.0968 8.31653 27.0968 15C27.0968 21.6835 21.6835 27.0968 15 27.0968ZM18.7379 20.7823L13.6028 17.0504C13.4153 16.9113 13.3065 16.6935 13.3065 16.4637V6.53226C13.3065 6.13306 13.6331 5.80645 14.0323 5.80645H15.9677C16.3669 5.80645 16.6935 6.13306 16.6935 6.53226V15.1028L20.7339 18.0423C21.0605 18.2782 21.127 18.7319 20.8911 19.0585L19.754 20.625C19.5181 20.9456 19.0645 21.0181 18.7379 20.7823Z" fill="black"/>
                </svg>
                </div>

                <span>
                Total: 00:00:10
                </span>

              </CardHeader>

            <CardContent className="flex justify-between items-center px-2 py-0  w-10/12 h-16 border border-slate-900 rounded-lg">
                <Button className="rounded-full">
                  OI
                </Button>

                <Label>Jailson pé de Gato</Label>

                <Label>N°3</Label>

                <Label>dropdown</Label>


                <Label>Valor: R$70,00</Label>
                

            </CardContent>

            </Card>

            </CardContent>
            </ScrollArea>
        </Card>

    </div>
  )
}
