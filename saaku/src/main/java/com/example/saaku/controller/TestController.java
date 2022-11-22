package com.example.saaku.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

//import org.springframework.web.bind.annotation.CrossOrigin;
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RestController;
////import org.springframework.security.access.prepost.PostAuthorize;
//import org.springframework.security.access.prepost.PreAuthorize;
//
//@RestController
//@CrossOrigin("http://localhost:3000")
//@RequestMapping("/api/auth")
//public class TestController {
//	@GetMapping("/all")
//	public String allAccess() {
//		return "Public Content...";
//	}
//	@GetMapping("/user")
//	@PreAuthorize("hasRole('USR') or hasRole('GRO') or hasRole('RO')")
//	public String UserAccess() {
//		return "User content....";
//	}
//	@GetMapping("/GRO")
//	@PreAuthorize("hasRole('GRO')")
//	public String GROAccess() {
//		return "GRO content....";
//	}
//	@GetMapping("/RO")
//	@PreAuthorize("hasRole('RO')")
//	public String ROAccess() {
//		return "RO content....";
//	}
//	
//}



import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.saaku.model.Complaints;
import com.example.saaku.model.User;
import com.example.saaku.repository.ComplaintRepository;
import com.example.saaku.repository.UserRepository;


@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/test")
public class TestController {
	
	
	
	@GetMapping("/all")
	public String allAccess() {
		return "Public Content.";
	}
//	
	@Autowired
	private ComplaintRepository complaintRepository;	
//	
//	@Autowired
//	private UserRepository userRepository;
//	 @GetMapping("/all")
//	   public List<User> getAllUsers(){
//	    	return userRepository.findAll();
//	    }
	@Autowired
	private UserRepository userRepository;
	@GetMapping("/USER")
	@PreAuthorize("hasRole('USER') or hasRole('RO') or hasRole('GRO')")
//	public String userAccess() {
//		return "User Content.";
//	}
	public List <User> getAllUsers() {
		return userRepository.findAll();
	}

	@GetMapping("/RO")
	@PreAuthorize("hasRole('RO')")
	public String ROAccess() {
		return "Redresser can redress the grievances.";
	}

	@GetMapping("/GRO")
	@PreAuthorize("hasRole('GRO')")
	public String GROAccess() {
		return "Router.";
	
	}
		
	@GetMapping("/Complaints")
	@PreAuthorize("hasRole('GRO')or hasRole('RO')")
	public List <Complaints> getAllComplaints(){
		return complaintRepository.findAll();
	}
	
	@PostMapping("/AddCom")
	@PreAuthorize("hasRole('USER')")
     Complaints newComplaint(@RequestBody Complaints newComplaint) {
    	return complaintRepository.save(newComplaint);
	}
	
	
	}

