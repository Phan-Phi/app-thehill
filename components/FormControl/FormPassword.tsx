import {
  FormControl,
  FormLabel,
  IconButton,
  InputAdornment,
  InputBase,
} from "@mui/material";
import React, { useState } from "react";
import Visibility from "@mui/icons-material/Visibility";

export default function FormPassWord({ label, placeholder }) {
  const [isvalue, setIsValue] = useState("t-solution");

  return (
    <FormControl fullWidth>
      <FormLabel>{label}</FormLabel>

      <InputBase
        onChange={(e) => {
          setIsValue(e.target.value);
        }}
        value={isvalue}
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
