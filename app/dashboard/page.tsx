'use client'

import AccountCards from "@/components/dashboards/AccountCards";
import BalanceTrend from "@/components/dashboards/BalanceTrend";
import ExpenseChart from "@/components/dashboards/ExpenseChart";
import TransactionList from "@/components/dashboards/TransactionList";
import { CenterLayout, Layout, RightLayout } from "@/components/layouts/Layout";
import { FunctionComponent, useRef } from "react";

const DashboardPage: FunctionComponent = () => {
  const windowWidth = useRef(window.innerWidth);

  if (windowWidth.current < 640) {
    return (
      <Layout>
        <CenterLayout>
          <AccountCards />
          <BalanceTrend />
        </CenterLayout>
        <RightLayout>
          <ExpenseChart />
          <TransactionList />
        </RightLayout>
      </Layout>
    );
  }

  return (
    <Layout>
      <CenterLayout>
        <AccountCards />
        <TransactionList />
      </CenterLayout>
      <RightLayout>
        <BalanceTrend />
        <ExpenseChart />
      </RightLayout>
    </Layout>
  );
};

export default DashboardPage;
