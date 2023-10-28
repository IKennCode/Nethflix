const Input = () => {
    return (
        <div>
            <input
            id="email"
            className="block rounded-md px-6 pt-6 pb-1 w-full text-md text-black bg-neutral-700 appearance-none focus:outline-none focus:ring-0 peer" placeholder=" email"
            />

            <label htmlFor="email" className="absolute text-md text-black duration-150 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-6 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-x-3">

            </label>
        </div>
    );
}

export default Input;   