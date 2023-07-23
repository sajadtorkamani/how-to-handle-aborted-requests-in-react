import React, { HTMLAttributes } from 'react'
import classNames from 'classnames'

type Props = HTMLAttributes<HTMLButtonElement> & {
  isProcessing?: boolean
}

const Button: React.FC<Props> = ({
  isProcessing = false,
  className,
  children,
  ...props
}) => (
  <button
    className={classNames('border border-black px-3 py-1 w-full', className)}
    disabled={isProcessing}
    {...props}
  >
    {isProcessing ? 'Processing...' : children}
  </button>
)

export default Button
