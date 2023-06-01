import { useState } from 'react';
import './Todo.css'
const Todo=()=>{
    let [list,setList] =useState('');
    let [task,setTask] = useState([]);
    let [error,setError] = useState('');
    
    function handler(){
        if(list !== ''){
         setTask([...task,list]);
         setError('');
        }
         else
         setError('fill the blank field');
    }
    function del(removeValue){
        let random = [];
        console.log(removeValue)
        random = task.filter(data=>{
            if(data!==removeValue){ 
                return data}
            });
            setError('');
        setTask(random);
        console.log(task)
    }
    return(
        <div className='main'>
            
          <div className="section">
            <div className="input-section">
                <input type="text" onChange={(e)=>setList(e.target.value)}/>
                <button onClick={handler}>ADD-ON</button>
            </div>
            <p className='error'>{error}</p>
            <div className="lists">
                <ul style={{listStyle:'none'}}>
                    <li>
                    {task.map(value=>{
                       return ( <div className='delete-section'><div className='delete'><p className='value'>{value}</p><button onClick={()=>del(value)} className='delete-button'>Delete</button></div></div>)
                    })}
                    </li>
                </ul>
            </div>
          </div>
        </div> 
    )
}
export default Todo;