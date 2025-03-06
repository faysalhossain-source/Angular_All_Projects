package com.faysal.firstSpringProject.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.faysal.firstSpringProject.model.Student;

@RestController
@RequestMapping(value = "/student")
public class StudenController {
	private final StudentService service;

	public StudenController(StudentService service) {
		this.service = service;
	}

	@PostMapping
	public Student saveStudent(@RequestBody Student student) {
		Student SaveStudent = service.saveStudent(student);
		return SaveStudent;
	}

	@GetMapping

	public List<Student> getStudents() {
		return service.getStudents();
	}

	@DeleteMapping("/{id}")
	public void deleteById(@PathVariable int id) {
		service.deleteById(id);
	}

	@PutMapping("/{id}")
	public Student updateStudent(@PathVariable int id, Student student) {

		Optional<Student> existingStudent = service.findStudentById(id);
		Student st = null;
		if (existingStudent.isPresent()) {
			st = existingStudent.get();

			if (st.getName() != student.getName())
				st.setName(student.getName());

			if (st.getAddress() != student.getAddress())
				st.setAddress(student.getAddress());

			if (st.getAge() != student.getAge())
				st.setAge(student.getAge());

			if (st.getClazz() != student.getClazz())
				st.setClazz(student.getClazz());

			if (st.getDob() != student.getDob())
				st.setDob(student.getDob());
		}

		return service.saveStudent(st);
	}
}
