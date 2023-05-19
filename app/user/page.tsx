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
import { Edit, Plus, X } from "lucide-react";
import FormUser from "./form";
import AlertComponent from "@/components/Alert";

const UserPage = () => {
  const invoices = [
    {
      invoice: "Thiago",
    },
    {
      invoice: "Priscila",
    },
    {
      invoice: "Rosana",
    },
    {
      invoice: "Pricylla",
    },
    {
      invoice: "Jéssica",
    },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex flex-row justify-between">
          Usuários
          <FormUser name="Novo Usuário">
            <Button className="p-0 m-0 h-6 w-6 mr-2">
              <Plus className="p-0 m-0 h-6 w-6" />
            </Button>
          </FormUser>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Table className="text-xs">
          <TableCaption>Lista de Usuários.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[280px] p-1">Nome</TableHead>
              <TableHead className="w-[80px] p-1">Ações</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {invoices.map((invoice) => (
              <TableRow key={invoice.invoice}>
                <TableCell className="font-medium p-1">
                  {invoice.invoice}
                </TableCell>
                <TableCell className="font-medium p-1 text-right">
                  <FormUser name={invoice.invoice}>
                    <Button
                      variant={"secondary"}
                      className="p-0 m-0 h-4 w-4 mr-2"
                    >
                      <Edit className="rounded border h-4 w-4"></Edit>
                    </Button>
                  </FormUser>
                  <AlertComponent alertDialogTitle={'Tem certeza?'} alertDialogDescription={'O Usuário será deletado'} cancel={"Cancelar"} continue={"Sim"} >
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

export default UserPage;
