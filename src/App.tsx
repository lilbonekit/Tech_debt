import { Container, Button } from "@mui/material";
import ItemList from "./components/list/list";
import { useHTTPService } from "./services/httpService";
import useMarvelData from "./store/store";

function App() {
	const { fetchData } = useHTTPService();

	const data = useMarvelData((state) => state.data);
	const setData = useMarvelData((state) => state.setData);

	const handleClick = async () => {
		const res = await fetchData(
			"https://marvel-server-zeta.vercel.app/characters?apikey=d4eecb0c66dedbfae4eab45d312fc1df"
		);
		setData(res);
	};
	return (
		<>
			<Container sx={{ textAlign: "center", pt: "50px" }}>
				{!data && (
					<>
						<h1>There is no data here :( </h1>
						<Button
							color="secondary"
							variant="contained"
							onClick={() => handleClick()}
						>
							Download
						</Button>
					</>
				)}
				{data && <ItemList data={data} />}
			</Container>
		</>
	);
}

export default App;
