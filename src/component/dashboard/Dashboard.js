import Header from "./header/Header";
import CD from "./cd/CD";
import { StyledDashboard } from "./Dashboard.styled.js";
import Control from "./control/Control";
function Dashboard() {
  return (
    <StyledDashboard>
      <Header />
      <CD />
      <Control />
    </StyledDashboard>
  );
}

export default Dashboard;
