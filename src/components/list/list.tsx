import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { type IChar } from "../../shared/interfaces";

function ItemList({ data }: { data: IChar[] }) {
	return (
		<List>
			{data.map((item) => {
				return <ListItem key={item.id}>{item.name}</ListItem>;
			})}
		</List>
	);
}

export default ItemList;
