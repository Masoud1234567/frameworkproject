package parking.yassir.Controller;


import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import parking.yassir.Model.Student;
import parking.yassir.Model.Teacher;
import parking.yassir.Services.StudentServices;
import parking.yassir.Services.TeacherService;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin
@RequestMapping("api/v1/teacher")
public class TeacherController {

    @Autowired
    public TeacherService teacherServices;

    @PostMapping("/post")
    public Teacher post(@RequestBody Teacher teacher){

        return teacherServices.post(teacher);
    }

    @GetMapping("/get")
    public List<Teacher> listTeacher() {
        return  teacherServices.listTeacher();
    }
    @GetMapping("/{id}")
    public Optional<Teacher> getById(@PathVariable Long id){

        return teacherServices.getById(id);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteTeacher(@PathVariable Long id) {
        try {
            teacherServices.deleteTeacher(id);
            return new ResponseEntity<>("Student with ID" + id + "deleted successfully", HttpStatus.OK);
        } catch (EntityNotFoundException e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.NOT_FOUND);
        }

    }

    @PatchMapping("update/{id}")
    public ResponseEntity<?> updateTeacher(@PathVariable long id, @RequestBody Teacher teacher){
        Teacher updateTeacher = teacherServices.updateTeacher(id, teacher);

        if(updateTeacher == null) return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        return  ResponseEntity.ok(updateTeacher);
    }

    }




