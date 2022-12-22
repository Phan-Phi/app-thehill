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

export default function FormPassWord({ label, placeholder }) {
  return (
    <FormControl fullWidth>
      <FormLabel>{label}</FormLabel>

      <InputBase
        fullWidth
        id="outlined-adornment-password"
        type="password"
        placeholder={placeholder}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              //   onClick={handleClickShowPassword}
              //   onMouseDown={handleMouseDownPassword}
              edge="end"
            >
              {/* {showPassword ? <VisibilityOff /> : <Visibility />} */}
              <Visibility />
            </IconButton>
          </InputAdornment>
        }
      />
    </FormControl>
  );
}
// 1.44
