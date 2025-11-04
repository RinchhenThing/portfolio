import React from "react";
import Typewriter from "typewriter-effect";

const Type = () => {
    return (
        <Typewriter
          options={{
            strings: [
              "Networking and Cybersecurity Enthusiast",
              "Passionate IoT Developer",
              "DevOps Learner | GitHub Actions Explorer"
            ],
            autoStart: true,
            loop: true,
            deleteSpeed: 50,
          }}
        />
      )
}

export default Type