"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { account } from "@/lib/appwrite";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useToast } from "@/hooks/use-toast";
import Image from "next/image";

export function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();
  const { toast } = useToast();
  const pathname = usePathname();

  const isDashboard =
    pathname?.startsWith("/customer/dashboard") ||
    pathname?.startsWith("/admin/dashboard");

  useEffect(() => {
    const checkSession = async () => {
      try {
        const session = await account.getSession("current");
        setIsLoggedIn(!!session);
      } catch (error) {
        console.error("Session check error:", error);
        setIsLoggedIn(false);
      }
    };
    checkSession();
  }, []);

  const handleSignOut = async () => {
    try {
      await account.deleteSession("current");
      setIsLoggedIn(false);
      toast({
        title: "Signed out",
        description: "You have been successfully signed out.",
      });
      router.push("/");
    } catch (error) {
      console.error("Sign out error:", error);
      toast({
        title: "Sign out failed",
        description: "There was an error signing out. Please try again.",
        variant: "destructive",
      });
    }
  };

  const navItems = isDashboard
    ? [
        {
          href:
            pathname === "/customer/dashboard"
              ? "/customer/dashboard"
              : "/admin/dashboard",
          label: "Dashboard",
        },
        { href: "/customer/design", label: "Design" },
      ]
    : [
        { href: "/", label: "Home" },
        { href: "/services", label: "Services" },
        { href: "/about", label: "About" },
        { href: "/contact", label: "Contact" },
      ];

  return (
    <header className="bg-background shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/brand.jpg?height=48&width=48&text=Logo"
            alt="BrandPrint Logo"
            width={48}
            height={48}
            className="rounded-full w-12 h-12 ring-4 ring-blue-800 object-cover"
          />
          <span className="text-2xl font-bold">Pronto Grafix</span>
        </Link>
        <nav className="hidden md:block">
          <ul className="flex space-x-4 md:space-x-2 text-sm lg:space-x-4 lg:text-base">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-primary">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="hidden md:flex items-center space-x-2">
          {isLoggedIn ? (
            <Button variant="outline" onClick={handleSignOut}>
              Sign Out
            </Button>
          ) : (
            <div className="flex gap-2">
              <Link href="/customer/login" passHref>
                <Button>Customer Login</Button>
              </Link>
              <Link href="/admin/login" passHref>
                <Button variant="outline">Admin Login</Button>
              </Link>
            </div>
          )}
        </div>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
              <SheetDescription>Navigate through our site</SheetDescription>
            </SheetHeader>
            <div className="py-4">
              <Tabs defaultValue={pathname} className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  {navItems.map((item) => (
                    <TabsTrigger key={item.href} value={item.href} asChild>
                      <Link href={item.href}>{item.label}</Link>
                    </TabsTrigger>
                  ))}
                </TabsList>
              </Tabs>
            </div>
            <div className="mt-4">
              {isLoggedIn ? (
                <Button
                  variant="outline"
                  onClick={handleSignOut}
                  className="w-full"
                >
                  Sign Out
                </Button>
              ) : (
                <div className="flex gap-2 flex-col md:flex-row items-center justify-center">
                  <Link href="/customer/login" passHref>
                    <Button>Customer Login</Button>
                  </Link>
                  <Link href="/admin/login" passHref>
                    <Button variant="outline">Admin Login</Button>
                  </Link>
                </div>
              )}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
