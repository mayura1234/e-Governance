package com.example.saaku.repository;

//import java.util.Optional;
//
//import org.springframework.data.jpa.repository.JpaRepository;
//
//import com.example.saaku.model.User; 
//
//public interface UserRepository extends JpaRepository<User, Long> {
//
//	Optional<User> findByName(String user_name);
//	
//	Boolean existsByUsername(String user_name);
//	
//	Boolean existsByEmail(String Email);
//}

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.saaku.model.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
	Optional<User> findByUsername(String username);

	Boolean existsByUsername(String username);

	Boolean existsByEmail(String email);
}
