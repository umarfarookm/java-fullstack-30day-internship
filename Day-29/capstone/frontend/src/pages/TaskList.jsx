import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getTasks, deleteTask, updateTaskStatus, searchTasks, getCategories } from '../services/api'
import TaskCard from '../components/TaskCard'

function TaskList() {
  const [tasks, setTasks] = useState([])
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [filters, setFilters] = useState({ status: '', priority: '', categoryId: '' })
  const [search, setSearch] = useState('')

  const fetchTasks = async () => {
    setLoading(true)
    setError('')
    try {
      const params = {}
      if (filters.status) params.status = filters.status
      if (filters.priority) params.priority = filters.priority
      if (filters.categoryId) params.categoryId = filters.categoryId
      const res = search ? await searchTasks(search) : await getTasks(params)
      setTasks(res.data)
    } catch (err) {
      setError('Failed to load tasks')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getCategories().then(res => setCategories(res.data)).catch(() => {})
  }, [])

  useEffect(() => { fetchTasks() }, [filters])

  const handleSearch = (e) => {
    e.preventDefault()
    fetchTasks()
  }

  const handleDelete = async (id) => {
    if (!window.confirm('Delete this task?')) return
    try {
      await deleteTask(id)
      setTasks(prev => prev.filter(t => t.id !== id))
    } catch { setError('Failed to delete task') }
  }

  const handleStatusChange = async (id, status) => {
    try {
      const res = await updateTaskStatus(id, status)
      setTasks(prev => prev.map(t => t.id === id ? res.data : t))
    } catch { setError('Failed to update status') }
  }

  const counts = {
    total: tasks.length,
    todo: tasks.filter(t => t.status === 'TODO').length,
    inProgress: tasks.filter(t => t.status === 'IN_PROGRESS').length,
    done: tasks.filter(t => t.status === 'DONE').length,
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Tasks</h2>
          <p className="text-sm text-gray-500 mt-1">
            {counts.total} total · {counts.todo} to do · {counts.inProgress} in progress · {counts.done} done
          </p>
        </div>
        <Link to="/tasks/new" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">+ New Task</Link>
      </div>

      {/* Search */}
      <form onSubmit={handleSearch} className="flex gap-2 mb-4">
        <input className="flex-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Search tasks..." value={search} onChange={e => setSearch(e.target.value)} />
        <button type="submit" className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300">Search</button>
        {search && <button type="button" onClick={() => { setSearch(''); setTimeout(fetchTasks, 0) }} className="px-3 py-2 text-gray-500 hover:text-gray-700">Clear</button>}
      </form>

      {/* Filters */}
      <div className="flex gap-3 mb-6 flex-wrap">
        <select className="px-3 py-2 border rounded-lg bg-white" value={filters.status} onChange={e => setFilters({...filters, status: e.target.value})}>
          <option value="">All Status</option>
          <option value="TODO">To Do</option>
          <option value="IN_PROGRESS">In Progress</option>
          <option value="DONE">Done</option>
        </select>
        <select className="px-3 py-2 border rounded-lg bg-white" value={filters.priority} onChange={e => setFilters({...filters, priority: e.target.value})}>
          <option value="">All Priority</option>
          <option value="HIGH">High</option>
          <option value="MEDIUM">Medium</option>
          <option value="LOW">Low</option>
        </select>
        <select className="px-3 py-2 border rounded-lg bg-white" value={filters.categoryId} onChange={e => setFilters({...filters, categoryId: e.target.value})}>
          <option value="">All Categories</option>
          {categories.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
        </select>
        {(filters.status || filters.priority || filters.categoryId) && (
          <button onClick={() => setFilters({ status: '', priority: '', categoryId: '' })} className="text-blue-600 hover:text-blue-800 text-sm">Clear filters</button>
        )}
      </div>

      {error && <div className="bg-red-50 text-red-600 p-3 rounded-lg mb-4">{error}</div>}

      {loading ? (
        <div className="text-center py-10 text-gray-500">Loading tasks...</div>
      ) : tasks.length === 0 ? (
        <div className="text-center py-10 text-gray-400">
          <p className="text-lg">No tasks found</p>
          <Link to="/tasks/new" className="text-blue-600 hover:underline mt-2 inline-block">Create your first task</Link>
        </div>
      ) : (
        <div className="space-y-3">
          {tasks.map(task => (
            <TaskCard key={task.id} task={task} onDelete={handleDelete} onStatusChange={handleStatusChange} />
          ))}
        </div>
      )}
    </div>
  )
}

export default TaskList
