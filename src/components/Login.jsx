import { useEffect, useState } from 'react';
import { supabase } from '../supaClient';

export default function Login() {
  const [ststate, setStudentState] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const setStudents = async () => {
      const { data, error } = await supabase
        .from('students')
        .select('*');
      
      if (error) {
        console.error('Error fetching students:', error);
        setError('Öğrenciler getirilirken bir hata oluştu.');
      } else {
        setStudentState(data);
      }
    };
    setStudents();
  }, []);

  console.log(ststate);

  const rcollFunction = async (studentId, rcollValue) => {
    try {
      const { data, error } = await supabase
        .from('students')
        .update({ student_rcoll: rcollValue })
        .eq('id', studentId);

      if (error) throw error;

      setStudentState(prevState => prevState.map(
        student => student.id === studentId ? { ...student, student_rcoll: rcollValue } : student
      ));
      alert("Öğrenci durumu güncellendi");
    } catch (err) {
      console.error('Hata oluştu:', err);
      setError('Öğrenci durumu güncellenirken bir hata oluştu.');
    }
  };

  return (
    <div className="sendLogin">
      {error && <p className="error">{error}</p>}
      {ststate.map(student =>
        <div className='stCont' key={student.id}>
          <p>{student.student_name}</p>
          <p>{student.student_surname}</p>
          <p>{student.student_lesson}</p>
          <button onClick={() => rcollFunction(student.id, "Geldi")}>Geldi</button>
          <button onClick={() => rcollFunction(student.id, "Gelmedi")}>Gelmedi</button>
        </div>
      )}
    </div>
  );
}
