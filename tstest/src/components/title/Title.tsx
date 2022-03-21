import React from 'react'

interface TitleProps {
  label?: string
  color?: string
}

const Title = ({ label = 'Default Label', color = 'blue' }: TitleProps) => {
  return <div style={{ color }}>{label}</div>
}

export default Title
