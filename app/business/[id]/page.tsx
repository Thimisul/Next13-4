//Next components
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ArrowBigLeft, Edit, Plus, X } from "lucide-react";
import AlertComponent from "@/components/Alert";

const BusinessPage = () => {
  const usersList = [
    {
      name: "Participante 1",
      initialValue: "",
      businessFather: "",
      owner: "Thiago",
    },
    {
      name: "Participante 2",
      initialValue: "",
      businessFather: "1",
    },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex flex-row justify-between ">
        <Link href={"/business"}>
          <ArrowBigLeft className="w-6 h-6"></ArrowBigLeft>
          </Link>
          JD
          <span>X</span>
          </CardTitle>
      </CardHeader>
      <CardContent className="pb-2">
        <Card className="mb-2">
          <CardHeader className="pt-3 pl-6 pb-3">
            <CardTitle className="flex flex-row justify-between">
              Totais
            </CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-12 items-center">
            <span className="col-span-4 text-base text-left">Total Real</span>{" "}
            <span className="text-muted-foreground text-base col-span-8">
              R$ 100.000,00
            </span>
            <span className="col-span-4 text-sm text-left pt-2">Valor Inicial</span>{" "}
            <span className="text-muted-foreground text-sm col-span-8 pt-2">
              R$ 100.000,00
            </span>
            <span className="col-span-4 text-sm text-left">Valor Total</span>{" "}
            <span className="text-muted-foreground text-sm col-span-8">
              R$ 100.000,00
            </span>
            <span className="col-span-4 text-sm text-left pt-2">Entrada</span>{" "}
            <span className="text-muted-foreground text-sm col-span-8 pt-2">
              R$ 100.000,00
            </span>
            <span className="col-span-4 text-sm text-left">Saída</span>{" "}
            <span className="text-muted-foreground text-sm col-span-8">
              R$ 100.000,00
            </span>
            <span className="col-span-4 text-sm text-left">Total</span>{" "}
            <span className="text-muted-foreground text-sm col-span-8">
              R$ 100.000,00
            </span>
          </CardContent>
        </Card>
        <h1>Participantes</h1>

        <Table className="text-xs">
          <TableCaption></TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[280px] p-1">Nome</TableHead>
              <TableHead className="w-[80px] p-1">Entrada Total</TableHead>
              <TableHead className="w-[80px] p-1">Saida Total</TableHead>
              <TableHead className="w-[80px] p-1">Total</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {usersList.map((user) => (
              <TableRow key={user.name}>
                <TableCell className="font-medium p-0.5">{user.name}</TableCell>
                <TableCell className="font-medium p-0.5">R$ 100.000,00</TableCell>
                <TableCell className="font-medium p-0.5">R$ 100.000,00</TableCell>
                <TableCell className="font-medium p-0.5">R$ 100.000,00</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>

      <CardFooter className="flex justify-center pb-4">
        <Link href={"/business/1/transactions"}>
          <Button>Visualizar Transações</Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default BusinessPage;
