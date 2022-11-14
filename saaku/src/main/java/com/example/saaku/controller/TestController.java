package com.example.saaku.controller;

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
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/test")
public class TestController {
	@GetMapping("/all")
	public String allAccess() {
		return "Public Content.";
	}
	
	@GetMapping("/USER")
	@PreAuthorize("hasRole('USER') or hasRole('RO') or hasRole('GRO')")
	public String userAccess() {
		return "User Content.";
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
}
