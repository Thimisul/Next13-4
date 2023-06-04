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
import { ArrowBigLeft, Edit, Plus, X } from "lucide-react";
import FormUser from "./form";
import Link from "next/link";
import UsersListComponent from "./list";

export type userType = {
  name: string
}
const UserPage = () => {

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex flex-row justify-between">
          <Link href={"/"}>
            <ArrowBigLeft className="w-6 h-6"></ArrowBigLeft>
          </Link>
          Usuários
          <FormUser type="new" name="Novo Usuário">
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
          <UsersListComponent></UsersListComponent>
        </Table>
      </CardContent>
      <CardFooter className="flex justify-center"></CardFooter>
    </Card>
  );
};

export default UserPage;
