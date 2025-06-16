import { Button } from "@mui/material";
import { DataGrid, GridRowParams } from "@mui/x-data-grid";
import { useNavigate } from "@tanstack/react-router";
import { ErrorComponent } from "../../components/ErrorComponent.tsx";
import PageLayout from "../../components/layouts/PageLayout.tsx";
import { PendingComponent } from "../../components/PendingComponent.tsx";
import { useDishes } from "../../utils/apiHooks.ts";
import { dishesColumns } from "../../utils/columns.ts";

function DishesIndexPage() {
  const { data, error, isLoading } = useDishes();
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

  return (
    <PageLayout title="Блюда">
      <Button variant="contained" sx={{ marginBottom: 4 }}>
        Добавить блюдо
      </Button>
      <DataGrid
        columns={dishesColumns}
        rows={data}
        getRowId={(row) => row.idDish}
        disableColumnMenu={true}
        onRowDoubleClick={handleClick}
        hideFooter={true}
      />
    </PageLayout>
  );
}

export default DishesIndexPage;
