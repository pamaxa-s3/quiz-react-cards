import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MainLayout } from './components/MainLayout/';
import './App.css';

export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<MainLayout />}>
					<Route path='/' element={<div>Home</div>} />
					<Route path='/about' element={<div>about</div>} />
					<Route path='/addquestion' element={<h1>Add question</h1>} />
					<Route path='/forbiden' element={<h1>Forbiden</h1>} />
					<Route path='/*' element={<h1>404</h1>} />
				</Route>
			</Routes>
			<MainLayout />
		</BrowserRouter>
	);
}
