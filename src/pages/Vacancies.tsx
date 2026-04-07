import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Icon from "@/components/ui/icon"
import { Navbar } from "@/components/Navbar"

const vacancies = [
  {
    id: 1,
    title: "Курьер на велосипеде",
    company: "ВкусноМаркет",
    category: "Доставка",
    age: "от 16 лет",
    schedule: "Гибкий",
    salary: "от 800 ₽/смена",
    location: "Москва, САО",
    description: "Доставка заказов по жилому кварталу. Велосипед предоставляем. Удобно совмещать с учёбой.",
    tags: ["Официально", "Гибкий график"],
    color: "bg-indigo-50",
    badge: "bg-indigo-100 text-indigo-700",
  },
  {
    id: 2,
    title: "Промоутер",
    company: "EventGroup",
    category: "Реклама",
    age: "от 14 лет",
    schedule: "Выходные",
    salary: "от 1 000 ₽/день",
    location: "Москва, Центр",
    description: "Раздача листовок и знакомство с акциями торгового центра. Работа в выходные дни.",
    tags: ["Официально", "Выходные дни"],
    color: "bg-emerald-50",
    badge: "bg-emerald-100 text-emerald-700",
  },
  {
    id: 3,
    title: "Помощник в зоомагазине",
    company: "ЗооДом",
    category: "Торговля",
    age: "от 15 лет",
    schedule: "Неполный день",
    salary: "от 600 ₽/смена",
    location: "Санкт-Петербург",
    description: "Помощь в уходе за животными, консультация покупателей, выкладка товаров.",
    tags: ["Официально", "Неполный день"],
    color: "bg-rose-50",
    badge: "bg-rose-100 text-rose-700",
  },
  {
    id: 4,
    title: "Ведущий детских мастер-классов",
    company: "АртКласс",
    category: "Творчество",
    age: "от 16 лет",
    schedule: "Выходные",
    salary: "от 1 200 ₽/смена",
    location: "Казань",
    description: "Проведение творческих занятий для детей 5–10 лет. Обучение и поддержка от куратора.",
    tags: ["Официально", "Творческая работа"],
    color: "bg-amber-50",
    badge: "bg-amber-100 text-amber-700",
  },
  {
    id: 5,
    title: "Оператор на кассе",
    company: "СпортМаркет",
    category: "Торговля",
    age: "от 16 лет",
    schedule: "Неполный день",
    salary: "от 180 ₽/час",
    location: "Москва, ЮАО",
    description: "Работа на кассе в спортивном магазине. Обучение за счёт компании, дружный коллектив.",
    tags: ["Официально", "Обучение"],
    color: "bg-sky-50",
    badge: "bg-sky-100 text-sky-700",
  },
  {
    id: 6,
    title: "Репетитор по математике",
    company: "Частные занятия",
    category: "Образование",
    age: "от 15 лет",
    schedule: "Гибкий",
    salary: "от 500 ₽/час",
    location: "Онлайн",
    description: "Помощь ученикам 5–8 классов в подготовке к урокам и контрольным работам.",
    tags: ["Онлайн", "Гибкий график"],
    color: "bg-violet-50",
    badge: "bg-violet-100 text-violet-700",
  },
]

export default function Vacancies() {
  return (
    <div className="min-h-screen w-full bg-white">
      <div
        className="fixed inset-0 z-0 pointer-events-none"
        style={{ background: "radial-gradient(120% 60% at 50% 0%, #f8f8ff 50%, #e0e7ff 100%)" }}
      />
      <div className="relative z-10">
        <Navbar />
        <main className="max-w-6xl mx-auto px-6 pb-24 pt-8">
          {/* Header */}
          <motion.div
            className="mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link to="/" className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-indigo-600 transition-colors mb-6">
              <Icon name="ArrowLeft" size={16} />
              На главную
            </Link>
            <h1 className="text-3xl font-extrabold font-heading text-gray-900 mb-2">Вакансии для подростков</h1>
            <p className="text-muted-foreground text-lg">Только официальное трудоустройство · {vacancies.length} вакансий</p>
          </motion.div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {vacancies.map((v, i) => (
              <motion.div
                key={v.id}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={`rounded-2xl border border-gray-100 p-6 flex flex-col gap-4 ${v.color} hover:shadow-md transition-shadow`}
              >
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <p className="text-xs text-gray-500 mb-1">{v.company}</p>
                    <h3 className="font-bold text-gray-900 text-lg leading-tight">{v.title}</h3>
                  </div>
                  <Badge className={`shrink-0 text-xs font-semibold border-0 ${v.badge}`}>{v.category}</Badge>
                </div>

                <p className="text-sm text-gray-600 leading-relaxed">{v.description}</p>

                <div className="flex flex-col gap-1.5 text-sm text-gray-600">
                  <span className="flex items-center gap-2"><Icon name="MapPin" size={14} className="text-gray-400" />{v.location}</span>
                  <span className="flex items-center gap-2"><Icon name="Clock" size={14} className="text-gray-400" />{v.schedule} · {v.age}</span>
                  <span className="flex items-center gap-2 font-semibold text-gray-900"><Icon name="Banknote" size={14} className="text-gray-400" />{v.salary}</span>
                </div>

                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {v.tags.map((tag) => (
                    <span key={tag} className="text-xs px-2 py-0.5 rounded-full bg-white/70 border border-gray-200 text-gray-600">{tag}</span>
                  ))}
                </div>

                <Button size="sm" className="w-full mt-1 bg-slate-900 hover:bg-indigo-700 text-white">
                  Откликнуться
                </Button>
              </motion.div>
            ))}
          </div>
        </main>
      </div>
    </div>
  )
}
