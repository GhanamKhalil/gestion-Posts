export default function ItemArchiver({post,RecupererPost}){
    return(
        <tr>
            <td>{post.id}</td>
            <td>{post.title}</td>
            <td>{post.body}</td>
            <td>{post.DateSupprimer}</td>
            <td>
                <button onClick={RecupererPost} value={post.id}>
                    Récuperer
                </button>
            </td>
        </tr>
    )
}