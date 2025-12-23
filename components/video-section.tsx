export function VideoSection() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="relative aspect-video rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-white/10 overflow-hidden backdrop-blur-sm">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <p className="text-gray-400">Product Demo Coming Soon</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
