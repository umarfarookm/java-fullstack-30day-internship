package com.example.demo.repository;

import com.example.demo.model.Product;
import org.springframework.stereotype.Repository;

import java.util.*;
import java.util.concurrent.atomic.AtomicLong;

@Repository
public class ProductRepository {

    private final Map<Long, Product> store = new HashMap<>();
    private final AtomicLong counter = new AtomicLong(1);

    public ProductRepository() {
        save(new Product(null, "Laptop", "High-performance laptop", 999.99, "Electronics"));
        save(new Product(null, "Headphones", "Wireless headphones", 149.99, "Electronics"));
    }

    public List<Product> findAll() { return new ArrayList<>(store.values()); }
    public Optional<Product> findById(Long id) { return Optional.ofNullable(store.get(id)); }

    public Product save(Product product) {
        if (product.getId() == null) product.setId(counter.getAndIncrement());
        store.put(product.getId(), product);
        return product;
    }

    public boolean deleteById(Long id) { return store.remove(id) != null; }
}
