import React, { useState } from "react"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import { CardActionArea, Checkbox, FormControlLabel } from "@mui/material"

interface CardProps {
  /**
   * The image to use.
   */
  imageUrl?: string
  /**
   * To know if checked
   */
  checked?: boolean
  /**
   * Button contents
   */
  label?: string
  /**
   * Optional click handler
   */
  onClick?: () => void
}

/**
 * Primary UI component for user interaction
 * "Flood zone 3"
 * "/static/CardMedia.png"
 */
const CardComponent = ({ imageUrl, label, checked, onClick }: CardProps) => {
  return (
    <Card
      sx={{
        maxWidth: 229,
        height: 150,
        borderRadius: "10px",
        border: "1px solid #EFEFEF",
        boxShadow: (checked && "0px 0px 0px 2px #65E9D9") || "unset",
        "&:hover": {
          boxShadow: "0px 0px 0px 2px #65E9D9"
        }
      }}
    >
      <CardActionArea>
        <CardMedia component="img" height="100" image={imageUrl} alt="Flood zone" />
        <CardContent sx={{ height: 50, padding: "0px 16px", display: "flex", alignItems: "center", justifyContent: "flex-start" }}>
          <FormControlLabel
            sx={{
              "& span": {
                fontFamily: "Plus Jakarta Sans",
                fontWeight: 400,
                fontSize: "14px",
                lineHeight: "143%",
                letterSpacing: "0.17px"
              }
            }}
            control={
              <Checkbox
                onClick={onClick}
                checked={checked}
                sx={{
                  "&.Mui-checked": {
                    color: "#65E9D9"
                  }
                }}
              />
            }
            label={label}
          />
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default CardComponent
