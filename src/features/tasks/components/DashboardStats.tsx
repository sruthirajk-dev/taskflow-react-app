import { Grid } from "@mui/material";

import AssignmentIcon from "@mui/icons-material/Assignment";
import PendingActionsIcon from "@mui/icons-material/PendingActions";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import StatCard from "./StatCard";

const DashboardStats = () => {
  return (
    <Grid container spacing={3}>
      <Grid size={{ xs: 12, sm: 6, md: 3 }}>
        <StatCard
          title="Total Tasks"
          value={12}
          icon={<AssignmentIcon color="primary" />}
        />
      </Grid>

      <Grid size={{ xs: 12, sm: 6, md: 3 }}>
        <StatCard
          title="Pending"
          value={5}
          icon={<PendingActionsIcon color="warning" />}
        />
      </Grid>

      <Grid size={{ xs: 12, sm: 6, md: 3 }}>
        <StatCard
          title="In Progress"
          value={4}
          icon={<AutorenewIcon color="info" />}
        />
      </Grid>

      <Grid size={{ xs: 12, sm: 6, md: 3 }}>
        <StatCard
          title="Completed"
          value={3}
          icon={<CheckCircleIcon color="success" />}
        />
      </Grid>
    </Grid>
  );
};

export default DashboardStats;