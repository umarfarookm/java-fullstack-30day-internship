import { useState, useEffect } from 'react'
import { getCategories, createCategory, deleteCategory } from '../services/api'

function Categories() {
  const [categories, setCategories] = useState([])
  const [form, setForm] = useState({ name: '', color: '#3b82f6' })
  const [error, setError] = useState('')

  const fetchCategories = async () => {
    try {
      const res = await getCategories()
      setCategories(res.data)
    } catch { setError('Failed to load categories') }
  }

  useEffect(() => { fetchCategories() }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!form.name.trim()) return
    try {
      await createCategory(form)
      setForm({ name: '', color: '#3b82f6' })
      fetchCategories()
    } catch { setError('Failed to create category') }
  }

  const handleDelete = async (id) => {
    if (!window.confirm('Delete this category?')) return
    try {
      await deleteCategory(id)
      setCategories(prev => prev.filter(c => c.id !== id))
    } catch { setError('Failed to delete (may have tasks assigned)') }
  }

  return (
    <div className="max-w-lg mx-auto">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Categories</h2>

      {error && <div className="bg-red-50 text-red-600 p-3 rounded-lg mb-4">{error}</div>}

      <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow p-4 flex gap-3 mb-6">
        <input placeholder="Category name" value={form.name} onChange={e => setForm({...form, name: e.target.value})} className="flex-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
        <input type="color" value={form.color} onChange={e => setForm({...form, color: e.target.value})} className="w-12 h-10 rounded cursor-pointer" />
        <button type="submit" className="bg-blue-600 text-white px-4 rounded-lg hover:bg-blue-700 transition">Add</button>
      </form>

      <div className="space-y-2">
        {categories.map(cat => (
          <div key={cat.id} className="bg-white rounded-lg shadow p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 rounded-full" style={{ backgroundColor: cat.color }}></div>
              <span className="font-medium">{cat.name}</span>
            </div>
            <button onClick={() => handleDelete(cat.id)} className="text-red-500 hover:text-red-700 text-sm">Delete</button>
          </div>
        ))}
        {categories.length === 0 && <p className="text-center text-gray-400 py-4">No categories yet</p>}
      </div>
    </div>
  )
}

export default Categories
