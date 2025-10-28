import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PrivateRoute from "./utils/PrivateRoute";
import FormBuilder from "./pages/FormBuilder";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route
          path="/builder"
          element={
            <PrivateRoute>
              <FormBuilder />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
