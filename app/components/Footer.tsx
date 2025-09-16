export default function Footer() {
  return (
    <footer className="mt-12 border-t border-gray-200 bg-gradient-to-t from-gray-100 to-transparent">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
        <p className="text-sm text-gray-500">© {new Date().getFullYear()} Chronix — Built with care.</p>
      </div>
    </footer>
  )
}
