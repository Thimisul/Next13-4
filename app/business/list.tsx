"use client"
import AlertComponent from "@/components/Alert"
import { TableBody, TableCell, TableRow } from "components/ui/table"
import { Edit, X } from "lucide-react"
import { useEffect, useState } from "react"
import { Button } from "components/ui/button"
import FormBusiness from "./form"
import { businessType } from "./page"

const BusinessListComponent = () => {
    const [businessList, setBusinessList] = useState<businessType[]>([])

    useEffect(() => {
        async function getBusiness() {
            const response = await fetch("https://swapi.dev/api/films")
            const data = await response.json()
            console.log(data.results)
            setBusinessList(data.results)
        }
        getBusiness()
    },[])

    return (
        <TableBody>
            {businessList.map((business) => (
              <TableRow key={business.title}>
                <TableCell className="font-medium p-1">
                  {business.title}
                </TableCell>
                <TableCell className="font-medium p-1 text-right">
                  <FormBusiness type="edit" name={business.title}>
                    <Button
                      variant={"secondary"}
                      className="p-0 m-0 h-4 w-4 mr-2"
                    >
                      <Edit className="rounded border h-4 w-4"></Edit>
                    </Button>
                  </FormBusiness>
                  <AlertComponent
                    alertDialogTitle={"Tem certeza?"}
                    alertDialogDescription={`O Usuário ${business.title} será deletado!`}
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
    )
}

export default BusinessListComponent