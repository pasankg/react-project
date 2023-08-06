import './App.css';
import { StrictMode } from 'react';
// import { ArticlesApp } from './ArticlesApp';
import WidgetApp from './WidgetApp';

function App() {
  return (
    <div className="App">      
      {/* <ArticlesApp/> */}
      <StrictMode>
        {<WidgetApp/>}
      </StrictMode>
    </div>
  );
}

export default App;
