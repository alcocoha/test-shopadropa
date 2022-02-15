import { useState, useEffect } from "react";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import "./styles.scss";

export default function ModalBook(props) {
	const { openModal, closeModal, bookData, title, textButton, onClick } = props;
	const [sendData, setSendData] = useState({});

	useEffect(() => setSendData(bookData), [bookData]);

	const handleChange = (e) => setSendData({ ...sendData, [e.target.name]: e.target.value });

	return (
		<Modal open={openModal} onClose={closeModal} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
			<Box className="update-form">
				<h1 className="update-form__h1">{title}</h1>
				<TextField label="Name" variant="outlined" value={sendData.name} name="name" onChange={handleChange} />
				<TextField label="Author" variant="outlined" value={sendData.author} name="author" onChange={handleChange} />
				<TextField label="Subtitle" variant="outlined" value={sendData.subtitle} name="subtitle" onChange={handleChange} />
				<TextField label="Image" variant="outlined" value={sendData.image} name="image" onChange={handleChange}/>
				<div className="update-form__bottom">
					<TextField label="ISBN" variant="outlined" value={sendData.isbn} name="isbn" onChange={handleChange} />
					<TextField label="Year" variant="outlined" value={sendData.year} name="year" onChange={handleChange} />
				</div>
				<Button variant="contained" onClick={() => onClick(sendData)}>
					{textButton}
				</Button>
			</Box>
		</Modal>
	);
}
