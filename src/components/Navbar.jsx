import { Bookmark } from 'lucide-react';

function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-20 bg-white">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <a
          href="#home"
          className="text-2xl font-bold tracking-tight text-primary-dark"
        >
          jm.
        </a>

        <div className="flex items-center gap-8">
          <ul className="hidden items-center gap-8 text-sm font-medium text-gray-600 sm:flex">
            <li>
              <a href="#home" className="transition-colors hover:text-primary-dark">
                Home
              </a>
            </li>
            <li>
              <a href="#projects" className="transition-colors hover:text-primary-dark">
                Projects
              </a>
            </li>
            <li>
              <a href="#about" className="transition-colors hover:text-primary-dark">
                About
              </a>
            </li>
            <li>
              <a href="#contact" className="transition-colors hover:text-primary-dark">
                Contact
              </a>
            </li>
          </ul>

          <button
            type="button"
            aria-label="Bookmark"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-primary-dark transition-colors hover:bg-gray-200"
          >
            <Bookmark size={18} />
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
