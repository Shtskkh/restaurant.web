import { Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { ErrorComponent } from "../../components/ErrorComponent.tsx";
import PageLayout from "../../components/layouts/PageLayout.tsx";
import { PendingComponent } from "../../components/PendingComponent.tsx";
import { useSupplies } from "../../utils/apiHooks.ts";
import { suppliesColumns } from "../../utils/columns.ts";

function SuppliesIndexPage() {
  const { data, error, isLoading } = useSupplies();

  if (isLoading) {
    return <PendingComponent />;
  }

  if (!data || error) {
    return <ErrorComponent error={error} />;
  }

  return (
    <PageLayout title={"Поставки"}>
      <Button variant="contained" sx={{ marginBottom: 4 }}>
        Добавить поставку
      </Button>
      <DataGrid
        columns={suppliesColumns}
        rows={data}
        getRowId={(row) => row.date}
        disableColumnMenu={true}
        hideFooter={true}
      />
    </PageLayout>
  );
}

export default SuppliesIndexPage;
