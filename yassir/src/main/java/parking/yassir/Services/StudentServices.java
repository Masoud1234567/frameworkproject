package parking.yassir.Services;

import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import parking.yassir.Model.Student;
import parking.yassir.Repository.StudentRepo;

import java.util.List;
import java.util.Optional;

@Service
public class StudentServices {
    @Autowired

    public StudentRepo studentRepo;
    public Student post(Student student){
        return studentRepo.save(student);
    }
    public Optional<Student> getById(long id) {

        return studentRepo.findById(id);
    }
    public void deleteStudent(Long id){
        if (!studentRepo.existsById(id)){
            throw new EntityNotFoundException("Student with ID"+id+"not found");
        }

        studentRepo.deleteById(id);
    }
        public Student updateStudent(long id, Student student){
        Optional<Student> optionalStudent = studentRepo.findById((id));
        if (optionalStudent.isPresent()){
            Student existingStudent = optionalStudent.get();

            existingStudent.setEmail(student.getEmail());
            existingStudent.setStudName(student.getStudName());
            existingStudent.setRegNumber(student.getRegNumber());
//            existingStudent.setAddress(student.getAddress());

            return studentRepo.save(existingStudent);
        }
        return null;
    }

    public List<Student> listStudent() {
        return studentRepo.findAll();
    }

}
