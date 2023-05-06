import { Link } from "react-router-dom"

export default function Item(props)
{
    const post=props.post
    return(
        <div id='item'>
            <p>Identifier de Post :{post.id}</p>
            <p>Titre de Post :{post.title}</p>
            <p>Contenu de Post :{post.body}</p>
            <p>
                <button value={post.id} onClick={props.SupprimerPost}>Supprimer</button>
                <Link to={`/ModifierPost/${post.id}`}><button>Modifer</button></Link>
            </p>
            
        </div>
    )
}