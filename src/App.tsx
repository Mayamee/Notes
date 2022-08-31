import { Routes, Route } from "react-router-dom";
import Create from "./pages/Create/Create";
import Notes from "./pages/Notes/Notes";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Notes />} />
      <Route path="create" element={<Create />} />
    </Routes>
  );
}

export default App;
