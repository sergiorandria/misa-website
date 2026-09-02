import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Licence from "./pages/Licence";
import Master from "./pages/Master";
import Arborescence from "./pages/Arborescence";
import Admission from "./pages/Admission";
import AdmissionLicence from "./pages/AdmissionLicence";
import AdmissionMasterInt from "./pages/AdmissionMasterInt";
import Formation from "./pages/Formation";

export default function App() {
  return (
    <BrowserRouter basename="/mit">
      <div className="min-h-screen flex flex-col bg-white">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/formation" element={<Formation />} />
            <Route path="/formation/licence" element={<Licence />} />
            <Route path="/formation/master" element={<Master />} />
            <Route path="/formation/arborescence" element={<Arborescence />} />
            <Route path="/admission" element={<Admission />} />
            <Route path="/admission/licence" element={<AdmissionLicence />} />
            <Route path="/admission/master-int" element={<AdmissionMasterInt />} />
            <Route path="/licence" element={<Navigate to="/formation/licence" replace />} />
            <Route path="/master" element={<Navigate to="/formation/master" replace />} />
            <Route path="/arborescence" element={<Navigate to="/formation/arborescence" replace />} />
            <Route path="/inscription" element={<Navigate to="/admission" replace />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
