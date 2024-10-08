import { Link } from "react-router-dom"


const Error = () => {
  return (
    <section>
        <h2>Error</h2>
        <p>Stránka nenalezena</p>
        <button><Link to='/'>Domů</Link></button>
    </section>
  )
}

export default Error