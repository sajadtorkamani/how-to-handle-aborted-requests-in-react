import React, { HTMLAttributes } from 'react'
import * as classNames from 'classnames'

type Props = HTMLAttributes<HTMLButtonElement> & {
  isProcessing: boolean
}

const Button: React.FC<Props> = ({
  isProcessing,
  className,
  children,
  ...props
}) => (
  <button
    className={classNames('border border-black px-3 py-2', className)}
    {...props}
  >
    {isProcessing ? 'Processing...' : children}
  </button>
)

export default Button
