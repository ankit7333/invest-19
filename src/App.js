import { MenuProvider } from './context/contextMenu';
import './styles/globals.scss';
import Header from './component/Header'
import Sidebar from './component/Sidebar'
import Ificredit from './component/Ificredit'
import Credithistory from './component/Credithistory'
function App() {
  return (
    <MenuProvider>
      <main className={`main display__grid`}>
        <Header />
        <Sidebar />
        <Ificredit />
        <Credithistory />
      </main>
    </MenuProvider>
  );
}

export default App;
