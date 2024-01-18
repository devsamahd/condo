"use client"

import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';
import ProductTableList from '@/app/(DashboardLayout)/components/apps/ecommerce/ProductTableList/ProductTableList';
import BlankCard from '@/app/(DashboardLayout)/components/shared/BlankCard';

const EcomProductList = () => {
  return (
    <PageContainer title="eCommerce Product List" description="this is eCommerce Product List">
      <BlankCard>
        {/* ------------------------------------------- */}
        {/* Left part */}
        {/* ------------------------------------------- */}
        <ProductTableList />
      </BlankCard>
    </PageContainer>
  );
};

export default EcomProductList;
