import { Stack, Typography } from "@mui/material";

import MainLayout from "../components/layout/MainLayout";
import DashboardStats from "../features/tasks/components/DashboardStats";

const Dashboard = () => {
  return (
    <MainLayout>
      <Stack spacing={4}>
        <Typography variant="h4" sx={{fontWeight:600}}>
          Dashboard
        </Typography>

        <DashboardStats />
      </Stack>
    </MainLayout>
  );
};

export default Dashboard;