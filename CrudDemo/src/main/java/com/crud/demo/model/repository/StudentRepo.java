package com.crud.demo.model.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.crud.demo.model.Student;


@Repository
public interface StudentRepo extends JpaRepository<Student,Integer> {
	 List<Student> findAll();
}
