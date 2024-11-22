import { createApp } from 'vue'
import { capitalize } from './upperCase'

describe('capitalize directive', () => {
  it('capitalizes the text content on mount', () => {
    const app = createApp({
      template: `<div v-capitalize>hello world</div>`,
      directives: { capitalize },
    })

    const root = document.createElement('div')
    app.mount(root)

    expect(root.textContent).toBe('Hello world')
  })
})
