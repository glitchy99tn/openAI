import { useState } from 'react'
import { Dialog, Popover } from '@headlessui/react'
import { logo } from '../assets'

import {
    Bars3Icon,
    XMarkIcon,
} from '@heroicons/react/24/outline'

import { Link } from 'react-router-dom';


export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <header className="bg-[#181818]">
            <nav className="mx-auto flex  items-center justify-between p-6 mx-2 sm:px-8 sm:mx-8" aria-label="Global">
                <div className="flex lg:flex-1">
                    <Link to="/" className="-m-1.5 p-1.5">
                        <img className="h-14 w-auto" src={logo} alt="" />
                    </Link>
                </div>


                <Popover.Group className=" lg:flex lg:gap-x-12">

                    <Link to="/create-post" className="text-sm font-semibold leading-6 text-gray-900 ">
                        <button
                            type="button"
                            className="flex rounded-none items-center justify-center px-4 py-3  text-base font-medium  shadow-sm text-[#181818] bg-zinc-50 hover:bg-zinc-200 hover:text-zinc-900 sm:px-8">
                            Generate
                        </button>
                    </Link>

                </Popover.Group>

            </nav>


        </header>
    )
}
