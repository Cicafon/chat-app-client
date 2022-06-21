import { Routes, Route, Navigate } from "react-router-dom";
import Join from "./components/Join/Join";
import Chat from "./components/Chat/Chat";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Join />} />
      <Route path="/chat" element={<Chat />} />
      <Route path="*" element={<Navigate replace to="/"/>}/>
    </Routes>
  );
};

export default App;
