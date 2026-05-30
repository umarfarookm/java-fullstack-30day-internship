package com.taskmanager.service;

import com.taskmanager.dto.CategoryRequest;
import com.taskmanager.entity.Category;
import com.taskmanager.exception.ResourceNotFoundException;
import com.taskmanager.repository.CategoryRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CategoryService {

    private final CategoryRepository repo;

    public CategoryService(CategoryRepository repo) { this.repo = repo; }

    public List<Category> getAll() { return repo.findAll(); }

    public Category getById(Long id) {
        return repo.findById(id).orElseThrow(() -> new ResourceNotFoundException("Category not found with id: " + id));
    }

    public Category create(CategoryRequest req) {
        Category cat = new Category(req.getName(), req.getColor());
        return repo.save(cat);
    }

    public Category update(Long id, CategoryRequest req) {
        Category cat = getById(id);
        cat.setName(req.getName());
        cat.setColor(req.getColor());
        return repo.save(cat);
    }

    public void delete(Long id) {
        if (!repo.existsById(id)) throw new ResourceNotFoundException("Category not found with id: " + id);
        repo.deleteById(id);
    }
}
