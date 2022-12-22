import {
  FormControl,
  FormLabel,
  IconButton,
  InputAdornment,
  InputBase,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import React from "react";
import Visibility from "@mui/icons-material/Visibility";

export default function FormInput({ label, placeholder }) {
  return (
    <FormControl fullWidth>
      <FormLabel>{label}</FormLabel>

      <InputBase
        fullWidth
        id="outlined-adornment-password"
        placeholder={placeholder}
        type="text"
      />
    </FormControl>
  );
}
// 1.44
