package com.example.demo.entity;

import jakarta.persistence.*;
import java.time.LocalDateTime;
import java.util.*;

@Entity @Table(name = "posts")
public class Post {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY) private Long id;
    @Column(nullable = false) private String title;
    @Column(columnDefinition = "TEXT") private String content;
    private LocalDateTime createdAt = LocalDateTime.now();

    @ManyToOne(fetch = FetchType.LAZY) @JoinColumn(name = "author_id")
    private User author;

    @OneToMany(mappedBy = "post", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Comment> comments = new ArrayList<>();

    @ManyToMany @JoinTable(name = "post_tags", joinColumns = @JoinColumn(name = "post_id"), inverseJoinColumns = @JoinColumn(name = "tag_id"))
    private Set<Tag> tags = new HashSet<>();

    public Post() {}
    public Post(String title, String content, User author) { this.title = title; this.content = content; this.author = author; }

    public void addComment(Comment c) { comments.add(c); c.setPost(this); }
    public void setTags(Set<Tag> tags) { this.tags = tags; }

    public Long getId() { return id; }
    public String getTitle() { return title; }
    public String getContent() { return content; }
    public LocalDateTime getCreatedAt() { return createdAt; }
    public User getAuthor() { return author; }
    public List<Comment> getComments() { return comments; }
    public Set<Tag> getTags() { return tags; }
}
