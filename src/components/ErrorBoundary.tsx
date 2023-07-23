import React from 'react'
import { CanceledError } from 'axios'

interface Props {
  children: React.ReactNode
}

type State = {
  hasError: boolean
  error: Error | null
}

class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error: Error) {
    const hasError = error && !(error instanceof CanceledError)

    return { hasError, error }
  }

  // componentDidCatch(error: Error, errorInfo: ErrorInfo) {
  //   console.log({ error, errorInfo })
  // }

  render() {
    const { hasError } = this.state

    if (hasError) {
      return <>Some error occurred</>
    }

    return this.props.children
  }
}

export default ErrorBoundary
