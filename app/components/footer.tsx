export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white mt-8 py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          <div className="mb-2 sm:mb-0">
            <p className="text-sm text-gray-300">123 Street, City, Country</p>
            <p className="text-sm text-gray-300">Phone: (123) 456-7890</p>
            <p className="text-sm text-gray-300">Email: info@example.com</p>
          </div>
          <div className="flex gap-4">
            <a
              href="https://facebook.com"
              className="hover:text-blue-500 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.676 0H1.324C.594 0 0 .594 0 1.324v21.352c0 .73.594 1.324 1.324 1.324h11.488v-9.294H9.294V9.882h3.518V7.676c0-3.478 2.124-5.372 5.23-5.372 1.488 0 2.766.11 3.139.16v3.641h-2.154c-1.689 0-2.016.802-2.016 1.976v2.591h4.032l-.527 4.176h-3.505V24h6.851c.73 0 1.324-.594 1.324-1.324V1.324C24 .594 23.406 0 22.676 0z" />
              </svg>
            </a>
            <a
              href="https://twitter.com"
              className="hover:text-blue-400 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557a9.83 9.83 0 0 1-2.828.775 4.932 4.932 0 0 0 2.162-2.723 9.865 9.865 0 0 1-3.127 1.196 4.916 4.916 0 0 0-8.377 4.483A13.94 13.94 0 0 1 1.64 3.162 4.916 4.916 0 0 0 3.2 9.573 4.9 4.9 0 0 1 .96 8.98v.065a4.915 4.915 0 0 0 3.95 4.827 4.902 4.902 0 0 1-2.224.085 4.917 4.917 0 0 0 4.59 3.417 9.868 9.868 0 0 1-6.1 2.1c-.398 0-.79-.023-1.17-.067A13.945 13.945 0 0 0 7.548 21c9.142 0 14.143-7.584 14.143-14.175 0-.216-.005-.432-.015-.645A10.125 10.125 0 0 0 24 4.557z" />
              </svg>
            </a>
          </div>
        </div>
        <div className="text-center text-sm text-gray-500 mt-4">
          © {new Date().getFullYear()} All note Kamil Kaczmarkiewicz. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
