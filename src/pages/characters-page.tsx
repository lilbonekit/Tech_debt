import {
	Box,
	CircularProgress,
	Button,
	Card,
	Avatar,
	Container,
} from '@mui/material'
import { useMarvelCharacters } from '../services/marvel'
import SimpleList from '../components/common/list'

export default function CharactersPage() {
	const charactersQuery = useMarvelCharacters()

	return (
		<Container sx={{ textAlign: 'center', pt: '50px' }}>
			<SimpleList
				items={charactersQuery.data}
				loadingState={charactersQuery.requestState}
				slots={{
					loading: (
						<Box sx={{ display: 'flex', justifyContent: 'center', p: 2 }}>
							<CircularProgress />
						</Box>
					),
					error: <h1>Something went wrong :( </h1>,
					noData: (
						<>
							<h1>There is no data here :( </h1>
							<Button
								color="secondary"
								variant="contained"
								onClick={() => charactersQuery.fetchData()}
							>
								Download
							</Button>
						</>
					),
				}}
			>
				<Box
					sx={{
						display: 'grid',
						w: 1,
						gridTemplateColumns: {
							xs: '1fr',
							sm: '1fr 1fr',
							md: '1fr 1fr 1fr 1fr',
						},
						gap: '20px',
						p: '20px',
					}}
				>
					{charactersQuery?.data?.map((item) => (
						<Card
							sx={{ alignItems: 'center', justifyContent: 'center', w: 1 }}
							key={item.id}
						>
							<Avatar
								src={`${item.thumbnail.path}.${item.thumbnail.extension}`}
								alt={item.name}
							/>
							<h2>{item.name}</h2>
						</Card>
					))}
				</Box>
			</SimpleList>
		</Container>
	)
}
