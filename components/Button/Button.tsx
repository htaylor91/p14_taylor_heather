
type ButtonProps = {
  type: 'button' | 'submit' | 'reset',
  onClick?: ((event: unknown) => void)
  children?: React.ReactNode,
  className?: string
  ariaAttributes?: { [key: string]: string }
  disabled?: boolean
}

export default function Button({ type, onClick, children, className, ariaAttributes, disabled }: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${className && className}`}
      {...ariaAttributes}
    >{children}</button>
  )
}