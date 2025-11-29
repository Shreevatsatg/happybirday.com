import React, { useState, useEffect } from 'react';
import { Calendar, Sparkles, Users, Palette, Wifi, Bell, Gift, Heart, Zap, Download, CheckCircle } from 'lucide-react';

const App = () => {
  const [lastYPos, setLastYPos] = useState(0);
  const [shouldShowHeader, setShouldShowHeader] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const yPos = window.scrollY;
      const isScrollingUp = yPos < lastYPos;

      setShouldShowHeader(isScrollingUp);
      setLastYPos(yPos);
    }

    window.addEventListener('scroll', handleScroll, false);

    return () => {
      window.removeEventListener('scroll', handleScroll, false);
    };
  }, [lastYPos]);

  return (
    <div className="min-h-screen bg-[#F0F2F5] text-[#333333]">
      {/* Header */}
      <header className={`fixed top-0 w-full bg-white/95 backdrop-blur-md border-b border-[#E0E0E0] z-50 transition-transform duration-300 ${shouldShowHeader ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-[#47A3F3] rounded-lg flex items-center justify-center">
              <img src="/icon.png" alt="happybirday icon" className="w-10 h-10 rounded-lg" />
            </div>
            <span className="text-2xl font-bold text-[#333333]">happybirday</span>
          </div>
          <button onClick={() => setModalOpen(true)} className="px-6 py-2.5 bg-[#47A3F3] text-white rounded-lg font-medium hover:bg-[#3B8FD9] transition-colors duration-200 flex items-center space-x-2">
            <Bell className="w-4 h-4" />
            <span>Notify Me</span>
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-white border border-[#E0E0E0] rounded-full px-4 py-2 mb-6">
              <Zap className="w-4 h-4 text-[#47A3F3]" />
              <span className="text-sm text-[#666666]">AI-Powered Birthday Assistant</span>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 text-[#333333] leading-tight">
              Never Miss a<br />Birthday Again
            </h1>
            <p className="text-xl text-[#666666] mb-8 max-w-3xl mx-auto leading-relaxed">
              HappyBirday is your intelligent birthday reminder app that combines smart notifications 
              with AI-powered gift and wish suggestions. Keep your relationships meaningful and never 
              forget to celebrate the people who matter most.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <button onClick={() => setModalOpen(true)} className="px-8 py-4 bg-[#47A3F3] text-white rounded-lg font-semibold text-lg hover:bg-[#3B8FD9] transition-all duration-200 flex items-center space-x-2 shadow-lg">
                <Bell className="w-5 h-5" />
                <span>Notify Me on Launch</span>
              </button>
            </div>
            <p className="text-sm text-[#666666]">Coming soon for iOS and Android!</p>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-[#333333]">
            Why Choose HappyBirday?
          </h2>
          <p className="text-lg text-[#666666] max-w-3xl mx-auto">
            HappyBirday is more than just a reminder app. It's your personal assistant for nurturing relationships. 
            With AI-powered gift and wish suggestions, you'll save time and make every birthday special. 
            It's offline-first, privacy-focused, and completely free.
          </p>
        </div>
      </section>

      {/* Image Showcase Section */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <h3 className="text-3xl font-bold mb-4 text-[#333333]">Calendar View & Reminders</h3>
              <p className="text-[#666666] leading-relaxed mb-6">
                Visualize all upcoming birthdays in a clean, intuitive calendar. Set customizable reminders to ensure you never miss a special day.
              </p>
              <ul className="space-y-2 text-[#666666]">
                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-[#4CAF50] mr-3" />Monthly and yearly calendar views</li>
                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-[#4CAF50] mr-3" />Customizable reminder notifications</li>
                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-[#4CAF50] mr-3" />Easy-to-see upcoming birthday list</li>
              </ul>
            </div>
            <div className="order-1 md:order-2">
              <img src="/calendarmonth.jpg" alt="Calendar View" className="rounded-lg shadow-lg h-150 w-75 mb-8 md:mb-0" />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mt-16">
            <div>
              <img src="/gift.jpg" alt="AI Gift Suggestion" className="rounded-lg shadow-lg h-150 w-75 mb-8 md:mb-0" />
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-4 text-[#333333]">AI Gift Suggestion</h3>
              <p className="text-[#666666] leading-relaxed mb-6">
                Struggling to find the perfect gift? Our AI assistant analyzes the person's interests, age, and your relationship to suggest thoughtful, personalized gift ideas.
              </p>
              <ul className="space-y-2 text-[#666666]">
                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-[#4CAF50] mr-3" />Personalized gift ideas</li>
                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-[#4CAF50] mr-3" />Analyzes interests and relationship</li>
                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-[#4CAF50] mr-3" />Save time and reduce stress</li>
              </ul>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mt-16">
            <div className="order-2 md:order-1">
              <h3 className="text-3xl font-bold mb-4 text-[#333333]">AI Wish Generator</h3>
              <p className="text-[#666666] leading-relaxed mb-6">
                Craft heartfelt birthday wishes with AI assistance. Whether you want something funny, sentimental, or professional, our AI helps you create the perfect message.
              </p>
              <ul className="space-y-2 text-[#666666]">
                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-[#4CAF50] mr-3" />Generate wishes: funny, heartfelt, or professional</li>
                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-[#4CAF50] mr-3" />Craft personalized birthday messages</li>
                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-[#4CAF50] mr-3" />Ensures your message resonates</li>
              </ul>
            </div>
            <div className="order-1 md:order-2">
              <img src="/withwish.jpg" alt="AI Wish Generator" className="rounded-lg shadow-lg h-150 w-75 mb-8 md:mb-0" />
            </div>
          </div>
        </div>
      </section>

      {/* App Themes Section */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-[#333333]">
            Personalize Your Experience
          </h2>
          <p className="text-center text-[#666666] mb-16 max-w-2xl mx-auto text-lg">
            Choose from over 15 themes to match your style. Light, dark, and vibrant options 
            make your birthday tracking a visual delight.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <img src="/dark.jpg" alt="Theme 1" className="rounded-lg shadow-lg w-full h-auto" />
            <img src="/green.jpg" alt="Theme 2" className="rounded-lg shadow-lg w-full h-auto" />
            <img src="/peatch.jpg" alt="Theme 3" className="rounded-lg shadow-lg w-full h-auto" />
            <img src="/sunset.jpg" alt="Theme 4" className="rounded-lg shadow-lg w-full h-auto" />
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-[#333333]">
            How It Works
          </h2>
          <p className="text-center text-[#666666] mb-16 max-w-2xl mx-auto text-lg">
            Get started in minutes and transform how you celebrate birthdays.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#47A3F3] rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-white">
                1
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#333333]">Add Birthdays</h3>
              <p className="text-[#666666] leading-relaxed">
                Create new birthday reminders manually or import them directly from your phone's contacts. Link multiple contacts to keep everything organized.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#47A3F3] rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-white">
                2
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#333333]">Get Reminders</h3>
              <p className="text-[#666666] leading-relaxed">
                Receive timely notifications before each birthday. Customize reminder timing to ensure you have enough time to prepare gifts and wishes.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#47A3F3] rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-white">
                3
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#333333]">Use AI Assistant</h3>
              <p className="text-[#666666] leading-relaxed">
                Describe the person and your relationship, and let our AI suggest perfect gifts and help you craft personalized birthday wishes that feel genuine.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Offline First Section */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <Wifi className="w-16 h-16 text-[#47A3F3] mx-auto mb-6" />
          <h2 className="text-4xl font-bold mb-6 text-[#333333]">
            Works Offline, Always Available
          </h2>
          <p className="text-xl text-[#666666] leading-relaxed mb-8">
            HappyBirday is built with an offline-first approach. All your birthday reminders, contacts, 
            and calendar data are stored locally on your device. Access your information anytime, anywhere, 
            without needing an internet connection. Your data stays private and secure on your device.
          </p>
          <p className="text-lg text-[#666666]">
            AI features require internet connectivity, but all core functionality works perfectly offline.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-[#333333]">
            Ready to Transform Your Birthday Experience?
          </h2>
          <p className="text-xl text-[#666666] mb-10 leading-relaxed">
            Join thousands of users who never miss a birthday. Download HappyBirday today and start 
            celebrating the people who matter most with thoughtful gifts and heartfelt wishes.
          </p>
          <button onClick={() => setModalOpen(true)} className="px-10 py-5 bg-[#47A3F3] text-white rounded-lg font-semibold text-lg hover:bg-[#3B8FD9] transition-all duration-200 shadow-lg flex items-center space-x-2 mx-auto">
            <Bell className="w-5 h-5" />
            <span>Join the Waitlist</span>
          </button>
          <p className="mt-6 text-sm text-[#666666]">Be the first to know when we launch!</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#F0F2F5] border-t border-[#E0E0E0] py-12 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center text-center mb-8">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-[#47A3F3] rounded-lg flex items-center justify-center">
                              <img src="/icon.png" alt="happybirday icon" className="w-10 h-10 rounded-lg" />

              </div>
              <span className="text-2xl font-bold text-[#333333]">happybirday</span>
            </div>
            <p className="text-[#666666] mb-2">Your intelligent birthday assistant</p>
            <p className="text-[#666666] text-sm max-w-2xl">
              Making it easy to celebrate the people you love with AI-powered gift suggestions, 
              heartfelt wishes, and timely reminders.
            </p>
          </div>
          <div className="border-t border-[#E0E0E0] pt-8 text-center">
            <p className="text-[#666666] text-sm">
              Copyright © {new Date().getFullYear()} HappyBirday. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Modal */}
      {modalOpen && (
        <div className="fixed inset-0 bg-transparent bg-opacity-50 backdrop-filter backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md mx-4 relative">
            <button 
              onClick={() => setModalOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>
            <h3 className="text-2xl font-bold mb-4">Join the Waitlist</h3>
            <p className="text-gray-600 mb-6">Be the first to know when HappyBirday launches. Enter your email below to get notified.</p>
            <form>
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full px-4 py-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-[#47A3F3]"
              />
              <button 
                type="submit"
                className="w-full px-4 py-3 bg-[#47A3F3] text-white rounded-lg font-semibold hover:bg-[#3B8FD9] transition-colors duration-200"
              >
                Notify Me
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;