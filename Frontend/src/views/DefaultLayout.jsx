import { Outlet } from 'react-router-dom';
import Header from '../components/Header';


export const DefaultLayout = () => {

    return (
        <>
            <div className='bg-[#0D0D0D] h-[750px] p-6 xl:max-w-[1200px] mx-auto mt-10'>
                <Header />
                <Outlet />
            </div>

        </>

    )
}