import { List, ListItem, ListItemText } from "@mui/material";
import { DataGrid, GridRowParams } from "@mui/x-data-grid";
import { getRouteApi, useNavigate } from "@tanstack/react-router";
import { ErrorComponent } from "../../components/ErrorComponent.tsx";
import PageLayout from "../../components/layouts/PageLayout.tsx";
import { PendingComponent } from "../../components/PendingComponent.tsx";
import { useOrderById } from "../../utils/apiHooks.ts";
import { dishesInOrderColumns } from "../../utils/columns.ts";

const routeApi = getRouteApi("/_auth/orders/$id");

function OrderId() {
  const { id } = routeApi.useParams();
  const { data, error, isLoading } = useOrderById(parseInt(id));
  const navigate = useNavigate();

  if (isLoading) {
    return <PendingComponent />;
  }

  if (!data || error) {
    return <ErrorComponent error={error} />;
  }

  const handleClick = (gridParams: GridRowParams): void => {
    const id: string = gridParams.row.idDish;
    navigate({ to: "/dishes/$id", params: { id } }).then();
  };

  const dateSplit = data.date.split("T");

  return (
    <>
      <title>{`Заказ №${data.idOrder}`}</title>
      <PageLayout title={`Заказ №${data.idOrder}`}>
        <List>
          <ListItem>
            <ListItemText primary={`Дата: ${dateSplit[0]} ${dateSplit[1]}`} />
          </ListItem>
          <ListItem>
            <ListItemText primary={`Стол: ${data.tableNumber}`} />
          </ListItem>
          <ListItem>
            <ListItemText primary={`Статус: ${data.status}`} />
          </ListItem>
          <ListItem>
            <ListItemText primary={`Официант: ${data.employee}`} />
          </ListItem>
        </List>
        <DataGrid
          columns={dishesInOrderColumns}
          rows={data.dishesInOrder ? data.dishesInOrder : undefined}
          getRowId={(row) => row.idDish}
          disableColumnMenu={true}
          hideFooter={true}
          onRowDoubleClick={handleClick}
        />
      </PageLayout>
    </>
  );
}

export default OrderId;
