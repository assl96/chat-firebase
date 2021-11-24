import './App.css';
import ChatRoom from './components/ChatRoom';

function App() {
  return (
    <div>
      <nav className="nav bar navbar-light bg-dark">
        <a className="navbar-brand text-white"> Chat React</a>
      </nav>
      <div className="container p-5">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <ChatRoom/>
          </div>
        </div>

      </div>
    </div>
  );
}
export default App;
