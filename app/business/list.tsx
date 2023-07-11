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
import FormBusiness from "./form";
import axios from "axios";
import { Business, BusinessWithOwnerAndDependents, Prisma } from "@prisma/client";

async function getBusinessList(){
    const res = await axios.get("/api/business", {baseURL: "http://localhost:3000"})
    console.log(res.data)
    return res.data
}

const BusinessListComponent = async () => {

  const businessList: BusinessWithOwnerAndDependents[] = await getBusinessList()

  return (
    <Table className="text-xs">
      <TableCaption>Lista de Usuários.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px] p-1">Nome</TableHead>
          <TableHead className="p-1">Owner</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {businessList?.map((business) => (
          <TableRow key={business.id}>
            <TableCell className="font-medium p-1">{business.name}</TableCell>
            <TableCell className="font-medium p-1">{business.userOwner.name}</TableCell>
            <TableCell className="font-medium p-1">R$ {business.initialValue.toString()},00</TableCell>
            <TableCell className="font-medium p-1 text-right">
              <FormBusiness type="edit" business={business}>
                <Button
                  variant={"secondary"}
                  className="p-0 m-0 h-4 w-4 mr-2"
                  title={"Editar: " + business.name}
                >
                  <Edit className="rounded border h-4 w-4"></Edit>
                </Button>
              </FormBusiness>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default BusinessListComponent;
