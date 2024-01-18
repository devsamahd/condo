"use client";
import React from "react";
import { useEffect, useState } from "react";

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import PageContainer from "@/app/(DashboardLayout)/components/container/PageContainer";

// components
import CongratulationsCard from "@/app/(DashboardLayout)/components/dashboards/dashboard1/CongratulationsCard";
import Payments from "@/app/(DashboardLayout)/components/dashboards/dashboard1/Payments";
import Products from "@/app/(DashboardLayout)/components/dashboards/dashboard1/Products";
import LatestDeals from "@/app/(DashboardLayout)/components/dashboards/dashboard1/LatestDeals";
import Customers from "@/app/(DashboardLayout)/components/dashboards/dashboard1/Customers";
import ProductTable from "@/app/(DashboardLayout)/components/dashboards/dashboard1/ProductTable";
import VisitUsa from "@/app/(DashboardLayout)/components/dashboards/dashboard1/VisitUsa";
import LatestReviews from "@/app/(DashboardLayout)/components/dashboards/dashboard1/LatestReviews";
import Welcome from "@/app/(DashboardLayout)/layout/shared/welcome/Welcome";

export default function Dashboard() {
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <PageContainer title="Dashboard" description="this is Dashboard">
      <Box>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={6}>
            <CongratulationsCard isLoading={isLoading}  />
          </Grid>
          <Grid item xs={12} lg={6}>
            <Grid container spacing={3}>
              <Grid item xs={12} lg={6} sm={6}>
                <Payments  isLoading={isLoading} />
              </Grid>
              <Grid item xs={12} lg={6} sm={6}>
                <Products  isLoading={isLoading} />
              </Grid>
              <Grid item xs={12} lg={6} sm={6}>
                <LatestDeals />
              </Grid>
              <Grid item xs={12} lg={6} sm={6}>
                <Customers  isLoading={isLoading} />
              </Grid>
            </Grid>
          </Grid>
          {/* column */}
          <Grid item xs={12} lg={8}>
            <ProductTable />
          </Grid>
          <Grid item xs={12} lg={4}>
            <VisitUsa />
          </Grid>
          <Grid item xs={12}>
            <LatestReviews />
          </Grid>
        </Grid>
        <Welcome />
      </Box>
    </PageContainer> 
  );
}
