export default function Footer() {
  return (
    <footer className="py-8 mt-auto bg-gray-200 select-none">
      <div className="max-w-2xl px-8 mx-auto">
        <div className="flex">
          <div>
            <a
              className="block text-indigo-600 hover:underline"
              href="mailto:hello@joshuapullen.com"
            >
              hello@joshuapullen.com
            </a>
            <div>© {new Date().getFullYear()} Josh Pullen</div>
          </div>
          <div className="flex flex-col ml-auto sm:flex-row">
            <a
              className="flex items-center ml-4 text-gray-700 hover:text-indigo-700"
              href="https://github.com/PullJosh/"
              target="_blank"
              rel="noreferrer"
            >
              <svg className="w-5 h-5 mr-2" viewBox="0 0 7.408 7.408">
                <path
                  d="M3.704.09a3.704 3.704 0 00-1.17 7.22c.185.033.252-.081.252-.18l-.005-.63c-1.03.224-1.248-.496-1.248-.496-.168-.428-.411-.542-.411-.542-.336-.23.025-.225.025-.225.372.026.568.382.568.382.33.566.867.402 1.078.308.033-.24.129-.403.235-.496-.823-.093-1.687-.411-1.687-1.83 0-.405.144-.735.381-.994-.038-.094-.165-.47.036-.98 0 0 .311-.1 1.019.379a3.547 3.547 0 011.854 0c.708-.48 1.018-.38 1.018-.38.202.51.075.887.037.98.237.26.38.59.38.995 0 1.423-.865 1.736-1.69 1.827.132.115.25.34.25.686 0 .495-.004.895-.004 1.016 0 .1.067.215.255.179A3.706 3.706 0 003.704.09"
                  fill="currentColor"
                />
              </svg>
              <span>Github</span>
            </a>
            <a
              className="flex items-center ml-4 text-gray-700 hover:text-indigo-700"
              href="https://twitter.com/PullJosh/"
              target="_blank"
              rel="noreferrer"
            >
              <svg className="w-5 h-5 mr-2" viewBox="0 0 28 28">
                <path
                  d="M8.805 25.376c10.566 0 16.345-8.754 16.345-16.345 0-.249 0-.496-.016-.743A11.688 11.688 0 0028 5.315a11.467 11.467 0 01-3.3.904 5.765 5.765 0 002.526-3.178 11.512 11.512 0 01-3.648 1.395 5.75 5.75 0 00-9.79 5.24 16.309 16.309 0 01-11.84-6.003 5.749 5.749 0 001.779 7.669 5.702 5.702 0 01-2.608-.72v.073a5.747 5.747 0 004.61 5.632 5.736 5.736 0 01-2.595.098 5.751 5.751 0 005.367 3.99 11.527 11.527 0 01-7.134 2.464 11.694 11.694 0 01-1.368-.083 16.264 16.264 0 008.806 2.576"
                  fill="currentColor"
                />
              </svg>
              <span>Twitter</span>
            </a>
            <a
              className="flex items-center ml-4 text-gray-700 hover:text-indigo-700"
              href="https://www.youtube.com/c/PullJosh/"
              target="_blank"
              rel="noreferrer"
            >
              <svg className="w-5 h-5 mr-2" viewBox="0 0 28 28">
                <path
                  d="M11.2 18.2V9.8l7.274 4.2zM27.414 7.26a3.507 3.507 0 00-2.476-2.474C22.755 4.2 14 4.2 14 4.2s-8.755 0-10.939.586A3.507 3.507 0 00.585 7.26C0 9.444 0 14 0 14s0 4.555.585 6.739a3.507 3.507 0 002.475 2.475C5.244 23.8 14 23.8 14 23.8s8.755 0 10.938-.585a3.507 3.507 0 002.476-2.475c.585-2.184.585-6.74.585-6.74s0-4.556-.585-6.74"
                  fill="currentColor"
                />
              </svg>
              <span>YouTube</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
