package com.taskmanager.dto;

import jakarta.validation.constraints.*;

public class CategoryRequest {
    @NotBlank(message = "Name is required")
    @Size(max = 50)
    private String name;

    @Pattern(regexp = "^#[0-9a-fA-F]{6}$", message = "Color must be a hex code like #ff5733")
    private String color;

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }
    public String getColor() { return color; }
    public void setColor(String color) { this.color = color; }
}
