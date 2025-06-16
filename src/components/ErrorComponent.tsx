import { Typography } from "@mui/material";

const ErrorComponent = (error: any) => {
  if (error instanceof Error) {
    return (
      <>
        <title>Ошибка</title>
        <Typography variant="body1" color="textPrimary" mt={3} mb={3}>
          Ошибка сервера, попробуйте позже. Ошибка: {error.message}
        </Typography>
      </>
    );
  }

  return (
    <>
      <title>Ошибка</title>
      <Typography variant="body1" color="textPrimary" mt={3} mb={3}>
        Что-то пошло не так! Ошибка: {error.title}
      </Typography>
    </>
  );
};

export default ErrorComponent;
