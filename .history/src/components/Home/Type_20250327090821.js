import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
    return ( <
        Typewriter options = {
            {
                strings: [
                    "Software Engineer",
                    "MERN Stack Devloper",
                    "Freelancer",
                    "Problem Solving",
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
            }
        }
        />
    );
}

export default Type;