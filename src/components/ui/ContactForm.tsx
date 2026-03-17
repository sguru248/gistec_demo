import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Send } from 'lucide-react'
import Button from './Button'

const schema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Please enter a valid email'),
  phone: z.string().optional(),
  subject: z.string().min(2, 'Subject is required'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

type FormData = z.infer<typeof schema>

interface Props {
  dark?: boolean
}

export default function ContactForm({ dark = false }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({ resolver: zodResolver(schema) })

  const onSubmit = (data: FormData) => {
    const mailtoLink = `mailto:info@gistec.com?subject=${encodeURIComponent(data.subject)}&body=${encodeURIComponent(
      `Name: ${data.name}\nEmail: ${data.email}\nPhone: ${data.phone || 'N/A'}\n\n${data.message}`
    )}`
    window.location.href = mailtoLink
    reset()
  }

  const inputClasses = dark
    ? 'w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald focus:border-transparent'
    : 'w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-navy-light focus:border-transparent'

  const errorClasses = 'text-red-400 text-xs mt-1'

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <input {...register('name')} placeholder="Your Name *" className={inputClasses} />
          {errors.name && <p className={errorClasses}>{errors.name.message}</p>}
        </div>
        <div>
          <input {...register('email')} type="email" placeholder="Email Address *" className={inputClasses} />
          {errors.email && <p className={errorClasses}>{errors.email.message}</p>}
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input {...register('phone')} type="tel" placeholder="Phone Number" className={inputClasses} />
        <div>
          <input {...register('subject')} placeholder="Subject *" className={inputClasses} />
          {errors.subject && <p className={errorClasses}>{errors.subject.message}</p>}
        </div>
      </div>
      <div>
        <textarea {...register('message')} rows={4} placeholder="Your Message *" className={inputClasses} />
        {errors.message && <p className={errorClasses}>{errors.message.message}</p>}
      </div>
      <Button type="submit" variant={dark ? 'secondary' : 'primary'} size="lg">
        <Send size={18} /> Send Message
      </Button>
    </form>
  )
}
