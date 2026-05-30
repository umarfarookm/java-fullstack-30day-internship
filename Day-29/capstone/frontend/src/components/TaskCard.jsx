import { Link } from 'react-router-dom'

const priorityStyles = {
  HIGH: 'bg-red-100 text-red-700',
  MEDIUM: 'bg-yellow-100 text-yellow-700',
  LOW: 'bg-green-100 text-green-700',
}

const statusLabels = {
  TODO: 'To Do',
  IN_PROGRESS: 'In Progress',
  DONE: 'Done',
}

const nextStatus = {
  TODO: 'IN_PROGRESS',
  IN_PROGRESS: 'DONE',
  DONE: 'TODO',
}

function TaskCard({ task, onDelete, onStatusChange }) {
  const isDone = task.status === 'DONE'
  const isOverdue = task.dueDate && !isDone && new Date(task.dueDate) < new Date()

  return (
    <div className={`bg-white rounded-lg shadow p-4 flex items-start gap-4 transition hover:shadow-md ${isDone ? 'opacity-60' : ''}`}>
      {/* Status toggle */}
      <button
        onClick={() => onStatusChange(task.id, nextStatus[task.status])}
        className={`mt-1 w-5 h-5 rounded-full border-2 flex-shrink-0 transition ${isDone ? 'bg-green-500 border-green-500' : 'border-gray-300 hover:border-blue-500'}`}
        title={`Click to move to ${statusLabels[nextStatus[task.status]]}`}
      >
        {isDone && <svg className="w-3 h-3 text-white mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>}
      </button>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 flex-wrap">
          <h3 className={`font-medium ${isDone ? 'line-through text-gray-400' : 'text-gray-800'}`}>{task.title}</h3>
          <span className={`text-xs px-2 py-0.5 rounded-full ${priorityStyles[task.priority]}`}>{task.priority}</span>
          <span className="text-xs px-2 py-0.5 rounded-full bg-gray-100 text-gray-600">{statusLabels[task.status]}</span>
          {task.categoryName && (
            <span className="text-xs px-2 py-0.5 rounded-full text-white" style={{ backgroundColor: task.categoryColor || '#6b7280' }}>{task.categoryName}</span>
          )}
        </div>
        {task.description && <p className="text-sm text-gray-500 mt-1 truncate">{task.description}</p>}
        {task.dueDate && (
          <p className={`text-xs mt-1 ${isOverdue ? 'text-red-500 font-medium' : 'text-gray-400'}`}>
            {isOverdue ? 'Overdue: ' : 'Due: '}{task.dueDate}
          </p>
        )}
      </div>

      {/* Actions */}
      <div className="flex gap-2 flex-shrink-0">
        <Link to={`/tasks/${task.id}/edit`} className="text-blue-500 hover:text-blue-700 text-sm">Edit</Link>
        <button onClick={() => onDelete(task.id)} className="text-red-500 hover:text-red-700 text-sm">Delete</button>
      </div>
    </div>
  )
}

export default TaskCard
