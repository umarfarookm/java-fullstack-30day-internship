package com.example.demo.service;

import com.example.demo.model.Product;
import com.example.demo.repository.ProductRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProductService {

    private final ProductRepository repository;

    public ProductService(ProductRepository repository) {
        this.repository = repository;
    }

    public List<Product> getAllProducts() { return repository.findAll(); }
    public Optional<Product> getProductById(Long id) { return repository.findById(id); }

    public Product createProduct(Product product) {
        if (product.getName() == null || product.getName().isBlank())
            throw new IllegalArgumentException("Product name is required");
        if (product.getPrice() <= 0)
            throw new IllegalArgumentException("Price must be positive");
        return repository.save(product);
    }

    public Optional<Product> updateProduct(Long id, Product product) {
        return repository.findById(id).map(existing -> {
            existing.setName(product.getName());
            existing.setDescription(product.getDescription());
            existing.setPrice(product.getPrice());
            existing.setCategory(product.getCategory());
            return repository.save(existing);
        });
    }

    public boolean deleteProduct(Long id) { return repository.deleteById(id); }
}
