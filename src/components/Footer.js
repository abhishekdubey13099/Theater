import { Link } from "react-router-dom";

export const Footer = () => {
    return (


        <footer className="bg-white shadow dark:bg-gray-800">
            <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <Link to="/" className="hover:underline">Theater</Link>. All Rights Reserved.</span>
                <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                    <li>
                        <a href="https://www.instagram.com/abhishekdubey3228/" target="_blank" rel="noreferrer" className="mr-4 hover:underline md:mr-6 ">Instagram</a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/abhishek-dubey-a04173224/" target="_blank" rel="noreferrer" className="mr-4 hover:underline md:mr-6">LinkedIn</a>
                    </li>
                    <li>
                        <a href="https://github.com/Dubey0203" target="_blank" rel="noreferrer" className="mr-4 hover:underline md:mr-6">Github</a>
                    </li>
                    <li>
                        <a href="https://www.facebook.com/profile.php?id=100010698784438" target="_blank" rel="noreferrer" className="hover:underline">Facebook</a>
                    </li>
                </ul>
            </div>
        </footer>


    )
}
