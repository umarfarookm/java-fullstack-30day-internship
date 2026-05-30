package com.taskmanager.config;

import com.taskmanager.entity.Category;
import com.taskmanager.entity.Task;
import com.taskmanager.repository.CategoryRepository;
import com.taskmanager.repository.TaskRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.time.LocalDate;

@Configuration
public class DataSeeder {

    @Bean
    CommandLineRunner seedData(CategoryRepository catRepo, TaskRepository taskRepo) {
        return args -> {
            Category work = catRepo.save(new Category("Work", "#3b82f6"));
            Category personal = catRepo.save(new Category("Personal", "#10b981"));
            Category learning = catRepo.save(new Category("Learning", "#f59e0b"));
            Category health = catRepo.save(new Category("Health", "#ef4444"));

            Task t1 = new Task(); t1.setTitle("Set up project structure"); t1.setDescription("Initialize Spring Boot backend and React frontend"); t1.setPriority(Task.Priority.HIGH); t1.setStatus(Task.Status.DONE); t1.setCategory(work); t1.setDueDate(LocalDate.now().minusDays(5));
            taskRepo.save(t1);

            Task t2 = new Task(); t2.setTitle("Build REST API endpoints"); t2.setDescription("Create CRUD endpoints for tasks and categories"); t2.setPriority(Task.Priority.HIGH); t2.setStatus(Task.Status.IN_PROGRESS); t2.setCategory(work); t2.setDueDate(LocalDate.now().plusDays(1));
            taskRepo.save(t2);

            Task t3 = new Task(); t3.setTitle("Learn JPA relationships"); t3.setDescription("Study OneToMany, ManyToMany mappings"); t3.setPriority(Task.Priority.MEDIUM); t3.setStatus(Task.Status.TODO); t3.setCategory(learning); t3.setDueDate(LocalDate.now().plusDays(3));
            taskRepo.save(t3);

            Task t4 = new Task(); t4.setTitle("Go for a run"); t4.setDescription("30 minute jog in the park"); t4.setPriority(Task.Priority.LOW); t4.setStatus(Task.Status.TODO); t4.setCategory(health); t4.setDueDate(LocalDate.now());
            taskRepo.save(t4);

            Task t5 = new Task(); t5.setTitle("Read a book"); t5.setDescription("Read 2 chapters of Clean Code"); t5.setPriority(Task.Priority.LOW); t5.setStatus(Task.Status.TODO); t5.setCategory(personal); t5.setDueDate(LocalDate.now().plusDays(7));
            taskRepo.save(t5);

            Task t6 = new Task(); t6.setTitle("Connect React to Spring Boot"); t6.setDescription("Set up axios, configure CORS, test all endpoints from frontend"); t6.setPriority(Task.Priority.HIGH); t6.setStatus(Task.Status.TODO); t6.setCategory(work); t6.setDueDate(LocalDate.now().plusDays(2));
            taskRepo.save(t6);
        };
    }
}
