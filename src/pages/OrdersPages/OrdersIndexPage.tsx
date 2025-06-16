import { DataGrid, GridRowParams } from "@mui/x-data-grid";
import { useNavigate } from "@tanstack/react-router";
import { ErrorComponent } from "../../components/ErrorComponent.tsx";
import PageLayout from "../../components/layouts/PageLayout.tsx";
import { PendingComponent } from "../../components/PendingComponent.tsx";
import { useOrders } from "../../utils/apiHooks.ts";
import { ordersColumns } from "../../utils/columns.ts";

function OrdersIndexPage() {
  const { data, error, isLoading } = useOrders();
  const navigate = useNavigate();

  if (isLoading) {
    return <PendingComponent />;
  }

  if (!data || error) {
    return <ErrorComponent error={error} />;
  }

  const handleClick = (gridParams: GridRowParams): void => {
    const id: string = gridParams.row.idOrder;
    navigate({ to: "/orders/$id", params: { id } }).then();
  };

  return (
    <PageLayout title="Заказы">
      <DataGrid
        columns={ordersColumns}
        rows={data}
        getRowId={(row) => row.idOrder}
        disableColumnMenu={true}
        onRowDoubleClick={handleClick}
        hideFooter={true}
      />
    </PageLayout>
  );
}

export default OrdersIndexPage;
