package com.example.demo;

import com.example.demo.entity.*;
import com.example.demo.repository.*;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.util.Set;

@SpringBootApplication
public class RelationshipsApplication {
    public static void main(String[] args) { SpringApplication.run(RelationshipsApplication.class, args); }

    @Bean
    CommandLineRunner seedData(UserRepository userRepo, PostRepository postRepo, TagRepository tagRepo) {
        return args -> {
            User alice = userRepo.save(new User("alice", "alice@example.com"));
            User bob = userRepo.save(new User("bob", "bob@example.com"));

            Tag java = tagRepo.save(new Tag("Java"));
            Tag spring = tagRepo.save(new Tag("Spring Boot"));
            Tag react = tagRepo.save(new Tag("React"));

            Post p1 = new Post("Spring Boot Guide", "Learn Spring Boot...", alice);
            p1.setTags(Set.of(java, spring));
            p1.addComment(new Comment("Great post!", bob));
            postRepo.save(p1);

            Post p2 = new Post("React Hooks", "Understanding hooks...", bob);
            p2.setTags(Set.of(react));
            p2.addComment(new Comment("Very helpful!", alice));
            postRepo.save(p2);
        };
    }
}
