import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getBooksFetch, getDeleteBook, updateBooks } from "./slice";
import { selectorBooksList } from "./selectors";
import { Link } from "react-router-dom";

import Button from "@mui/material/Button";

import BookCard from "../../components/bookCard";
import ModalBook from "../../components/modalBook";

import "./styles.scss";

export default function Books() {
	const booksList = useSelector(selectorBooksList);

	const [openModal, setOpenModal] = useState(false);
	const [modalData, setModalData] = useState(false);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getBooksFetch());
	}, []);

	const handleEditBook = (id) => {
		const data = booksList.find((book) => book.id === id);
		setModalData(data);
		setOpenModal(true);
	};

	const handleDeleteBook = (data) => dispatch(getDeleteBook(data));

	const buildBooks = () => {
		return booksList.map((book) => <BookCard book={book} key={book.id} handleEditBook={handleEditBook} handleDeleteBook={handleDeleteBook} />);
	};

	const handleUpdate = (data) => {
		dispatch(updateBooks(data));
		setOpenModal(false);
	};

	return (
		<>
			<Link to="/create" className="books__link">
				<Button variant="contained">Add a book</Button>
			</Link>
			<ModalBook
				title="Updata book"
				openModal={openModal}
				closeModal={() => setOpenModal(false)}
				bookData={modalData}
				textButton="Update"
				onClick={handleUpdate}
			/>
			<div className="books__container">{buildBooks()}</div>
		</>
	);
}
