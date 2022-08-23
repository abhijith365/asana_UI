import { Route, Routes } from 'react-router-dom';
import { Dummy } from './components/dummy_nav/Dummy';
import { HomePage } from './pages/HomePage';

function App() {
  return (
    <Routes>

      <Route exact path='/' element={<HomePage />} />
      <Route path="/whyAsana" element={<Dummy props={{ data: "whyAsana navbar" }} />} />
      <Route path="/features" element={<Dummy props={{ data: "features navbar" }} />} />
      <Route path="/resources" element={<Dummy props={{ data: "resources navbar" }} />} />
      <Route path="/enterprise" element={<Dummy props={{ data: "Enterprise navbar" }} />} />
      <Route path="/pricing" element={<Dummy props={{ data: "pricing navbar" }} />} />
      <Route path="/login" element={<Dummy props={{ data: "Contact Sales navbar" }} />} />
      <Route path="/getStarted" element={<Dummy props={{ data: "getStarted navbar" }} />} />


      {/* default route */}
      <Route path="*" element="NOT FOUND" />
    </Routes>
  );
}

export default App;
