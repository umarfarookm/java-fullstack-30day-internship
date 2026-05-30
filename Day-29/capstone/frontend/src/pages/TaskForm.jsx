import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { createTask, updateTask, getTask, getCategories } from '../services/api'

function TaskForm() {
  const { id } = useParams()
  const navigate = useNavigate()
  const isEdit = Boolean(id)

  const [form, setForm] = useState({ title: '', description: '', priority: 'MEDIUM', status: 'TODO', dueDate: '', categoryId: '' })
  const [categories, setCategories] = useState([])
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  useEffect(() => {
    getCategories().then(res => setCategories(res.data)).catch(() => {})
    if (isEdit) {
      setLoading(true)
      getTask(id).then(res => {
        const t = res.data
        setForm({ title: t.title, description: t.description || '', priority: t.priority, status: t.status, dueDate: t.dueDate || '', categoryId: t.categoryId || '' })
      }).catch(() => navigate('/')).finally(() => setLoading(false))
    }
  }, [id])

  const validate = () => {
    const errs = {}
    if (!form.title || form.title.length < 2) errs.title = 'Title must be at least 2 characters'
    if (!form.priority) errs.priority = 'Priority is required'
    setErrors(errs)
    return Object.keys(errs).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validate()) return
    setSubmitting(true)
    try {
      const payload = { ...form, categoryId: form.categoryId || null }
      if (isEdit) await updateTask(id, payload)
      else await createTask(payload)
      navigate('/')
    } catch (err) {
      if (err.response?.data?.errors) setErrors(err.response.data.errors)
      else setErrors({ general: 'Failed to save task' })
    } finally {
      setSubmitting(false)
    }
  }

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  if (loading) return <div className="text-center py-10 text-gray-500">Loading...</div>

  return (
    <div className="max-w-lg mx-auto">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">{isEdit ? 'Edit Task' : 'New Task'}</h2>

      {errors.general && <div className="bg-red-50 text-red-600 p-3 rounded-lg mb-4">{errors.general}</div>}

      <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow p-6 space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Title *</label>
          <input name="title" value={form.title} onChange={handleChange} className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.title ? 'border-red-400' : ''}`} />
          {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
          <textarea name="description" value={form.description} onChange={handleChange} rows={3} className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Priority *</label>
            <select name="priority" value={form.priority} onChange={handleChange} className="w-full px-3 py-2 border rounded-lg bg-white">
              <option value="LOW">Low</option>
              <option value="MEDIUM">Medium</option>
              <option value="HIGH">High</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
            <select name="status" value={form.status} onChange={handleChange} className="w-full px-3 py-2 border rounded-lg bg-white">
              <option value="TODO">To Do</option>
              <option value="IN_PROGRESS">In Progress</option>
              <option value="DONE">Done</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Due Date</label>
            <input type="date" name="dueDate" value={form.dueDate} onChange={handleChange} className="w-full px-3 py-2 border rounded-lg" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
            <select name="categoryId" value={form.categoryId} onChange={handleChange} className="w-full px-3 py-2 border rounded-lg bg-white">
              <option value="">None</option>
              {categories.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
            </select>
          </div>
        </div>

        <div className="flex gap-3 pt-2">
          <button type="submit" disabled={submitting} className="flex-1 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition disabled:opacity-50">
            {submitting ? 'Saving...' : isEdit ? 'Update Task' : 'Create Task'}
          </button>
          <button type="button" onClick={() => navigate('/')} className="px-6 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition">Cancel</button>
        </div>
      </form>
    </div>
  )
}

export default TaskForm
