import NavBar from './NavBar';

const Header = () => {

    return (
        <>
            <div className='h-20 flex justify-start items-center'>
                <h1 className='font-bold lg:text-5xl md:text-4xl sm:text-2xl text-2xl text-white'>List-It</h1>
            </div>
            <NavBar />
        </>

    )
}
export default Header;