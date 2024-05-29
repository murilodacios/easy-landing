import Link from "next/link"
import { Button } from "../ui/button"
import { usePathname } from "next/navigation"
import { Avatar, AvatarImage } from "../ui/avatar"
import { AvatarFallback } from "@radix-ui/react-avatar"
import { Separator } from "../ui/separator"

export const Header = () => {

    const router = usePathname()

    const url = router

    return (
        <div className='border border-t-0 border-x-0'>
            <div className="max-w-screen-xl m-auto flex flex-row justify-between items-center w-full p-6 text-slate-900">
                <img src="/logo-completa.svg" alt="EasyEntregas" className="w-32"/>

                <div className="flex flex-row gap-4">
                    <ul className='flex flex-row gap-6 text-md items-center font-medium'>
                        <li>
                            <Link href="/">
                                A Easy
                            </Link>
                        </li>

                        <li>
                            <Link href="#funcionalidades">
                                Funcionalidades
                            </Link>
                        </li>

                        <li>
                            <Link href="/entregas">
                                Planos
                            </Link>
                        </li>


                    </ul>

                    <Separator orientation="vertical" className="mx-4"/>

                    <div className="flex flex-row gap-2 items-center">

                        <Button className="font-medium p-6 text-red-600 border-red-600" variant="outline">
                            Quero ser parceiro
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}