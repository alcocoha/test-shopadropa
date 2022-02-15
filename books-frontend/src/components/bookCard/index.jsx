import Button from '@mui/material/Button';
import './styles.scss';

export default function BookCard({ book, handleEditBook, handleDeleteBook }) {
  const { id, image, name, author, subtitle, isbn } = book;
	return (
		<div className="book-card">
			<img src={image} className="book-card__img" />
			<h1 className="book-card__title">{name}</h1>
			<h4 className="book-card__author">{author}</h4>
			<p className="book-card__subtitle">{subtitle}</p>
			<p className="book-card__isbn">{isbn}</p>
			<div className="book-card__buttons">
				<Button variant="outlined" onClick={() => handleEditBook(id)}>Edit</Button>
				<Button variant="outlined" onClick={() => handleDeleteBook(id)}>Delete</Button>
			</div>
		</div>
	);
}
