import React from 'react';
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline';
import TaskIcon from '@mui/icons-material/Task';
import DescriptionIcon from '@mui/icons-material/Description';
import BoltIcon from '@mui/icons-material/Bolt';
import { Link } from 'react-router-dom';

// Navigation links
const navigation = [
  { name: 'Dashboard', href: '#', current: true },
  { name: 'Result', href: '#', current: false },
  { name: 'Submit', href: '#', current: false },
];

// Utility function to conditionally apply classes
function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

// Cards data with title, description, and icon for each card
const cardsData = [
  {
    title: 'Submit Project',
    description: 'Upload your project for an instant plagiarism check',
    icon: 'task', // Icon for the first card
    buttonLink: '/upload', // Link for the button in the first card
  },
  {
    title: 'View Result',
    description: 'Get detailed insights on your submissions.',
    icon: 'description', // Icon for the second card
    buttonLink: '/results', // Link for the button in the second card
  },
  {
    title: 'Dashboard',
    description: 'Track all your project submissions.',
    icon: 'bolt', // Icon for the third card
    buttonLink: '/dashboard', // Link for the button in the third card
  },
];

// Icon component mapping
const iconMap = {
  task: <TaskIcon style={{ fontSize: '48px' }} />,  // Map 'task' to TaskIcon
  description: <DescriptionIcon style={{ fontSize: '48px' }} />, // Map 'description' to DescriptionIcon
  bolt: <BoltIcon style={{ fontSize: '48px' }} />, // Map 'bolt' to BoltIcon
};

// Card component
const Card = ({ title, description, icon, buttonLink }) => {
  return (
    <div className="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-96 transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
      <div className="p-4 text-center">
        <h5 className="mb-2 text-slate-800 text-xl font-semibold">{title}</h5>
        
        {/* Render the icon between title and description */}
        <div className="mb-4 flex justify-center">
          {iconMap[icon]}  {/* Render the appropriate icon */}
        </div>

        <p className="text-slate-600 leading-normal font-light">{description}</p>
        
        {/* Render the button with unique link for each card */}
        <Link to={buttonLink}>
          <button className="rounded-md bg-slate-800 py-2 px-4 mt-6 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
            Go to {title}
          </button>
        </Link>
      </div>
    </div>
  );
};

// CardList component that maps over the cardsData array
const CardList = () => {
  return (
    <div className="flex flex-wrap gap-6 justify-center">
      {cardsData.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          description={card.description}
          icon={card.icon}
          buttonLink={card.buttonLink} // Pass unique button link
        />
      ))}
    </div>
  );
};

// Main component for the Hero section
const Hero2 = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <Disclosure as="nav" className="bg-gray-800 sticky top-0 z-10">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              {/* Mobile menu button */}
              <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open main menu</span>
                <Bars3Icon aria-hidden="true" className="block size-6 group-data-[open]:hidden" />
                <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-[open]:block" />
              </DisclosureButton>
            </div>
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex shrink-0 items-center">
                <img
                  alt="Your Company"
                  src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=500"
                  className="h-8 w-auto"
                />
              </div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      aria-current={item.current ? 'page' : undefined}
                      className={classNames(
                        item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                        'rounded-md px-3 py-2 text-sm font-medium',
                      )}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <button
                type="button"
                className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
              >
                <span className="absolute -inset-1.5" />
                <span className="sr-only">View notifications</span>
                <BellIcon aria-hidden="true" className="size-6" />
              </button>

              {/* Profile dropdown */}
              <Menu as="div" className="relative ml-3">
                <div>
                  <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                    <span className="absolute -inset-1.5" />
                    <span className="sr-only">Open user menu</span>
                    <imgw
                      alt=""
                      src="data:image/png;base64,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"
                      className="size-8 rounded-full"
                    />
                  </MenuButton>
                </div>
                <MenuItems
                  transition
                  className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                >
                  <MenuItem>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:outline-none"
                    >
                      Your Profile
                    </a>
                  </MenuItem>
                  <MenuItem>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:outline-none"
                    >
                      Settings
                    </a>
                  </MenuItem>
                  <MenuItem>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:outline-none"
                    >
                      Sign out
                    </a>
                  </MenuItem>
                </MenuItems>
              </Menu>
            </div>
          </div>
        </div>

        <DisclosurePanel className="sm:hidden">
          <div className="space-y-1 px-2 pb-3 pt-2">
            {navigation.map((item) => (
              <DisclosureButton
                key={item.name}
                as="a"
                href={item.href}
                aria-current={item.current ? 'page' : undefined}
                className={classNames(
                  item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                  'block rounded-md px-3 py-2 text-base font-medium',
                )}
              >
                {item.name}
              </DisclosureButton>
            ))}
          </div>
        </DisclosurePanel>
      </Disclosure>

      {/* Main content below the navbar */}
      <div className="pt-24"> {/* Added padding to prevent content from hiding behind the navbar */}
        <CardList />
      </div>
    </div>
  );
};

export default Hero2;
