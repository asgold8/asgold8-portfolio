const Projects = () => {
  return (
    <div className="prose">
      <h2 className="text-2xl font-bold mb-4">List of Projects:</h2>
      <div>
        <h3 className="text-xl font-semibold mt-4 mb-2">Published websites:</h3>
        <ul className="list-disc list-inside mb-4">
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://phase-score-keeper.vercel.app"
              className="text-blue-600 hover:underline"
            >
              Phase Score Keeper (Phase 10 Card Game Companion App)
            </a>
          </li>
        </ul>
        <h3 className="text-xl font-semibold mt-4 mb-2">Repositories:</h3>
        <ul className="list-disc list-inside">
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://codesandbox.io/u/asgold8"
              className="text-blue-600 hover:underline"
            >
              CodeSandbox
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/asgold8/"
              className="text-blue-600 hover:underline"
            >
              Github
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://gitlab.com/asgold8/"
              className="text-blue-600 hover:underline"
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
