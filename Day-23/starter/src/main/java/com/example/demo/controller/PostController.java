package com.example.demo.controller;

import com.example.demo.entity.Post;
import com.example.demo.repository.PostRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/posts")
public class PostController {
    private final PostRepository postRepo;
    public PostController(PostRepository postRepo) { this.postRepo = postRepo; }

    @GetMapping
    public List<Post> getAll() { return postRepo.findAllWithAuthors(); }

    @GetMapping("/by-author/{username}")
    public List<Post> getByAuthor(@PathVariable String username) { return postRepo.findByAuthorUsername(username); }
}
