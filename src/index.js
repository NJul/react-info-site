import ReactDOM from 'react-dom/client';
import App from './components/App';
import './css/style.css';

const domContainer = document.querySelector('#root');
const root = ReactDOM.createRoot(domContainer);
root.render(<App />);
