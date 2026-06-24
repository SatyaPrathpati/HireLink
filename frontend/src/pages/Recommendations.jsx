import React, {
    useEffect,
    useState
} from "react";

import axios from "axios";

function Recommendations() {

    const [jobs, setJobs] =
        useState([]);

    useEffect(() => {

        const skills =
            localStorage
                .getItem("skills")
                ?.split(",")[0]
                ?.trim();

        console.log("Skills:", skills);

        axios
            .get(
                `http://localhost:8081/api/recommendations/${skills}`
            )
            .then((res) => {

                console.log(
                    "Recommended Jobs:",
                    res.data
                );

                setJobs(res.data);

            })
            .catch((err) =>
                console.log(err)
            );

    }, []);

    return (

        <div className="container mt-4">

            <h2>
                Recommended Jobs
            </h2>

            {jobs.map((job) => (

                <div
                    key={job.id}
                    className="card p-3 mb-3"
                >

                    <h4>{job.title}</h4>

                    <p>
                        {job.company}
                    </p>

                    <p>
                        Skills:
                        {job.skills}
                    </p>

                </div>

            ))}

        </div>
    );
}

export default Recommendations;