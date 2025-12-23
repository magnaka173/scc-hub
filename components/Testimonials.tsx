export default function Testimonials() {
  const testimonials = [
    {
      name: 'Mike Thompson',
      role: 'Owner, Premier Coating Solutions',
      content: 'SnapCoat CRM has completely transformed how we manage our projects. The photo documentation feature alone has saved us countless hours, and our customers love seeing the progress updates in real-time.',
      avatar: 'MT',
      rating: 5,
    },
    {
      name: 'Jennifer Martinez',
      role: 'Operations Manager, Elite Coatings Inc.',
      content: 'The scheduling and project management tools are game-changers. We\'ve reduced our project completion time by 25% and our team can easily coordinate from anywhere using the mobile app.',
      avatar: 'JM',
      rating: 5,
    },
    {
      name: 'David Chen',
      role: 'Founder, Coastal Coating Contractors',
      content: 'As a growing contractor, I needed a CRM that could scale with my business. SnapCoat CRM has everything - from estimates to invoicing to customer management. It\'s like having an office manager that works 24/7.',
      avatar: 'DC',
      rating: 5,
    },
    {
      name: 'Sarah Williams',
      role: 'CEO, Advanced Surface Coatings',
      content: 'The reporting features give us insights we never had before. We can now track which types of projects are most profitable and make data-driven decisions. The ROI was immediate.',
      avatar: 'SW',
      rating: 5,
    },
    {
      name: 'Robert Johnson',
      role: 'Project Manager, Industrial Coatings Group',
      content: 'Our team loves how intuitive SnapCoat CRM is. Training new employees is a breeze, and the customer portal keeps everyone informed. It\'s become an essential part of our daily operations.',
      avatar: 'RJ',
      rating: 5,
    },
    {
      name: 'Amanda Taylor',
      role: 'Owner, Residential Coating Specialists',
      content: 'The estimate and invoicing features are incredibly fast and professional. We can create detailed estimates on-site and send them instantly. Our customers appreciate the efficiency, and we\'ve seen a 30% increase in closed deals.',
      avatar: 'AT',
      rating: 5,
    },
  ]

  return (
    <section id="testimonials" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
            Trusted by Coating Contractors Nationwide
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            See what contractors like you are saying about SnapCoat CRM
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 border-2 border-gray-100 hover:border-primary-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex items-center mb-6">
                <div className="relative">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                    {testimonial.avatar}
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-primary-600 rounded-full border-4 border-white flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <div className="ml-4 flex-1">
                  <h4 className="font-bold text-gray-900 text-lg">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              
              <p className="text-gray-700 leading-relaxed relative">
                <span className="absolute -left-2 -top-2 text-6xl text-primary-100 font-serif leading-none">"</span>
                <span className="relative z-10">{testimonial.content}</span>
                <span className="absolute -right-2 -bottom-2 text-6xl text-primary-100 font-serif leading-none">"</span>
              </p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-extrabold text-primary-600 mb-2">10,000+</div>
            <div className="text-gray-600 font-medium">Active Users</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-extrabold text-primary-600 mb-2">50,000+</div>
            <div className="text-gray-600 font-medium">Projects Managed</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-extrabold text-primary-600 mb-2">4.9/5</div>
            <div className="text-gray-600 font-medium">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-extrabold text-primary-600 mb-2">98%</div>
            <div className="text-gray-600 font-medium">Satisfaction Rate</div>
          </div>
        </div>
      </div>
    </section>
  )
}

