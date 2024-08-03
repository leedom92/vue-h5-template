import SvgIcon from '@/components/SvgIcon.vue'

describe('SvgIcon.vue', () => {
  it('name', () => {
    const wrapper = mount(SvgIcon, {
      props: {
        name: 'leedom',
      },
    })
    expect(wrapper.find('use').attributes().href).toBe('#icon-leedom').toMatchSnapshot()
  })

  it('color', () => {
    const wrapper = mount(SvgIcon, {
      props: {
        name: 'leedom',
        color: '#666',
      },
    })
    expect(wrapper.find('use').attributes().fill).toBe('#666').toMatchSnapshot()
  })
})
