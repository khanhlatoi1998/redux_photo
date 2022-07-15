import { Route, Routes, useRouteMatch } from 'react-router-dom';
import NotFound from '../../components/NotFound';
import HomePage from './pages/HomePage';


const Photo = () => {
    return (
       <Routes>
            <Route exact element={<HomePage />}/>
            <Route element={<NotFound />}/>
       </Routes>
    );
};

export default Photo;