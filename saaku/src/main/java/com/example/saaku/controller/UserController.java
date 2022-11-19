package com.example.saaku.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.saaku.exception.UserNotFoundException;
import com.example.saaku.model.User;
import com.example.saaku.repository.UserRepository;

@RestController
@CrossOrigin("http://localhost:3000")

public class UserController {

	@Autowired
	private UserRepository userRepository;

    @PostMapping("/user")
    User newUser(@RequestBody User newUser) {
    	return userRepository.save(newUser);
    }
    @GetMapping("/users")
    List<User> getAllUsers(){
    	return userRepository.findAll();
    }
    @GetMapping("/user/{user_id}")
    User getUserById(@PathVariable Long user_id) {
    	return userRepository.findById(user_id)
    			.orElseThrow(()->new UserNotFoundException(user_id));
    }
}
