"use client"
import AlertComponent from "@/components/Alert"
import { TableBody, TableCell, TableRow } from "components/ui/table"
import { Edit, X } from "lucide-react"
import { useEffect, useState } from "react"
import { Button } from "components/ui/button"
import FormUser from "./form"
import { userType } from "./page"

const UsersListComponent = () => {
    const [usersList, setUsersList] = useState<userType[]>([])

    useEffect(() => {
        async function getUsers() {
            const response = await fetch("https://swapi.dev/api/people")
            const data = await response.json()
            console.log(data.results)
            setUsersList(data.results)
        }
        getUsers()
    },[])

    return (
        <TableBody>
            {usersList.map((user) => (
              <TableRow key={user.name}>
                <TableCell className="font-medium p-1">
                  {user.name}
                </TableCell>
                <TableCell className="font-medium p-1 text-right">
                  <FormUser type="edit" name={user.name}>
                    <Button
                      variant={"secondary"}
                      className="p-0 m-0 h-4 w-4 mr-2"
                    >
                      <Edit className="rounded border h-4 w-4"></Edit>
                    </Button>
                  </FormUser>
                  <AlertComponent
                    alertDialogTitle={"Tem certeza?"}
                    alertDialogDescription={`O Usuário ${user.name} será deletado!`}
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

export default UsersListComponent