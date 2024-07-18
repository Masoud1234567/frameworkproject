package parking.yassir.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import parking.yassir.Model.Student;
import parking.yassir.Model.Teacher;

@Repository
public interface TeacherRepo extends JpaRepository<Teacher, Long> {
}
