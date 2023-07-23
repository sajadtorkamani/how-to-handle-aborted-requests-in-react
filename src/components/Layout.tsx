import React from 'react'

interface Props {
  children: React.ReactNode
}

const Layout: React.FC<Props> = ({ children }) => (
  <div className="max-w-2xl mx-auto p-5">{children}</div>
)

export default Layout
