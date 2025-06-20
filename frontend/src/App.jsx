import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import './index.css'; // or App.css — wherever you added the Tailwind directives
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import SignUp from "./pages/signup/SignUp";
import { Toaster } from "react-hot-toast";
import { useAuthContext } from "./context/AuthContext";

function App() {
	const { authUser } = useAuthContext();
	return (
		<div className='p-4 h-screen flex items-center justify-center'>
			<Routes>
				<Route path='/' element={authUser ? <Home /> : <Navigate to={"/login"} />} />
				<Route path='/login' element={authUser ? <Navigate to='/' /> : <Login />} />
				<Route path='/signup' element={authUser ? <Navigate to='/' /> : <SignUp />} />
			</Routes>
			<Toaster />
		</div>
	);
}

export default App;

// starter code 
// import {  Route, Routes } from "react-router-dom";
// import "./App.css";
//  import Home from "./pages/home/Home";
// import Login from "./pages/login/Login";
//  import SignUp from "./pages/signup/SignUp";


// function App() {
  

//   return (
//     <div className='p-4 h-screen flex items-center justify-center'>
//       <Routes>
// 				<Route path='/' element={ <Home /> } />
// 				<Route path='/login' element={ <Login />} />
// 				<Route path='/signup' element={ <SignUp />} />
// 			</Routes>
//     </div>
//   )
// }

// export default App
