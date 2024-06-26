import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '../../../ui/sheet'
import { Fragment } from 'react'
import { Link, NavLink } from 'react-router-dom'
import LogoIcon from '../images/LogoIcon'
import { AiOutlineMenu } from 'react-icons/ai'
import { FiPhoneCall } from 'react-icons/fi'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { navbarData } from '../__mock__/navbarData'
import './navbarLinks.css'

const NavbarLinks = () => {
  return (
    <div className=" bg-gray-50">
      <div className="max-w-[1320px] m-auto px-[10px]">
        <div className="w-full flex items-center justify-between">
          <ul className="navbarLinks">
            {navbarData?.map((nav) => {
              return (
                <Fragment key={nav.id}>
                  <li className="navbarDropdown">
                    {nav.id == 1 ? (
                      <>
                        <a className="mainMenu cursor-pointer">
                          <div className="mainMenu">
                            <AiOutlineMenu />
                            <p>{nav.name}</p>
                            <MdKeyboardArrowDown size={26} className="arrow" />
                          </div>
                        </a>
                        <div className="dropdown">
                          {nav.dropdown.map((dropMenu, _) => {
                            return (
                              <Fragment key={_}>
                                <Link to={`/${dropMenu.link}`}>
                                  <p style={{ fontSize: 20 }}>{dropMenu.image}</p>
                                  <p>{dropMenu.name}</p>
                                </Link>
                              </Fragment>
                            )
                          })}
                        </div>
                      </>
                    ) : nav.type == 'dropdown' ? (
                      <>
                        <Link to={`/${nav.link}`} id="menus">
                          <p>{nav.name}</p>
                          <MdKeyboardArrowDown size={26} className="arrow" />
                        </Link>
                        <div className="dropdown">
                          {nav.dropdown.map((dropMenu, _) => {
                            return (
                              <Fragment key={_}>
                                <Link to={`/${dropMenu.link}`}>{dropMenu.name}</Link>
                              </Fragment>
                            )
                          })}
                        </div>
                      </>
                    ) : (
                      <Link to={`/${nav.link}`} id="menus2">
                        {nav.name}
                      </Link>
                    )}
                  </li>
                </Fragment>
              )
            })}
          </ul>

          <Sheet className="hidden mx-auto" id="sheet">
            <SheetTrigger className="bg-white rounded hidden" id="sheet">
              <AiOutlineMenu size={25} />
            </SheetTrigger>
            <SheetContent className={'w-1/2'}>
              <SheetHeader>
                <SheetTitle className="flex items-center justify-center py-8">
                  <Link to="/">
                    <LogoIcon />
                  </Link>
                </SheetTitle>
                <SheetDescription className="flex flex-col mx-auto items-center gap-6 text-[20px] font-semibold">
                  {navbarData?.map((nav) => {
                    return (
                      <Fragment key={nav.id}>
                        {nav.id > 1 ? (
                          <Fragment key={nav.id}>
                            <NavLink to={`/${nav.link}`} key={nav.id} className="hover:text-primary transition-all">
                              {nav.name}
                            </NavLink>
                          </Fragment>
                        ) : (
                          <Fragment key={nav.id}></Fragment>
                        )}
                      </Fragment>
                    )
                  })}
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>

          <div className="navigationTel">
            <Link to="/contact">
              <FiPhoneCall />
              <p>(+996) 555 55-55-55</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavbarLinks
