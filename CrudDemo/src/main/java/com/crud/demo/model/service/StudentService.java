package com.crud.demo.model.service;

import java.util.List;

import org.springframework.stereotype.Component;

import com.crud.demo.model.Student;

@Component
public interface StudentService {
	
	List<Student> getAllStudent();
	
	Student saveStudent(Student student);
	
	//String deleteStudent(int id);
	
	//void deleteStudent(Long id);
	
	Student getStudent(int id);
	
	String deleteStudentData(int id);
	

}
