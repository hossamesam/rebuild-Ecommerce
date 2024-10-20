'use client'
import { Box, Slider, Typography } from '@mui/material'
import React, { useState } from 'react'

function FilterPrice() {
  const [value1, setValue1] = useState<number[]>([1, 20000])
  const minDistance = 10

  const handleChange1 = (event: Event, newValue: number | number[], activeThumb: number) => {
    if (!Array.isArray(newValue)) {
      return
    }

    if (activeThumb === 0) {
      setValue1([Math.min(newValue[0], value1[1] - minDistance), value1[1]])
    } else {
      setValue1([value1[0], Math.max(newValue[1], value1[0] + minDistance)])
    }
  }
  return (
    <Box>
      <Typography variant="h5" color="initial" sx={{ fontWeight: "bolder", justifyContent: "center", alignItems: "center", display: "flex", mt: "10px" }}>السعر</Typography>
      <Box sx={{ width: "100%", padding: "15px 10px", justifyContent: "center", alignItems: "center", display: "flex" }}>
        <Box sx={{ width: "80%", m: "28px 0 10px", justifyContent: "center", flexDirection: "column", alignItems: "center", display: "flex" }}>
          <Slider
            sx={{
              color: "rgb(56,70,90)",
            }}
            dir="rtl"
            value={value1}
            onChange={handleChange1}
            max={20000}
            min={1}
            valueLabelDisplay="on"
            lang='rtl'
            getAriaLabel={() => 'Minimum distance'}
          />
        </Box>
      </Box>
    </Box>
  )
}

export default FilterPrice
