import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowBigLeft, Plus } from "lucide-react";
import Link from "next/link";
import BusinessListComponent from "./list";
import FormBusiness from "./form";

const BusinessPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-5/6">
    <Card className="w-full sm:w-2/3 md:w-2/3">
      <CardHeader>
        <CardTitle className="flex flex-row justify-between">
          <Link href={"/"} title="Voltar">
            <ArrowBigLeft className="w-6 h-6"></ArrowBigLeft>
          </Link>
          Usuários
          <FormBusiness type="new">
            <Button className="p-0 m-0 h-6 w-6 mr-2" title="Novo Usuário">
              <Plus className="p-0 m-0 h-6 w-6" />
            </Button>
          </FormBusiness>
        </CardTitle>
      </CardHeader>
      <CardContent>
      <BusinessListComponent />
      </CardContent>
      <CardFooter className="flex justify-center"></CardFooter>
    </Card>
    </div>
  );
};

export default BusinessPage;
