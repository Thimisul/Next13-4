"use client";

import { useState } from "react";
import { MyLabel, MyButton, MyInput, MyCard } from "../../../components/ui";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica para fazer o login
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <MyCard.Card className="w-[350px]">
        <MyCard.CardHeader className="items-center">
          <MyCard.CardTitle>LOGIN</MyCard.CardTitle>
          <MyCard.CardDescription>Acesse seus negócios</MyCard.CardDescription>
        </MyCard.CardHeader>
        <MyCard.CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <MyLabel.Label htmlFor="email">E-mail</MyLabel.Label>
                <MyInput.Input id="email" placeholder="Seu E-mail" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <MyLabel.Label htmlFor="password">Password</MyLabel.Label>
                <MyInput.Input
                  id="password"
                  placeholder="Sua Senha"
                  type="password"
                />
              </div>
            </div>
          </form>
        </MyCard.CardContent>
        <MyCard.CardFooter className="flex justify-center">
          <MyButton.Button className="w-full">Deploy</MyButton.Button>
        </MyCard.CardFooter>
      </MyCard.Card>
    </div>
  );
};

export default Login;
