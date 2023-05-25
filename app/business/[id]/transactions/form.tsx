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
import { CalendarIcon } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import { format, setDate } from "date-fns";
import React from "react";
import { ptBR } from "date-fns/locale";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectItem,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

type TransactionType = {
  children: React.ReactNode;
  name: string;
  type: "edit" | "new";
};

const FormTransaction = (props: TransactionType) => {
  const [date, setDate] = React.useState<Date>();
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
          <Label htmlFor="name" className="text-left col-span-2">
              Carteira
            </Label>
            <Select>
              <SelectTrigger className="col-span-10">
                <SelectValue placeholder="Selecione Um Usuário" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="">Não faz</SelectItem>
                  <SelectItem value="1">JD</SelectItem>
                  <SelectItem value="2">Sala 1</SelectItem>
                  <SelectItem value="3">Sala 2</SelectItem>
                  <SelectItem value="4">Sala 3</SelectItem>
                  <SelectItem value="5">Sala 4</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select >
            <Label htmlFor="name" className="text-left col-span-2">
              Data
            </Label>
            <div className="col-span-10">
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant={"outline"}
                    className={cn(
                      "w-[280px] justify-start text-left font-normal",
                      !date && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? (
                      format(date, "PPP", { locale: ptBR })
                    ) : (
                      <span>Pick a date</span>
                    )}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>
            <Label htmlFor="name" className="text-left col-span-2">
              Com
            </Label>
            <Select>
              <SelectTrigger className="col-span-10">
                <SelectValue placeholder="Selecione Um Usuário" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="">Não faz</SelectItem>
                  <SelectItem value="1">JD</SelectItem>
                  <SelectItem value="2">Sala 1</SelectItem>
                  <SelectItem value="3">Sala 2</SelectItem>
                  <SelectItem value="4">Sala 3</SelectItem>
                  <SelectItem value="5">Sala 4</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select >
            <Label htmlFor="value" className="text-left col-span-2 ">
              Valor
            </Label >
            <Input type="number" className="text-left col-span-4">
            </Input>
            <div className="text-left col-span-6"></div>
            <Label htmlFor="value" className="text-left col-span-12">
              Descrição
            </Label >
            <Textarea className="text-left col-span-12">
            </Textarea>
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Salvar</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default FormTransaction;
