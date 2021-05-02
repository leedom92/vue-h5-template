import defaultSettings from '@/setting'

const title = defaultSettings.title || 'Vue H5 Template'

export default function setPageTitle(pageTitle) {
  return pageTitle ? `${pageTitle} - ${title}` : `${title}`
}
