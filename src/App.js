import './App.css';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <main className="main-content">
        <div>
          <h1>Welcome to GoShare</h1>
          <p>Your delivery management platform</p>
        </div>
      </main>
    </div>
  );
}

export default App;