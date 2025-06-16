import { List, ListItem, ListItemText } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { getRouteApi } from "@tanstack/react-router";
import { ErrorComponent } from "../../components/ErrorComponent.tsx";
import PageLayout from "../../components/layouts/PageLayout.tsx";
import { PendingComponent } from "../../components/PendingComponent.tsx";
import { useDish } from "../../utils/apiHooks.ts";
import { productsInDishColumns } from "../../utils/columns.ts";

const routeApi = getRouteApi("/_auth/dishes/$id");

function DishIdPage() {
  const { id } = routeApi.useParams();
  const { data, error, isLoading } = useDish(parseInt(id));

  if (isLoading) {
    return <PendingComponent />;
  }

  if (!data || error) {
    return <ErrorComponent error={error} />;
  }

  return (
    <>
      <title>{`${data.title}`}</title>
      <PageLayout title={`${data.title}`}>
        <List>
          <ListItem>
            <ListItemText
              primary={`Вес (объём): ${data.weightVolume} ${data.unit}`}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary={`Доступен для заказа: ${data.availability ? "да" : "нет"}`}
            />
          </ListItem>
          <ListItem>
            <ListItemText primary={`Стоимость: ${data.cost} р.`} />
          </ListItem>
        </List>
        {data.products?.length === 0 || data.products == undefined ? null : (
          <DataGrid
            columns={productsInDishColumns}
            rows={data.products}
            getRowId={(row) => row.idProduct}
            disableColumnMenu={true}
            hideFooter={true}
          />
        )}
      </PageLayout>
    </>
  );
}

export default DishIdPage;
