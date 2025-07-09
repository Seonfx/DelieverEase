'use client';

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { FaGoogle } from 'react-icons/fa';
import { Mail, CheckCircle2, Package, Lock, User, XCircle } from 'lucide-react';
import type { LucideProps } from 'lucide-react';
import type { ComponentType, ChangeEvent } from 'react';
import Link from 'next/link';

interface FloatingLabelInputProps {
  id: string;
  label: string;
  type?: string;
  defaultValue?: string;
  icon?: ComponentType<LucideProps>;
  rightIcon?: ComponentType<LucideProps>;
  isEmail?: boolean;
}

function FloatingLabelInput({ id, label, type = "text", defaultValue = "", icon: Icon, isEmail = false }: FloatingLabelInputProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [value, setValue] = useState(defaultValue);
  const [isValid, setIsValid] = useState(true);
  const [isTouched, setIsTouched] = useState(false);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const validateEmail = (email: string) => {
    if (!email) {
      setIsValid(true);
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsValid(emailRegex.test(email));
  };
  
  const handleBlur = () => {
    setIsFocused(false);
    if(isEmail) {
      setIsTouched(true);
      validateEmail(value);
    }
  }

  const hasValue = value !== "";
  const isLabelFloating = isFocused || hasValue;
  
  const showSuccessIcon = isEmail && isValid && hasValue && isTouched;
  const showErrorIcon = isEmail && !isValid && isTouched;

  return (
    <div className="relative">
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        {Icon && <Icon className="h-6 w-6 text-gray-400" />}
      </div>
      <Input
        type={type}
        id={id}
        value={value}
        onFocus={() => setIsFocused(true)}
        onBlur={handleBlur}
        onChange={handleInputChange}
        className={`h-14 pl-12 pr-10 text-base ${!isValid && isTouched ? 'border-red-500' : ''}`}
      />
      <Label
        htmlFor={id}
        className={`absolute left-12 transition-all duration-300 ease-in-out pointer-events-none
          ${isLabelFloating 
            ? 'top-1 -translate-y-0 text-xs' 
            : 'top-1/2 -translate-y-1/2 text-base text-gray-500'}
          ${!isValid && isTouched ? 'text-red-600' : isFocused ? 'text-blue-600' : ''}`
        }
      >
        {label}
      </Label>
      
      {showSuccessIcon && (
         <div className="absolute inset-y-0 right-0 flex items-center pr-3">
            <CheckCircle2 className="h-5 w-5 text-green-500" />
         </div>
      )}
      {showErrorIcon && (
        <div className="group absolute inset-y-0 right-0 flex items-center pr-3">
           <XCircle className="h-5 w-5 text-red-500" />
           <div className="absolute right-8 w-max bg-gray-800 text-white text-xs rounded-md px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
             Please enter a valid email address.
           </div>
        </div>
     )}
    </div>
  );
}


function SignInForm() {
  return (
    <div className="space-y-6">
      <FloatingLabelInput id="email" label="Email Address" type="email" defaultValue="ialirezamp@gmail.com" icon={Mail} isEmail={true} />
      <FloatingLabelInput id="password" label="Password" type="password" icon={Lock} />
      <div className="flex items-center justify-end">
        <Link href="/forgot-password" passHref>
          <Button variant="link" className="px-0">
            Forgot Password?
          </Button>
        </Link>
      </div>
      <Button className="w-full" size="lg">
        Continue
      </Button>
    </div>
  );
}

function SignUpForm() {
  return (
    <div className="space-y-6">
       <FloatingLabelInput id="fullname" label="Full Name" type="text" icon={User} />
      <FloatingLabelInput id="email-signup" label="Email Address" type="email" icon={Mail} isEmail={true} />
      <FloatingLabelInput id="password-signup" label="Password" type="password" icon={Lock} />
      <Button className="w-full" size="lg">
        Continue
      </Button>
    </div>
  );
}


export default function LoginPage() {
    const [mode, setMode] = useState('signin');

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900">
      <header className="py-12">
        <div className="flex justify-center items-center">
          <Package className="h-10 w-10 mr-3" />
          <h1 className="text-4xl font-bold">DeliverEase</h1>
        </div>
      </header>
      
      <main className="flex-grow flex items-center justify-center px-4">
        <div className="w-full max-w-md">
          <Card>
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-3xl">
                 {mode === 'signin' ? 'Welcome Back' : 'Create an Account'}
              </CardTitle>
              <CardDescription className="text-base pt-2">
                {mode === 'signin' ? 'Welcome Back, Please enter Your details' : 'Please fill in the details to get started.'}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ToggleGroup 
                type="single" 
                defaultValue="signin" 
                className="grid grid-cols-2 gap-1 mb-8 bg-muted p-1 rounded-lg"
                onValueChange={(value) => value && setMode(value)}
                >
                <ToggleGroupItem value="signin" aria-label="Toggle sign in" className="rounded-md py-3 text-base">
                  Sign In
                </ToggleGroupItem>
                <ToggleGroupItem value="signup" aria-label="Toggle sign up" className="rounded-md py-3 text-base">
                  Signup
                </ToggleGroupItem>
              </ToggleGroup>
              
              {mode === 'signin' ? <SignInForm /> : <SignUpForm />}
              
              <div className="relative my-8">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t" />
                </div>
                <div className="relative flex justify-center text-sm uppercase">
                  <span className="bg-card px-2 text-muted-foreground">
                    Or Continue With
                  </span>
                </div>
              </div>
              
              <div className="grid grid-cols-1 gap-4">
                <Button variant="outline" size="lg" className="w-full">
                  <FaGoogle className="h-6 w-6" />
                  Continue with Google
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
} 