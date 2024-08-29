import { useEffect, useState } from "react"

export default function Github() {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://api.github.com/users/rektyrowdyy')
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setData(data);
            })
    }, [])

    return (
        <>
            <div className="flex justify-center items-center">
                <h1 className="">Github Followers: {data.followers} </h1>
                <img className="flex-2" src={data.avatar_url} />
            </div>

        </>
    )
}