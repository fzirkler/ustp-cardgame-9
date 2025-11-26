import { describe, it, expect } from 'vitest'
import { createDeck, shuffleDeck, formatTime } from '@/lib/gameUtils'

describe('gameUtils', () => {
  it('createDeck should return 16 cards with pairs', () => {
    const deck = createDeck()
    expect(deck).toHaveLength(16)

    const matchMap = new Map<number, number>()
    deck.forEach((card) => {
      matchMap.set(card.matchId, (matchMap.get(card.matchId) || 0) + 1)
    })

    // every matchId should occur exactly twice
    for (const [matchId, count] of matchMap) {
      expect(count).toBe(2)
    }
  })

  it('shuffleDeck should shuffle without losing items', () => {
    const deck = createDeck()
    const shuffled = shuffleDeck(deck)

    // same set of ids
    expect(new Set(shuffled.map((c) => c.id))).toEqual(new Set(deck.map((c) => c.id)))
  })

  it('formatTime formats mm:ss correctly', () => {
    expect(formatTime(0)).toBe('0:00')
    expect(formatTime(5)).toBe('0:05')
    expect(formatTime(61)).toBe('1:01')
    expect(formatTime(600 + 9)).toBe('10:09')
  })
})
