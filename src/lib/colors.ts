import type { ColorScheme } from '@/lib/settings-context'

export const SCHEME_PREVIEW: Record<ColorScheme, { accent: string; heatmap: string[] }> = {
  orange: {
    accent: '#FC4C02',
    heatmap: ['#ebedf0', '#fdba74', '#fb923c', '#ea580c', '#FC4C02'],
  },
  green: {
    accent: '#22c55e',
    heatmap: ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39'],
  },
  blue: {
    accent: '#3b82f6',
    heatmap: ['#ebedf0', '#bae6fd', '#38bdf8', '#0284c7', '#0c4a6e'],
  },
  purple: {
    accent: '#8b5cf6',
    heatmap: ['#ebedf0', '#ddd6fe', '#a78bfa', '#7c3aed', '#4c1d95'],
  },
  teal: {
    accent: '#14b8a6',
    heatmap: ['#ebedf0', '#99f6e4', '#2dd4bf', '#0d9488', '#134e4a'],
  },
  pink: {
    accent: '#ec4899',
    heatmap: ['#ebedf0', '#fbcfe8', '#f472b6', '#db2777', '#831843'],
  },
  slate: {
    accent: '#475569',
    heatmap: ['#ebedf0', '#e2e8f0', '#94a3b8', '#64748b', '#1e293b'],
  },
}
