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
import { ArrowBigLeft, Edit, Plus, StepBack, X } from "lucide-react";
import FormBusiness from "./form";
import AlertComponent from "@/components/Alert";
import Link from "next/link";

const BusinessPage = () => {
  const businessList = [
    {
      name: "JD",
      initialValue: "",
      businessFather: "",
      owner: "Thiago",
    },
    {
      name: "Sala 1",
      initialValue: "",
      businessFather: "1",
    },
    {
      name: "Sala 2",
      initialValue: "",
      businessFather: "1",
    },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex flex-row justify-between ">
          <Link href={"/"}>
          <ArrowBigLeft className="w-6 h-6"></ArrowBigLeft>
          </Link>
          Negócios
          <FormBusiness type="new" name="Novo Negócio">
            <Button className="p-0 m-0 h-6 w-6 mr-2 ">
              <Plus className="p-0 m-0 h-6 w-6" />
            </Button>
          </FormBusiness>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Table className="text-xs">
          <TableCaption>Lista de Negócios</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[280px] p-1">Nome</TableHead>
              <TableHead className="w-[80px] p-1">Ações</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {businessList.map((business) => (
              <TableRow key={business.name}>
                <TableCell className="font-medium p-1">
                  <Link href={"/business/1"} key={business.name}>
                    {business.name}
                  </Link>
                </TableCell>
                <TableCell className="font-medium p-1 text-right">
                  <FormBusiness
                    type="edit"
                    name={business.name}
                    owner={"Thiago"}
                  >
                    <Button
                      variant={"secondary"}
                      className="p-0 m-0 h-4 w-4 mr-2"
                    >
                      <Edit className="rounded border h-4 w-4"></Edit>
                    </Button>
                  </FormBusiness>
                  <AlertComponent
                    alertDialogTitle={"Tem certeza?"}
                    alertDialogDescription={`O Negócio ${business.name} será deletado!`}
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

export default BusinessPage;
