'use client'

import type { StravaActivity } from '@/lib/types'
import { MilestoneModal, type Milestone } from './MilestoneModal'

// Thresholds in seconds
const TIME_MILESTONES: Milestone[] = [
  { name: 'First Hour', threshold: 3600, emoji: '⏱️' },
  { name: 'Half Day', threshold: 43200, emoji: '🌤️' },
  { name: 'Full Day', threshold: 86400, emoji: '🌞' },

  { name: 'Two Days Moving', threshold: 172800, emoji: '🚶' },
  { name: 'Three Days Moving', threshold: 259200, emoji: '🚶‍♂️' },

  { name: 'One Week of Motion', threshold: 604800, emoji: '📅' },
  { name: 'Two Weeks Moving', threshold: 1209600, emoji: '📆' },

  { name: 'One Month of Activity', threshold: 2592000, emoji: '🌙' },
  { name: 'Two Months of Activity', threshold: 5184000, emoji: '🌙🌙' },

  { name: '1000 Hours', threshold: 3600000, emoji: '💪' },

  { name: 'Three Months Moving', threshold: 7776000, emoji: '🌱' },
  { name: 'Half Year of Motion', threshold: 15768000, emoji: '☀️' },

  { name: 'One Year of Activity', threshold: 31536000, emoji: '🌍' },
  { name: '500 Days Moving', threshold: 43200000, emoji: '🔥' },
  { name: 'Two Years of Activity', threshold: 63072000, emoji: '🏃‍♂️' },
  { name: '1000 Days Moving', threshold: 86400000, emoji: '🧭' },

  { name: 'Three Years of Activity', threshold: 94608000, emoji: '🌄' },
  { name: 'Five Years of Motion', threshold: 157680000, emoji: '🚀' },
  { name: 'Ten Years of Movement', threshold: 315360000, emoji: '🏆' },

  { name: 'Lifetime of Motion', threshold: 630720000, emoji: '🌌' },
  { name: 'Legend of Endurance', threshold: 946080000, emoji: '👑' },
  { name: 'Master of Motion', threshold: 1261440000, emoji: '⚡' },
  { name: 'Time Traveler', threshold: 1576800000, emoji: '🕰️' },
  { name: 'Eternal Athlete', threshold: 1892160000, emoji: '♾️' },
  { name: 'Myth of Movement', threshold: 2522880000, emoji: '🗿' },
  { name: 'God of Endurance', threshold: 3153600000, emoji: '⚡👑' },
]

function fmtSeconds(s: number): string {
  const h = Math.floor(s / 3600)
  const m = Math.floor((s % 3600) / 60)
  if (h === 0) return `${m}m`
  if (m === 0) return `${h}h`
  return `${h}h ${m}m`
}

function formatDisplay(val: number, _imperial: boolean) {
  const days = Math.floor(val / 86400)
  const hours = Math.floor((val % 86400) / 3600)
  const mins = Math.floor((val % 3600) / 60)
  if (days > 0) return `${days}d ${hours}h ${mins}m`
  return fmtSeconds(val)
}

function formatThreshold(val: number, _imperial: boolean) {
  const days = Math.floor(val / 86400)
  const hours = Math.floor((val % 86400) / 3600)
  if (days >= 365) {
    const yrs = Math.floor(days / 365)
    return yrs === 1 ? '1 year' : `${yrs} years`
  }
  if (days >= 30) {
    const mo = Math.floor(days / 30)
    return mo === 1 ? '1 month' : `${mo} months`
  }
  if (days >= 7) {
    const wk = Math.floor(days / 7)
    return wk === 1 ? '1 week' : `${wk} weeks`
  }
  if (days > 0) return `${days}d`
  return `${hours}h`
}

function formatY(val: number, _imperial: boolean) {
  const days = val / 86400
  if (days >= 365) return `${(days / 365).toFixed(0)}y`
  if (days >= 1) return `${Math.round(days)}d`
  return `${Math.round(val / 3600)}h`
}

interface TimeModalProps {
  isOpen: boolean
  onClose: () => void
  activities: StravaActivity[]
}

export function TimeModal({ isOpen, onClose, activities }: TimeModalProps) {
  return (
    <MilestoneModal
      isOpen={isOpen}
      onClose={onClose}
      title="Time Journey"
      headerEmoji="⏱️"
      milestones={TIME_MILESTONES}
      activities={activities}
      getValue={(a) => a.moving_time}
      formatDisplay={formatDisplay}
      formatThreshold={formatThreshold}
      formatY={formatY}
      emptyIcon="⌚"
      emptyTitle="Start the clock!"
      emptyMessage="Log some activities to unlock your first time milestone."
    />
  )
}
