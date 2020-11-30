package br.com.mobitbrasil.poc.todolist.service;

import br.com.mobitbrasil.poc.todolist.model.Todo;
import br.com.mobitbrasil.poc.todolist.repository.TodoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;


@Service
public class TodoService {

    @Autowired
    private TodoRepository repository;

    public List<Todo> findAll() {
        return repository.findAll();
    }

    public Todo findById(long id) {
        return repository.findById(id);
    }

    @Transactional
    public Todo save(Todo todo) {
        return repository.save(todo);
    }

    @Transactional
    public Todo update(Todo todo) {
        return repository.save(todo);
    }

    @Transactional
    public void remove(long id) {
        repository.delete(findById(id));
    }
}
