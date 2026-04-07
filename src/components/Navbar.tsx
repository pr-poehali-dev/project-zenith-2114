import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"

export function Navbar() {
  return (
    <nav className="relative z-10 w-full px-6 py-4">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold font-heading text-gray-900 hover:text-indigo-600 transition-colors">
          РаботаЮнымВСК
        </Link>

        {/* Nav links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">
          <a href="#teens" className="hover:text-indigo-600 transition-colors">Подросткам</a>
          <a href="#parents" className="hover:text-indigo-600 transition-colors">Родителям</a>
          <a href="#employers" className="hover:text-indigo-600 transition-colors">Работодателям</a>
        </div>

        {/* CTA Button */}
        <Button size="lg" className="hover:bg-indigo-700 text-white bg-slate-900" asChild>
          <Link to="/vacancies">Смотреть вакансии</Link>
        </Button>
      </div>
    </nav>
  )
}