
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ListaPreguntasPage.css"

function ListaPreguntasPage({}) {

    const params = useParams();

    const [preguntas, setPreguntas] = useState(null);

    useEffect(() => {
        // Fetch the product details using async/await
        const fetchQs = async () => {
            try {
                const url = `http://localhost:3000/preguntas?idCuestionario=${params.idCuestionario}`;
                const res = await fetch(url);
                const data = await res.json();
                setPreguntas(data);
            } catch (err) {
                console.error("Failed to fetch:", err);
            }
        };

        fetchQs();
    }, [params.idCuestionario]);

    // We want to render some loading state if the product is not yet loaded 👇
    if (!preguntas) return <p>Cargando preguntas...</p>;

    // We want to render the product details 👇
    return (<div className="preguntas">
        <h1>Nombre del cuestionario</h1>
        {
            preguntas.map((pregunta) => (
                <Link key={"c" + params.idCuestionario + "p" + pregunta.id} to={"/cuestionarios/" + params.idCuestionario + "/" + pregunta.id}> {pregunta.titulo} </Link>
            ))
        }
    </div>
    );
}

export default ListaPreguntasPage;