package com.taskmanager.dto;

import jakarta.validation.constraints.*;

public class TaskRequest {

    @NotBlank(message = "Title is required")
    @Size(min = 2, max = 200, message = "Title must be 2-200 characters")
    private String title;

    @Size(max = 2000, message = "Description max 2000 characters")
    private String description;

    @NotNull(message = "Priority is required")
    private String priority;

    private String status;
    private String dueDate;
    private Long categoryId;

    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }
    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }
    public String getPriority() { return priority; }
    public void setPriority(String priority) { this.priority = priority; }
    public String getStatus() { return status; }
    public void setStatus(String status) { this.status = status; }
    public String getDueDate() { return dueDate; }
    public void setDueDate(String dueDate) { this.dueDate = dueDate; }
    public Long getCategoryId() { return categoryId; }
    public void setCategoryId(Long categoryId) { this.categoryId = categoryId; }
}
