import React, { useState, useRef } from 'react';
import { supabase } from '../supaClient';

export default function Register() {
  const [count, setCount] = useState([]);
  const [error, setError] = useState(null);
  const registerForm = useRef(null);

  const RegisterStudent = async (e) => {
    e.preventDefault();
    const datas = new FormData(e.target);
    const dataEntries = Object.fromEntries(datas);
    console.log(dataEntries);

    try {
      const { data, error } = await supabase
        .from('students')
        .insert([
          {
            student_name: dataEntries.student_name,
            student_surname: dataEntries.student_surname,
            student_number: dataEntries.student_number,
            student_lesson: dataEntries.student_lesson,
          },
        ]);

      if (error) throw error;

      setCount(data);
      registerForm.current.reset();
    } catch (err) {
      console.error('Hata oluştu:', err);
      setError('Öğrenci kaydedilirken bir hata oluştu. Lütfen tekrar deneyin.');
    }
  };
  console.log(count);

  return (
    <div className="regformsCont">
      {error && <p className="error">{error}</p>} {/* Hata mesajını gösterin */}
      <form className="register" onSubmit={RegisterStudent} ref={registerForm}>
        <input type="text" name="student_name" placeholder="Öğrenci Adı" required />
        <input type="text" name="student_surname" placeholder="Öğrenci Soyadı" required />
        <input type="text" name="student_number" placeholder="Öğrenci Numarası" required />
        <select name="student_lesson" required>
          <option value="FrontEnd">FrontEnd</option>
          <option value="Backend">Backend</option>
        </select>
        <button type="submit">Gönder</button>
      </form>
    </div>
  );
}
