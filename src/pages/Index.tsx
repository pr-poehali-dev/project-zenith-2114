import { Navbar } from "@/components/Navbar"
import { Hero7 } from "@/components/Hero7"
import { Features } from "@/components/Features"

const Index = () => {
  return (
    <div className="min-h-screen w-full relative">
      {/* Radial Gradient Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: "radial-gradient(125% 125% at 50% 10%, #fff 40%, #6366f1 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        <main className="lg:mx-12">
          <Hero7
            heading={"Первая работа — большой шаг.\nМы поможем его сделать правильно."}
            description="Платформа объявлений о работе для подростков от 14 лет. Безопасные вакансии, советы для родителей и всё необходимое для работодателей — в одном месте."
            button={{ text: "Смотреть вакансии", url: "/vacancies" }}
            reviews={{
              count: 1200,
              rating: 4.9,
              avatars: [
                { src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp", alt: "Подросток 1" },
                { src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-2.webp", alt: "Подросток 2" },
                { src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-3.webp", alt: "Родитель 1" },
                { src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-4.webp", alt: "Работодатель 1" },
                { src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-5.webp", alt: "Работодатель 2" },
              ],
            }}
          />
          <Features />
        </main>
      </div>
    </div>
  )
}

export default Index