package com.taskmanager.service;

import com.taskmanager.dto.TaskRequest;
import com.taskmanager.dto.TaskResponse;
import com.taskmanager.entity.Category;
import com.taskmanager.entity.Task;
import com.taskmanager.exception.ResourceNotFoundException;
import com.taskmanager.repository.CategoryRepository;
import com.taskmanager.repository.TaskRepository;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
public class TaskService {

    private final TaskRepository taskRepo;
    private final CategoryRepository categoryRepo;

    public TaskService(TaskRepository taskRepo, CategoryRepository categoryRepo) {
        this.taskRepo = taskRepo;
        this.categoryRepo = categoryRepo;
    }

    public List<TaskResponse> getAllTasks(String status, String priority, Long categoryId) {
        Task.Status s = status != null ? Task.Status.valueOf(status) : null;
        Task.Priority p = priority != null ? Task.Priority.valueOf(priority) : null;
        return taskRepo.findFiltered(s, p, categoryId).stream().map(TaskResponse::from).toList();
    }

    public TaskResponse getTaskById(Long id) {
        return TaskResponse.from(findTask(id));
    }

    public List<TaskResponse> searchTasks(String query) {
        return taskRepo.search(query).stream().map(TaskResponse::from).toList();
    }

    public TaskResponse createTask(TaskRequest req) {
        Task task = new Task();
        mapRequestToTask(req, task);
        return TaskResponse.from(taskRepo.save(task));
    }

    public TaskResponse updateTask(Long id, TaskRequest req) {
        Task task = findTask(id);
        mapRequestToTask(req, task);
        return TaskResponse.from(taskRepo.save(task));
    }

    public void deleteTask(Long id) {
        if (!taskRepo.existsById(id))
            throw new ResourceNotFoundException("Task not found with id: " + id);
        taskRepo.deleteById(id);
    }

    public TaskResponse updateStatus(Long id, String status) {
        Task task = findTask(id);
        task.setStatus(Task.Status.valueOf(status));
        return TaskResponse.from(taskRepo.save(task));
    }

    private Task findTask(Long id) {
        return taskRepo.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Task not found with id: " + id));
    }

    private void mapRequestToTask(TaskRequest req, Task task) {
        task.setTitle(req.getTitle());
        task.setDescription(req.getDescription());
        task.setPriority(Task.Priority.valueOf(req.getPriority()));
        if (req.getStatus() != null) task.setStatus(Task.Status.valueOf(req.getStatus()));
        if (req.getDueDate() != null && !req.getDueDate().isBlank()) task.setDueDate(LocalDate.parse(req.getDueDate()));
        if (req.getCategoryId() != null) {
            Category cat = categoryRepo.findById(req.getCategoryId())
                    .orElseThrow(() -> new ResourceNotFoundException("Category not found with id: " + req.getCategoryId()));
            task.setCategory(cat);
        } else {
            task.setCategory(null);
        }
    }
}
