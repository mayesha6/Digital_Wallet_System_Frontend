/* eslint-disable @typescript-eslint/no-explicit-any */

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ModeToggle } from "./ModeToggler";
import { Link } from "react-router";
import {
  authApi,
  useLogoutMutation,
  useUserInfoQuery,
} from "@/redux/features/auth/auth.api";
import { useAppDispatch } from "@/redux/hook";
import { role } from "@/constants/role";
import { Skeleton } from "@/components/ui/skeleton";
import { toast } from "sonner";
import { ChevronDown } from "lucide-react";

// Navigation links array
const navigationLinks = [
  { href: "/", label: "Home", role: "PUBLIC" },
  { href: "/about", label: "About", role: "PUBLIC" },
  { href: "/features", label: "Features", role: "PUBLIC" }, // dropdown
  { href: "/contact", label: "Contact", role: "PUBLIC" },
  { href: "/faq", label: "FAQ", role: "PUBLIC" },
  { href: "/whychoosescash", label: "Why US", role: "PUBLIC" },
  { href: "/admin", label: "Dashboard", role: role.ADMIN },
  { href: "/admin", label: "Dashboard", role: role.SUPER_ADMIN },
  { href: "/user", label: "Dashboard", role: role.USER },
  { href: "/agent", label: "Dashboard", role: role.AGENT },
];

export default function Navbar() {
  const { data, isLoading } = useUserInfoQuery(undefined);
  const [logout] = useLogoutMutation();
  const dispatch = useAppDispatch();

  const handleLogout = async () => {
    try {
      const res = await logout(undefined).unwrap();
      if (res.success) {
        toast.success("Logged out successfully");
        dispatch(authApi.util.resetApiState());
        localStorage.removeItem("token");
      }
    } catch (err: any) {
      console.error(err);
      toast.error(err?.data?.message || "Logout failed");
    }
  };

  // Feature sub-links
  const featureLinks = [
    { href: "/features", label: "Feature" },
    { href: "/features-details", label: "Feature Details" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b bg-white dark:bg-black">
      <div className="container mx-auto px-4 flex h-16 items-center justify-between gap-4">
        {/* Left side */}
        <div className="flex items-center gap-2">
          {/* Mobile menu trigger */}
          <Popover>
            <PopoverTrigger asChild>
              <Button
                className="group size-8 md:hidden"
                variant="ghost"
                size="icon"
              >
                <svg
                  className="pointer-events-none"
                  width={16}
                  height={16}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 12L20 12"
                    className="origin-center -translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-x-0 group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[315deg]"
                  />
                  <path
                    d="M4 12H20"
                    className="origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)] group-aria-expanded:rotate-45"
                  />
                  <path
                    d="M4 12H20"
                    className="origin-center translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[135deg]"
                  />
                </svg>
              </Button>
            </PopoverTrigger>
            <PopoverContent align="start" className="w-dvh p-1 md:hidden">
              <NavigationMenu className="max-w-none *:w-full">
                <NavigationMenuList className="flex-col items-start gap-0 md:gap-2">
                  {navigationLinks.map((link, index) => {
                    if (link.label === "Features") {
                      return (
                        <NavigationMenuItem key={index} className="w-full">
                          {/* Collapsible Features for mobile */}
                          <details className="w-full">
                            <summary className="py-1.5 cursor-pointer flex justify-between items-center px-2">
                              {link.label}{" "}
                              <ChevronDown className="ml-1 h-4 w-4" />
                            </summary>
                            <ul className="pl-4 flex flex-col gap-1 mt-1">
                              {featureLinks.map((f, i) => (
                                <li key={i}>
                                  <Link
                                    to={f.href}
                                    className="block py-1 text-muted-foreground hover:text-primary"
                                  >
                                    {f.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </details>
                        </NavigationMenuItem>
                      );
                    }

                    // Regular links
                    return (
                      <NavigationMenuItem key={index} className="w-full">
                        <NavigationMenuLink asChild className="py-1.5">
                          <Link to={link.href}>{link.label}</Link>
                        </NavigationMenuLink>
                      </NavigationMenuItem>
                    );
                  })}
                </NavigationMenuList>
              </NavigationMenu>
            </PopoverContent>
          </Popover>

          {/* Main nav */}
          <div className="flex items-center gap-6">
            <Link to="/" className="text-primary hover:text-primary/90">
              SCASH
            </Link>

            <NavigationMenu className="max-md:hidden">
              <NavigationMenuList className="gap-1 lg:gap-2">
                {navigationLinks.map((link, index) => {
                  // Features dropdown
                  if (link.label === "Features") {
                    return (
                      <NavigationMenuItem key={index}>
                        <Popover>
                          <PopoverTrigger asChild>
                            <NavigationMenuLink className="text-muted-foreground hover:text-primary py-1.5 font-medium cursor-pointer">
                              <span className="flex items-center gap-1">
                                {link.label} <ChevronDown />
                              </span>
                            </NavigationMenuLink>
                          </PopoverTrigger>
                          <PopoverContent className="w-40 p-2">
                            <ul className="flex flex-col gap-1">
                              {featureLinks.map((f, i) => (
                                <li key={i}>
                                  <Link
                                    to={f.href}
                                    className="block px-2 py-1 text-muted-foreground hover:bg-primary/10 rounded"
                                  >
                                    {f.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </PopoverContent>
                        </Popover>
                      </NavigationMenuItem>
                    );
                  }

                  // Regular links
                  return (
                    <div key={index}>
                      {(link.role === "PUBLIC" ||
                        link.role === data?.data?.data?.role) && (
                        <NavigationMenuItem>
                          <NavigationMenuLink
                            asChild
                            className="text-muted-foreground hover:text-primary py-1.5 font-medium"
                          >
                            <Link to={link.href}>{link.label}</Link>
                          </NavigationMenuLink>
                        </NavigationMenuItem>
                      )}
                    </div>
                  );
                })}
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-2">
          <ModeToggle />

          {isLoading ? (
            <Skeleton className="h-9 w-20" />
          ) : data?.data?.data?.phone ? (
            <Button onClick={handleLogout} variant="outline">
              Logout
            </Button>
          ) : (
            <Button asChild>
              <Link to="/login">Login</Link>
            </Button>
          )}
        </div>
      </div>
    </header>
  );
}
