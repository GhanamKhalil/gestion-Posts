import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import ItemArchiver from './ItemArchiver'
export default function ArchiverPost() {
  const dispatch = useDispatch()
  const posts=useSelector(posts=>posts.Post)

  const RecupererPost=(e)=>{
      dispatch({type:'post/RecupererPost',payload:{id:e.target.value}})
  }
  return (
    <div>
      <table border={1} style={{width:'500px'}}>
        <thead>
          <tr>
            <th colSpan={5}>Post Archiver</th>
          </tr>
          <tr>
            <th>Id</th>
            <th>Titre</th>
            <th>Body</th>
            <th>Date Suppression</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {posts.map(post=>post.DateSupprimer!==undefined&&<ItemArchiver key={post.id} post={post} RecupererPost={RecupererPost} />)}
        </tbody>
      </table>
    </div>
  )
}
