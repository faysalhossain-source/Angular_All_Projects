package com.faysal.firstSpringProject.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.faysal.firstSpringProject.model.Student;

@Repository
public interface StudentRepository extends JpaRepository<Student, Integer> {

}
