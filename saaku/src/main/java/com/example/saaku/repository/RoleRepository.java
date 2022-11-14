package com.example.saaku.repository;

//import java.util.Optional;
//
//import org.springframework.data.jpa.repository.JpaRepository;
//
//import com.example.saaku.model.ERole;
//import com.example.saaku.model.Role;
//
//public interface RoleRepository extends JpaRepository<Role, Long>{
//
//	Optional<Role> findByName(ERole user_type);
//}


import java.util.Optional;

//import org.springframework.context.support.BeanDefinitionDsl.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.saaku.model.ERole;
import com.example.saaku.model.Role;

@Repository
public interface RoleRepository extends JpaRepository<Role, Long> {
	Optional<Role> findByName(ERole name);
}
