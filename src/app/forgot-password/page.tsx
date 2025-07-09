'use client';

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Mail, Package, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import type { LucideProps } from 'lucide-react';
import type { ComponentType, ChangeEvent } from 'react';

interface FloatingLabelInputProps {
    id: string;
    label: string;
    type?: string;
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    icon?: ComponentType<LucideProps>;
}

function FloatingLabelInput({ id, label, type = "text", value, onChange, icon: Icon }: FloatingLabelInputProps) {
    const [isFocused, setIsFocused] = useState(false);
    const hasValue = value !== "";
    const isLabelFloating = isFocused || hasValue;

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
        onBlur={() => setIsFocused(false)}
        onChange={onChange}
        className="h-14 pl-12 pr-10 text-base"
      />
      <Label
        htmlFor={id}
        className={`absolute left-12 transition-all duration-300 ease-in-out pointer-events-none
          ${isLabelFloating 
            ? 'top-1 -translate-y-0 text-xs text-blue-600' 
            : 'top-1/2 -translate-y-1/2 text-base text-gray-500'}`
        }
      >
        {label}
      </Label>
    </div>
  );
}

export default function ForgotPasswordPage() {
    const [email, setEmail] = useState('');

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
                <CardTitle className="text-3xl">Forgot Password</CardTitle>
                <CardDescription className="text-base pt-2">
                    No problem. Enter your email and we'll send you a reset link.
                </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="space-y-6">
                        <FloatingLabelInput 
                            id="email" 
                            label="Email Address" 
                            type="email" 
                            icon={Mail}
                            value={email}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                         />
                        <Button className="w-full" size="lg">
                            Send Reset Link
                        </Button>
                    </div>
                    <div className="mt-6 text-center">
                        <Link href="/" passHref>
                            <Button variant="link">
                                <ArrowLeft className="h-4 w-4 mr-2" />
                                Back to Sign In
                            </Button>
                        </Link>
                    </div>
                </CardContent>
            </Card>
            </div>
        </main>
    </div>
  );
} 