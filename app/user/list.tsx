import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "components/ui/table";
import { Edit, X } from "lucide-react";
import { Button } from "components/ui/button";
import FormUser from "./form";
import axios from "axios";
import { User } from ".prisma/client";

async function getUsersList(){
    const res = await axios.get("/api/users", {baseURL: "http://localhost:3000"})
    console.log(res.data)
    return res.data
}

const UsersListComponent = async () => {

  const usersList: User[] = await getUsersList()

  return (
    <Table className="text-xs">
      <TableCaption>Lista de Usuários.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px] p-1">Nome</TableHead>
          <TableHead className="p-1">Email</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {usersList?.map((user) => (
          <TableRow key={user.id}>
            <TableCell className="font-medium p-1">{user.name}</TableCell>
            <TableCell className="font-medium p-1">{user.email}</TableCell>
            <TableCell className="font-medium p-1 text-right">
              <FormUser type="edit" user={user}>
                <Button
                  variant={"secondary"}
                  className="p-0 m-0 h-4 w-4 mr-2"
                  title={"Editar: " + user.name}
                >
                  <Edit className="rounded border h-4 w-4"></Edit>
                </Button>
              </FormUser>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default UsersListComponent;
