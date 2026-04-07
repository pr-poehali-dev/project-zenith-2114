import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"

const FEEDBACK_URL = "https://functions.poehali.dev/d3829306-8d7a-40c1-8e30-de58c993e27b"

interface FeedbackModalProps {
  open: boolean
  onClose: () => void
}

export function FeedbackModal({ open, onClose }: FeedbackModalProps) {
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [question, setQuestion] = useState("")
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setLoading(true)
    try {
      const res = await fetch(FEEDBACK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, question }),
      })
      if (!res.ok) throw new Error()
      setSuccess(true)
      setName("")
      setPhone("")
      setQuestion("")
    } catch {
      setError("Не удалось отправить. Попробуйте позже.")
    } finally {
      setLoading(false)
    }
  }

  const handleClose = () => {
    setSuccess(false)
    setError("")
    onClose()
  }

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold font-heading">Обратная связь</DialogTitle>
        </DialogHeader>

        {success ? (
          <div className="py-6 text-center">
            <div className="text-4xl mb-3">✅</div>
            <p className="text-lg font-semibold text-gray-800">Заявка отправлена!</p>
            <p className="text-sm text-gray-500 mt-1">Мы свяжемся с вами в ближайшее время.</p>
            <Button className="mt-6 w-full" onClick={handleClose}>Закрыть</Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 pt-2">
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-gray-700">Имя</label>
              <Input
                placeholder="Ваше имя"
                value={name}
                onChange={e => setName(e.target.value)}
                required
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-gray-700">Телефон</label>
              <Input
                placeholder="+7 (___) ___-__-__"
                value={phone}
                onChange={e => setPhone(e.target.value)}
                required
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-gray-700">Вопрос</label>
              <Textarea
                placeholder="Напишите ваш вопрос..."
                value={question}
                onChange={e => setQuestion(e.target.value)}
                required
                rows={4}
              />
            </div>
            {error && <p className="text-sm text-red-500">{error}</p>}
            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? "Отправляем..." : "Отправить"}
            </Button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  )
}
