import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { AnimatePresence } from "motion/react";
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
import PageTransition from "./components/ui/PageTransition";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Home /></PageTransition>} />
        <Route path="/formation" element={<PageTransition><Formation /></PageTransition>} />
        <Route path="/formation/licence" element={<PageTransition><Licence /></PageTransition>} />
        <Route path="/formation/master" element={<PageTransition><Master /></PageTransition>} />
        <Route path="/formation/arborescence" element={<PageTransition><Arborescence /></PageTransition>} />
        <Route path="/admission" element={<PageTransition><Admission /></PageTransition>} />
        <Route path="/admission/licence" element={<PageTransition><AdmissionLicence /></PageTransition>} />
        <Route path="/admission/master-int" element={<PageTransition><AdmissionMasterInt /></PageTransition>} />
        <Route path="/licence" element={<Navigate to="/formation/licence" replace />} />
        <Route path="/master" element={<Navigate to="/formation/master" replace />} />
        <Route path="/arborescence" element={<Navigate to="/formation/arborescence" replace />} />
        <Route path="/inscription" element={<Navigate to="/admission" replace />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <BrowserRouter basename="/mit">
      <div className="min-h-screen flex flex-col bg-white">
        <Navbar />
        <main className="flex-1">
          <AnimatedRoutes />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

