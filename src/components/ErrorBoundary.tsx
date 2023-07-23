import React, { ErrorInfo } from 'react'

interface Props {
  children: React.ReactNode
}

type State = { hasError: boolean; error: Error | null }

class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // If the error was because of an aborted request, handle it appropriately
    console.log({ error, errorInfo })
  }

  render() {
    const { hasError, error } = this.state
    console.log({ hasError, error })

    if (hasError) {
      return <>Some error occurred</>
    }

    return this.props.children
  }
}

export default ErrorBoundary
