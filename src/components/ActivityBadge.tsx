interface Props {
  visibility: 'everyone' | 'followers_only' | 'only_me'
}

export function ActivityBadge({ visibility }: Props) {
  if (visibility === 'everyone') return null

  if (visibility === 'only_me') {
    return (
      <span
        title="Only you"
        className="inline-flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="w-3 h-3"
        >
          <path
            fillRule="evenodd"
            d="M8 1a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7ZM4.5 4.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0ZM2 13c0-3.3 2.7-6 6-6s6 2.7 6 6v.5a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5V13Z"
            clipRule="evenodd"
          />
        </svg>
        private
      </span>
    )
  }

  return (
    <span
      title="Followers only"
      className="inline-flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        fill="currentColor"
        className="w-3 h-3"
      >
        <path
          fillRule="evenodd"
          d="M4 4a4 4 0 1 1 8 0 4 4 0 0 1-8 0Zm-2 9a6 6 0 0 1 12 0v.5a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5V13Z"
          clipRule="evenodd"
        />
      </svg>
      followers
    </span>
  )
}
