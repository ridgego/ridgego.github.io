import React from 'react'
export default ({
  icon = 'bi-bag-check',
  size,
  onClick,
  color
}) => {
  return (
    <i
      onClick={onClick}
      className={'bi ' + icon} style={{
        fontSize: size,
        color
      }}
    />
  )
}
