import yup from 'yup';

/**
 * Squema validation
 */
export const validationSquemaBook = (data) => {
  console.log('data***', data)
  const squema = yup.object().shape({
    name: yup.string().strict().required(),
		author: yup.string().strict().required(),
		year: yup.string().required(),
    isbn: yup.string().strict(),
		subtitle: yup.string().strict(),
		link: yup.string().strict(),
		image: yup.string().strict(),
    language: yup.string().strict(),
  });

  squema.validateSync(data);
}
