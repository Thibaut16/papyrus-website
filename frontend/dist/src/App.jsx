import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Admissions from './pages/Admissions';
import TuitionFees from './pages/TuitionFees';
import Programs from './pages/Programs';
import ProgramDetail from './pages/ProgramDetail';
import Advantages from './pages/Advantages';
import Uniforms from './pages/Uniforms';
import Gallery from './pages/Gallery';
import News from './pages/News';
import Contact from './pages/Contact';
import Login from './pages/admin/Login';
import Dashboard from './pages/admin/Dashboard';
import ManageNews from './pages/admin/ManageNews';
import ManageFees from './pages/admin/ManageFees';
import ManagePrograms from './pages/admin/ManagePrograms';
import ManageAdmissions from './pages/admin/ManageAdmissions';
import ProtectedRoute from './components/ProtectedRoute';

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/admissions" element={<Admissions />} />
          <Route path="/tuition-fees" element={<TuitionFees />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/programs/:slug" element={<ProgramDetail />} />
          <Route path="/advantages" element={<Advantages />} />
          <Route path="/uniforms" element={<Uniforms />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/news" element={<News />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin/login" element={<Login />} />
          <Route path="/admin" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
          <Route path="/admin/news" element={<ProtectedRoute><ManageNews /></ProtectedRoute>} />
          <Route path="/admin/fees" element={<ProtectedRoute><ManageFees /></ProtectedRoute>} />
          <Route path="/admin/programs" element={<ProtectedRoute><ManagePrograms /></ProtectedRoute>} />
          <Route path="/admin/admissions" element={<ProtectedRoute><ManageAdmissions /></ProtectedRoute>} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}