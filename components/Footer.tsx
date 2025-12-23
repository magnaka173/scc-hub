import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-400 to-purple-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <div className="w-6 h-6 relative">
                <div className="absolute inset-0 bg-white rounded-sm transform rotate-45" />
              </div>
            </div>
            <div>
              <div className="text-white font-bold">SnapCoat CRM</div>
              <div className="text-cyan-400 text-xs">For Painting Contractors</div>
            </div>
          </Link>

          <div className="flex items-center gap-6 text-sm text-gray-400">
            <Link href="#" className="hover:text-cyan-400 transition-all duration-300 hover:scale-110">
              Features
            </Link>
            <Link href="#" className="hover:text-cyan-400 transition-all duration-300 hover:scale-110">
              Privacy
            </Link>
            <Link href="#" className="hover:text-cyan-400 transition-all duration-300 hover:scale-110">
              Beta Feedback
            </Link>
          </div>
        </div>

        <div className="text-center text-gray-500 text-sm mt-6">© 2025 SnapCoat CRM. All rights reserved.</div>
      </div>
    </footer>
  )
}
