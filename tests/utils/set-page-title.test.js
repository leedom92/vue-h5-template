import setPageTitle from '@/utils/set-page-title'

it('setPageTitle', () => {
  expect(setPageTitle('title')).toBe('title - Vue H5 Template')
})
