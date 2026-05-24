package com.example.demo.repository;

import com.example.demo.entity.Post;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface PostRepository extends JpaRepository<Post, Long> {
    List<Post> findByAuthorUsername(String username);

    @Query("SELECT p FROM Post p WHERE SIZE(p.comments) > :count")
    List<Post> findPostsWithMoreCommentsThan(int count);

    @Query("SELECT p FROM Post p JOIN FETCH p.author ORDER BY p.createdAt DESC")
    List<Post> findAllWithAuthors();
}
