"use client";

import { useState } from "react";

import { Avatar, AvatarFallback, AvatarImage } from "./ui/Avatar";
import { Button } from "./ui/Button";
import { Card, CardContent, CardDescription, CardHeader } from "./ui/Card";
import { Checkbox } from "./ui/Checkbox";
import { Input } from "./ui/Input";
import { Label } from "./ui/Label";

export default function UltimosPedidos() {
    const [selectedButton, setSelectedButton] = useState('contatos');

    const handleButtonClick = (value:string) => {
        setSelectedButton(value);
    }


    return (

        <Card className="bg-slate-50 h-[29rem] px-20 mt-10 ml-25">
            <CardHeader className="flex justify-between items-center flex-row my-5 space-x-5">
                <h1>Ultimos Pedidos</h1>

                <label className="relative block">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_304_152)">
                                <path d="M14.8166 13.9336L11.086 10.203C12.1026 8.9596 12.6025 7.37303 12.4821 5.77145C12.3618 4.16987 11.6305 2.67581 10.4395 1.5983C9.24847 0.520793 7.68886 -0.0577183 6.08327 -0.0175734C4.47767 0.0225715 2.94893 0.678301 1.81325 1.81398C0.677569 2.94966 0.0218391 4.47841 -0.0183058 6.084C-0.0584507 7.68959 0.520061 9.2492 1.59757 10.4402C2.67507 11.6312 4.16914 12.3625 5.77072 12.4829C7.3723 12.6032 8.95886 12.1034 10.2022 11.0867L13.9329 14.8174C14.0507 14.9312 14.2086 14.9942 14.3725 14.9928C14.5364 14.9913 14.6931 14.9256 14.809 14.8097C14.9249 14.6939 14.9906 14.5371 14.992 14.3732C14.9935 14.2094 14.9305 14.0515 14.8166 13.9336ZM6.24974 11.2505C5.26084 11.2505 4.29414 10.9572 3.47189 10.4078C2.64964 9.85842 2.00878 9.07752 1.63034 8.16389C1.25191 7.25026 1.15289 6.24493 1.34582 5.27502C1.53874 4.30512 2.01495 3.4142 2.71421 2.71494C3.41347 2.01568 4.30439 1.53947 5.27429 1.34655C6.2442 1.15362 7.24953 1.25264 8.16316 1.63108C9.07679 2.00951 9.85768 2.65038 10.4071 3.47262C10.9565 4.29487 11.2497 5.26157 11.2497 6.25047C11.2483 7.5761 10.721 8.847 9.78363 9.78436C8.84627 10.7217 7.57537 11.249 6.24974 11.2505Z" fill="#9A9A9A" />
                            </g>
                            <defs>
                                <clipPath id="clip0_304_152">
                                    <rect width="15" height="15" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </span>
                    <input className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm h-7" placeholder="Pesquisar..." type="text" name="search" />
                </label>

                <div className="w-[19rem] h-[2.5rem] bg-slate-300 flex justify-center gap-x-3 items-center rounded ">
                    <Button
                        variant={'slade'}
                        className={`flex items-center gap-x-2 h-[2rem] ${selectedButton === 'contatos' ? 'bg-slate-50': 'bg-transparent border-0'}`}
                        onClick={() => handleButtonClick('contatos')}>

                        Contatos
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                            <path d="M6.00023 1.5C5.20455 1.5 4.44146 1.81607 3.87883 2.37868C3.3162 2.94129 3.00012 3.70435 3.00012 4.5C3.00012 5.29565 3.3162 6.05871 3.87883 6.62132C4.44146 7.18393 5.20455 7.5 6.00023 7.5C6.79591 7.5 7.559 7.18393 8.12163 6.62132C8.68426 6.05871 9.00035 5.29565 9.00035 4.5C9.00035 3.70435 8.68426 2.94129 8.12163 2.37868C7.559 1.81607 6.79591 1.5 6.00023 1.5ZM1.50006 4.5C1.50006 3.30653 1.97418 2.16193 2.81813 1.31802C3.66207 0.474106 4.80671 0 6.00023 0C7.19375 0 8.33839 0.474106 9.18233 1.31802C10.0263 2.16193 10.5004 3.30653 10.5004 4.5C10.5004 5.69347 10.0263 6.83807 9.18233 7.68198C8.33839 8.52589 7.19375 9 6.00023 9C4.80671 9 3.66207 8.52589 2.81813 7.68198C1.97418 6.83807 1.50006 5.69347 1.50006 4.5ZM14.7486 6.93975C14.8971 7.07189 14.987 7.25757 14.9987 7.45599C15.0104 7.65442 14.9428 7.84936 14.8108 7.998L12.8112 10.248C12.7409 10.3272 12.6545 10.3906 12.5579 10.434C12.4613 10.4774 12.3565 10.4998 12.2506 10.4998C12.1447 10.4998 12.0399 10.4774 11.9433 10.434C11.8467 10.3906 11.7603 10.3272 11.69 10.248L10.6902 9.123C10.5657 8.97334 10.5044 8.78119 10.519 8.58712C10.5337 8.39306 10.6232 8.21229 10.7686 8.08299C10.9141 7.9537 11.1041 7.88601 11.2986 7.89422C11.493 7.90243 11.6767 7.9859 11.8107 8.127L12.2502 8.62125L13.6903 7.00125C13.8225 6.85287 14.0083 6.76304 14.2067 6.75151C14.4051 6.73998 14.6 6.80768 14.7486 6.93975ZM3.37513 12C2.43009 12 1.50006 12.9097 1.50006 14.25C1.50006 14.4489 1.42104 14.6397 1.28038 14.7803C1.13972 14.921 0.948949 15 0.750029 15C0.551109 15 0.360336 14.921 0.219678 14.7803C0.0790206 14.6397 0 14.4489 0 14.25C0 12.276 1.4198 10.5 3.37513 10.5H8.62533C10.5807 10.5 12.0005 12.276 12.0005 14.25C12.0005 14.4489 11.9214 14.6397 11.7808 14.7803C11.6401 14.921 11.4494 15 11.2504 15C11.0515 15 10.8607 14.921 10.7201 14.7803C10.5794 14.6397 10.5004 14.4489 10.5004 14.25C10.5004 12.9097 9.57037 12 8.62533 12H3.37513Z" fill="#0D0D0D" />
                        </svg>
                    </Button>

                    <Button
                        variant={'slade'}
                        className={`flex items-center gap-x-2  h-[2rem] hover:none ${selectedButton === 'desconehcidos' ? 'bg-slate-50': 'bg-transparent border-0'}`}
                        onClick={() => handleButtonClick('desconehcidos')}>

                        Desconhecidos
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                            <g clip-path="url(#clip0_304_170)">
                                <path d="M5.625 7.5C6.36668 7.5 7.0917 7.28007 7.70839 6.86801C8.32507 6.45596 8.80572 5.87029 9.08955 5.18507C9.37338 4.49984 9.44764 3.74584 9.30295 3.01841C9.15825 2.29098 8.8011 1.6228 8.27665 1.09835C7.7522 0.573904 7.08402 0.216751 6.35659 0.0720569C5.62916 -0.0726377 4.87516 0.00162482 4.18994 0.285453C3.50471 0.569282 2.91904 1.04993 2.50699 1.66661C2.09493 2.2833 1.875 3.00832 1.875 3.75C1.87599 4.74426 2.2714 5.69751 2.97445 6.40056C3.67749 7.1036 4.63074 7.49901 5.625 7.5ZM5.625 1.25C6.11945 1.25 6.6028 1.39662 7.01393 1.67133C7.42505 1.94603 7.74548 2.33648 7.9347 2.79329C8.12392 3.25011 8.17343 3.75278 8.07696 4.23773C7.9805 4.72268 7.7424 5.16814 7.39277 5.51777C7.04314 5.8674 6.59768 6.1055 6.11273 6.20197C5.62777 6.29843 5.12511 6.24892 4.66829 6.0597C4.21148 5.87048 3.82103 5.55005 3.54633 5.13893C3.27162 4.7278 3.125 4.24446 3.125 3.75C3.125 3.08696 3.38839 2.45108 3.85723 1.98223C4.32607 1.51339 4.96196 1.25 5.625 1.25ZM11.25 14.375C11.25 14.5408 11.1842 14.6997 11.0669 14.8169C10.9497 14.9342 10.7908 15 10.625 15C10.4592 15 10.3003 14.9342 10.1831 14.8169C10.0658 14.6997 10 14.5408 10 14.375C10 13.2147 9.53906 12.1019 8.71859 11.2814C7.89812 10.4609 6.78532 10 5.625 10C4.46468 10 3.35188 10.4609 2.53141 11.2814C1.71094 12.1019 1.25 13.2147 1.25 14.375C1.25 14.5408 1.18415 14.6997 1.06694 14.8169C0.949732 14.9342 0.79076 15 0.625 15C0.45924 15 0.300269 14.9342 0.183058 14.8169C0.065848 14.6997 0 14.5408 0 14.375C0 12.8832 0.592632 11.4524 1.64752 10.3975C2.70242 9.34264 4.13316 8.75 5.625 8.75C7.11684 8.75 8.54758 9.34264 9.60248 10.3975C10.6574 11.4524 11.25 12.8832 11.25 14.375ZM14.8169 8.93313C14.8766 8.99078 14.9242 9.05975 14.9569 9.136C14.9897 9.21225 15.0069 9.29426 15.0077 9.37725C15.0084 9.46024 14.9926 9.54254 14.9611 9.61935C14.9297 9.69616 14.8833 9.76594 14.8246 9.82462C14.7659 9.88331 14.6962 9.92972 14.6193 9.96114C14.5425 9.99257 14.4602 10.0084 14.3773 10.0077C14.2943 10.0069 14.2123 9.9897 14.136 9.95694C14.0597 9.92419 13.9908 9.87657 13.9331 9.81688L12.8125 8.69625L11.6919 9.81688C11.574 9.93073 11.4161 9.99372 11.2523 9.9923C11.0884 9.99088 10.9316 9.92514 10.8157 9.80926C10.6999 9.69338 10.6341 9.53663 10.6327 9.37275C10.6313 9.20888 10.6943 9.051 10.8081 8.93313L11.9288 7.8125L10.8081 6.69188C10.6943 6.574 10.6313 6.41612 10.6327 6.25225C10.6341 6.08838 10.6999 5.93162 10.8157 5.81574C10.9316 5.69986 11.0884 5.63413 11.2523 5.63271C11.4161 5.63128 11.574 5.69428 11.6919 5.80813L12.8125 6.92875L13.9331 5.80813C14.051 5.69428 14.2089 5.63128 14.3728 5.63271C14.5366 5.63413 14.6934 5.69986 14.8093 5.81574C14.9251 5.93162 14.9909 6.08838 14.9923 6.25225C14.9937 6.41612 14.9307 6.574 14.8169 6.69188L13.6963 7.8125L14.8169 8.93313Z" fill="#0D0D0D" />
                            </g>
                            <defs>
                                <clipPath id="clip0_304_170">
                                    <rect width="15" height="15" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </Button>
                </div>

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
