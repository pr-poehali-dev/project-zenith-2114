import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { FeedbackModal } from "@/components/FeedbackModal"

export function Navbar() {
  const { pathname } = useLocation()
  const [feedbackOpen, setFeedbackOpen] = useState(false)

  const navLink = (to: string, label: string) => (
    <Link
      to={to}
      className={`relative transition-colors text-sm font-medium pb-0.5 ${
        pathname === to
          ? "text-indigo-600 after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-indigo-600 after:rounded-full"
          : "text-gray-700 hover:text-indigo-600"
      }`}
    >
      {label}
    </Link>
  )

  return (
    <>
      <nav className="relative z-10 w-full px-6 py-4">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <img
              src="https://cdn.poehali.dev/projects/8b593b2b-7bf3-4015-bc88-1df90c31c557/bucket/902c298b-e283-43a7-af8e-29ef716b06d9.jpg"
              alt="РаботаЮнымВСК"
              className="h-10 w-10 rounded-lg object-cover"
            />
            <span className="text-2xl font-bold font-heading text-gray-900">РаботаЮнымВСК</span>
          </Link>

          {/* Nav links */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">
            <a href="#teens" className="hover:text-indigo-600 transition-colors">Подросткам</a>
            <a href="#parents" className="hover:text-indigo-600 transition-colors">Родителям</a>
            <a href="#employers" className="hover:text-indigo-600 transition-colors">Работодателям</a>
            {navLink("/vacancies", "Вакансии")}
            {navLink("/articles", "Статьи")}
          </div>

          <Button onClick={() => setFeedbackOpen(true)}>
            Обратная связь
          </Button>
        </div>
      </nav>

      <FeedbackModal open={feedbackOpen} onClose={() => setFeedbackOpen(false)} />
    </>
  )
}
