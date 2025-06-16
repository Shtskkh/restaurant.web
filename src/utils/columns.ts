import { GridColDef } from "@mui/x-data-grid";
import { Staff } from "./apiTypes.ts";

export const staffColumns: GridColDef<Staff>[] = [
  {
    field: "idEmployee",
    headerName: "ID",
    flex: 0.25,
  },
  {
    field: "lastName",
    headerName: "Фамилия",
    flex: 1,
  },
  {
    field: "firstName",
    headerName: "Имя",
    flex: 1,
  },
  {
    field: "middleName",
    headerName: "Отчество",
    flex: 1,
  },
  {
    field: "position",
    headerName: "Должность",
    flex: 1,
  },
  {
    field: "phoneNumber",
    headerName: "Номер телефона",
    flex: 1,
  },
];
