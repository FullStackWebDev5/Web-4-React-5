import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Landing from './components/Landing'
import About from './components/About'
import Contact from './components/Contact'
import Products from './components/Products'
import Product from './components/Product'

const App = () => {
  return (
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route path='/' element={<Landing />}></Route>
				<Route path='/about' element={<About />}></Route>
				<Route path='/contact' element={<Contact />}></Route>
				<Route path='/products' element={<Products />}></Route>
				<Route path='/product/:productId' element={<Product />}></Route>
			</Routes>
		</BrowserRouter>
  );
}

export default App;


/*
	<></>: Fragments

	/: Root route
	SPA: Single Page Application
*/
