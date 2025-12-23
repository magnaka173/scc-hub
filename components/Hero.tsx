export default function Hero() {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-32 bg-gradient-to-br from-primary-50 via-white to-primary-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-6 animate-slide-up">
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Trusted by 10,000+ businesses worldwide
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 mb-6 leading-tight animate-slide-up">
            The CRM Built for
            <span className="block mt-2 bg-gradient-to-r from-primary-600 to-primary-700 bg-clip-text text-transparent">
              Coating Contractors
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed animate-slide-up">
            Streamline your workflow, manage customer relationships, track projects, and grow your business faster with the all-in-one solution designed specifically for the coating industry.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6 animate-slide-up">
            <button className="group bg-primary-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-primary-700 transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1 flex items-center">
              Start Free Trial
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
            <button className="group border-2 border-primary-600 text-primary-600 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-primary-50 transition-all flex items-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Watch Demo
            </button>
          </div>
          <p className="text-sm text-gray-500 animate-slide-up">
            No credit card required • 14-day free trial • Cancel anytime
          </p>
        </div>
        
        {/* Dashboard Preview */}
        <div className="mt-20 relative animate-fade-in">
          <div className="relative max-w-5xl mx-auto">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-primary-600 rounded-2xl blur-2xl opacity-20"></div>
            
            {/* Dashboard mockup */}
            <div className="relative bg-white rounded-2xl shadow-2xl p-1 border border-gray-200">
              {/* Browser bar */}
              <div className="flex items-center gap-2 px-4 py-3 bg-gray-50 rounded-t-xl border-b border-gray-200">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                <div className="flex-1 mx-4 bg-white rounded-md px-4 py-1.5 text-sm text-gray-400">
                  snapcoatcrm.com/dashboard
                </div>
              </div>

              {/* Dashboard content */}
              <div className="bg-gray-50 rounded-b-xl p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-gray-500">Total Projects</span>
                        <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center">
                          <svg className="w-4 h-4 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                          </svg>
                        </div>
                      </div>
                      <div className="text-2xl font-bold text-gray-900">1,234</div>
                      <div className="text-xs text-green-600 mt-1">+12% from last month</div>
                    </div>
                  ))}
                </div>
                
                {/* Chart area */}
                <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold text-gray-900">Revenue Overview</h3>
                    <div className="flex gap-2">
                      <button className="px-3 py-1 text-xs bg-primary-50 text-primary-600 rounded-md font-medium">Month</button>
                      <button className="px-3 py-1 text-xs text-gray-500 rounded-md hover:bg-gray-50">Year</button>
                    </div>
                  </div>
                  <div className="h-48 bg-gradient-to-t from-primary-50 to-white rounded-lg flex items-end justify-around p-4 border border-gray-100">
                    {[40, 60, 45, 70, 55, 80, 65].map((height, i) => (
                      <div key={i} className="flex flex-col items-center gap-2">
                        <div 
                          className="w-8 bg-gradient-to-t from-primary-500 to-primary-400 rounded-t-md shadow-sm hover:from-primary-600 hover:to-primary-500 transition-all cursor-pointer"
                          style={{ height: `${height}%` }}
                        ></div>
                        <span className="text-xs text-gray-500">{['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'][i]}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

