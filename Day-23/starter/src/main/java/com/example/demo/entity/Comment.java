package com.example.demo.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity @Table(name = "comments")
public class Comment {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY) private Long id;
    @Column(nullable = false) private String body;
    private LocalDateTime createdAt = LocalDateTime.now();

    @ManyToOne(fetch = FetchType.LAZY) @JoinColumn(name = "post_id") @JsonIgnore
    private Post post;

    @ManyToOne(fetch = FetchType.LAZY) @JoinColumn(name = "user_id")
    private User user;

    public Comment() {}
    public Comment(String body, User user) { this.body = body; this.user = user; }

    public Long getId() { return id; }
    public String getBody() { return body; }
    public LocalDateTime getCreatedAt() { return createdAt; }
    public Post getPost() { return post; }
    public void setPost(Post post) { this.post = post; }
    public User getUser() { return user; }
}
