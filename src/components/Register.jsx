import React, { useState } from 'react';
import { supabase } from '../supaClient';

export default function Register() {
  const [count, setCount] = useState({});
  console.log({ supabase });

  const RegisterStudent = async (e) => {
    e.preventDefault();
    const datas = new FormData(e.target);
    const dataEntries = Object.fromEntries(datas);
    console.log(dataEntries);
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
    
      setCount(data);
  };
  

  console.log(count);

  return (
    <div className="regformsCont">
      <form className="register" onSubmit={RegisterStudent}>
        <input type="text" name="student_name" placeholder="Öğrenci Adı" />
        <input type="text" name="student_surname" placeholder="Öğrenci Soyadı " />
        <input type="text" name="student_number" placeholder="Öğrenci Numarası" />
        <select name="student_lesson">
          <option value="FrontEnd">FrontEnd</option>
          <option value="Backend">Backend</option>
        </select>
        <input type="submit" placeholder="Gönder" />
      </form>
    </div>
  );
}
