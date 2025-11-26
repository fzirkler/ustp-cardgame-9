import { describe, it, expect } from 'vitest'
import { cn } from '@/lib/utils'

describe('utils.cn', () => {
  it('merges classes and favors later utility for conflicts', () => {
    const result = cn('p-2', 'bg-red-500', 'p-4', 'text-white')
    // tailwind-merge should pick p-4 over p-2
    expect(result).toContain('p-4')
    expect(result).not.toContain('p-2')
    expect(result).toContain('bg-red-500')
    expect(result).toContain('text-white')
  })
})
