import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import {Toaster} from "sonner";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Task from "./pages/Task";
import TaskDetails from "./pages/TaskDetails";
import Trash from "./pages/Trash";
import User from "./pages/User";

function Layout() {
  const user = "";
  const location = useLocation();

  return user ? (
    <div className="w-full h-screen flex flex-col md:flex-row">
      <div className="w-1/5 h-screen bg-white sticky top-0 hidden md:block">
        {/*sidebar*/}
      </div>
      {/*<MobileSidebar/>*/}

      <div className="flex-1 overflow-y-auto">
        {/*<Navbar/>*/}

        <div className="p-4 2xl:px-10">
          <Outlet />
        </div>
      </div>
    </div>
  ) : (
    <Navigate to="/log-in" state={{ from: location }} replace />
  );
}

function App() {
  return (
    <main className="w-full min-h-screen bg-[#f3f4f6]">
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Navigate to="/dashboard" />} />
          <Route path="/dashboard>" element={<Dashboard />} />
          <Route path="/task>" element={<Task />} />
          <Route path="/completed/:status>" element={<Task />} />
          <Route path="/in-progress/:status>" element={<Task />} />
          <Route path="/todo/:status>" element={<Task />} />
          <Route path="/team>" element={<User />} />
          <Route path="/trashed>" element={<Trash />} />
          <Route path="/task/:id>" element={<TaskDetails />} />
        </Route>

        <Route path="/log-in" element={<Login />} />
      </Routes>

      <Toaster richColors />
    </main>
  );
}

export default App;
