import { useState } from 'react';
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { createBook } from './slice';
import { useSelector, useDispatch } from "react-redux";
import "./styles.scss";

export default function CreateBook() {
	const dispatch = useDispatch();

  const [data, setData] = useState({
    name: "",
    author: "",
    subtitle: "",
    image: "",
    isbn: "",
    year: ""
  });

	const handleCreateBook = () => dispatch(createBook(data));

	const handleChange = (e) => setData({...data, [e.target.name]: e.target.value });

	return (
		<>
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
