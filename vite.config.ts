import { defineConfig } from 'vite-plus'

export default defineConfig({
  fmt: {
    semi: false,
    singleQuote: true,
    sortImports: true,
  },
  lint: {
    options: {
      typeAware: true,
      typeCheck: true,
    },
  },
  staged: {
    '*.{js,ts,vue}': 'vp check --fix',
  },
  test: {
    include: ['packages/**/*.test.ts'],
    environment: 'jsdom',
  },
})
