import AccountCards from "@/components/dashboards/AccountCards";
import BalanceTrend from "@/components/dashboards/BalanceTrend";
import Header from "@/components/layouts/Header";
import Layout from "@/components/layouts/Layout";
import { FunctionComponent } from "react";

const DashboardPage: FunctionComponent = () => {
  return (
    <Layout>
      <Header
        label="Dashboard"
      />
      <AccountCards />
      <BalanceTrend />
    </Layout>
  );
};

export default DashboardPage;
