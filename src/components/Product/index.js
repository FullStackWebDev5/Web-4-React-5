import './index.css'
import { useParams } from 'react-router-dom'

const Product = () => {
	const { productId } = useParams()
	let products = [
		{
			id: 1,
			img: 'https://m.media-amazon.com/images/I/61WFNqf8hVL._SL1500_.jpg',
			title: 'Headphone 1',
			price: '125'
		},
		{
			id: 2,
			img: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aGVhZHBob25lfGVufDB8fDB8fA%3D%3D&w=1000&q=80',
			title: 'Headphone 2',
			price: '100'
		},
		{
			id: 3,
			img: 'https://i.pcmag.com/imagery/reviews/01WLUkobmU90ZuWaVoNjp9w-8.fit_lim.size_840x473.v1632400956.jpg',
			title: 'Headphone 3',
			price: '87'
		},
		{
			id: 4,
			img: 'https://m.media-amazon.com/images/I/51xxA+6E+xL._SL1500_.jpg',
			title: 'Headphone 4',
			price: '98'
		},
		{
			id: 5,
			img: 'https://m.media-amazon.com/images/I/61WFNqf8hVL._SL1500_.jpg',
			title: 'Headphone 1',
			price: '125'
		},
		{
			id: 6,
			img: 'https://m.media-amazon.com/images/I/61WFNqf8hVL._SL1500_.jpg',
			title: 'Headphone 1',
			price: '125'
		},
		{
			id: 7,
			img: 'https://m.media-amazon.com/images/I/61WFNqf8hVL._SL1500_.jpg',
			title: 'Headphone 1',
			price: '125'
		},
		{
			id: 8,
			img: 'https://m.media-amazon.com/images/I/61WFNqf8hVL._SL1500_.jpg',
			title: 'Headphone 1',
			price: '125'
		},
		{
			id: 9,
			img: 'https://m.media-amazon.com/images/I/61WFNqf8hVL._SL1500_.jpg',
			title: 'Headphone 1',
			price: '125'
		},
		{
			id: 10,
			img: 'https://m.media-amazon.com/images/I/61WFNqf8hVL._SL1500_.jpg',
			title: 'Headphone 1',
			price: '125'
		},
		{
			id: 11,
			img: 'https://m.media-amazon.com/images/I/61WFNqf8hVL._SL1500_.jpg',
			title: 'Headphone 11',
			price: '125'
		},
		{
			id: 12,
			img: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aGVhZHBob25lfGVufDB8fDB8fA%3D%3D&w=1000&q=80',
			title: 'Headphone 12',
			price: '100'
		},
	];

	let product = products.find(product => product.id === Number(productId))

	return (
		<div id='container'>
			<div id='product-card'>
				<img src={product.img} alt='product' height='200' width='200' />
				<p>{product.title}</p>
				<p>$ {product.price}</p>
				<button>View product</button>
				<button>Buy now</button>
			</div>
		</div>
	)
}

export default Product