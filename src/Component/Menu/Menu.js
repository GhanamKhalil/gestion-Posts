import {Link} from 'react-router-dom'
export default function Menu(){

return (
    <ul>
        <li><Link to={'/'}>Consulter Post</Link></li>
        <li><Link to={'/AjouterPost'}>Ajouter Post</Link></li>
        <li><Link to={'/ArchiverPost'}> Archiver</Link></li>
    </ul>
)
}