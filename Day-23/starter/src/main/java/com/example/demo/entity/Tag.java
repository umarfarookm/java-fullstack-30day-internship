package com.example.demo.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity @Table(name = "tags")
public class Tag {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY) private Long id;
    @Column(nullable = false, unique = true) private String name;

    @ManyToMany(mappedBy = "tags") @JsonIgnore
    private Set<Post> posts = new HashSet<>();

    public Tag() {}
    public Tag(String name) { this.name = name; }

    public Long getId() { return id; }
    public String getName() { return name; }
    public Set<Post> getPosts() { return posts; }
}
