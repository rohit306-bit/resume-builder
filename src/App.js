// import logo from './logo.svg';
import "./App.css";
// import FileInput from './components/FormFile';

import NavBar from "./components/NavrBar";
import FormFile from "./components/FormFile";
import PanelForm from "./components/PanelForm";
import FormsTabs from "./components/FormsTabs";
import { DisableElevation } from "./components/Button";
// import Model from './components/Model';

function App() {
  return (
    <>
      <NavBar />
      <FormFile />
      <PanelForm />
      <FormsTabs />
      <hr />
      <DisableElevation />
      {/* <Model/> */}
    </>
  );
}

export default App;
