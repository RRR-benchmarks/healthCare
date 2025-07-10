import React from 'react';
import { ElementsContextProvider } from './DashboardContextApi';
import Home from './Home';
export default function Dashboard() {
  console.log(window.globalCount++);
  return <div className='w-full overflow-x-hidden'>
        <ElementsContextProvider>
            <Home />
      </ElementsContextProvider>
    </div>;
}