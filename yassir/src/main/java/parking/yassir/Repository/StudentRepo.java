package parking.yassir.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import parking.yassir.Model.Student;

@Repository
public interface StudentRepo extends JpaRepository<Student, Long> {
}
