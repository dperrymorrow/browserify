import Vue from 'vue'
import User from '../../src/components/User.vue'

describe('User.vue', () => {
  it('should render correct contents', () => {
    const vm = new Vue({
      el: document.createElement('div'),
      render: (h) => h(User)
    })
    expect(vm.$el.querySelector('h1').textContent).toBe('User ')
  })
})

// also see example testing a component with mocks at
// https://github.com/vuejs/vueify-example/blob/master/test/unit/a.spec.js#L22-L43
