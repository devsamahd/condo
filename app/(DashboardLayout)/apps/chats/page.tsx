"use client"

import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';
import ChatSidebar from '@/app/(DashboardLayout)/components/apps/chats/ChatSidebar';
import ChatContent from '@/app/(DashboardLayout)/components/apps/chats/ChatContent';
import ChatMsgSent from '@/app/(DashboardLayout)/components/apps/chats/ChatMsgSent';
import AppCard from '@/app/(DashboardLayout)/components/shared/AppCard';

const Chats = () => {
  const [isMobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  return (
    <PageContainer title="Chat" description="this is Chat">
      <AppCard>
        {/* ------------------------------------------- */}
        {/* Left part */}
        {/* ------------------------------------------- */}

        <ChatSidebar
          isMobileSidebarOpen={isMobileSidebarOpen}
          onSidebarClose={() => setMobileSidebarOpen(false)}
        />
        {/* ------------------------------------------- */}
        {/* Right part */}
        {/* ------------------------------------------- */}

        <Box flexGrow={1}>
          <ChatContent toggleChatSidebar={() => setMobileSidebarOpen(true)} />
          <Divider />
          <ChatMsgSent />
        </Box>
      </AppCard>
    </PageContainer>
  );
};

export default Chats;
