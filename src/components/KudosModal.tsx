'use client'

import type { StravaActivity } from '@/lib/types'
import { MilestoneModal, type Milestone } from './MilestoneModal'


const KUDOS_MILESTONES: Milestone[] = [
  { name: 'First Cheer', threshold: 1, emoji: '👏' },
  { name: 'High Five', threshold: 5, emoji: '✋' },
  { name: 'Getting Noticed', threshold: 10, emoji: '👏' },
  { name: 'Group Cheer', threshold: 25, emoji: '🎉' },
  { name: 'Standing Ovation', threshold: 50, emoji: '🙌' },
  { name: 'Mini Crowd', threshold: 100, emoji: '👥' },
  { name: 'Town Hall', threshold: 250, emoji: '🏛️' },
  { name: 'Village Gathering', threshold: 500, emoji: '🏘️' },
  { name: 'Small Stadium', threshold: 1000, emoji: '🏟️' },
  { name: 'Packed Arena', threshold: 2500, emoji: '🥁' },
  { name: 'Rock Concert', threshold: 5000, emoji: '🎸' },
  { name: 'Festival Crowd', threshold: 10000, emoji: '🎪' },
  { name: 'City Square', threshold: 25000, emoji: '🏙️' },
  { name: 'Major Stadium', threshold: 50000, emoji: '🏟️' },
  { name: 'World Cup Crowd', threshold: 100000, emoji: '⚽' },
  { name: 'Half Million Hype', threshold: 500000, emoji: '🔥' },
  { name: 'Million Cheers', threshold: 1000000, emoji: '🌟' },
  { name: 'Internet Famous', threshold: 2500000, emoji: '📱' },
  { name: 'Global Applause', threshold: 5000000, emoji: '🌍' },
  { name: 'Legendary Athlete', threshold: 10000000, emoji: '🏆' },
  { name: 'Hall of Fame', threshold: 25000000, emoji: '🏅' },
  { name: 'Sporting Icon', threshold: 50000000, emoji: '👑' },
  { name: 'World Legend', threshold: 100000000, emoji: '🌎' },
  { name: 'Mythic Status', threshold: 250000000, emoji: '⚡' },
  { name: 'Immortal Athlete', threshold: 500000000, emoji: '🗿' },
  { name: 'Infinite Applause', threshold: 1000000000, emoji: '♾️' },
]

function fmt(val: number) {
  if (val >= 1000000) return `${(val / 1000000).toFixed(1)}M`
  if (val >= 1000) return `${(val / 1000).toFixed(1)}k`
  return `${Math.round(val)}`
}

// Kudos have no unit system — imperial flag unused but required by the interface
function formatDisplay(val: number, _imperial: boolean) {
  return `${Math.round(val).toLocaleString()} kudos`
}

function formatThreshold(val: number, _imperial: boolean) {
  return `${val.toLocaleString()} kudos`
}

function formatY(val: number, _imperial: boolean) {
  return fmt(val)
}

interface KudosModalProps {
  isOpen: boolean
  onClose: () => void
  activities: StravaActivity[]
}

export function KudosModal({ isOpen, onClose, activities }: KudosModalProps) {
  return (
    <MilestoneModal
      isOpen={isOpen}
      onClose={onClose}
      title="Kudos Journey"
      headerEmoji="⭐"
      milestones={KUDOS_MILESTONES}
      activities={activities}
      getValue={(a) => a.kudos_count || 0}
      formatDisplay={formatDisplay}
      formatThreshold={formatThreshold}
      formatY={formatY}
      emptyIcon="🤝"
      emptyTitle="Share your efforts!"
      emptyMessage="Log public activities to start earning kudos."
    />
  )
}
