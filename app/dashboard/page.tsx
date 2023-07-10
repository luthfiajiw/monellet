import AccountCards from "@/components/dashboards/AccountCards";
import BalanceTrend from "@/components/dashboards/BalanceTrend";
import ExpenseChart from "@/components/dashboards/ExpenseChart";
import TransactionList from "@/components/dashboards/TransactionList";
import { CenterLayout, Layout, RightLayout } from "@/components/layouts/Layout";
import { FunctionComponent } from "react";

const DashboardPage: FunctionComponent = () => {
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
