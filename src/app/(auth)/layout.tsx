"use client"
import Link from "next/link"
import {usePathname} from "next/navigation"
import "./styles.css"
const navLinks =[
    {name: "Register", href: "/register"},
    {name: "Login", href: "/login"},
    {name:"Forgot Password", href: "/forgot-password"},
];

export default function AuthLayout({children,}:{children: React.ReactNode}){

    return(
        <div> {navLinks.map((link)=>{

            const pathname = usePathname();
            const isActive = pathname === link.href || (pathname.startsWith(link.href) && link.href !== "/")
            
            
            return (
            <Link
                className={isActive ? "font-bold mr-4" : "text-blue-500 mr-4"}
                href={link.href}
                key={link.name}>
                {link.name}<br/>
            </Link>
            )
        })}
        {children}
        </div>
    )

}