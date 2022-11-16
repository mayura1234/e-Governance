package com.example.saaku.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.saaku.model.Status;

public interface STSRepository extends JpaRepository<Status, Long>{

}
