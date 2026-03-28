function Footer() {

  return (
    <footer className="bg-gray-900 text-gray-300 mt-16">

      <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8">

        <div>

          <h2 className="text-xl font-bold text-white mb-3">
            ShopHub
          </h2>

          <p className="text-sm">
            Modern ecommerce platform built with React and Tailwind.
          </p>

        </div>

        <div>

          <h3 className="font-semibold text-white mb-3">
            Links
          </h3>

          <ul className="space-y-2 text-sm">

            <li>Home</li>
            <li>Products</li>
            <li>Contact</li>

          </ul>

        </div>

        <div>

          <h3 className="font-semibold text-white mb-3">
            Newsletter
          </h3>

          <input
            placeholder="Your email"
            className="w-full px-3 py-2 rounded-lg text-black mb-3"
          />

          <button className="bg-blue-600 px-4 py-2 rounded-lg text-white hover:bg-blue-700">
            Subscribe
          </button>

        </div>

      </div>

      <div className="text-center text-sm py-4 border-t border-gray-700">
        © 2026 ShopHub. All rights reserved.
      </div>

    </footer>
  );
}

export default Footer;