import setPageTitle from '@/utils/set-page-title'

describe('setPageTitle', () => {
  it('has custom title', () => {
    expect(setPageTitle('title')).toBe('title - Vue H5 Template').toMatchSnapshot()
  })

  it('should be Vue H5 Template', () => {
    expect(setPageTitle('')).toBe('Vue H5 Template').toMatchSnapshot()
  })
})
