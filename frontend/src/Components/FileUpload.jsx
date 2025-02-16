import React, { useState } from "react";
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline';

// Navigation data
const navigation = [
  { name: 'Dashboard', href: '#', current: true },
  { name: 'Team', href: '#', current: false },
  { name: 'Projects', href: '#', current: false },
  { name: 'Calendar', href: '#', current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const FileUpload = () => {
  const [file, setFile] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  return (
    <div className={`flex flex-col justify-center items-center w-full h-[100vh] px-5 ${darkMode ? 'bg-[#1F1F1F]' : 'bg-white'}`}>
      <div className="flex flex-col items-end justify-start overflow-hidden mb-2 xl:max-w-3xl w-full">
        <div className="flex">
          <h3 className={`${darkMode ? 'text-white' : 'text-black'}`}>Dark Mode: &nbsp;</h3>
          <label className="inline-flex relative items-center mr-5 cursor-pointer">
            <input
              type="checkbox"
              className="sr-only peer"
              checked={darkMode}
              onChange={() => setDarkMode(!darkMode)}
            />
            <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-green-300 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"></div>
          </label>
        </div>
      </div>

      {/* File Upload Section */}
      <div className={`xl:max-w-3xl w-full p-5 sm:p-10 rounded-md ${darkMode ? "bg-[#1F1F1F]" : "bg-white"}`}>
        <h1 className={`text-center text-xl sm:text-3xl font-semibold ${darkMode ? "text-white" : "text-black"}`}>Enter your credentials</h1>
        <div className="w-full mt-8">
          <div className="mx-auto max-w-xs sm:max-w-md md:max-w-lg flex flex-col gap-4">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                className={`w-full px-5 py-3 rounded-lg font-medium border-2 border-transparent placeholder-gray-500 text-sm focus:outline-none focus:border-2 focus:outline ${darkMode ? "bg-[#302E30] text-white focus:border-white" : "bg-gray-100 text-black focus:border-black"}`}
                type="text"
                placeholder="Team Lead Name"
              />
              <input
                className={`w-full px-5 py-3 rounded-lg font-medium border-2 border-transparent placeholder-gray-500 text-sm focus:outline-none focus:border-2 focus:outline ${darkMode ? "bg-[#302E30] text-white focus:border-white" : "bg-gray-100 text-black focus:border-black"}`}
                type="text"
                placeholder="Team Name"
              />
            </div>
            <input
              className={`w-full px-5 py-3 rounded-lg font-medium border-2 border-transparent placeholder-gray-500 text-sm focus:outline-none focus:border-2 focus:outline ${darkMode ? "bg-[#302E30] text-white focus:border-white" : "bg-gray-100 text-black focus:border-black"}`}
              type="email"
              placeholder="Project Title"
            />
            <div className="flex items-center justify-center w-full">
              <label
                htmlFor="dropzone-file"
                className={`flex flex-col items-center justify-center w-full h-64 border-2 border-dashed rounded-lg cursor-pointer ${darkMode ? "bg-[#302E30] border-gray-600 dark:hover:bg-gray-800 dark:hover:border-gray-500" : "bg-gray-50 border-gray-300 hover:bg-gray-100"}`}
              >
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <svg
                    className={`w-8 h-8 mb-4 ${darkMode ? "text-gray-400" : "text-gray-500"}`}
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 16"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                    />
                  </svg>
                  <p className={`mb-2 text-sm ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
                    <span className="font-semibold">Click to upload</span> or drag and drop
                  </p>
                  <p className={`text-xs ${darkMode ? "text-gray-400" : "text-gray-500"}`}>SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                </div>
                <input
                  id="dropzone-file"
                  type="file"
                  className="hidden"
                  onChange={handleFileChange}
                />
              </label>

              {/* Display selected file name if available */}
              {file && (
                <div className="mt-2 text-sm">
                  <span className={`${darkMode ? "text-gray-400" : "text-gray-500"}`}>Selected file: {file.name}</span>
                </div>
              )}
            </div>
            <button className="mt-5 tracking-wide font-semibold bg-[#E9522C] text-gray-100 w-full py-4 rounded-lg hover:bg-[#E9522C]/90 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
             
              <span className="ml-3">LETS CHECK</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Main Page
export default function Example() {
  return (
    <div>
      {/* Navigation Bar */}
      <Disclosure as="nav" className="bg-gray-800 sticky top-0 z-50">
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
                  src="https://tailwindui.com/plus/img/logos/workflow-mark-indigo-600.svg"
                  className="h-8 w-auto"
                />
              </div>
              <div className="hidden sm:block sm:ml-6">
                <div className="flex space-x-4">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        item.current ? 'text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                        'rounded-md px-3 py-2 text-sm font-medium'
                      )}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Disclosure>

      {/* File Upload Section */}
      <FileUpload />
    </div>
  );
}
