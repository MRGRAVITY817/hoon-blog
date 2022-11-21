import { Menu, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { MenuIcon } from '@heroicons/react/outline';
import Link, { LinkProps } from 'next/link';
import { signOut, useSession } from 'next-auth/react';
import { useSetRecoilState } from 'recoil';
import { ToastState } from 'src/states/toastStates';
import { ReactChild } from 'react';

export const MobileNav = () => {
  const { data: session, status } = useSession();
  const setToast = useSetRecoilState(ToastState);
  const signUserOut = async () => {
    setToast({
      isOpen: true,
      messageType: 'confirm',
      message: 'Sign out?',
      confirm: async () => {
        try {
          await signOut();
          setToast({
            isOpen: true,
            messageType: 'ok',
            message: 'Signed user out',
            confirm: undefined
          });
          return;
        } catch (error) {
          setToast({
            isOpen: true,
            messageType: 'error',
            message: 'Failed to sign out',
            confirm: undefined
          });
          return;
        }
      }
    });
  };
  return (
    <div className="z-50 w-56 text-right">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="pt-2 outline-none">
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
          <Menu.Items className="ring-1 ring-black ring-opacity-5 focus:outline-none bg-bright dark:bg-main absolute right-0 flex flex-col w-56 gap-4 px-4 py-4 mt-2 origin-top-right rounded-md shadow-lg">
            {status === 'unauthenticated' ? (
              <Menu.Item>
                <MyLink href="/auth/signin">Sign In</MyLink>
              </Menu.Item>
            ) : (
              <Menu.Item>
                <p className="text-base">Hello, {session?.user?.name}</p>
              </Menu.Item>
            )}
            <Menu.Item>
              <hr />
            </Menu.Item>
            <Menu.Item>
              <MyLink href="/">Home</MyLink>
            </Menu.Item>
            <Menu.Item>
              <MyLink href="/blog">Blog</MyLink>
            </Menu.Item>
            <Menu.Item>
              <MyLink href="/bits">Bits & Pieces</MyLink>
            </Menu.Item>
            <Menu.Item>
              <MyLink href="/projects">Projects</MyLink>
            </Menu.Item>
            {status === 'authenticated' && (
              <>
                <Menu.Item>
                  <hr />
                </Menu.Item>
                <Menu.Button as="button" className={`text-left`}>
                  <button onClick={() => signUserOut()}>Sign out</button>
                </Menu.Button>
              </>
            )}
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};

const MyLink: React.FC<LinkProps & { children: ReactChild }> = ({
  href,
  children,
  ...rest
}) => {
  return (
    <Link href={href}>
      <a
        {...rest}
        className="hover:bg-main hover:text-bright flex items-center justify-start transition-all rounded-lg"
      >
        {children}
      </a>
    </Link>
  );
};
