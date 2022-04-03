import { Route, Routes } from "react-router-dom";
import LoginDoctot from "./pages/doctor/login/LoginDoctor";
import LoginPacient from "./pages/pacient/login/LoginPacient";
import AdminLogged from "./pages/admin/loged/adminLogged";
import LoginAdmin from "./pages/admin/login/LoginAdmin";
import RegistrationPacient from "./pages/pacient/registration/RegistrationPacient";


function App() {
  return (
    <Routes>
      <Route path="/pacient/login" element={<LoginPacient />} />
      <Route path="/doctor/login" element={<LoginDoctot />} />
      <Route path="/admin/main/*" element={<AdminLogged/> } />
      <Route path="/admin/login" element={<LoginAdmin />} />
      <Route path="/pacient/sign_up" element={<RegistrationPacient />} />
    </Routes>
  );
}

export default App;
