import {
  Autocomplete,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from "@mui/material";
import { DataGrid, GridRowParams } from "@mui/x-data-grid";
import { ErrorComponent, useNavigate } from "@tanstack/react-router";
import { ChangeEvent, FormEvent, useState } from "react";
import PageLayout from "../../components/layouts/PageLayout.tsx";
import { PendingComponent } from "../../components/PendingComponent.tsx";
import { addStaff, usePositions, useStaff } from "../../utils/apiHooks.ts";
import { staffColumns } from "../../utils/columns.ts";
import { testPassword, testPhoneNumber } from "../../utils/regex.ts";

function StaffIndexPage() {
  const { data, error, isLoading } = useStaff();
  const { mutate } = addStaff();
  const positions = usePositions();
  const [open, setOpen] = useState(false);
  const [telephoneError, setTelephoneError] = useState<boolean>(false);
  const [passwordError, setPasswordError] = useState<boolean>(false);
  const navigate = useNavigate();

  if (isLoading) {
    return <PendingComponent />;
  }

  if (!data || error) {
    return <ErrorComponent error={error} />;
  }

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleRowDoubleClick = (gridParams: GridRowParams): void => {
    const id: string = gridParams.row.idEmployee;
    navigate({ to: "/staff/$id", params: { id } }).then();
  };

  const handleTelephoneChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!testPhoneNumber(e.target.value)) {
      setTelephoneError(true);
    } else {
      setTelephoneError(false);
    }
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!testPassword(e.target.value)) {
      setPasswordError(true);
    } else {
      setPasswordError(false);
    }
  };

  return (
    <PageLayout title={"Сотрудники"}>
      <Button variant="contained" sx={{ marginBottom: 4 }} onClick={handleOpen}>
        Добавить сотрудника
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="sm"
        fullWidth
        slotProps={{
          paper: {
            component: "form",
            onSubmit: (e: FormEvent<HTMLFormElement>) => {
              e.preventDefault();
              const formData = new FormData(e.currentTarget);
              const formJson = Object.fromEntries((formData as any).entries());
              console.log(formJson);
              mutate({ body: formData });
              handleClose();
            },
          },
        }}
      >
        <DialogTitle align="center">Новый сотрудник</DialogTitle>
        <DialogContent>
          <DialogContentText sx={{ mb: 1 }}>
            Заполните форму нового сотрудника:
          </DialogContentText>
          <TextField
            id="lastName"
            name="lastName"
            required
            label="Фамилия"
            margin="dense"
            fullWidth
          />
          <TextField
            id="firstName"
            name="firstName"
            required
            label="Имя"
            margin="dense"
            fullWidth
          />
          <TextField
            id="middleName"
            name="middleName"
            label="Отчество"
            margin="dense"
            fullWidth
          />
          <Autocomplete
            freeSolo
            options={positions.data!.map((option) => option.title)}
            renderInput={(params) => (
              <TextField
                {...params}
                id="position"
                name="position"
                required
                label="Должность"
                margin="dense"
                fullWidth
              />
            )}
          />
          <TextField
            id="phoneNumber"
            name="phoneNumber"
            required
            label="Номер телефона"
            margin="dense"
            type="tel"
            onChange={handleTelephoneChange}
            error={telephoneError}
            helperText="Телефон должен быть в формате +79996661234"
            fullWidth
          />
          <TextField
            id="login"
            name="login"
            required
            label="Логин"
            margin="dense"
            fullWidth
          />
          <TextField
            id="password"
            name="password"
            autoComplete="off"
            required
            label="Пароль"
            margin="dense"
            fullWidth
            onChange={handlePasswordChange}
            error={passwordError}
            helperText={
              "Пароль должен содержать от 8 символов, спец. символы и цифры."
            }
          />
          <DialogActions sx={{ mt: 2 }}>
            <Button onClick={handleClose}>Отмена</Button>
            <Button type="submit">Добавить</Button>
          </DialogActions>
        </DialogContent>
      </Dialog>
      <DataGrid
        columns={staffColumns}
        rows={data}
        getRowId={(row) => row.idEmployee}
        disableColumnMenu={true}
        onRowDoubleClick={handleRowDoubleClick}
        hideFooter={true}
      />
    </PageLayout>
  );
}

export default StaffIndexPage;
