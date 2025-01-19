"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";

function Login() {
  const router = useRouter();
  const [loginData, setLoginData] = React.useState({
    username: "",
    email: "",
    password: "",
    phone: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginData({
      ...loginData,
      [e.target.id]: e.target.value
    });
  };

  const handleLogin = async () => {
    const myHeaders = new Headers();
    myHeaders.append("accept", "application/json");
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      username: loginData.username,
      email: loginData.email,
      password: loginData.password,
      phone_number: loginData.phone,
      input_code: 0
    });

    const requestOptions: RequestInit = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };

    fetch("http://3.111.196.92:8020/api/v1/login/", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if (result.message === "Successfully Logged in") {
          router.push("/");
        } else {
          // toast({
          //   title: "Invalid Credentials",
          //   description: "Please enter valid credentials",
          //   variant: "destructive"
          // });
          alert("Invalid Credentials");
        }
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="h-screen w-full flex justify-center items-center">
      <React.Suspense fallback={<div>Loading</div>}>
        <Card className="w-[450px]">
          <CardHeader>
            <CardTitle>Login To Continue</CardTitle>
            <CardDescription>Please enter your credentials to continue</CardDescription>
          </CardHeader>
          <CardContent>
            <form>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="username">Username</Label>
                  <Input onChange={handleChange} id="username" placeholder="Eg. karanjoshi1206" />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="email">Email</Label>
                  <Input onChange={handleChange} id="email" placeholder="Eg. joshikaran392@gmail.com" />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="password">Password</Label>
                  <Input onChange={handleChange} id="password" placeholder="Enter a strong password" type="password" />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="phone_number">Phone</Label>
                  <Input onChange={handleChange} id="phone_number" placeholder="Eg. 8532055221" type="tel" />
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline">Cancel</Button>
            <Button onClick={handleLogin}>Login</Button>
          </CardFooter>
        </Card>
      </React.Suspense>
    </div>
  );
}

export default Login;
