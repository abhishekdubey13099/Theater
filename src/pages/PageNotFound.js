import { useEffect } from "react";
import { Link } from "react-router-dom";
import PageNotFoundImage from "../assets/images/pngwing.com.png";
import { Button } from "../components/Button";

export const PageNotFound = () => {

    useEffect(() => {
        document.title = `Page Not Found / Theater`;
    });



    return (
        <main>
            <section className="flex flex-col justify-center px-2">
                <div className="flex flex-col items-center my-4">
                    <p className="text-7xl text-gray-700 fint-bold my-10 dark:text-white">404 OOPS!</p>
                    <div className="max-w-lg">
                        <img className="rounded" src={PageNotFoundImage} alt="404 image" />
                    </div>
                </div>

                <div className="flex justify-center my-4">
                    <Link to="/">
                        <Button>Back To Theater</Button>
                    </Link>
                </div>
            </section>
        </main>
    )
}
