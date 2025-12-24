import { useState } from 'react'
import { Dialog,  Popover } from '@headlessui/react'
import {
  Bars3Icon,
  XMarkIcon
} from '@heroicons/react/24/outline'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function MenuHeader({c1}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const baseClassName = 'fixed inset-y-0 right-0 z-10 w-full overflow-y-auto px-6 py-6 sm:max-w-sm sm:ring-2 sm:ring-green-900/90';
  const combinedClassName = `${baseClassName} ${c1}`;

  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-slate-200/50">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <a href="#home" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-600 to-blue-500">
              <span className="text-white font-bold text-lg">JV</span>
            </div>
            <span className="hidden sm:inline font-bold text-gray-900 text-lg">Jean Vega</span>
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 hover:bg-gray-100 transition-colors"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-1">
          <a href="#home" className="px-3 py-2 text-sm font-semibold text-gray-700 hover:text-indigo-600 hover:bg-gray-50 rounded-lg transition-all duration-200">Home</a>
          <a href="#projects" className="px-3 py-2 text-sm font-semibold text-gray-700 hover:text-indigo-600 hover:bg-gray-50 rounded-lg transition-all duration-200">Projects</a>
          <a href="#about" className="px-3 py-2 text-sm font-semibold text-gray-700 hover:text-indigo-600 hover:bg-gray-50 rounded-lg transition-all duration-200">About me</a>
          <a href="#contact" className="px-3 py-2 text-sm font-semibold text-gray-700 hover:text-indigo-600 hover:bg-gray-50 rounded-lg transition-all duration-200">Contact</a>
        </Popover.Group>
        <div className="flex lg:flex-1 lg:justify-end">
        </div>
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className={combinedClassName}>
          <div className="flex items-center justify-between mb-6">
            <a href="#home" className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-600 to-blue-500">
                <span className="text-white font-bold text-lg">JV</span>
              </div>
              <span className="font-bold text-gray-900">Jean Vega</span>
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 hover:bg-gray-100 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <a href="#home" onClick={() => setMobileMenuOpen(false)} className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 transition-colors">Home</a>
                <a href="#projects" onClick={() => setMobileMenuOpen(false)} className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 transition-colors">Projects</a>
                <a href="#about" onClick={() => setMobileMenuOpen(false)} className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 transition-colors">About me</a>
                <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 transition-colors">Contact</a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
        
      </Dialog>
    </header>
  )
}
