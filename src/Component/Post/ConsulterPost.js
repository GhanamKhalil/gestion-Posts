import {useSelector,useDispatch} from 'react-redux'
import Item from './Item'
import '../style/Post/ConsulterPost.css'

export default function ConsulterPost(){
    const listPosts=useSelector(data=>data.Post)
    const dispatch=useDispatch()

    const handleSupprimer=(e)=>{
        dispatch({type:'post/SupprimerPost',payload:{id:e.target.value}})
    }
    return(
        <div id='listPost'>
            {listPosts.map(post=>
                post.DateSupprimer===undefined
                &&
                <Item key={post.id} post={post} 
                SupprimerPost={handleSupprimer}/>
                )}
        </div>
    )
}