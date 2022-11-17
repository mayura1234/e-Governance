package com.example.saaku.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.saaku.model.Complaints;
//import com.example.saaku.model.User;
import com.example.saaku.repository.ComplaintRepository;

@RestController
@CrossOrigin("http://localhost:3000")
public class ComplaintController {

	@Autowired
	private ComplaintRepository complaintRepository;
	
	@GetMapping("/complaints")
	List<Complaints> getAllComplaints(){
		return complaintRepository.findAll();
	}
	
	@PostMapping("/complaints")
	Complaints newComplaint(@RequestBody Complaints newComplaint) {
    	return complaintRepository.save(newComplaint);
    }
}
