/**
 * Data mockup instead of database
 */
export let booksMockup = [
  {
		id: "id-1",
		name: "Managing Humans",
		author: "Michael Lopp",
		year: 2016,
    isbn: "1484221570",
		subtitle: "Biting and Humorous Tales of a Software Engineering Manager",
		link: "https://www.amazon.ca/Managing-Humans-Humorous-Software-Engineering-ebook/dp/B01J53IE1O/ref=sr_1_28?crid=2USW7SV2JYSMW&keywords=apress&qid=1644725216&sprefix=apress%2Caps%2C108&sr=8-28",
		image: "https://m.media-amazon.com/images/I/51Bc9s32NUL.jpg",
    language: "English",
	},
  {
		id: "id-2",
		name: "Numerical Python",
		author: "Robert Johansson",
		year: 2018,
    isbn: "1484242459",
		subtitle: "Scientific Computing and Data Science Applications with Numpy, SciPy and Matplotlib",
		link: "https://www.amazon.ca/Numerical-Python-Scientific-Applications-Matplotlib/dp/1484242459/ref=sr_1_6?crid=2USW7SV2JYSMW&keywords=apress&qid=1644725216&sprefix=apress%2Caps%2C108&sr=8-6",
		image: "https://images-na.ssl-images-amazon.com/images/I/41Rt6g7ab9L._SX348_BO1,204,203,200_.jpg",
    language: "English",
	},
  {
		id: "id-3",
		name: "Coding Art",
		author: "Yu Zhang",
		year: 2021,
    isbn: "1484262638",
		subtitle: "The Four Steps to Creative Programming with the Processing Language",
		link: "https://www.amazon.ca/Coding-Art-Creative-Programming-Processing/dp/1484262638/ref=sr_1_69?crid=2USW7SV2JYSMW&keywords=apress&qid=1644725697&sprefix=apress%2Caps%2C108&sr=8-69",
		image: "https://images-na.ssl-images-amazon.com/images/I/41eE5Z8cYOL._SX328_BO1,204,203,200_.jpg",
    language: "English",
	},
  {
		id: "id-4",
		name: "Modern Full-Stack Development",
		author: "Frank Zammetti",
		year: 2020,
    isbn: "1484257371",
		subtitle: "Using TypeScript, React, Node.js, Webpack, and Docker",
		link: "https://www.amazon.ca/Modern-Full-Stack-Development-TypeScript-Node-js-ebook/dp/B086KV16SG/ref=sr_1_16?crid=2USW7SV2JYSMW&keywords=apress&qid=1644725216&sprefix=apress%2Caps%2C108&sr=8-16",
		image: "https://m.media-amazon.com/images/I/41RoU166LLL.jpg",
    language: "English",
	}
];

export const modifyMockup = (value) => booksMockup = value;