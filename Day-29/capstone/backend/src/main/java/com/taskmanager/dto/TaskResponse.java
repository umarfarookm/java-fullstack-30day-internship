package com.taskmanager.dto;

import com.taskmanager.entity.Task;
import java.time.LocalDate;
import java.time.LocalDateTime;

public class TaskResponse {
    private Long id;
    private String title;
    private String description;
    private String priority;
    private String status;
    private LocalDate dueDate;
    private Long categoryId;
    private String categoryName;
    private String categoryColor;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;

    public static TaskResponse from(Task task) {
        TaskResponse r = new TaskResponse();
        r.id = task.getId();
        r.title = task.getTitle();
        r.description = task.getDescription();
        r.priority = task.getPriority().name();
        r.status = task.getStatus().name();
        r.dueDate = task.getDueDate();
        r.createdAt = task.getCreatedAt();
        r.updatedAt = task.getUpdatedAt();
        if (task.getCategory() != null) {
            r.categoryId = task.getCategory().getId();
            r.categoryName = task.getCategory().getName();
            r.categoryColor = task.getCategory().getColor();
        }
        return r;
    }

    public Long getId() { return id; }
    public String getTitle() { return title; }
    public String getDescription() { return description; }
    public String getPriority() { return priority; }
    public String getStatus() { return status; }
    public LocalDate getDueDate() { return dueDate; }
    public Long getCategoryId() { return categoryId; }
    public String getCategoryName() { return categoryName; }
    public String getCategoryColor() { return categoryColor; }
    public LocalDateTime getCreatedAt() { return createdAt; }
    public LocalDateTime getUpdatedAt() { return updatedAt; }
}
