import React, { useEffect, useRef } from 'react'
import { FiCrosshair } from 'react-icons/fi'
import Button from './Button'
import useSideBarStore from '../state/useSideBarStore'

const SideBar = () => {
    const { toggleSideBar, isSideBarOpen, closeSideBar } = useSideBarStore();
    const sideBarRef = useRef();

    useEffect(() => {
        function handleOutsideClick(event) {
            if (sideBarRef.current && sideBarRef.current.contains(event.target)) {
                closeSideBar();
            }
        }

        if (isSideBarOpen) {
            document.addEventListener("mousedown", handleOutsideClick)
        }

        return () => {
            document.removeEventListener("mousedown", handleOutsideClick)
        }

    }, [isSideBarOpen, closeSideBar])

    return (
        <div className='md:hidden w-2/3 h-auto absolute bg-primary text-white right-0 top-8 flex justify-between p-2 translate-x-0'>
            <ul className="grid gap-y-4">
                <li>Home</li>
                <li>Explore</li>
                <li>Genres</li>
                <li>Top Rated</li>
            </ul>
            <Button onClick={toggleSideBar} className="self-start"><FiCrosshair /></Button>
        </div>
    )
}

export default SideBar