import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ArrowBigLeft, Plus} from "lucide-react";
import FormBusiness from "./form";
import Link from "next/link";
import BusinessListComponent from "./list";

export type businessType = {
  title: string
}

const BusinessPage = () => {

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
          <BusinessListComponent></BusinessListComponent>
        </Table>
      </CardContent>
      <CardFooter className="flex justify-center"></CardFooter>
    </Card>
  );
};

export default BusinessPage;
