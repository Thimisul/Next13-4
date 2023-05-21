"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import MultiSelectComponent from "@/components/Multiselect";

type BusinessType = {
  children: React.ReactNode;
  name: string;
  owner?: string;
  type: "edit" | "new";
};

const FormBusiness = (props: BusinessType) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{props.children}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{props.name}</DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-12 items-center gap-4">
            <Label htmlFor="name" className="text-left col-span-2 ">
              Nome
            </Label>
            <Input
              id="name"
              defaultValue={props.type == "new" ? "" : props.name}
              className="col-span-10"
              onChange={(e) => console.log(e.target.value)}
            />
            <Label htmlFor="name" className="text-left col-span-4">
              Valor inicial
            </Label>
            <Input
              id="initialValue"
              type="number"
              defaultValue={props.type == "new" ? "" : props.name}
              className="col-span-8"
              onChange={(e) => console.log(e.target.value)}
            />
            <Label htmlFor="name" className="text-left col-span-4">
              Faz parte do
            </Label>
            <Select>
              <SelectTrigger className="col-span-8">
                <SelectValue placeholder="Selecione Um Negócio" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                 <SelectItem  value="">Não faz</SelectItem>
                  <SelectItem value="1">JD</SelectItem>
                  <SelectItem value="2">Sala 1</SelectItem>
                  <SelectItem value="3">Sala 2</SelectItem>
                  <SelectItem value="4">Sala 3</SelectItem>
                  <SelectItem value="5">Sala 4</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>

            <DialogHeader className="col-span-12 ">
          <DialogTitle>Participantes</DialogTitle>
          <DialogDescription>Usuários que fazem parte do Negócio</DialogDescription>
          <MultiSelectComponent/>
        </DialogHeader>
          </div>
        </div>
        <DialogFooter className="grid grid-cols-12 items-center gap-4">
        {props.type == 'edit' && <span className="text-muted-foreground text-sm col-span-8">Criado por: {props.owner}</span>}
          <Button className="col-span-4" type="submit">Salvar</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default FormBusiness;
