import React from "react";

const Footer = () => {
  return (
    <footer className="footer items-center p-4 bg-neutral text-neutral-content">
      <div className="items-center grid-flow-col">
        <p>Copyright © 2022 - All right reserved</p>
      </div>
      <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        <p className="font-bold">Follow me</p>
        <a
          href="https://www.youtube.com/channel/UC38d_lakI-onU3YDX14BoQQ"
          target="_blank"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="fill-current"
          >
            <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
          </svg>
        </a>
        <a
          href="https://www.facebook.com/sakirhossainfaruque104"
          target="_blank"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="fill-current"
          >
            <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
          </svg>
        </a>
        <a href="https://github.com/sakir101" target="_blank">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 0a12 12 0 0 0-3.819 23.39c.608.113.831-.264.831-.586 0-.29-.01-1.053-.015-2.067-3.389.735-4.104-1.297-4.104-1.297a3.243 3.243 0 0 0-1.359-1.788c-1.112-.758.084-.744.084-.744a2.572 2.572 0 0 1 1.864 1.256 2.592 2.592 0 0 0 3.548 1.015 2.604 2.604 0 0 1 .78-1.634c-2.725-.309-5.588-1.363-5.588-6.079a4.763 4.763 0 0 1 1.271-3.303 4.423 4.423 0 0 1 .12-3.262s1.04-.332 3.4 1.26a11.72 11.72 0 0 1 6.194 0c2.36-1.592 3.4-1.26 3.4-1.26a4.42 4.42 0 0 1 .12 3.262 4.753 4.753 0 0 1 1.27 3.303c0 4.727-2.867 5.767-5.598 6.073a2.962 2.962 0 0 1 .828 2.314c0 1.672-.015 3.018-.015 3.429 0 .322.218.702.838.583A12 12 0 0 0 12 0z" />
          </svg>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
