package com.example.saaku.repository;

import java.util.Optional;

//import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.saaku.model.Complaints;
//import com.example.saaku.model.User;

@Repository
public interface ComplaintRepository extends JpaRepository<Complaints ,Long>{
	Optional<Complaints>findById(Complaints id);

}
