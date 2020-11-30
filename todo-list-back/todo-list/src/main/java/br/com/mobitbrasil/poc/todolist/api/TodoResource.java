package br.com.mobitbrasil.poc.todolist.api;


import br.com.mobitbrasil.poc.todolist.model.Todo;
import br.com.mobitbrasil.poc.todolist.service.TodoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/api", produces = "application/json")
public class TodoResource {

    @Autowired
    private TodoService service;

    @GetMapping("/todos")
    public List<Todo> findAll() {
        return service.findAll();
    }

    @GetMapping("/todos/{id}")
    public Todo listTodoById(@PathVariable(value = "id") long id) {
        return service.findById(id);
    }

    @PostMapping("/todos")
    public Todo salvaTodo(@RequestBody Todo todo){
        return service.save(todo);
    }

    @PutMapping("/todos")
    public void updateTodo(@RequestBody Todo todo) {
        service.update(todo);
    }

    @DeleteMapping("/todos/{id}")
    public void deleteTodo(@PathVariable("id") long id) {
        service.remove(id);
    }
}
