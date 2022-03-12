import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'

 const NavLink = ({text, options, type}) => {

    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }

      if(type === "dropdown") {
          return (
            <Menu as="div" className="relative inline-block text-left">
            <div>
              <Menu.Button className="inline-flex justify-center w-full rounded-md px-4 py-2 text-base font-medium text-gray-600 hover:text-gray-900">
                {text}
                <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5 pt-1" aria-hidden="true" />
              </Menu.Button>
            </div>
        
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="origin-top-right absolute right-0 mt-1 w-52 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10">
                <div className="py-1">
                    {
                            options?.map((option) => (
                                <Menu.Item>
                                {({ active }) => (
                                  <a
                                    href="#"
                                    className={classNames(
                                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                      'block px-4 py-2 text-sm'
                                    )}
                                  >
                                    {option}
                                  </a>
                                )}
                              </Menu.Item>
                            ))
                    }
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
          )
      }
      
      if(type === "link") {
          return (
            <a className="text-gray-600 text-base font-medium mr-5 hover:text-gray-900">{text}</a>
          )
      }
}




export default NavLink
