import Dashboard from "./pages/Dashboard";
import Faculty from "./pages/Faculty";
import Attendance from "./pages/Attendance";
import Login from "./pages/Login";
import Leave from "./pages/Leave";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";


function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<Login />}
        />
          <Route
          path="/dashboard"
          element={<Dashboard />}
        />
        <Route
          path="/faculty"
          element={<Faculty />}
        />
        <Route
          path="/attendance"
          element={<Attendance />}
        />
        <Route
          path="/Leave"
          element={<Leave />}
        />

  </Routes>
  </BrowserRouter>
  );
}

export default App;

