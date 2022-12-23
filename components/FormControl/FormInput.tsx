import { FormControl, FormLabel, InputBase } from "@mui/material";
import React, { useState } from "react";

export default function FormInput({ label, placeholder }) {
  const [isvalue, setIsValue] = useState("t-solution");

  return (
    <FormControl fullWidth>
      <FormLabel>{label}</FormLabel>

      <InputBase
        value={isvalue}
        fullWidth
        id="outlined-adornment-password"
        placeholder={placeholder}
        type="text"
        onChange={(e) => {
          setIsValue(e.target.value);
        }}
      />
    </FormControl>
  );
}
