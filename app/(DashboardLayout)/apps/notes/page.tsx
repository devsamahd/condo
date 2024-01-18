"use client"

import { useState, useEffect } from "react";
import Box from '@mui/material/Box';
import { Theme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';
import NoteSidebar from '@/app/(DashboardLayout)/components/apps/notes/NoteSidebar';
import NoteContent from '@/app/(DashboardLayout)/components/apps/notes/NoteContent';
import AppCard from '@/app/(DashboardLayout)/components/shared/AppCard';


export default function Notes() {
  const [isMobileSidebarOpen, setMobileSidebarOpen] = useState(true);

  const lgDown = useMediaQuery((theme: Theme) => theme.breakpoints.down("lg"));

  useEffect(() => {
    if (lgDown) {
      setMobileSidebarOpen(!isMobileSidebarOpen);
    } else {
      setMobileSidebarOpen(true);
    }
  }, [lgDown, isMobileSidebarOpen]);

  return (
    <PageContainer title="Note App" description="this is Note App">
      <AppCard>
        {isMobileSidebarOpen ? (
          <NoteSidebar
            isMobileSidebarOpen={isMobileSidebarOpen}
            onSidebarClose={() => setMobileSidebarOpen(false)}
          />
        ) : (
          <></>
        )}

        <Box flexGrow={1}>
          <NoteContent
            toggleNoteSidebar={() => setMobileSidebarOpen(!isMobileSidebarOpen)}
          />
        </Box>
      </AppCard>
    </PageContainer>
  );
};


