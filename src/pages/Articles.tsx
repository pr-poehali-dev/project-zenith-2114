import { useState } from "react"
import { Link } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import { Navbar } from "@/components/Navbar"
import Icon from "@/components/ui/icon"

const articles = [
  {
    id: "contract",
    icon: "BookOpen",
    iconColor: "text-indigo-600",
    bg: "bg-indigo-50",
    activeBg: "bg-indigo-600",
    badge: "bg-indigo-100 text-indigo-700",
    title: "Трудовой договор с несовершеннолетним",
    subtitle: "Обязателен без исключений",
    content: [
      {
        heading: "Когда можно заключить трудовой договор?",
        text: "По Трудовому кодексу РФ (ст. 63) работодатель вправе заключить трудовой договор с подростком, достигшим 14 лет. Однако обязательным условием является письменное согласие одного из родителей или законного опекуна, а также разрешение органа опеки и попечительства.",
      },
      {
        heading: "Что должно быть в договоре?",
        text: "Договор должен содержать: должность и характер работы, размер оплаты труда, режим рабочего времени с учётом возрастных ограничений, дату начала работы. Обязательно указывается, что работник является несовершеннолетним — это влечёт особые условия охраны труда.",
      },
      {
        heading: "Испытательный срок",
        text: "Для несовершеннолетних работников испытательный срок при приёме на работу не устанавливается (ст. 70 ТК РФ). Это важная защита — подросток не может быть уволен «как не прошедший испытание».",
      },
      {
        heading: "Ответственность работодателя",
        text: "Работодатель, принявший подростка без трудового договора или без согласия родителей, несёт административную ответственность по КоАП РФ. Штраф для юридических лиц — от 50 000 до 100 000 рублей за каждый случай.",
      },
      {
        heading: "Совет родителям",
        text: "Прежде чем дать согласие, обязательно ознакомьтесь с текстом договора. Убедитесь, что в нём прописан режим работы, не противоречащий учебному расписанию вашего ребёнка, и что условия труда соответствуют санитарным нормам.",
      },
    ],
  },
  {
    id: "hours",
    icon: "Clock",
    iconColor: "text-amber-600",
    bg: "bg-amber-50",
    activeBg: "bg-amber-500",
    badge: "bg-amber-100 text-amber-700",
    title: "Ограничения рабочего времени",
    subtitle: "Нормы по возрасту и периодам",
    content: [
      {
        heading: "Нормы рабочего времени по возрасту",
        text: "Закон строго регулирует продолжительность рабочего дня для несовершеннолетних. Для подростков 14–15 лет — не более 4 часов в день и 20 часов в неделю. Для 16–17-летних — не более 7 часов в день и 35 часов в неделю.",
      },
      {
        heading: "В период учёбы",
        text: "Если подросток совмещает работу с учёбой в школе или другом учебном заведении, нормы сокращаются вдвое. Для 14–15 лет — не более 2,5 часа в день, для 16–17 лет — не более 4 часов в день. Это требование нельзя обойти даже по желанию самого подростка.",
      },
      {
        heading: "Запрет на ночную работу",
        text: "Привлечение несовершеннолетних к работе в ночное время (с 22:00 до 06:00) категорически запрещено статьёй 96 ТК РФ. Это правило не имеет исключений, в том числе для творческих профессий в сфере кино, театра и концертной деятельности.",
      },
      {
        heading: "Сверхурочная работа и выходные",
        text: "Работодатель не вправе привлекать несовершеннолетних к сверхурочной работе, работе в выходные и нерабочие праздничные дни (ст. 268 ТК РФ). Исключение составляют работники творческих профессий — для них порядок регулируется отдельно.",
      },
      {
        heading: "Ежегодный отпуск",
        text: "Несовершеннолетние имеют право на ежегодный оплачиваемый отпуск продолжительностью 31 календарный день. Отпуск предоставляется в удобное для подростка время и не может быть заменён денежной компенсацией.",
      },
    ],
  },
  {
    id: "medical",
    icon: "ShieldCheck",
    iconColor: "text-emerald-600",
    bg: "bg-emerald-50",
    activeBg: "bg-emerald-600",
    badge: "bg-emerald-100 text-emerald-700",
    title: "Медицинский осмотр",
    subtitle: "Обязанность работодателя, а не сотрудника",
    content: [
      {
        heading: "Кто оплачивает медосмотр?",
        text: "Предварительный медицинский осмотр при приёме на работу оплачивается исключительно за счёт работодателя (ст. 266 ТК РФ). Требовать от подростка или его родителей самостоятельно пройти и оплатить медосмотр незаконно.",
      },
      {
        heading: "Что включает медосмотр?",
        text: "Обязательный медосмотр включает осмотр терапевта, невролога, хирурга, офтальмолога, оториноларинголога, а также общие анализы крови и мочи. По результатам выдаётся медицинское заключение о пригодности к конкретному виду работ.",
      },
      {
        heading: "Периодические осмотры",
        text: "Несовершеннолетние проходят медицинские осмотры ежегодно в течение всего периода работы. Работодатель обязан организовывать и оплачивать каждый такой осмотр. Уклонение от этой обязанности является нарушением трудового законодательства.",
      },
      {
        heading: "Что делать, если работодатель отказывает?",
        text: "Если работодатель требует самостоятельно пройти медосмотр или отказывается его оплачивать — это повод обратиться в Государственную инспекцию труда (ГИТ). Жалобу можно подать онлайн на сайте Роструда или через портал Госуслуги.",
      },
      {
        heading: "Совет родителям",
        text: "Сохраняйте все документы о медосмотрах — они могут понадобиться, если у подростка возникнут проблемы со здоровьем, связанные с работой. Работодатель обязан хранить копии заключений в личном деле работника.",
      },
    ],
  },
  {
    id: "prohibited",
    icon: "Scale",
    iconColor: "text-rose-600",
    bg: "bg-rose-50",
    activeBg: "bg-rose-600",
    badge: "bg-rose-100 text-rose-700",
    title: "Запрещённые виды работ",
    subtitle: "Что нельзя поручать подросткам",
    content: [
      {
        heading: "Тяжёлый физический труд",
        text: "Запрещается привлекать несовершеннолетних к работам, связанным с подъёмом и перемещением тяжестей, превышающих установленные нормы. Для юношей 14–15 лет предельная масса груза — 3 кг, для девушек — 2 кг. Для 16–17-летних нормы несколько выше, но также строго ограничены.",
      },
      {
        heading: "Вредные и опасные условия труда",
        text: "Статья 265 ТК РФ запрещает применение труда несовершеннолетних на работах с вредными или опасными условиями. Это включает работу с химическими веществами, в условиях повышенного шума, вибрации, ионизирующего излучения и других неблагоприятных факторов.",
      },
      {
        heading: "Ночные заведения и контент 18+",
        text: "Запрещено привлекать подростков к работе в ночных клубах, казино, барах, организациях по производству или распространению алкоголя, табачных изделий, а также к работе, связанной с материалами эротического или насильственного содержания.",
      },
      {
        heading: "Разъездная и дистанционная торговля",
        text: "Нельзя поручать несовершеннолетним перевозку и торговлю алкогольной продукцией, табаком, наркотическими средствами. Также запрещена работа, при которой подросток остаётся наедине с покупателями в изолированных помещениях без надзора взрослых.",
      },
      {
        heading: "Полный перечень запретов",
        text: "Правительство РФ утвердило полный перечень запрещённых для несовершеннолетних работ (Постановление № 163 от 25.02.2000). Если вы сомневаетесь в законности предлагаемой вакансии — обратитесь за консультацией в Государственную инспекцию труда вашего региона.",
      },
    ],
  },
]

