package com.example.demo.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDateTime;
import java.util.Map;

@RestController
public class HelloController {

    @GetMapping("/")
    public String hello() {
        return "Hello, Spring Boot!";
    }

    @GetMapping("/greet")
    public Map<String, String> greet(@RequestParam(defaultValue = "World") String name) {
        return Map.of("message", "Hello, " + name + "!", "timestamp", LocalDateTime.now().toString());
    }

    @GetMapping("/status")
    public Map<String, Object> status() {
        return Map.of(
            "app", "Day 16 Demo",
            "status", "running",
            "java", System.getProperty("java.version"),
            "timestamp", LocalDateTime.now().toString()
        );
    }
}
