import { usePageContext } from '@/hooks/usePageContext'
import { AboutTemplate, DefaultTemplate, HomeTemplate, UpcomingEventsTemplate } from '@/templates'

export default function TemplateSwitcher() {
  const pageData = usePageContext()
  const templateName = pageData?.template?.templateName

  switch (templateName) {
    case 'About':
      return <AboutTemplate />
    case 'Default':
      return <DefaultTemplate />
    case 'Home':
      return <HomeTemplate />
    case 'Upcoming Events':
      return <UpcomingEventsTemplate />
    default:
      return
  }
}
