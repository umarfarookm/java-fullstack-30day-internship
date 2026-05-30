import { Routes, Route, NavLink } from 'react-router-dom'
import TaskList from './pages/TaskList'
import TaskForm from './pages/TaskForm'
import Categories from './pages/Categories'

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow">
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
          <h1 className="text-xl font-bold text-gray-800">Task Manager</h1>
          <div className="flex gap-4">
            <NavLink to="/" className={({ isActive }) => `px-3 py-1 rounded ${isActive ? 'bg-blue-100 text-blue-700' : 'text-gray-600 hover:text-gray-800'}`}>Tasks</NavLink>
            <NavLink to="/categories" className={({ isActive }) => `px-3 py-1 rounded ${isActive ? 'bg-blue-100 text-blue-700' : 'text-gray-600 hover:text-gray-800'}`}>Categories</NavLink>
          </div>
        </div>
      </nav>
      <main className="max-w-5xl mx-auto px-4 py-6">
        <Routes>
          <Route path="/" element={<TaskList />} />
          <Route path="/tasks/new" element={<TaskForm />} />
          <Route path="/tasks/:id/edit" element={<TaskForm />} />
          <Route path="/categories" element={<Categories />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
