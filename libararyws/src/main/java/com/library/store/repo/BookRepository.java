package com.library.store.repo;

import org.springframework.data.repository.CrudRepository;

import com.library.store.model.Book;

public interface BookRepository extends CrudRepository<Book, Long> {

	
}
