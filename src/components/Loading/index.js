import React from 'react'

import styles from './LoadingIndicator.module.css'

function Loading({ active, className, style }) {
  return (
    <div
      className={`
        ${styles.LoadingIndicator}
        ${active ? styles.active : ''}
        ${className}
      `}
      style={style}
    />
  )
}

export default Loading
