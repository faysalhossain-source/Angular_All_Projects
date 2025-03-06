package com.faysal.firstSpringProject.controller;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping
//@CrossOrigin(origins="http://localhost:4200")
@CrossOrigin(origins="*")
public class dummycontroller {

    @GetMapping("/hello")
    public String hello(){
        return "Hello Word";
    }
    @GetMapping("/bye")
    public String bye(){
        return "chol jai";
    }
    @GetMapping("/square")
    public int square(@RequestParam int number){
       return number*number;
    }
    @RequestMapping("/faysal")
    public String faysal(@RequestParam String name
                         ,@RequestParam String f) {
        String out = "I am" +" "+name+" "+f;
        return out;
    }
    @RequestMapping("/faysal1")
    public String faysal1(@RequestParam(value = "aa") String number,
                          @RequestParam(required = false) String fatherName,
                          @RequestParam(name = "b") int age) {
        return "I am " + number + " and my father's name is " + fatherName  + " and I am " + age + " years old.";
    }





}

