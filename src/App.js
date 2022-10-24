import './App.css'
import Signin from './components/Signin';
import Signup from './components/Signup';
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Home from './components/Home';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/signin' element={<Signin />} />
				<Route path='/signup' element={<Signup />} />
			</Routes>
		</BrowserRouter>
	)
}

export default App;
