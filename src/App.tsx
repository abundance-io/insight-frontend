import { BrowserRouter, Route, Routes } from "react-router-dom";
import FlashcardsPage from "./pages/FlashcardsPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/flashcards" Component={FlashcardsPage}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
