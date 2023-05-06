
import {useState,useEffect} from 'react'
import {useDispatch} from 'react-redux'
export default function AjouterPost(){
  const [post,setpost]=useState({title:'',body:''})
  let dispatch=useDispatch();
  

  const handleOnchange=(e)=>{
    setpost({...post,[e.target.id]:e.target.value})
  }

  const handleSubmit=(e)=>{
    e.preventDefault()
    dispatch({type:'post/AddPost',payload:post})
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <table>
          <thead>
            <tr>
              <th>Ajouter Post</th>
              </tr>
          </thead>
          <tbody>
            <tr>
              <td><label htmlFor='title'>Titre</label></td>
              <td><input type='text' onChange={handleOnchange} id='title'/></td>
            </tr>
            <tr>
              <td><label htmlFor='body'>Contenu</label></td>
              <td><input type='text' onChange={handleOnchange} id='body'/></td>
            </tr>
            <tr>
              <td colSpan={2}><input type='submit'/></td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  )
}
