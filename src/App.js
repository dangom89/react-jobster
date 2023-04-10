import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import { Landing, Error, Dashboard, Register, ProtectedRoute } from "./pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AddJob, AllJobs, Profile, SharedLayout, Stats } from "./pages/dashboard";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={
          <ProtectedRoute>
            <SharedLayout />
          </ProtectedRoute>
        }>
          <Route index element={<Stats></Stats>}></Route>
          <Route path='all-jobs' element={<AllJobs></AllJobs>}></Route>
          <Route path='add-job' element={<AddJob></AddJob>}></Route>
          <Route path='profile' element={<Profile></Profile>}></Route>
        </Route>
        <Route path='landing' element={<Landing />}></Route>
        <Route path='register' element={<Register />}></Route>
        <Route path='*' element={<Error />}></Route>
      </Routes>
      <ToastContainer position="top-center" />
    </BrowserRouter>
  );
}

export default App;
