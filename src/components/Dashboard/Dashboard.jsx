import '../../styles/Dashboard/Dashboard.css';
import Header from './Header/Header';
import SummaryAccounts from './SummaryAccounts/SummaryAccounts';
function Dashboard() {
  return(
    <div className="principal-container">
      <Header />
      <div className='summary-container'>
        <SummaryAccounts />
      </div>
    </div>
  );
}

export default Dashboard;