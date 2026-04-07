import { motion } from "framer-motion"
import Icon from "@/components/ui/icon"

const features = [
  {
    id: "teens",
    icon: "GraduationCap",
    title: "Подросткам",
    subtitle: "Найди свою первую работу",
    description:
      "Вакансии для ребят от 14 лет: курьеры, промоутеры, помощники в офисе, творческие проекты и многое другое. Только легальная занятость с соблюдением всех прав.",
    points: ["Работа рядом с домом", "Гибкий график под учёбу", "Официальное оформление"],
    color: "bg-indigo-50 border-indigo-100",
    iconColor: "text-indigo-600",
    badgeColor: "bg-indigo-100 text-indigo-700",
  },
  {
    id: "parents",
    icon: "Heart",
    title: "Родителям",
    subtitle: "Всё под контролем",
    description:
      "Мы проверяем каждого работодателя. Здесь только вакансии, соответствующие Трудовому кодексу для несовершеннолетних: допустимые часы, безопасные условия и официальный договор.",
    points: ["Проверенные работодатели", "Соответствие ТК РФ", "Согласие родителей — обязательно"],
    color: "bg-rose-50 border-rose-100",
    iconColor: "text-rose-500",
    badgeColor: "bg-rose-100 text-rose-700",
  },
  {
    id: "employers",
    icon: "Briefcase",
    title: "Работодателям",
    subtitle: "Найдите молодых сотрудников",
    description:
      "Размещайте вакансии и находите ответственных молодых людей. Мы поможем правильно оформить трудовые отношения и соблюсти все требования законодательства.",
    points: ["Быстрое размещение вакансий", "Готовые шаблоны документов", "Консультация по оформлению"],
    color: "bg-emerald-50 border-emerald-100",
    iconColor: "text-emerald-600",
    badgeColor: "bg-emerald-100 text-emerald-700",
  },
]

const knowledgeItems = [
  {
    icon: "BookOpen",
    title: "Трудовой договор обязателен",
    description: "С подростком от 14 лет можно заключить трудовой договор только с письменного согласия родителя или опекуна. Без этого документа работа незаконна.",
    iconColor: "text-indigo-600",
    bg: "bg-indigo-50",
  },
  {
    icon: "Clock",
    title: "Ограничения по рабочему времени",
    description: "14–15 лет — не более 4 часов в день, 16–17 лет — не более 7 часов. В учебный период нормы сокращаются вдвое. Ночные смены запрещены.",
    iconColor: "text-amber-600",
    bg: "bg-amber-50",
  },
  {
    icon: "ShieldCheck",
    title: "Медосмотр перед трудоустройством",
    description: "Работодатель обязан направить несовершеннолетнего на предварительный медицинский осмотр за свой счёт — это требование ТК РФ.",
    iconColor: "text-emerald-600",
    bg: "bg-emerald-50",
  },
  {
    icon: "Scale",
    title: "Запрещённые виды работ",
    description: "Нельзя привлекать подростков к тяжёлому физическому труду, работе с вредными веществами, в ночных заведениях и к переноске тяжестей сверх нормы.",
    iconColor: "text-rose-600",
    bg: "bg-rose-50",
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", delay: i * 0.15 },
  }),
}

export function Features() {
  return (
    <section className="pb-24 px-6">
      <div className="mx-auto max-w-6xl">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h2 className="text-3xl font-extrabold font-heading text-gray-900 mb-3">
            Для кого эта платформа?
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Мы объединяем подростков, их родителей и ответственных работодателей
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.id}
              id={feature.id}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              className={`rounded-2xl border p-8 flex flex-col gap-5 ${feature.color}`}
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${feature.badgeColor}`}>
                <Icon name={feature.icon} size={24} className={feature.iconColor} />
              </div>

              <div>
                <p className={`text-xs font-semibold uppercase tracking-wider mb-1 ${feature.iconColor}`}>
                  {feature.subtitle}
                </p>
                <h3 className="text-xl font-bold text-gray-900">{feature.title}</h3>
              </div>

              <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>

              <ul className="flex flex-col gap-2 mt-auto">
                {feature.points.map((point) => (
                  <li key={point} className="flex items-center gap-2 text-sm text-gray-700">
                    <Icon name="CheckCircle2" size={16} className={feature.iconColor} />
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* 4th block — full width */}
        <motion.div
          id="knowledge"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.5 }}
          className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-slate-200">
              <Icon name="Info" size={24} className="text-slate-700" />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-0.5">Важно знать</p>
              <h3 className="text-xl font-bold text-gray-900">Работа для подростков: что нужно знать родителям и работодателям</h3>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {knowledgeItems.map((item) => (
              <div key={item.title} className={`rounded-xl p-5 flex flex-col gap-3 ${item.bg}`}>
                <Icon name={item.icon} size={22} className={item.iconColor} />
                <p className="font-semibold text-gray-900 text-sm">{item.title}</p>
                <p className="text-gray-600 text-xs leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  )
}