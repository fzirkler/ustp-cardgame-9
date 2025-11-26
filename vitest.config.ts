import { defineConfig } from 'vitest/config'
import tsconfigPaths from 'vite-tsconfig-paths'
import { resolve } from 'path'

// Vitest configuration for project
export default defineConfig({
  plugins: [tsconfigPaths()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.ts',
    include: ['src/**/*.{test,spec}.{ts,tsx}'],
    // Add junit reporter for CI test result uploads and coverage reporter
    reporters: [
      'default',
      ['junit', { outputFile: 'test-results/junit.xml' }]
    ],
    coverage: {
      // Use Node's v8 coverage provider in newer vitest versions
      provider: 'v8',
      reporter: ['text', 'lcov', 'html'],
      reportsDirectory: 'coverage'
    }
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  }
})
