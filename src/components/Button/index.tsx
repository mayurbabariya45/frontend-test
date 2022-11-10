import React from "react"
import Button from "@mui/material/Button"

interface ButtonProps {
  /**
   * The variant to use.
   */
  variant?: "contained" | "outlined" | "text"
  /**
   * What color to use
   */
  color?: "inherit" | "primary" | "secondary" | "success" | "error" | "info" | "warning"
  /**
   * How large should the button be?
   */
  size?: "small" | "medium" | "large"
  /**
   * Button contents
   */
  label: string
  /**
   * Optional click handler
   */
  onClick?: () => void
}

/**
 * Primary UI component for user interaction
 */
const ButtonComponent = ({ variant, label, color, size, onClick }: ButtonProps) => (
  <Button variant={variant} color={color} size={size} onClick={onClick}>
    {label}
  </Button>
)

export default ButtonComponent
