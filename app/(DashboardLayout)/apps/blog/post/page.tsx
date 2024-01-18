"use client"

import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';
import BlogListing from '@/app/(DashboardLayout)/components/apps/blog/BlogListing';

const Blog = () => {
  return (
    <PageContainer title="Blog" description="this is Blog">
      {/* ------------------------------------------- */}
      {/* Blog Listing */}
      {/* ------------------------------------------- */}
      <BlogListing />
    </PageContainer>
  );
};

export default Blog;
