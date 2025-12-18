import React, { useState } from 'react';

export default function ModernRegister() {
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [agreed, setAgreed] = useState(true);
  const [showVideo, setShowVideo] = useState(false);

  const isFormValid = mobile.length === 10 && email.includes('@') && agreed;

  const features = [
    { icon: '💎', title: 'Premium', subtitle: 'No Hidden Charges', color: 'from-blue-500 to-blue-600' },
    { icon: '⚡', title: 'Lightning Fast', subtitle: 'Instant Execution', color: 'from-purple-500 to-purple-600' },
    { icon: '🛡️', title: 'Secure', subtitle: 'Bank-Grade Security', color: 'from-emerald-500 to-emerald-600' },
    { icon: '📊', title: 'Analytics', subtitle: 'Real-Time Insights', color: 'from-orange-500 to-orange-600' }
  ];

  return (
    <div className="min-h-screen flex flex-col lg:flex-row font-sans bg-gradient-to-br from-indigo-950 via-purple-900 to-indigo-900">
      {/* Left Side - Desktop Only */}
      <div className="hidden lg:flex w-1/2 flex-col justify-center items-center p-12 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>

        <div className="relative z-10 w-full max-w-2xl">
          {/* Logo */}
          <div className="mb-12 text-center">
            <div className="text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-3">
              TradePro
            </div>
            <p className="text-blue-200 text-lg">Your Gateway to Smart Trading</p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-2 gap-6 mb-12">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:shadow-2xl group">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-blue-200 text-sm">{feature.subtitle}</p>
              </div>
            ))}
          </div>

          {/* Trust Indicators */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <div className="flex items-center justify-around text-center">
              <div>
                <div className="text-3xl font-bold text-white mb-1">50K+</div>
                <div className="text-blue-200 text-sm">Active Users</div>
              </div>
              <div className="w-px h-12 bg-white/20"></div>
              <div>
                <div className="text-3xl font-bold text-white mb-1">$2B+</div>
                <div className="text-blue-200 text-sm">Trading Volume</div>
              </div>
              <div className="w-px h-12 bg-white/20"></div>
              <div>
                <div className="text-3xl font-bold text-white mb-1">4.9★</div>
                <div className="text-blue-200 text-sm">User Rating</div>
              </div>
            </div>
          </div>

          {/* Video Preview */}
          <div className="mt-12 relative rounded-2xl overflow-hidden">
            <div className="aspect-video bg-gradient-to-br from-purple-900 to-indigo-900 flex items-center justify-center cursor-pointer group" onClick={() => setShowVideo(true)}>
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-10 h-10 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
                <p className="text-white text-lg font-semibold">Watch Platform Demo</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Top Section */}
      <div className="lg:hidden w-full p-6 pb-0">
        <div className="text-center mb-8">
          <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
            TradePro
          </div>
          <p className="text-blue-200 text-sm">Your Gateway to Smart Trading</p>
        </div>

        {/* Mobile Features Grid */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-4 border border-white/20">
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${feature.color} flex items-center justify-center text-2xl mb-3`}>
                {feature.icon}
              </div>
              <h3 className="text-sm font-bold text-white mb-1">{feature.title}</h3>
              <p className="text-blue-200 text-xs">{feature.subtitle}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center min-h-screen bg-white px-6 py-12 lg:rounded-l-3xl">
        <div className="w-full max-w-md">
          {/* Header */}
          <div className="mb-10 text-center lg:text-left">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Get Started
            </h1>
            <p className="text-gray-600 text-base">
              Create your account and start trading in minutes
            </p>
          </div>

          {/* Form Fields */}
          <div className="space-y-5 mb-6">
            {/* Mobile Number */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Mobile Number
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 font-medium">
                  +91
                </span>
                <input
                  type="tel"
                  maxLength={10}
                  placeholder="10-digit mobile number"
                  className="w-full border-2 rounded-xl pl-14 pr-4 py-4 text-base outline-none transition-all border-gray-200 focus:border-purple-500 focus:ring-4 focus:ring-purple-100"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value.replace(/\D/g, ''))}
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full border-2 rounded-xl px-4 py-4 text-base outline-none transition-all border-gray-200 focus:border-purple-500 focus:ring-4 focus:ring-purple-100"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          {/* Terms Checkbox */}
          <div className="flex items-start gap-3 mb-6 p-4 bg-gray-50 rounded-xl">
            <input
              type="checkbox"
              className="mt-1 w-5 h-5 accent-purple-600 cursor-pointer rounded"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
            />
            <label className="text-sm text-gray-600 cursor-pointer leading-relaxed">
              I agree to the{' '}
              <a href="#" className="text-purple-600 font-semibold hover:underline">
                Terms of Service
              </a>{' '}
              and{' '}
              <a href="#" className="text-purple-600 font-semibold hover:underline">
                Privacy Policy
              </a>
            </label>
          </div>

          {/* Submit Button */}
          <button
            className={`w-full text-white font-bold py-4 rounded-xl transition-all text-base shadow-lg mb-6 ${
              isFormValid 
                ? 'bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 hover:shadow-xl transform hover:scale-[1.02]' 
                : 'bg-gray-300 cursor-not-allowed'
            }`}
            disabled={!isFormValid}
          >
            Create Account →
          </button>

          {/* Login Link */}
          <p className="text-gray-600 text-center text-sm mb-8">
            Already have an account?{' '}
            <a href="#" className="text-purple-600 font-semibold hover:underline">
              Sign In
            </a>
          </p>

          {/* Trust Badges */}
          <div className="flex items-center justify-center gap-8 text-gray-500 text-xs border-t pt-6">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
              </svg>
              <span className="font-medium whitespace-nowrap">Instant Verification</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd"/>
              </svg>
              <span className="font-medium whitespace-nowrap">Secure & Private</span>
            </div>
          </div>

          {/* Mobile Video */}
          <div className="lg:hidden mt-10">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <div className="aspect-video bg-gradient-to-br from-purple-900 to-indigo-900 flex items-center justify-center cursor-pointer">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                  <p className="text-white text-sm font-semibold">Watch Demo</p>
                </div>
              </div>
            </div>

            {/* Mobile Stats */}
            <div className="grid grid-cols-3 gap-4 mt-6 text-center">
              <div className="bg-gray-50 rounded-xl p-3">
                <div className="text-xl font-bold text-gray-900">50K+</div>
                <div className="text-xs text-gray-600">Users</div>
              </div>
              <div className="bg-gray-50 rounded-xl p-3">
                <div className="text-xl font-bold text-gray-900">$2B+</div>
                <div className="text-xs text-gray-600">Volume</div>
              </div>
              <div className="bg-gray-50 rounded-xl p-3">
                <div className="text-xl font-bold text-gray-900">4.9★</div>
                <div className="text-xs text-gray-600">Rating</div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="text-center text-gray-400 text-xs mt-8">
            <a href="#" className="hover:text-gray-600 transition-colors">Terms</a>
            {' • '}
            <a href="#" className="hover:text-gray-600 transition-colors">Privacy</a>
            {' • '}
            <a href="#" className="hover:text-gray-600 transition-colors">Help</a>
          </div>
        </div>
      </div>
    </div>
  );
}