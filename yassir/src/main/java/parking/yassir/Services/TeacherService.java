package parking.yassir.Services;


import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import parking.yassir.Model.Student;
import parking.yassir.Model.Teacher;
import parking.yassir.Repository.StudentRepo;
import parking.yassir.Repository.TeacherRepo;

import java.util.List;
import java.util.Optional;

@Service
public class TeacherService {
    @Autowired

    public TeacherRepo teacherRepo;
    public Teacher post(Teacher teacher){
        return teacherRepo.save(teacher);
    }

    public Optional<Teacher> getById(long id) {

        return teacherRepo.findById(id);
    }
    public List<Teacher> listTeacher() {
        return teacherRepo.findAll();
    }

    public void deleteTeacher(Long id){
        if (!teacherRepo.existsById(id)){
            throw new EntityNotFoundException("Teacher with ID"+id+"not found");
        }

        teacherRepo.deleteById(id);
    }

    public Teacher updateTeacher(long id, Teacher teacher){
        Optional<Teacher> optionalTeacher = teacherRepo.findById((id));
        if (optionalTeacher.isPresent()){
            Teacher existingTeacher = optionalTeacher.get();

            existingTeacher.setEmail(teacher.getEmail());
            existingTeacher.setUsername(teacher.getUsername());
            existingTeacher.setRegnumber(teacher.getRegnumber());
//

            return teacherRepo.save(existingTeacher);
        }
        return null;
    }
}
