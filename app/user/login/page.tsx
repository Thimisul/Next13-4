"use client";
//NEXT
import Image from "next/image";
//REACT
import { useState } from "react";
//UI
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import axios from "axios";
import router from "next/router";

const formSchema = z.object({
  email: z.string().min(2).max(50),
  password: z.string().min(6),
});

const LoginForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try{
      const res = await axios.post(`/api/login/`, values);
      form.reset();
    }catch(e){
      console.log(e)
    }
  }

  return (
    <div className="flex flex-col items-center justify-center h-5/6">
      <Image
        src={"/images/MyBusiness.png"}
        alt={"myBusinessLogo"}
        width={200}
        height={150}
        className="py-10"
      ></Image>

      <Card className=" w-full sm:w-2/3 md:w-1/3 border-none">
        <CardHeader className="items-center">
          <CardTitle>LOGIN</CardTitle>
          <CardDescription>Acesse seus negócios</CardDescription>
        </CardHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <CardContent className="flex flex-col justify-center space-y-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="Seu email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Senha</FormLabel>
                    <FormControl>
                      <Input placeholder="Sua Senha" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
            <CardFooter>
              <Button className="w-full" type="submit">
                Login
              </Button>
            </CardFooter>
          </form>
        </Form>
      </Card>
    </div>
  );
};

export default LoginForm;
