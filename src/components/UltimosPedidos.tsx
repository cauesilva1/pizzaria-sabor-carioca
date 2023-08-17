import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader } from "./ui/card";
import { Checkbox } from "./ui/checkbox";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

export default function UltimosPedidos() {
    return (

        <Card className="bg-slate-50 w-4/6 h-[27rem] ml-32 my-80">
            <CardHeader className="flex justify-between items-center flex-row my-5">
                <h1>Ultimos Pedidos</h1>

                <label className="relative block">
                <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_304_152)">
                    <path d="M14.8166 13.9336L11.086 10.203C12.1026 8.9596 12.6025 7.37303 12.4821 5.77145C12.3618 4.16987 11.6305 2.67581 10.4395 1.5983C9.24847 0.520793 7.68886 -0.0577183 6.08327 -0.0175734C4.47767 0.0225715 2.94893 0.678301 1.81325 1.81398C0.677569 2.94966 0.0218391 4.47841 -0.0183058 6.084C-0.0584507 7.68959 0.520061 9.2492 1.59757 10.4402C2.67507 11.6312 4.16914 12.3625 5.77072 12.4829C7.3723 12.6032 8.95886 12.1034 10.2022 11.0867L13.9329 14.8174C14.0507 14.9312 14.2086 14.9942 14.3725 14.9928C14.5364 14.9913 14.6931 14.9256 14.809 14.8097C14.9249 14.6939 14.9906 14.5371 14.992 14.3732C14.9935 14.2094 14.9305 14.0515 14.8166 13.9336ZM6.24974 11.2505C5.26084 11.2505 4.29414 10.9572 3.47189 10.4078C2.64964 9.85842 2.00878 9.07752 1.63034 8.16389C1.25191 7.25026 1.15289 6.24493 1.34582 5.27502C1.53874 4.30512 2.01495 3.4142 2.71421 2.71494C3.41347 2.01568 4.30439 1.53947 5.27429 1.34655C6.2442 1.15362 7.24953 1.25264 8.16316 1.63108C9.07679 2.00951 9.85768 2.65038 10.4071 3.47262C10.9565 4.29487 11.2497 5.26157 11.2497 6.25047C11.2483 7.5761 10.721 8.847 9.78363 9.78436C8.84627 10.7217 7.57537 11.249 6.24974 11.2505Z" fill="#9A9A9A"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_304_152">
                    <rect width="15" height="15" fill="white"/>
                    </clipPath>
                    </defs>
                    </svg>
                    </span>
                    <input className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm h-7" placeholder="Pesquisar..." type="text" name="search"/>
                </label>

                    

            </CardHeader>

            <CardDescription className="flex flex-col space-y-6 justify-center items-center">

            <Card className="w-[90%] h-14 bg-transparent border border-slate-900">

                <CardContent className="flex items-center justify-between ">

                    <Avatar className="h-12 w-12">
                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                    <AvatarFallback>CN</AvatarFallback>
                    </Avatar>

                    <Label className="ml-4 text-slate-800">jailson pé de gato</Label>


                    <Label className="ml-4 text-slate-800">N° 3 </Label>

                    <Button variant={"config"} className="border border-2 bg-transparent">Abrir pedido</Button>

                    <Checkbox className="h-7 w-7 data-[state=checked]:bg-green-400 data-[state=checked]:text-primary-foreground" />

                </CardContent>


            </Card>

            <Card className="w-[90%] h-14 bg-transparent border border-slate-900">

                <CardContent className="flex items-center justify-between ">

                    <Avatar className="h-12 w-12">
                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                    <AvatarFallback>CN</AvatarFallback>
                    </Avatar>

                    <Label className="ml-4 text-slate-800">jailson pé de gato</Label>


                    <Label className="ml-4 text-slate-800">N° 3 </Label>

                    <Button variant={"config"} className="border border-2 bg-transparent">Abrir pedido</Button>

                    <Checkbox className="h-7 w-7 data-[state=checked]:bg-green-400 data-[state=checked]:text-primary-foreground" />

                </CardContent>


            </Card>

            <Card className="w-[90%] h-14 bg-transparent border border-slate-900">

                <CardContent className="flex items-center justify-between ">

                    <Avatar className="h-12 w-12">
                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                    <AvatarFallback>CN</AvatarFallback>
                    </Avatar>

                    <Label className="ml-4 text-slate-800">jailson pé de gato</Label>


                    <Label className="ml-4 text-slate-800">N° 3 </Label>

                    <Button variant={"config"} className="border border-2 bg-transparent">Abrir pedido</Button>

                    <Checkbox className="h-7 w-7 data-[state=checked]:bg-green-400 data-[state=checked]:text-primary-foreground" />

                </CardContent>


            </Card>

            <Card className="w-[90%] h-14 bg-transparent border border-slate-900">

                <CardContent className="flex items-center justify-between ">

                    <Avatar className="h-12 w-12">
                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                    <AvatarFallback>CN</AvatarFallback>
                    </Avatar>

                    <Label className="ml-4 text-slate-800">jailson pé de gato</Label>


                    <Label className="ml-4 text-slate-800">N° 3 </Label>

                    <Button variant={"config"} className="border border-2 bg-transparent">Abrir pedido</Button>

                    <Checkbox className="h-7 w-7 data-[state=checked]:bg-green-400 data-[state=checked]:text-primary-foreground" />

                </CardContent>


            </Card>

            </CardDescription>


        </Card>
    )

}
