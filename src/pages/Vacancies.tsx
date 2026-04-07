import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Icon from "@/components/ui/icon"
import { Navbar } from "@/components/Navbar"

const vacancies = [
  {
    id: 1,
    title: "Горничная, помощник повара, гид",
    company: "ООО КомандаГорький НН",
    category: "Туризм и гостиничный бизнес",
    age: "от 14 лет",
    schedule: "Летний период",
    salary: "до 200 ₽/час",
    location: "Нижний Новгород",
    description: "Работа в летний сезон: горничные, помощники повара, гиды. Отличный способ получить первый опыт и заработать на каникулах.",
    tags: ["Летний сезон", "Несколько позиций"],
    color: "bg-indigo-50",
    badge: "bg-indigo-100 text-indigo-700",
  },
  {
    id: 2,
    title: "Водитель, станочник, грузчик, разнорабочий",
    company: "ООО НижЛесКом",
    category: "Производство",
    age: "от 16 лет",
    schedule: "Полный день",
    salary: "от 800 ₽/час",
    location: "Нижний Новгород",
    description: "Вакансии на производственном предприятии: водитель, станочник, грузчик, разнорабочий. Стабильная работа, высокая оплата.",
    tags: ["Несколько позиций", "Высокая оплата"],
    color: "bg-emerald-50",
    badge: "bg-emerald-100 text-emerald-700",
  },
  {
    id: 3,
    title: "Работа с лошадьми",
    company: "Конная усадьба «Серая лошадь» | Во Благо",
    category: "Животноводство",
    age: "от 14 лет",
    schedule: "Гибкий",
    salary: "200 ₽/час",
    location: "Нижегородская область",
    description: "Уход за лошадьми, помощь в конюшне, работа на усадьбе. Уникальная возможность работать с животными на природе.",
    tags: ["На природе", "Гибкий график"],
    color: "bg-amber-50",
    badge: "bg-amber-100 text-amber-700",
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