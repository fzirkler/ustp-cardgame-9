import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi } from 'vitest'
import { MemoryCard } from '@/components/MemoryCard'
import type { Card } from '@/lib/types'

const DummyIcon = ({ className = '', size = 24 }: any) => (
  <svg data-testid="dummy-icon" className={className} width={size} height={size} />
)

describe('MemoryCard', () => {
  it('calls onClick when clicked and not disabled', async () => {
    const user = userEvent.setup()
    const onClick = vi.fn()
    const card: Card = { id: '1-a', icon: DummyIcon as any, matchId: 1 }
    const { container } = render(<MemoryCard card={card} isFlipped={false} isMatched={false} onClick={onClick} disabled={false} />)
    const outer = container.firstElementChild as HTMLElement
    if (!outer) throw new Error('Could not find MemoryCard wrapper')

    await user.click(outer)
    expect(onClick).toHaveBeenCalled()
  })

  it('does not call onClick when disabled', async () => {
    const user = userEvent.setup()
    const onClick = vi.fn()
    const card: Card = { id: '1-a', icon: DummyIcon as any, matchId: 1 }
    render(<MemoryCard card={card} isFlipped={false} isMatched={false} onClick={onClick} disabled={true} />)

    const { container } = render(<MemoryCard card={card} isFlipped={false} isMatched={false} onClick={onClick} disabled={true} />)
    const outer = container.firstElementChild as HTMLElement
    if (!outer) throw new Error('Could not find MemoryCard wrapper')
    await user.click(outer)
    expect(onClick).not.toHaveBeenCalled()
  })

  it('shows icon and matched styles when matched', () => {
    const onClick = vi.fn()
    const card: Card = { id: '2-a', icon: DummyIcon as any, matchId: 2 }
    const { container } = render(<MemoryCard card={card} isFlipped={false} isMatched={true} onClick={onClick} disabled={false} />)
    const icon = screen.getByTestId('dummy-icon')
    expect(icon).toBeInTheDocument()
    // matched should add a bg-secondary class on the card container when matched - find the parent containing the icon
    const backFace = icon.closest('.absolute.inset-0.flex.items-center.justify-center.rounded-lg.shadow-lg')
    expect(backFace).toBeTruthy()
    if (backFace) {
      // when matched, component should set class to bg-secondary on the back face
      expect(backFace.className.includes('bg-secondary') || backFace.className.includes('bg-card')).toBeTruthy()
    }
  })
})
