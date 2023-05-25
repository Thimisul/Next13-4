"use client";
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
import FormTransaction from "./form";
import AlertComponent from "@/components/Alert";
import Link from "next/link";

const TransactionPage = () => {
  const transactionsList = [
    {
      id: 1,
      date: '05/10/23',
      with: "Thiago",
      value: '30.000,00',
      description: 'Telhado'
    },
    {
      id: 2,
      date: '05/10/23',
      with: "Thiago",
      value: '3.000,00',
      description: 'Telhado'
    },
    {
      id: 3,
      date: '05/10/23',
      with: "Thiago",
      value: '10.000,00',
      description: 'Telhado'
    },
    {
      id: 4,
      date: '05/10/23',
      with: "Thiago",
      value: '12.000,00',
      description: 'Telhado'
    },
    {
      id: 5,
      date: '05/10/23',
      with: "Thiago",
      value: '1.000,00',
      description: 'Telhado'
    },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex flex-row justify-between">
          <Link href={"/business/1"}>
            <ArrowBigLeft className="w-6 h-6"></ArrowBigLeft>
          </Link>
          Transaçõess do JD
          <FormTransaction type="new" name="Novo Transações">
            <Button className="p-0 m-0 h-6 w-6 mr-2">
              <Plus className="p-0 m-0 h-6 w-6" />
            </Button>
          </FormTransaction>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Table className="text-xs">
          <TableCaption>Lista de Transaçõess.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className=" p-1">Data</TableHead>
              <TableHead className=" p-1">Quem</TableHead>
              <TableHead className=" p-1">Valor</TableHead>
              <TableHead className=" p-1">Descrição</TableHead>
              <TableHead className=" p-1">Descrição</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {transactionsList.map((transaction) => (
              <TableRow key={transaction.id}>
                <TableCell className="font-medium p-1">
                  {transaction.date}
                </TableCell>
                <TableCell className="font-medium p-1">
                  {transaction.with}
                </TableCell>
                <TableCell className="font-medium p-1">
                  {transaction.value}
                </TableCell>
                <TableCell className="font-medium p-1">
                  {transaction.description + "..."}
                </TableCell>
                <TableCell className="font-medium p-1 text-right">
                  <FormTransaction type="edit" name={transaction.description}>
                    <Button
                      variant={"secondary"}
                      className="p-0 m-0 h-4 w-4 mr-2"
                    >
                      <Edit className="rounded border h-4 w-4"></Edit>
                    </Button>
                  </FormTransaction>
                  <AlertComponent
                    alertDialogTitle={"Tem certeza?"}
                    alertDialogDescription={`O Transações ${transaction.description} do dia ${transaction.date} será deletado!`}
                    cancel={"Cancelar"}
                    continue={"Sim"}
                  >
                    <Button variant={"destructive"} className="p-0 m-0 h-4 w-4">
                      <X className="rounded border h-4 w-4"></X>
                    </Button>
                  </AlertComponent>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
      <CardFooter className="flex justify-center"></CardFooter>
    </Card>
  );
};

export default TransactionPage;
