import defaultSettings from '@/setting'

const title = defaultSettings.systemName || 'Vue H5 Template'

export default function setPageTitle(pageTitle) {
  return pageTitle ? `${pageTitle} - ${title}` : `${title}`
}
