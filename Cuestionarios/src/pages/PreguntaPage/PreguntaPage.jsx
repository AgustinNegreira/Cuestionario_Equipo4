import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./PreguntaPage.css"

function PreguntaPage() {

    const params = useParams();
    const [seleccion, setSeleccion] = useState("");

    const [pregunta, setPregunta] = useState(null);

    useEffect(() => {
        // Fetch the product details using async/await
        const fetchQs = async () => {
            try {
                const url = `http://localhost:3000/detallePregunta?idPregunta=${params.idPregunta}`;
                const res = await fetch(url);
                const data = await res.json();
                setPregunta(data);
            } catch (err) {
                console.error("Failed to fetch:", err);
            }
        };

        fetchQs();
    }, [params.idCuestionario, params.idPregunta]);

    // We want to render some loading state if the product is not yet loaded 👇
    if (!pregunta) return <p>Cargando pregunta...</p>;

    // We want to render the product details 👇
    return (<div className="pregunta">
            <h2>Nombre de la pregunta</h2>

            {pregunta[0].tipo === "MO" ? (
                Object.entries(pregunta[0].opciones || {}).map(([clave, valor]) => (
                    <label key={clave}>
                        <input
                            type="radio"
                            name="opcion"
                            value={clave}
                            checked={seleccion === clave}
                            onChange={(e) => setSeleccion(e.target.value)}
                        />
                        {clave}: {valor}
                    </label>
                ))
            ) : (
                <textarea name="respuesta" id="respuesta"></textarea>
            )}
            <button>Enter</button>
        </div>
    );
}

export default PreguntaPage