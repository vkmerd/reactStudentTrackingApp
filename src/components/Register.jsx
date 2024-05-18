import { useState} from "react"

export default function Register(){

    const [count, setCount] = useState([])
    const SomeComponent = () => {
        const supabase = useSupabase();
        
        console.log(supabase);
    }
    SomeComponent();      
    const RegisterStudent = async(e) => {
        e.preventDefault();
        const datas = new FormData(e.target)
        const dataEntries = Object.fromEntries(datas)

        const { data, error } = await _supabase
        .from('students')
        .insert([
            {
                student_name: dataEntries.student_name,
                student_surname: dataEntries.student_surname,
                student_number: dataEntries.stemail_address,
                student_lesson: dataEntries.student_id,
            }
        ]);
        setCount(data)
    }
    console.log(count);
    return(
       <div className="regformsCont">
            <form className="register" onSubmit={RegisterStudent}>
                    <input type="text" name="student_name" placeholder="Öğrenci Adı"/>
                    <input type="text" name="student_surname" placeholder="Öğrenci Soyadı " />
                    <input type="text" name="student_number" placeholder="Öğrenci Numarası"/>
                    <select id="classLesson">Dersi:
                        <option value="FrontEnd">FrontEnd</option>
                        <option value="Backend">Backend</option>
                    </select>
                    <input type="submit" placeholder="Gönder"/>
            </form>
       </div>
    )
}