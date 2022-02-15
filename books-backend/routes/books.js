import express from "express";
import { v4 as uuidv4 } from "uuid";

// Array simulation of database
import { booksMockup, modifyMockup } from "../mockups/booksMockup.js";
import { validationSquemaBook } from "../utils/validations.js";

const booksRouter = express.Router();

/**
 * Method: GET
 * Read data, all books regitered
 */
booksRouter.get("/", (req, res) => {
	res.send(booksMockup);
});

/**
 * Method: POST
 * Create a book
 */
booksRouter.post("/", (req, res) => {
	const { body } = req;
	validationSquemaBook(body);
	booksMockup.push({ id: uuidv4(), ...body });
	res.json({
		status: "ok"
	});
});

/**
 * Method: GET
 * Read data through a specific ID
 */
booksRouter.get("/:id", (req, res) => {
	const { id } = req.params;
	const data = booksMockup.find((item) => item.id === id);

	if (data === undefined) {
		throw new Error("Data is not found");
	}

	res.json({
		status: "ok",
		data
	});
});

/**
 * Method: PATCH
 * Update data through a specific ID
 */
booksRouter.patch("/:id", (req, res) => {
	const {
		body,
		params: { id }
	} = req;

	validationSquemaBook(body);

	const book = booksMockup.find((item) => item.id === id);

	if (book === undefined) {
		throw new Error("Data is not found");
	}

	const { name, author, year, isbn, subtitle, link, image, language } = body;

	if (name) book.name = name;
	if (author) book.author = author;
	if (year) book.year = year;
	if (isbn) book.isbn = isbn;
	if (subtitle) book.subtitle = subtitle;
	if (link) book.link = link;
	if (image) book.image = image;
	if (language) book.language = language;

	res.json({
		status: "ok"
	});
});

/**
 * Method: DELETE
 * Delete data through a specific ID
 */
booksRouter.delete("/:id", (req, res) => {
	const { id } = req.params;
	const result = booksMockup.filter((item) => item.id !== id);
	modifyMockup(result);

	res.json({
		status: "ok"
	});
});

export default booksRouter;
