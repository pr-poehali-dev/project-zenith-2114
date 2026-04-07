import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"

export function Navbar() {
  return (
    <nav className="relative z-10 w-full px-6 py-4">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <img
            src="https://cdn.poehali.dev/projects/8b593b2b-7bf3-4015-bc88-1df90c31c557/files/95596a3c-91f7-4b48-bc0c-dd9207a799f1.jpg"
            alt="РаботаЮнымВСК"
            className="h-9 w-9 rounded-lg object-cover"
          />
          <span className="text-2xl font-bold font-heading text-gray-900">РаботаЮнымВСК</span>
        </Link>

        {/* Nav links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">
          <a href="#teens" className="hover:text-indigo-600 transition-colors">Подросткам</a>
          <a href="#parents" className="hover:text-indigo-600 transition-colors">Родителям</a>
          <a href="#employers" className="hover:text-indigo-600 transition-colors">Работодателям</a>
          <Link to="/articles" className="hover:text-indigo-600 transition-colors">Статьи</Link>
        </div>

        {/* CTA Button */}
        <Button size="lg" className="hover:bg-indigo-700 text-white bg-slate-900" asChild>
          <Link to="/vacancies">Смотреть вакансии</Link>
        </Button>
      </div>
    </nav>
  )
}