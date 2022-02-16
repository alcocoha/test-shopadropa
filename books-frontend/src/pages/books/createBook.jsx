import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { createBook, setCreateSuccess } from './slice';
import { useSelector, useDispatch } from "react-redux";
import { selectorCreateSuccess } from "./selectors";
import "./styles.scss";

export default function CreateBook() {
	const createSuccess = useSelector(selectorCreateSuccess);
	const dispatch = useDispatch();

  const [data, setData] = useState({
    name: "",
    author: "",
    subtitle: "",
    image: "",
    isbn: "",
    year: ""
  });

	useEffect(() => {
		if(createSuccess){
			setTimeout(() => {
				dispatch(setCreateSuccess(false));
			}, 3000)
		}
	}, [createSuccess]);

	const handleCreateBook = () => dispatch(createBook(data));

	const handleChange = (e) => setData({...data, [e.target.name]: e.target.value });

	return (
		<>
			{
				createSuccess && <h2 className="books__created">Book created successfully</h2>
			}
			<Link to="/" className="books__link">
				<Button variant="contained">List books</Button>
			</Link>
			<h1 className="update-form__h1">Add book</h1>
			<div className="form">
				<TextField label="Name" variant="outlined" name="name" value={data.name}  onChange={handleChange}/>
				<TextField label="Author" variant="outlined" name="author" value={data.author} onChange={handleChange}/>
				<TextField label="Subtitle" variant="outlined" name="subtitle" value={data.subtitle} onChange={handleChange}/>
				<TextField label="Image" variant="outlined" name="image" value={data.image} onChange={handleChange}/>
				<TextField label="ISBN" variant="outlined" name="isbn" value={data.isbn} onChange={handleChange}/>
				<TextField label="Year" variant="outlined" name="year" value={data.year} onChange={handleChange}/>
			</div>
			<div className="form__button">
				<Button variant="contained" onClick={handleCreateBook}>Crear</Button>
			</div>
		</>
	);
}
