import React from "react";

const Projects = () => {
  return (
    <div className="ui text">
      <h2>List of Projects:</h2>
      <div>
        <h3>Published websites:</h3>
        <ul>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://phase-score-keeper.vercel.app"
            >
              Phase Score Keeper (Phase 10 Card Game Companion App)
            </a>
          </li>
        </ul>
        <h3>Repositories:</h3>
        <ul>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://codesandbox.io/u/asgold8"
            >
              CodeSandbox
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/asgold8/"
            >
              Github
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://gitlab.com/asgold8/"
            >
              Gitlab
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Projects;
