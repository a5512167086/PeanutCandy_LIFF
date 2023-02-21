import { useEffect } from 'react';
import liff from '@line/liff';
import '@/styles/App.css';

function App() {
  useEffect(() => {
    liff
      .init({
        liffId: import.meta.env.VITE_LIFF_ID
      })
      .catch((err: Error) => {
        console.log(err);
      });
  });

  return (
    <div className="App">
      <h1>create-liff-app</h1>
      <a href="https://developers.line.biz/ja/docs/liff/" target="_blank" rel="noreferrer">
        LIFF Documentation
      </a>
    </div>
  );
}

export default App;
