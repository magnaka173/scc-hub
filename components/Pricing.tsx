export default function Pricing() {
  const plans = [
    {
      name: 'Starter',
      price: '$49',
      period: '/month',
      description: 'Perfect for solo contractors and small teams',
      features: [
        'Up to 3 users',
        'Unlimited projects',
        'Unlimited customers',
        'Photo documentation',
        'Mobile app access',
        'Email support',
        'Basic reports',
      ],
      popular: false,
    },
    {
      name: 'Professional',
      price: '$149',
      period: '/month',
      description: 'For growing teams and established businesses',
      features: [
        'Up to 10 users',
        'Unlimited projects',
        'Unlimited customers',
        'Photo documentation',
        'Mobile app access',
        'Priority email support',
        'Advanced reporting & analytics',
        'Custom fields & workflows',
        'Team scheduling',
        'Email integration',
      ],
      popular: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'For large organizations with specific needs',
      features: [
        'Unlimited users',
        'Unlimited projects',
        'Unlimited customers',
        'Advanced photo management',
        'Mobile app access',
        '24/7 phone & email support',
        'Custom reporting & dashboards',
        'API access & webhooks',
        'Custom integrations',
        'Dedicated account manager',
        'SLA guarantee',
        'On-premise deployment options',
      ],
      popular: false,
    },
  ]

  return (
    <section id="pricing" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Choose the perfect plan for your business. All plans include a 14-day free trial with no credit card required.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl p-8 shadow-lg border-2 transition-all duration-300 transform hover:scale-105 ${
                plan.popular
                  ? 'border-primary-500 shadow-2xl ring-4 ring-primary-100'
                  : 'border-gray-200 hover:border-primary-200 hover:shadow-xl'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-primary-600 to-primary-700 text-white text-sm font-bold px-4 py-2 rounded-full shadow-lg">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                <div className="mb-2">
                  {plan.price === 'Custom' ? (
                    <span className="text-4xl font-extrabold text-gray-900">Custom</span>
                  ) : (
                    <>
                      <span className="text-5xl font-extrabold text-gray-900">{plan.price}</span>
                      <span className="text-gray-600 ml-2 text-lg">{plan.period}</span>
                    </>
                  )}
                </div>
                {plan.price !== 'Custom' && (
                  <p className="text-sm text-gray-500">per user, billed monthly</p>
                )}
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <div className="flex-shrink-0 mt-0.5">
                      <svg
                        className="w-5 h-5 text-primary-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span className="ml-3 text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-4 px-6 rounded-xl font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-primary-600 text-white hover:bg-primary-700 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5'
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200 border-2 border-gray-200 hover:border-primary-300'
                }`}
              >
                {plan.price === 'Custom' ? 'Contact Sales' : 'Start Free Trial'}
              </button>
            </div>
          ))}
        </div>

        {/* FAQ or Additional Info */}
        <div className="mt-20 text-center">
          <p className="text-gray-600 mb-4">
            All plans include a 14-day free trial • No credit card required • Cancel anytime
          </p>
          <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-500">
            <div className="flex items-center">
              <svg className="w-5 h-5 text-primary-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Cancel anytime
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 text-primary-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              14-day money-back guarantee
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 text-primary-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              No setup fees
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

