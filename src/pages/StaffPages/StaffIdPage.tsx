import { List, ListItem, ListItemText } from "@mui/material";
import { getRouteApi } from "@tanstack/react-router";
import { ErrorComponent } from "../../components/ErrorComponent.tsx";
import PageLayout from "../../components/layouts/PageLayout.tsx";
import { PendingComponent } from "../../components/PendingComponent.tsx";
import { useStaffById } from "../../utils/apiHooks.ts";

const routeApi = getRouteApi("/_auth/staff/$id");

function StaffIdPage() {
  const { id } = routeApi.useParams();
  const { data, error, isLoading } = useStaffById(parseInt(id));

  if (isLoading) {
    return <PendingComponent />;
  }

  if (!data || error) {
    return <ErrorComponent error={error} />;
  }

  return (
    <>
      <title>{`${data.lastName} ${data.firstName} ${data.middleName == undefined ? "" : data.middleName}`}</title>
      <PageLayout title="Сотрудник">
        <List>
          <ListItem>
            <ListItemText primary={`Фамилия: ${data.lastName}`} />
          </ListItem>
          <ListItem>
            <ListItemText primary={`Имя: ${data.firstName}`} />
          </ListItem>
          <ListItem>
            <ListItemText
              primary={`Отчество: ${data.middleName == undefined ? "−" : data.middleName}`}
            />
          </ListItem>
          <ListItem>
            <ListItemText primary={`Должность: ${data.position}`} />
          </ListItem>
          <ListItem>
            <ListItemText primary={`Номер телефона: ${data.phoneNumber}`} />
          </ListItem>
        </List>
      </PageLayout>
    </>
  );
}

export default StaffIdPage;
