import { useState } from 'react';
import preactLogo from './assets/preact.svg';
import './app.css';

import WrapperComponent from '@components/WrapperComponent';
import countStore from '@stores/countStore';

export function App() {
  const { count, decrease, increase } = countStore((state) => state);
  return (
    <>
      <div>
        <a href='https://vitejs.dev'>
          <img src='/vite.svg' class='logo' alt='Vite logo' />
        </a>
        <a href='https://preactjs.com'>
          <img src={preactLogo} class='logo preact' alt='Preact logo' />
        </a>
      </div>
      <h1>Vite + Preact</h1>
      <h6>여기는 프로필 페이지</h6>

      <a href='webview://home' target='_blank'>
        홈으로
      </a>

      <WrapperComponent>
        <div class='card'>
          <button onClick={decrease}>-</button>
          <p>{count}</p>
          <button onClick={increase}>+</button>
          <p>
            Edit <code>src/app.tsx</code> and save to test HMR
          </p>
        </div>
      </WrapperComponent>
      <p class='read-the-docs'>
        Click on the Vite and Preact logos to learn more
      </p>
    </>
  );
}
