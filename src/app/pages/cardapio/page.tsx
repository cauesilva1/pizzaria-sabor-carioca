import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Textarea } from "@/components/ui/textarea";

export default function Home() {
  return (
    <div className="flex w-screen justify-between relative">
      <div className="grid grid-cols-3 w-full justify-center h-full items-center ml-56 mt-20 gap-2">
        <Card className=" w-60 h-40 flex justify-center items-center flex-col">
          <CardHeader>
            <p>image</p>
          </CardHeader>

          <Separator />

          <CardTitle>
            <p>descrição</p>
          </CardTitle>

          <CardContent>
            <p>conteudo</p>
          </CardContent>
        </Card>

        <Card className=" w-60 h-40 flex justify-center items-center flex-col">
          <CardHeader>
            <p>image</p>
          </CardHeader>

          <Separator />

          <CardTitle>
            <p>descrição</p>
          </CardTitle>

          <CardContent>
            <p>conteudo</p>
          </CardContent>
        </Card>

        <Card className=" w-60 h-40 flex justify-center items-center flex-col">
          <CardHeader>
            <p>image</p>
          </CardHeader>

          <Separator />

          <CardTitle>
            <p>descrição</p>
          </CardTitle>

          <CardContent>
            <p>conteudo</p>
          </CardContent>
        </Card>

        <Card className=" w-60 h-40 flex justify-center items-center flex-col">
          <CardHeader>
            <p>image</p>
          </CardHeader>

          <Separator />

          <CardTitle>
            <p>descrição</p>
          </CardTitle>

          <CardContent>
            <p>conteudo</p>
          </CardContent>
        </Card>

        <Card className=" w-60 h-40 flex justify-center items-center flex-col">
          <CardHeader>
            <p>image</p>
          </CardHeader>

          <Separator />

          <CardTitle>
            <p>descrição</p>
          </CardTitle>

          <CardContent>
            <p>conteudo</p>
          </CardContent>
        </Card>

        <Card className=" w-60 h-40 flex justify-center items-center flex-col">
          <CardHeader>
            <p>image</p>
          </CardHeader>

          <Separator />

          <CardTitle>
            <p>descrição</p>
          </CardTitle>

          <CardContent>
            <p>conteudo</p>
          </CardContent>
        </Card>
      </div>

      <Sheet>
      <SheetTrigger asChild>
      <Button className="w-40 ml-56 mt-5 absolute">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M19 10H17V7H14V5H17V2H19V5H22V7H19V10Z" fill="white" />
          <path
            d="M21 12H19V15H8.334C7.90107 14.9988 7.47964 15.1393 7.134 15.4L5 17V5H12V3H5C3.89543 3 3 3.89543 3 5V21L7.8 17.4C8.14582 17.1396 8.56713 16.9992 9 17H19C20.1046 17 21 16.1046 21 15V12Z"
            fill="white"
          />
        </svg>
        Adicionar item
      </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Criar item</SheetTitle>
          <SheetDescription>
            Crie o item para ser adicionado ao cardapio
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-10 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Imagem
            </Label>
            <Input type="file" id="name" name="Pedro Duarte" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              nome do produto:
            </Label>
            <Input id="name" value="Pedro Duarte" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Descrição
            </Label>
            <Textarea id="username" value="@peduarte" className="col-span-3" />
          </div>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit">Salvar item</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
    </div>
  );
}
