import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import Card from '../../ui/Card'
import FadeInOnScroll from '../../animation/FadeInOnScroll'
import StaggerChildren, { StaggerItem } from '../../animation/StaggerChildren'
import Section from '../../layout/Section'
import { announcements } from '../../../data/announcements'

export default function Announcements() {
  return (
    <Section className="bg-slate-50">
      <FadeInOnScroll>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Latest News & Announcements
        </h2>
      </FadeInOnScroll>
      <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {announcements.map((item) => (
          <StaggerItem key={item.id}>
            {item.link ? (
              item.link.startsWith('/') ? (
                <Link to={item.link} className="block h-full">
                  <AnnouncementCard title={item.title} description={item.description} />
                </Link>
              ) : (
                <a href={item.link} target="_blank" rel="noopener noreferrer" className="block h-full">
                  <AnnouncementCard title={item.title} description={item.description} />
                </a>
              )
            ) : (
              <AnnouncementCard title={item.title} description={item.description} />
            )}
          </StaggerItem>
        ))}
      </StaggerChildren>
    </Section>
  )
}

function AnnouncementCard({ title, description }: { title: string; description: string }) {
  return (
    <Card className="h-full border-t-4 border-t-navy-light group cursor-pointer" hover accent="none">
      <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
      <p className="mt-2 text-sm text-slate-500 leading-relaxed">{description}</p>
      <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-navy-light group-hover:gap-2 transition-all">
        Read More <ArrowRight size={14} />
      </span>
    </Card>
  )
}
