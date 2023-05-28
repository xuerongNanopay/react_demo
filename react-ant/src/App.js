import logo from './logo.svg';
import './App.css';
import Button from './ant_component/Button'
import { ConfigProvider } from 'antd';


function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#1A6B54',
        },
      }}
    >
      <Button />
    </ConfigProvider>
  );
}

export default App;
