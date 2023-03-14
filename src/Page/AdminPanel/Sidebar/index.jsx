import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Sidebar.scss'
import { AiOutlineMenu } from 'react-icons/ai';
import { GoChevronDown } from 'react-icons/go';
import { img_logo } from "../../../Assets/AdminPanel"
import { BiCertification } from 'react-icons/bi';
import Headers from './Headers';
import { useLocation } from 'react-router-dom';
import { DrawerScreens } from "../../../shared/drawer"

function Sidebar({ subpage }) {
    const [parth, setparth] = useState('/admin/dashboard')
    const location = useLocation()
    const [open, setOpen] = useState(false)
    const [open1, setOpen1] = useState(false)

    useEffect(() => {
        setparth(location.pathname)
        window.scroll(0, 0)
    }, [location])


    const Menu = () => {
        return DrawerScreens.map((e, i) => {
            return (
                <>
                    {e.submenu
                        ?
                        <div onClick={() => { setOpen1(true) }} key={i}>
                            <li className={`sidebar-dropdown py-2 me-3 ${open1}`} key={i} >
                                <Link to={e.path}>
                                    <span className='d-flex align-items-center'>
                                        <e.icon style={{ fontSize: '18px' }} className='text-light' />
                                        <h6 className='mx-3 my-0 text-light' style={{ fontSize: '14px' }}>{e.name}</h6>
                                    </span>
                                    <GoChevronDown style={{ fontSize: '18px' }} className='text-light' />
                                </Link>
                            </li>
                            <div className="sidebar-submenu" style={{ display: `${open1 ? 'block' : 'none'}` }}>
                                <ul className='p-0' style={{ listStyle: 'none' }}>
                                    {e.submenu.map((menu, i) => {
                                        return (
                                            <li className={`py-2 ps-4 me-3 ${parth === menu.path && 'MenuActive'}`} key={i} >
                                                <Link to={menu.path}>
                                                    <span className='d-flex align-items-center'>
                                                        <BiCertification style={{ fontSize: '14px', color: "#fff" }} />
                                                        <h6 className='mx-2 my-0 text-light' style={{ fontSize: '14px' }}>{menu.name}</h6>
                                                    </span>
                                                </Link>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </div>
                        :
                        <li className={`py-2 me-3 ${parth === e.path && 'MenuActive'}`} key={i} onClick={() => { setOpen1(!true) }}>
                            <Link to={e.path}>
                                <span className='d-flex align-items-center'>
                                    <e.icon style={{ fontSize: '18px' }} className='text-light' />
                                    <h6 className='mx-3 my-0 text-light' style={{ fontSize: '14px' }}>{e.name}</h6>
                                </span>
                            </Link>
                        </li>
                    }
                </>
            )
        })
    }

    return (
        <div>
            <div className={`page-wrapper chiller-theme ${!open && 'toggled'} `}>
                <nav id="sidebar" className="sidebar-wrapper">
                    <div className="sidebar-content">
                        <div className="sidebar-header my-1 d-flex">
                            <div className="w-25 d-flex align-items-center">
                                <div id="close-sidebar " className='ms-2' onClick={() => { setOpen(!open) }}>
                                    <AiOutlineMenu className='text-light' style={{ fontSize: "24px" }} />
                                </div>
                            </div>
                            <div className="w-75">
                                <img src={img_logo} alt="" className='img-fluid' />
                            </div>
                        </div>
                        <div className="sidebar-menu">
                            <ul style={{ listStyle: "none", padding: '0' }}>
                                <Menu />
                            </ul>
                        </div>
                    </div>
                </nav>
                <main className="page-content">
                    <div className="">
                        <Headers setopan={setOpen} opan={open} />
                        {subpage}
                    </div>
                </main>
            </div>
        </div>
    )
}

export default Sidebar