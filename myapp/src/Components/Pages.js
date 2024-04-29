
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import SignUp from './Signup';
import Login from './Login';

function page(){

return(
<BrowserRouter>
    <Routes>
    <Route path='/login' element={<SignUp/>}/>
      
      <Route path='/signup' element={<Login/>}/>
    </Routes>

    </BrowserRouter>
);
}
export default page;
