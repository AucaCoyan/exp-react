const BASE_URL = "http://localhost:5050";

async function obtenerPlatos() {
	const platosEndpoint = "/api/MenuItem";
	const _url = BASE_URL + platosEndpoint;
	const response = await fetch(_url, {
		method: "GET",
	});
	return response.json();
}

export default async function Home() {
	const platos = await obtenerPlatos();
	return (
		<>
			<h1>Titulo de una pagina muy util</h1>
			{platos.map((plato) => (
				<div>
					plato {plato.id}: {plato.name}
				</div>
			))}
		</>
	);
}
