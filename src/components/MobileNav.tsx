import { Menu, Transition } from '@headlessui/react';
import { Children, Fragment } from 'react';
import { MenuIcon } from '@heroicons/react/outline';
import Link, { LinkProps } from 'next/link';

export const MobileNav = () => {
  return (
    <div className="z-50 w-56 text-right">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="pt-2">
            <MenuIcon className="w-6" />
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
          <Menu.Items className="ring-1 ring-black ring-opacity-5 focus:outline-none absolute right-0 flex flex-col w-56 mt-2 origin-top-right bg-white rounded-md shadow-lg">
            <Menu.Item>
              <MyLink href="/">Home</MyLink>
            </Menu.Item>
            <Menu.Item>
              <MyLink href="/blog">Blog</MyLink>
            </Menu.Item>
            <Menu.Item>
              <MyLink href="/projects">Projects</MyLink>
            </Menu.Item>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};

const MyLink: React.FC<LinkProps> = ({ href, children, ...rest }) => {
  return (
    <Link href={href}>
      <a
        {...rest}
        className="hover:bg-main hover:text-bright flex items-center justify-start py-2 pl-4 m-1 transition-all rounded-lg"
      >
        {children}
      </a>
    </Link>
  );
};
