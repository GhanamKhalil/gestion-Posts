import {BrowserRouter,Routes,Route } from "react-router-dom";
import  ConsulterPost from './Component/Post/ConsulterPost'
import AjouterPost from './Component/Post/AjouterPost'
import ArchiverPost from "./Component/Post/ArchiverPost";
import ModifierPost from "./Component/Post/ModifierPost";
import Menu from './Component/Menu/Menu'
function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <Menu/>
        <Routes>
            <Route path="/" element={<ConsulterPost/>}/>
            <Route path="/AjouterPost" element={<AjouterPost/>}/>
            <Route path="/ModifierPost/:id" element={<ModifierPost/>}/>
            <Route path="/ArchiverPost" element={<ArchiverPost/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
