import React from 'react';
import { Calendar, Sparkles, Users, Palette, Wifi, Bell, Gift, Heart, Zap, Download, CheckCircle } from 'lucide-react';

const App = () => {
  const features = [
    {
      icon: <Bell className="w-6 h-6" />,
      title: "Birthday Reminders",
      description: "Never forget an important birthday again. Set up customizable reminders for all your friends, family, and colleagues. Get notifications days or hours before the special day, so you always have time to prepare the perfect celebration."
    },
    {
      icon: <Gift className="w-6 h-6" />,
      title: "AI Gift Suggestions",
      description: "Struggling to find the perfect gift? Our AI assistant analyzes the person's interests, age, and your relationship to suggest thoughtful, personalized gift ideas. Simply describe what you know about them, and let our AI do the rest."
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "AI Wish Generator",
      description: "Craft heartfelt birthday wishes with AI assistance. Whether you want something funny, sentimental, or professional, our AI helps you create the perfect message that truly resonates with the birthday person."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Contact Integration",
      description: "Seamlessly import birthdays from your phone's contact list. The app automatically syncs with your contacts and allows you to link multiple contacts to a single birthday reminder, making management effortless."
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Calendar View",
      description: "Visualize all upcoming birthdays in an intuitive calendar interface. Switch between monthly and yearly views to plan ahead. See at a glance who has birthdays coming up and organize your celebrations efficiently."
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: "15+ Themes",
      description: "Personalize your experience with over 15 carefully crafted themes. From dark mode to vibrant colors, choose a theme that matches your style and makes using the app a delight every day."
    }
  ];

  const benefits = [
    "Never miss important birthdays",
    "Strengthen relationships",
    "Save time with AI assistance",
    "Works completely offline",
    "Privacy-focused design",
    "No ads or subscriptions"
  ];

  return (
    <div className="min-h-screen bg-[#151718] text-[#ECEDEE]">
      {/* Header */}
      <header className="fixed top-0 w-full bg-[#1F1F1F]/95 backdrop-blur-md border-b border-[#2A2A2A] z-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-[#47A3F3] rounded-lg flex items-center justify-center">
              <img src="/icon.png" alt="happybirday icon" className="w-10 h-10 rounded-lg" />
            </div>
            <span className="text-2xl font-bold text-white">happybirday</span>
          </div>
          <button className="px-6 py-2.5 bg-[#47A3F3] text-white rounded-lg font-medium hover:bg-[#3B8FD9] transition-colors duration-200 flex items-center space-x-2">
            <Download className="w-4 h-4" />
            <span>Download</span>
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-[#1F1F1F] border border-[#2A2A2A] rounded-full px-4 py-2 mb-6">
              <Zap className="w-4 h-4 text-[#47A3F3]" />
              <span className="text-sm text-[#9BA1A6]">AI-Powered Birthday Assistant</span>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 text-white leading-tight">
              Never Miss a<br />Birthday Again
            </h1>
            <p className="text-xl text-[#9BA1A6] mb-8 max-w-3xl mx-auto leading-relaxed">
              HappyBirday is your intelligent birthday reminder app that combines smart notifications 
              with AI-powered gift and wish suggestions. Keep your relationships meaningful and never 
              forget to celebrate the people who matter most.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <button className="px-8 py-4 bg-[#47A3F3] text-white rounded-lg font-semibold text-lg hover:bg-[#3B8FD9] transition-all duration-200 flex items-center space-x-2 shadow-lg">
                <Download className="w-5 h-5" />
                <span>Download for Free</span>
              </button>
            </div>
            <p className="text-sm text-[#9BA1A6]">Available for iOS and Android • No subscription required</p>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 px-6 lg:px-8 bg-[#1F1F1F]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-6 text-white">
            Why Choose HappyBirday?
          </h2>
          <p className="text-center text-[#9BA1A6] mb-12 max-w-3xl mx-auto text-lg">
            In our busy lives, it's easy to forget important dates. HappyBirday ensures you never miss 
            a birthday while helping you give meaningful gifts and heartfelt wishes with the power of AI.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3 bg-[#151718] p-4 rounded-lg border border-[#2A2A2A]">
                <CheckCircle className="w-5 h-5 text-[#4CAF50] flex-shrink-0" />
                <span className="text-[#ECEDEE]">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-white">
            Powerful Features
          </h2>
          <p className="text-center text-[#9BA1A6] mb-16 max-w-2xl mx-auto text-lg">
            Everything you need to manage birthdays, create meaningful connections, and celebrate life's special moments.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="p-8 bg-[#1F1F1F] rounded-xl border border-[#2A2A2A] hover:border-[#47A3F3] transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-[#47A3F3]/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#47A3F3]/20 transition-colors duration-300">
                  <div className="text-[#47A3F3]">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">
                  {feature.title}
                </h3>
                <p className="text-[#9BA1A6] leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-6 lg:px-8 bg-[#1F1F1F]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-white">
            How It Works
          </h2>
          <p className="text-center text-[#9BA1A6] mb-16 max-w-2xl mx-auto text-lg">
            Get started in minutes and transform how you celebrate birthdays.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#47A3F3] rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-white">
                1
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Add Birthdays</h3>
              <p className="text-[#9BA1A6] leading-relaxed">
                Create new birthday reminders manually or import them directly from your phone's contacts. Link multiple contacts to keep everything organized.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#47A3F3] rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-white">
                2
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Get Reminders</h3>
              <p className="text-[#9BA1A6] leading-relaxed">
                Receive timely notifications before each birthday. Customize reminder timing to ensure you have enough time to prepare gifts and wishes.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#47A3F3] rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-white">
                3
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Use AI Assistant</h3>
              <p className="text-[#9BA1A6] leading-relaxed">
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
          <h2 className="text-4xl font-bold mb-6 text-white">
            Works Offline, Always Available
          </h2>
          <p className="text-xl text-[#9BA1A6] leading-relaxed mb-8">
            HappyBirday is built with an offline-first approach. All your birthday reminders, contacts, 
            and calendar data are stored locally on your device. Access your information anytime, anywhere, 
            without needing an internet connection. Your data stays private and secure on your device.
          </p>
          <p className="text-lg text-[#9BA1A6]">
            AI features require internet connectivity, but all core functionality works perfectly offline.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 lg:px-8 bg-[#1F1F1F]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-white">
            Ready to Transform Your Birthday Experience?
          </h2>
          <p className="text-xl text-[#9BA1A6] mb-10 leading-relaxed">
            Join thousands of users who never miss a birthday. Download HappyBirday today and start 
            celebrating the people who matter most with thoughtful gifts and heartfelt wishes.
          </p>
          <button className="px-10 py-5 bg-[#47A3F3] text-white rounded-lg font-semibold text-lg hover:bg-[#3B8FD9] transition-all duration-200 shadow-lg flex items-center space-x-2 mx-auto">
            <Download className="w-5 h-5" />
            <span>Download Now - It's Free</span>
          </button>
          <p className="mt-6 text-sm text-[#9BA1A6]">No credit card required • No subscriptions • No ads</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#151718] border-t border-[#2A2A2A] py-12 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center text-center mb-8">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-[#47A3F3] rounded-lg flex items-center justify-center">
                              <img src="/icon.png" alt="happybirday icon" className="w-10 h-10 rounded-lg" />

              </div>
              <span className="text-2xl font-bold text-white">happybirday</span>
            </div>
            <p className="text-[#9BA1A6] mb-2">Your intelligent birthday assistant</p>
            <p className="text-[#9BA1A6] text-sm max-w-2xl">
              Making it easy to celebrate the people you love with AI-powered gift suggestions, 
              heartfelt wishes, and timely reminders.
            </p>
          </div>
          <div className="border-t border-[#2A2A2A] pt-8 text-center">
            <p className="text-[#9BA1A6] text-sm">
              Copyright © {new Date().getFullYear()} HappyBirday. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;