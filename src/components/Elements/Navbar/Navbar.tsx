import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Navbar, Collapse, Typography, IconButton } from '@material-tailwind/react'
import React from 'react'
import { NavLink } from 'react-router-dom'

export type NavBarProps = {
  title: string
  navLinks: { label: string; url: string }[]
}

export type NavListProps = {
  navLinks: { label: string; url: string }[]
}

function NavList({ navLinks }: NavListProps) {
  return (
    <ul className='my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6'>
      {navLinks.map((link, index) => (
        <Typography key={index} as='li' variant='small' color='blue-gray' className='p-1 font-bold'>
          <NavLink
            to={link.url}
            className='flex items-center hover:text-blue-500 transition-colors'
          >
            {link.label}
          </NavLink>
        </Typography>
      ))}
    </ul>
  )
}

export function NavbarSimple({ title, navLinks }: NavBarProps) {
  const [openNav, setOpenNav] = React.useState(false)

  const handleWindowResize = () => window.innerWidth >= 960 && setOpenNav(false)

  React.useEffect(() => {
    window.addEventListener('resize', handleWindowResize)

    return () => {
      window.removeEventListener('resize', handleWindowResize)
    }
  }, [])

  return (
    <Navbar className='mx-auto max-w-screen-xl px-6 py-3'>
      <div className='flex items-center justify-between text-blue-gray-900'>
        <Typography as='a' variant='h6' className='mr-4 py-1.5'>
          {title}
        </Typography>
        <div className='hidden lg:block'>
          <NavList navLinks={navLinks} />
        </div>
        <IconButton
          variant='text'
          className='ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden'
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className='h-6 w-6' strokeWidth={2} />
          ) : (
            <Bars3Icon className='h-6 w-6' strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList navLinks={navLinks} />
      </Collapse>
    </Navbar>
  )
}
