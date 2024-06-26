"use client";
import { useState } from "react";
import {
    ChevronDownIcon,
    ChevronUpIcon,
    UserCircleIcon,
} from "@heroicons/react/24/outline";

const UsersList = () => {
    return (
        <div className=" rounded float-right grid grid-cols-5 mt-2 bg-gray-200 z-50">
            <div className="mx-2 col-span-1 my-2 hover:bg-gray-300 mt-2 ">
                <UserCircleIcon className="h-8 w-8 text-gray-900" />
            </div>
            <div className="mx-2 col-span-4 my-2 hover:bg-gray-300 mt-2 ">
                <p>Ebenezer Acquah</p>
            </div>
            <div className="mx-2 col-span-1 my-2 hover:bg-gray-300 mt-1 mb-2">
                <UserCircleIcon className="h-8 w-8 text-gray-900" />
            </div>
            <div className="mx-2 col-span-4 my-2 pl-2 hover:bg-gray-300 mt-1 mb-2 ">
                <p>Emmanuel Amoako</p>
            </div>
        </div>
    );
};

export default function Top() {
    const [isUserDropped, setIsUserDropped] = useState(false);
    const UserDropDown = () => {
        setIsUserDropped(!isUserDropped);
    };

    return (
        <div className="">
            <div className=" float-right w-11/12 h-16 bg-white">
                <div className="flex float-right items-center rounded h-12 my-2 mx-3 bg-gray-200 w-52 ">
                    <div className="mx-2">
                        <UserCircleIcon className="h-8 w-8 text-gray-900" />
                    </div>
                    <div>
                        <p>Ebenezer Acquah</p>
                    </div>
                    <div onClick={UserDropDown}>
                        {isUserDropped ? (
                            <ChevronUpIcon className="h-6 w-6 text-gray-900" />
                        ) : (
                            <ChevronDownIcon className="h-6 w-6 text-gray-900" />
                        )}
                    </div>
                </div>
                {isUserDropped && <UsersList />}
            </div>
        </div>
    );
}
