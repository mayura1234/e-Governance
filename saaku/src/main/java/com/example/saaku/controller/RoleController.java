package com.example.saaku.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.example.saaku.exception.RoleNotFoundException;
import com.example.saaku.model.Role;
import com.example.saaku.repository.RoleRepository;

@RestController
@CrossOrigin("http://localhost:3000")
public class RoleController {
	
	@Autowired
	RoleRepository roleRepository;
	
	@GetMapping("/role/{ut_id}")
    Role getRoleById(@PathVariable Long ut_id) {
    	return roleRepository.findById(ut_id)
    			.orElseThrow(()->new RoleNotFoundException(ut_id));
    }

}
