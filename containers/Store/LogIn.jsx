import {
  Box,
  Button,
  Container,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import Link from "next/link";
import FormInput from "../../components/FormControl/FormInput";
import FormPassWord from "../../components/FormControl/FormPassword";
import Image from "../../components/Image";
import StatusBar from "../../components/StatusBar";

export default function LogIn() {
  const theme = useTheme();

  return (
    <Box sx={{ overflowY: "none", height: "960px" }}>
      <StatusBar />

      <Container
        sx={{
          overflowY: "none",
          paddingBottom: "3rem",
          backgroundImage: "url('/img/Group (2).png')",
          backgroundSize: "428px, 100%",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Box
          sx={{
            paddingTop: "5rem",
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
          <FormInput
            label="Số Điện Thoại"
            placeholder="Nhập số điện thoại..."
          />
          <FormPassWord label="Mật Khẩu" placeholder="Nhập mật khẩu..." />
        </Box>

        <Box marginY="12px">
          <Link href="/home">
            <Button variant="contained">Đăng nhập</Button>
          </Link>
        </Box>

        <Box>
          <Typography
            variant="subtitle1"
            textAlign="center"
            marginBottom="2rem"
            color={theme.palette.primary.main}
            sx={{ cursor: "pointer" }}
          >
            Quên mật khẩu?
          </Typography>

          <Stack direction="row" spacing={1} justifyContent="center">
            <Typography variant="subtitle1">Bạn chưa có tài khoản?</Typography>
            <Link href="/" style={{ cursor: "pointer" }}>
              <Typography
                variant="subtitle1"
                color={theme.palette.primary.main}
              >
                Đăng ký
              </Typography>
            </Link>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
