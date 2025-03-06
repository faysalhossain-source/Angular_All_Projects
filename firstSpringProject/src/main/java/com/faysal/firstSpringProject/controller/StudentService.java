package com.faysal.firstSpringProject.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.faysal.firstSpringProject.model.Student;
import com.faysal.firstSpringProject.repository.StudentRepository;

@Service
public class StudentService {

	private StudentRepository repository;

	public StudentService(StudentRepository repository) {
		this.repository = repository;
	}

	public Student saveStudent(Student student) {
		Student saved = repository.save(student);
		return saved;

	}

	public List<Student> getStudents() {
		// TODO Auto-generated method stub
		return repository.findAll();
	}

	public void deleteById(int id) {
		repository.deleteById(id);
	}

	public Optional<Student> findStudentById(int id) {
		// TODO Auto-generated method stub
		return repository.findById(id);
	}

}
