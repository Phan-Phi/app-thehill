import { Box, Button, Stack, Typography, useTheme } from "@mui/material";
import Link from "next/link";
import FormInput from "../../components/FormControl/FormInput";
import FormPassWord from "../../components/FormControl/FormPassword";
import Image from "../../components/Image";

export default function LogIn() {
  const theme = useTheme();

  return (
    <Box height="100vh">
      <Box
        sx={{
          marginTop: "7rem",
          marginBottom: "4.6rem",
          "& div": {
            margin: "0 auto",
          },
        }}
      >
        <Image src="/img/logo.png" width={182} height={128} alt="image" />
      </Box>

      <Typography variant="h4" textAlign="center" marginBottom="2rem">
        Chào mừng đến với ĐỔI ĐIỂM!
      </Typography>

      <Box>
        <FormInput label="Số Điện Thoại" placeholder="Nhập số điện thoại..." />
        <FormPassWord label="Mật Khẩu" placeholder="Nhập mật khẩu..." />
      </Box>

      <Box marginY="12px">
        <Button variant="contained">Đăng nhập</Button>
      </Box>

      <Box>
        <Typography
          variant="subtitle1"
          textAlign="center"
          marginBottom="2rem"
          color={theme.palette.primary.main}
        >
          Quên mật khẩu?
        </Typography>

        <Stack direction="row" spacing={1} justifyContent="center">
          <Typography variant="subtitle1">Bạn chưa có tài khoản?</Typography>
          <Link href="/">
            <Typography variant="subtitle1" color={theme.palette.primary.main}>
              Đăng ký
            </Typography>
          </Link>
        </Stack>
      </Box>
    </Box>
  );
}
