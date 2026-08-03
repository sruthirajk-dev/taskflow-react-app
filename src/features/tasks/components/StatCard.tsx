import { Card, CardContent, Typography } from "@mui/material";
import type { ReactNode } from "react";

interface StatCardProps {
  title: string;
  value: number;
  icon?: ReactNode;
}

const StatCard = ({ title, value, icon }: StatCardProps) => {
  return (
    <Card elevation={2}>
      <CardContent>
        {icon}

        <Typography
          variant="body2"
          color="text.secondary"
          gutterBottom
        >
          {title}
        </Typography>

         
        <Typography variant="h4" sx={{fontWeight:600}}>
          {value}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default StatCard;