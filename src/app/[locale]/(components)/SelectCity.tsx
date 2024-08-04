"use client"
import * as React from 'react';
import { Theme, useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 300,
    },
  },
};

const names = [
  "القاهرة",
  "الجيزة",
  "الإسكندرية",
  "شبرا الخيمة",
  "سنوريس",
  "المنصورة",
  "حلوان",
  "المحلة الكبرى",
  "شبين القناطر",
  "الفيوم",
  "اخميم",
  "المراغة",
  "طنطا",
  "أوسيم",
  "اسيوط",
  "الزقازيق",
  "العجمي",
  "شبين الكوم",
  "رأس البر",
  "العشير من رمضان",
  "دمنهور",
  "المنيا",
  "ملوي",
  "دمياط",
  "بني سوي",
  "بنها",
  "قليوب",
  "كفر الش",
  "دسوق",
  "منوف",
  "فاقوس",
  "جيرجا",
  "البدرشي",
  "ابشواي",
  "الخانكة",
  "عزبة ال",
  "كرداسة",
  "أبنوب",
  "المنشاة",
  "القرين",
  "أبو زعب",
  "البلينا",
  "العياط",
  "البداري",
  "كفر الك",
  "ابو قير",
  "قها",
  "الكرنك",
  "كفر شكر",
  "أخبرو",
  "بني مر",
  "المدامو",
  "برقاش",
  "كفر طحل"
];

function getStyles(name: string, personName: string[], theme: Theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function SelectCity() {
  const theme = useTheme();
  const [personName, setPersonName] = React.useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof personName>) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  return (
    <div>
      <FormControl sx={{ m: 1, width: "100%" }}>
        <InputLabel id="demo-simple-select-helper-label">المحافظة</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-multiple-name"
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput label="Name" />}
          MenuProps={MenuProps}
        >
          {names.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, personName, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
