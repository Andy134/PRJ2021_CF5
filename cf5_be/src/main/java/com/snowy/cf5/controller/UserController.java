package com.snowy.cf5.controller;

import com.snowy.cf5.entity.Post;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/user")
public class UserController {
    @GetMapping
    public ResponseEntity<Post> get(){
        return new ResponseEntity<>(null, HttpStatus.OK);
    }
    @PostMapping
    public ResponseEntity<Post> post(){ return new ResponseEntity<>(null, HttpStatus.OK); }
    @PutMapping
    public ResponseEntity<Post> update(){
        return new ResponseEntity<>(null, HttpStatus.OK);
    }
    @DeleteMapping
    public ResponseEntity<Post> delete(){
        return new ResponseEntity<>(null, HttpStatus.OK);
    }
}
