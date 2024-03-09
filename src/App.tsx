import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [params, setParams] = useState<Record<string, string>>({});
  useEffect(() => {
    const hash = window.location.hash;
    const rawParams = hash.substring(1).split('&');
    setParams(
      rawParams.reduce((acc, current) => {
        const [key, value] = current.split('=');
        acc[key] = decodeURIComponent(value);
        return acc;
      }, {} as Record<string, string>)
    );
  }, []);

  return (
    <>
      <textarea
        style={{ width: '90%', height: '90%' }}
        rows={30}
        spellCheck={false}
        value={Object.entries(params)
          .map(([key, value]) => `${key}: ${value}`)
          .join('\n')}
      ></textarea>
    </>
  );
}

export default App;
