import { baseUrl } from '@/baseUrl';
import { Box, Checkbox, FormControlLabel, Typography } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Filtercolor() {
    const [dataColor, setDataColor] = useState<[{ "id": string, "name": string, "code": string }]>([{ "id": "", "name": "", "code": "" }]);

    useEffect(() => {
        axios.get(`${baseUrl}/api/colors`, {
        })
            .then((res) => {
                setDataColor(res.data)
            })
            .catch((err) => {
                console.log("err:")
                console.log(err)
            })
    }, [])

    return (
        <Box >
            <Typography variant="h5" color="initial" sx={{ fontWeight: "bolder", justifyContent: "center", alignItems: "center", display: "flex", my: "10px" }}>اللون</Typography>
            <Box sx={{ scrollbarWidth: "thin", scrollbarColor: "rgb(0,0,0) rgb(180,220,255)" }} className="h-48 flex flex-col ml-2 overflow-x-hidden">
                {dataColor.map((res, index) => (<FormControlLabel key={index} control={<Checkbox />} label={res.name} />))}
                {/* <FormControlLabel control={<Checkbox />} label="Beige" />
                <FormControlLabel control={<Checkbox />} label="Black" />
                <FormControlLabel control={<Checkbox />} label="Blue" />
                <FormControlLabel control={<Checkbox />} label="Brown" />
                <FormControlLabel control={<Checkbox />} label="Gold" />
                <FormControlLabel control={<Checkbox />} label="Green" />
                <FormControlLabel control={<Checkbox />} label="Grey" />
                <FormControlLabel control={<Checkbox />} label="Orange" />
                <FormControlLabel control={<Checkbox />} label="Pink" />
                <FormControlLabel control={<Checkbox />} label="Purple" />
                <FormControlLabel control={<Checkbox />} label="Red" />
                <FormControlLabel control={<Checkbox />} label="Rose Gold" />
                <FormControlLabel control={<Checkbox />} label="Silver" />
                <FormControlLabel control={<Checkbox />} label="Turquoise" />
                <FormControlLabel control={<Checkbox />} label="White" />
                <FormControlLabel control={<Checkbox />} label="Yellow" /> */}
            </Box>

        </Box>
    )
}

export default Filtercolor