export default function Articles() {
  const [activeId, setActiveId] = useState(articles[0].id)
  const active = articles.find((a) => a.id === activeId)!

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
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-10"
          >
            <Link to="/" className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-indigo-600 transition-colors mb-6">
              <Icon name="ArrowLeft" size={16} />
              На главную
            </Link>
            <h1 className="text-3xl font-extrabold font-heading text-gray-900 mb-2">Полезные статьи</h1>
            <p className="text-muted-foreground text-lg">Всё о трудоустройстве несовершеннолетних — простым языком</p>
          </motion.div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar tabs */}
            <aside className="lg:w-72 shrink-0">
              <div className="flex flex-col gap-2">
                {articles.map((a) => (
                  <button
                    key={a.id}
                    onClick={() => setActiveId(a.id)}
                    className={`flex items-center gap-3 rounded-xl px-4 py-3 text-left transition-all ${
                      activeId === a.id
                        ? "bg-slate-900 text-white shadow-md"
                        : "bg-white border border-gray-100 text-gray-700 hover:border-indigo-200 hover:bg-indigo-50"
                    }`}
                  >
                    <div className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${activeId === a.id ? "bg-white/20" : a.bg}`}>
                      <Icon name={a.icon} size={18} className={activeId === a.id ? "text-white" : a.iconColor} />
                    </div>
                    <span className="text-sm font-semibold leading-tight">{a.title}</span>
                  </button>
                ))}
              </div>
            </aside>

            {/* Article content */}
            <div className="flex-1 min-w-0">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active.id}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.35 }}
                  className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8"
                >
                  <div className="flex items-center gap-3 mb-8">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${active.bg}`}>
                      <Icon name={active.icon} size={24} className={active.iconColor} />
                    </div>
                    <div>
                      <p className={`text-xs font-semibold uppercase tracking-wider ${active.iconColor}`}>{active.subtitle}</p>
                      <h2 className="text-2xl font-extrabold text-gray-900">{active.title}</h2>
                    </div>
                  </div>

                  <div className="flex flex-col gap-7">
                    {active.content.map((block, i) => (
                      <div key={i}>
                        <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                          <span className={`w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold text-white shrink-0 ${active.activeBg}`}>
                            {i + 1}
                          </span>
                          {block.heading}
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed pl-7">{block.text}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
