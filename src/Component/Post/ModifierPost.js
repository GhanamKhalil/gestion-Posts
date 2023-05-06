import { useNavigate, useParams } from "react-router-dom"
import { useState } from 'react'
import { useDispatch,useSelector } from 'react-redux'


export default function ModifierPost(){

  const { id } = useParams()
  const dispatch = useDispatch()
  const navigate=useNavigate()
  let postModifier = useSelector(data=>data.Post.find(post=>post.id==id))


  const [post, setpost] = useState(postModifier)

  const handleOnchange = (e) => {
    setpost({ ...post, [e.target.id]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch({ type: 'post/ModifierPost', payload: post })
    navigate('/')
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <table>
          <thead>
            <tr>
              <th>Modifier Post</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><label htmlFor='title'>Titre</label></td>
              <td><input type='text' onChange={handleOnchange} value={post.title} id='title' /></td>
            </tr>
            <tr>
              <td><label htmlFor='body'>Contenu</label></td>
              <td><input type='text' onChange={handleOnchange} value={post.body} id='body' /></td>
            </tr>
            <tr>
              <td colSpan={2}><input type='submit' /></td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  )
}

