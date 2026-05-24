package com.example.demo.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity @Table(name = "users")
public class User {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY) private Long id;
    @Column(nullable = false, unique = true) private String username;
    @Column(nullable = false, unique = true) private String email;

    @OneToMany(mappedBy = "author", cascade = CascadeType.ALL) @JsonIgnore
    private List<Post> posts = new ArrayList<>();

    public User() {}
    public User(String username, String email) { this.username = username; this.email = email; }

    public Long getId() { return id; }
    public String getUsername() { return username; }
    public String getEmail() { return email; }
    public List<Post> getPosts() { return posts; }
}
