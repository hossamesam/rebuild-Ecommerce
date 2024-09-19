import React from 'react'
import FilterSlid from './FilterSlid'
import { Box, Button, Divider, Typography } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2/Grid2'
import FilterSize from './FilterSize'
import Filtercolor from './FilterColor'
import FilterCatogry from './FilterCatogry'

function Filter() {

    return (
        // w-48
        <Box className='w-72  bg-slate-100' >
            <FilterCatogry />
            <Divider />
            <FilterSlid />
            <Divider />
            <FilterSize />
            <Divider />
            <Filtercolor />
            <Divider />
        </Box>
    )
}

export default Filter
