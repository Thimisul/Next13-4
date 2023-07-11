"use client";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Business, BusinessWithOwnerAndDependents, User } from "@prisma/client";
import { ReactNode, useEffect, useState } from "react";
import axios from "axios";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Checkbox } from "@/components/ui/checkbox";

type Props = {
  children: ReactNode;
  business?: BusinessWithOwnerAndDependents;
  type: "edit" | "new";
};

const formSchema = z.object({
  name: z.string().min(2).max(50),
  userOwnerId: z.number(),
  initialValue: z.custom(),
  businessId: z.number(),
  businessDependents: z
    .array(z.number())
    .refine((value) => value.some((item) => item), {
      message: "You have to select at least one item.",
    }),
  usersParticipations: z
  .array(z.number())
  .refine((value) => value.some((item) => item), {
    message: "You have to select at least one item.",
  }),
});



const FormBusiness = (props: Props) => {
  const [openDialog, setOpenDialog] = useState<boolean>(false);
  const [business, setBusiness] = useState<BusinessWithOwnerAndDependents | undefined>(
    props.business
  );
  const [businessDependents, setBusinessDependents] = useState<Business[] | undefined >(props.business?.businessDependents);
  const [usersParticipations, setusersParticipations] = useState<User[] | undefined >(props.business?.usersParticipations.map(participation => participation.user));

  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    values: {
      name: business?.name ? business?.name : "",
      businessId: business?.businessId ? business?.businessId : 1, //Precisa implementar context ou outro modo
      initialValue: business?.initialValue ? Number(business?.initialValue) : 0,
      userOwnerId: business?.userOwnerId ? business?.userOwnerId : 0,
      businessDependents: businessDependents ? businessDependents.map((business) => business.id) : [], //precisa retornar valor correto
      usersParticipations: usersParticipations ?  usersParticipations.map((user) => user.id) : []
    },
    resetOptions: { keepIsSubmitted: true },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    // if (business?.id) {
    //   const res = await axios.put(`/api/business/${business?.id}`, values);
    // } else {
    //   const res = await axios.post(`/api/business/`, values);
    //   console.log(res);
    // }
    console.log(values)
    router.replace("/business");
    setOpenDialog(false);
    form.reset();
  }

  async function handleConfirmDelete() {
    axios
      .delete(`/api/business/${business?.id}`)
      .then(() => router.replace("/business"))
      .catch((e) => console.log(e));
    setOpenDialog(false);
    form.reset();
  }

  return (
    <Dialog open={openDialog} onOpenChange={setOpenDialog}>
      <DialogTrigger asChild>{props.children}</DialogTrigger>
      <DialogContent className="w-full sm:w-2/3 md:w-1/3">
        <DialogHeader>
          <DialogTitle>
            {business?.name ? business?.name : "Novo usuário"}
          </DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col space-y-2 "
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nome</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="initialValue"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Valor inicial</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
             <FormLabel>Participam do Negócio</FormLabel>
             {usersParticipations && usersParticipations?.map((user) => (
              <FormField
                key={user.id}
                control={form.control}
                name="usersParticipations"
                render={({ field }) => {
                  return (
                    <FormItem
                      key={user.id}
                      className="flex flex-row items-start space-x-3 space-y-0"
                    >
                      <FormControl>
                        <Checkbox
                          checked={field.value?.includes(user.id)}
                          onCheckedChange={(checked) => {
                            return checked
                              ? field.onChange([...field.value, user.id])
                              : field.onChange(
                                  field.value?.filter(
                                    (value) => value !== user.id
                                  )
                                );
                          }}
                        />
                      </FormControl>
                      <FormLabel className="text-sm font-normal">
                        {user.name}
                      </FormLabel>
                    </FormItem>
                  );
                }}
              />
            ))}
            <FormLabel>Negócios filhos</FormLabel>
            {businessDependents && businessDependents?.map((business) => (
              <FormField
                key={business.id}
                control={form.control}
                name="businessDependents"
                render={({ field }) => {
                  return (
                    <FormItem
                      key={business.id}
                      className="flex flex-row items-start space-x-3 space-y-0"
                    >
                      <FormControl>
                        <Checkbox
                          checked={field.value?.includes(business.id)}
                          onCheckedChange={(checked) => {
                            return checked
                              ? field.onChange([...field.value, business.id])
                              : field.onChange(
                                  field.value?.filter(
                                    (value) => value !== business.id
                                  )
                                );
                          }}
                        />
                      </FormControl>
                      <FormLabel className="text-sm font-normal">
                        {business.name}
                      </FormLabel>
                    </FormItem>
                  );
                }}
              />
            ))}
            <DialogFooter>
              {business && (
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button variant={"destructive"}>Deletar</Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>Tem certeza?</AlertDialogTitle>
                      <AlertDialogDescription>
                        O Usuário de nome {business.name} será deletado.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel
                        onClick={() => {
                          setOpenDialog(false);
                          form.reset();
                        }}
                      >
                        Cancel
                      </AlertDialogCancel>
                      <AlertDialogAction onClick={handleConfirmDelete}>
                        Continue
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              )}
              <Button type="submit">Salvar</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default FormBusiness;
