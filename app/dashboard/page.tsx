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
        <BalanceTrend />
      </CenterLayout>
      <RightLayout>
        <ExpenseChart />
        <TransactionList />
      </RightLayout>
    </Layout>
  );
};

export default DashboardPage;
