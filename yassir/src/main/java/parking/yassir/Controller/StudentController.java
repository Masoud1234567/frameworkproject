package parking.yassir.Controller;


import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import parking.yassir.Model.Student;
import parking.yassir.Services.StudentServices;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin
@RequestMapping("api/v1/stud")
public class StudentController {
    @Autowired
    public StudentServices studentServices;

    @PostMapping("/post")
    public Student post(@RequestBody Student student){

        return studentServices.post(student);
    }
    @GetMapping("/get-student")
    public List<Student> listStudent() {
        return  studentServices.listStudent();
    }
    @GetMapping("/{id}")
    public Optional<Student> getById(@PathVariable Integer id){

        return studentServices.getById(id);
    }

    @DeleteMapping("/delete-student/{id}")
    public ResponseEntity<?> deleteStudent(@PathVariable Long id) {
        try {
            studentServices.deleteStudent(id);
            return new ResponseEntity<>("Student with ID" + id + "deleted successfully", HttpStatus.OK);
        } catch (EntityNotFoundException e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.NOT_FOUND);
        }
    }
        @PatchMapping("/update-student/{id}")
    public ResponseEntity<?> updateStudent(@PathVariable long id, @RequestBody Student student){
        Student updateStudent = studentServices.updateStudent(id, student);

        if(updateStudent == null) return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        return  ResponseEntity.ok(updateStudent);

    }

}
