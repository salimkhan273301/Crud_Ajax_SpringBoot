package com.crud.demo.controller;

import java.util.List;

import org.apache.logging.log4j.LogManager;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.crud.demo.model.Student;
import com.crud.demo.model.service.StudentService;

@CrossOrigin(origins="*")  //http://localhost:7003/CrudProject/
@RequestMapping("/api/v1/")
@RestController
public class StudentController {

	private static final org.apache.logging.log4j.Logger logger = LogManager.getLogger(StudentController.class);

	@Autowired
	private StudentService ss;

	// get all employee

	@GetMapping("/student")
	public List<Student> getAlldata() {
		logger.info("Info log entered in list of Employee controller");
		return ss.getAllStudent();

	}

	// create new Student Record ....
	@PostMapping(path="/student")
	public Student createEmployee(@RequestBody Student st) {
		logger.info("Info log entered in save controller");
		return ss.saveStudent(st);
	}

	// search student record by Id...
	@GetMapping("/student/{id}")
	private Student getStudentById(@PathVariable("id") int id) {
		return ss.getStudent(id);
		}
	//delete student from record..
			@DeleteMapping("/student/{id}") 
			private String deleteStudent(@PathVariable("id") int id) {
				return ss.deleteStudentData(id);
			}
			
			// update student record
			@PutMapping("/student")
			private String updateStudent() {
				return "Updated successfully";
				
			}
}