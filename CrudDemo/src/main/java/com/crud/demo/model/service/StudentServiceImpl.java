package com.crud.demo.model.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import com.crud.demo.model.Student;
import com.crud.demo.model.repository.StudentRepo;

@Service
@Component
public class StudentServiceImpl implements StudentService {

	@Autowired
	private StudentRepo sr;
	
	@Override
	public List<Student> getAllStudent() {
		//List<Student> list = new ArrayList<Student>();  
		//sr.findAll().forEach(student->list.add(student));
		return sr.findAll();
	}

	@Override
	public Student saveStudent(Student student) {
		
		return sr.save(student);
	}

	@Override
	public Student getStudent(int id) {
		
		return sr.findById(id).get();
	}

	@Override
	public String deleteStudentData(int id) {
		 sr.deleteById(id);
		 return"Data deleted Successfully.....";
	}

	
	

}
