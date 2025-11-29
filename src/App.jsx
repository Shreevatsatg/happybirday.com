import React, { useState, useEffect } from 'react';
import { Calendar, Sparkles, Users, Palette, Wifi, Bell, Gift, Heart, Zap, Download, CheckCircle, X } from 'lucide-react';

const App = () => {
  const [lastYPos, setLastYPos] = useState(0);
  const [shouldShowHeader, setShouldShowHeader] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [email, setEmail] = useState('');

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

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you! We'll notify you at ${email}`);
    setEmail('');
    setModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 text-slate-900">
      {/* Header */}
      <header className={`fixed top-0 w-full bg-white/80 backdrop-blur-xl border-b border-slate-200/60 z-50 transition-all duration-500 ${shouldShowHeader ? 'translate-y-0 shadow-sm' : '-translate-y-full'}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3 group cursor-pointer">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/30 transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl group-hover:shadow-blue-500/40">
              <img src="/icon.png" alt="happybirday icon" className="w-10 h-10 rounded-xl" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">happybirday</span>
          </div>
          <button onClick={() => setModalOpen(true)} className="px-6 py-2.5 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-xl font-medium hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 flex items-center space-x-2 hover:scale-105 active:scale-95">
            <Bell className="w-4 h-4" />
            <span>Notify Me</span>
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-100/40 to-transparent pointer-events-none"></div>
        <div className="max-w-6xl mx-auto relative">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-white/90 backdrop-blur-sm border border-slate-200 rounded-full px-5 py-2.5 mb-8 shadow-lg shadow-blue-500/10 hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300 hover:scale-105">
              <Zap className="w-4 h-4 text-blue-600 animate-pulse" />
              <span className="text-sm font-medium text-slate-700">AI-Powered Birthday Assistant</span>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent leading-tight">
              Never Miss a<br />Birthday Again
            </h1>
            <p className="text-xl text-slate-600 mb-10 max-w-3xl mx-auto leading-relaxed">
              HappyBirday is your intelligent birthday reminder app that combines smart notifications 
              with AI-powered gift and wish suggestions. Keep your relationships meaningful and never 
              forget to celebrate the people who matter most.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <button onClick={() => setModalOpen(true)} className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-semibold text-lg hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 flex items-center space-x-2 hover:scale-105 active:scale-95 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Bell className="w-5 h-5 relative z-10 group-hover:animate-bounce" />
                <span className="relative z-10">Notify Me on Launch</span>
              </button>
            </div>
            <p className="text-sm text-slate-500 flex items-center justify-center gap-2">
              <span className="inline-block w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              Coming soon for iOS and Android!
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 px-6 lg:px-8 bg-white/60 backdrop-blur-sm relative">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-indigo-50/50 pointer-events-none"></div>
        <div className="max-w-6xl mx-auto text-center relative">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
            Why Choose HappyBirday?
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
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
            <div className="order-2 md:order-1 space-y-6">
              <h3 className="text-4xl font-bold bg-gradient-to-r from-slate-900 to-blue-900 bg-clip-text text-transparent">Get Reminded of Birthdays</h3>
              <p className="text-slate-600 leading-relaxed text-lg">
                Never miss a birthday again. Get timely reminders for all your important people.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center group/item hover:translate-x-2 transition-transform duration-300">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 group-hover/item:scale-110 transition-transform duration-300" />
                  <span className="text-slate-700">Timely birthday notifications</span>
                </li>
                <li className="flex items-center group/item hover:translate-x-2 transition-transform duration-300">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 group-hover/item:scale-110 transition-transform duration-300" />
                  <span className="text-slate-700">See all birthdays in one place</span>
                </li>
                <li className="flex items-center group/item hover:translate-x-2 transition-transform duration-300">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 group-hover/item:scale-110 transition-transform duration-300" />
                  <span className="text-slate-700">Plan ahead with calendar view</span>
                </li>
              </ul>
            </div>
            <div className="order-1 md:order-2">
              <div className="relative group/img">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl blur-2xl opacity-20 group-hover/img:opacity-30 transition-opacity duration-500"></div>
                <img src="/dark.jpg" alt="Get Reminded of Birthdays" className="rounded-2xl shadow-2xl relative z-10 transition-all duration-500 group-hover/img:scale-105 group-hover/img:shadow-blue-500/50  h-150 w-75" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mt-24">
            <div>
              <div className="relative group/img">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl blur-2xl opacity-20 group-hover/img:opacity-30 transition-opacity duration-500"></div>
                <img src="/addbirthday.jpg" alt="Add Birthday" className="rounded-2xl shadow-2xl relative z-10 transition-all duration-500 group-hover/img:scale-105 group-hover/img:shadow-green-500/50 h-150 w-75" />
              </div>
            </div>
            <div className="space-y-6">
              <h3 className="text-4xl font-bold bg-gradient-to-r from-slate-900 to-green-900 bg-clip-text text-transparent">Add Birthdays Easily</h3>
              <p className="text-slate-600 leading-relaxed text-lg">
                Quickly add birthdays manually or import them from your contacts. Connect your contact list to keep everything in sync and organized.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center group/item hover:translate-x-2 transition-transform duration-300">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 group-hover/item:scale-110 transition-transform duration-300" />
                  <span className="text-slate-700">Manual birthday entry</span>
                </li>
                <li className="flex items-center group/item hover:translate-x-2 transition-transform duration-300">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 group-hover/item:scale-110 transition-transform duration-300" />
                  <span className="text-slate-700">Import from phone contacts</span>
                </li>
                <li className="flex items-center group/item hover:translate-x-2 transition-transform duration-300">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 group-hover/item:scale-110 transition-transform duration-300" />
                  <span className="text-slate-700">Connect and sync contacts</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mt-24">
            <div className="order-2 md:order-1 space-y-6">
              <h3 className="text-4xl font-bold bg-gradient-to-r from-slate-900 to-purple-900 bg-clip-text text-transparent">AI Wish Generator</h3>
              <p className="text-slate-600 leading-relaxed text-lg">
                Craft heartfelt birthday wishes with AI assistance. Whether you want something funny, sentimental, or professional, our AI helps you create the perfect message.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center group/item hover:translate-x-2 transition-transform duration-300">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 group-hover/item:scale-110 transition-transform duration-300" />
                  <span className="text-slate-700">Generate wishes: funny, heartfelt, or professional</span>
                </li>
                <li className="flex items-center group/item hover:translate-x-2 transition-transform duration-300">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 group-hover/item:scale-110 transition-transform duration-300" />
                  <span className="text-slate-700">Craft personalized birthday messages</span>
                </li>
                <li className="flex items-center group/item hover:translate-x-2 transition-transform duration-300">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 group-hover/item:scale-110 transition-transform duration-300" />
                  <span className="text-slate-700">Ensures your message resonates</span>
                </li>
              </ul>
            </div>
            <div className="order-1 md:order-2">
              <div className="relative group/img">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl blur-2xl opacity-20 group-hover/img:opacity-30 transition-opacity duration-500"></div>
                <img src="/withwish.jpg" alt="AI Wish Generator" className="rounded-2xl shadow-2xl relative z-10 transition-all duration-500 group-hover/img:scale-105 group-hover/img:shadow-purple-500/50 h-150 w-75" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mt-24">
            <div>
              <div className="relative group/img">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl blur-2xl opacity-20 group-hover/img:opacity-30 transition-opacity duration-500"></div>
                <img src="/gift.jpg" alt="AI Gift Suggestion" className="rounded-2xl shadow-2xl relative z-10 transition-all duration-500 group-hover/img:scale-105 group-hover/img:shadow-indigo-500/50  h-150 w-75" />
              </div>
            </div>
            <div className="space-y-6">
              <h3 className="text-4xl font-bold bg-gradient-to-r from-slate-900 to-indigo-900 bg-clip-text text-transparent">AI Gift Suggestion</h3>
              <p className="text-slate-600 leading-relaxed text-lg">
                Struggling to find the perfect gift? Our AI assistant analyzes the person's interests, age, and your relationship to suggest thoughtful, personalized gift ideas.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center group/item hover:translate-x-2 transition-transform duration-300">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 group-hover/item:scale-110 transition-transform duration-300" />
                  <span className="text-slate-700">Personalized gift ideas</span>
                </li>
                <li className="flex items-center group/item hover:translate-x-2 transition-transform duration-300">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 group-hover/item:scale-110 transition-transform duration-300" />
                  <span className="text-slate-700">Analyzes interests and relationship</span>
                </li>
                <li className="flex items-center group/item hover:translate-x-2 transition-transform duration-300">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 group-hover/item:scale-110 transition-transform duration-300" />
                  <span className="text-slate-700">Save time and reduce stress</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mt-24">
            <div className="order-2 md:order-1 space-y-6">
              <h3 className="text-4xl font-bold bg-gradient-to-r from-slate-900 to-orange-900 bg-clip-text text-transparent">Personalize Notifications</h3>
              <p className="text-slate-600 leading-relaxed text-lg">
                Customize when you get reminders. Whether it's a week before, a day before, or on the birthday itself, you're in control.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center group/item hover:translate-x-2 transition-transform duration-300">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 group-hover/item:scale-110 transition-transform duration-300" />
                  <span className="text-slate-700">Flexible reminder scheduling</span>
                </li>
                <li className="flex items-center group/item hover:translate-x-2 transition-transform duration-300">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 group-hover/item:scale-110 transition-transform duration-300" />
                  <span className="text-slate-700">Multiple notification options</span>
                </li>
                <li className="flex items-center group/item hover:translate-x-2 transition-transform duration-300">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 group-hover/item:scale-110 transition-transform duration-300" />
                  <span className="text-slate-700">Never miss a celebration</span>
                </li>
              </ul>
            </div>
            <div className="order-1 md:order-2">
              <div className="relative group/img">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl blur-2xl opacity-20 group-hover/img:opacity-30 transition-opacity duration-500"></div>
                <img src="/notifications.jpg" alt="Personalize Notifications" className="rounded-2xl shadow-2xl relative z-10 transition-all duration-500 group-hover/img:scale-105 group-hover/img:shadow-orange-500/50 h-150 w-75" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* App Themes Section */}
      <section className="py-20 px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-slate-900 to-blue-900 bg-clip-text text-transparent">
            Personalize Your Experience
          </h2>
          <p className="text-center text-slate-600 mb-16 max-w-2xl mx-auto text-lg">
            Choose from over 15+  themes to match your style. Light, dark, and vibrant options 
            make your birthday tracking a visual delight.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="group relative overflow-hidden rounded-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-slate-600 to-slate-800 opacity-0 group-hover:opacity-10 transition-opacity duration-300 z-10"></div>
              <img src="/dark.jpg" alt="Dark Theme" className="rounded-2xl shadow-xl w-full h-auto transition-all duration-500 group-hover:scale-110 group-hover:shadow-2xl" />
            </div>
            <div className="group relative overflow-hidden rounded-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-green-600 to-emerald-800 opacity-0 group-hover:opacity-10 transition-opacity duration-300 z-10"></div>
              <img src="/green.jpg" alt="Green Theme" className="rounded-2xl shadow-xl w-full h-auto transition-all duration-500 group-hover:scale-110 group-hover:shadow-2xl" />
            </div>
            <div className="group relative overflow-hidden rounded-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-600 to-pink-800 opacity-0 group-hover:opacity-10 transition-opacity duration-300 z-10"></div>
              <img src="/peatch.jpg" alt="Peach Theme" className="rounded-2xl shadow-xl w-full h-auto transition-all duration-500 group-hover:scale-110 group-hover:shadow-2xl" />
            </div>
            <div className="group relative overflow-hidden rounded-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-600 to-rose-800 opacity-0 group-hover:opacity-10 transition-opacity duration-300 z-10"></div>
              <img src="/blue.jpg" alt="Sunset Theme" className="rounded-2xl shadow-xl w-full h-auto transition-all duration-500 group-hover:scale-110 group-hover:shadow-2xl" />
            </div>
            <div className="group relative overflow-hidden rounded-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-600 to-rose-800 opacity-0 group-hover:opacity-10 transition-opacity duration-300 z-10"></div>
              <img src="/graps.jpg" alt="Sunset Theme" className="rounded-2xl shadow-xl w-full h-auto transition-all duration-500 group-hover:scale-110 group-hover:shadow-2xl" />
            </div>
            <div className="group relative overflow-hidden rounded-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-600 to-rose-800 opacity-0 group-hover:opacity-10 transition-opacity duration-300 z-10"></div>
              <img src="/darkgreen.jpg" alt="Sunset Theme" className="rounded-2xl shadow-xl w-full h-auto transition-all duration-500 group-hover:scale-110 group-hover:shadow-2xl" />
            </div>
            <div className="group relative overflow-hidden rounded-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-600 to-rose-800 opacity-0 group-hover:opacity-10 transition-opacity duration-300 z-10"></div>
              <img src="/lightgreen.jpg" alt="Sunset Theme" className="rounded-2xl shadow-xl w-full h-auto transition-all duration-500 group-hover:scale-110 group-hover:shadow-2xl" />
            </div>
             <div className="group relative overflow-hidden rounded-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-600 to-rose-800 opacity-0 group-hover:opacity-10 transition-opacity duration-300 z-10"></div>
              <img src="/rose.jpg" alt="Sunset Theme" className="rounded-2xl shadow-xl w-full h-auto transition-all duration-500 group-hover:scale-110 group-hover:shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-6 lg:px-8 bg-white/60 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
            How It Works
          </h2>
          <p className="text-center text-slate-600 mb-16 max-w-2xl mx-auto text-lg">
            Get started in minutes and transform how you celebrate birthdays.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center group hover:scale-105 transition-all duration-300">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6 text-3xl font-bold text-white shadow-xl shadow-blue-500/30 group-hover:shadow-2xl group-hover:shadow-blue-500/50 transition-all duration-300 group-hover:rotate-6">
                1
              </div>
              <h3 className="text-xl font-semibold mb-3 text-slate-900">Add Birthdays</h3>
              <p className="text-slate-600 leading-relaxed">
                Create new birthday reminders manually or import them directly from your phone's contacts. Link multiple contacts to keep everything organized.
              </p>
            </div>
            <div className="text-center group hover:scale-105 transition-all duration-300">
              <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 text-3xl font-bold text-white shadow-xl shadow-indigo-500/30 group-hover:shadow-2xl group-hover:shadow-indigo-500/50 transition-all duration-300 group-hover:rotate-6">
                2
              </div>
              <h3 className="text-xl font-semibold mb-3 text-slate-900">Get Reminders</h3>
              <p className="text-slate-600 leading-relaxed">
                Receive timely notifications before each birthday. Customize reminder timing to ensure you have enough time to prepare gifts and wishes.
              </p>
            </div>
            <div className="text-center group hover:scale-105 transition-all duration-300">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6 text-3xl font-bold text-white shadow-xl shadow-purple-500/30 group-hover:shadow-2xl group-hover:shadow-purple-500/50 transition-all duration-300 group-hover:rotate-6">
                3
              </div>
              <h3 className="text-xl font-semibold mb-3 text-slate-900">Use AI Assistant</h3>
              <p className="text-slate-600 leading-relaxed">
                Describe the person and your relationship, and let our AI suggest perfect gifts and help you craft personalized birthday wishes that feel genuine.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Offline First Section */}
      <section className="py-20 px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100/40 to-indigo-100/40 pointer-events-none"></div>
        <div className="max-w-4xl mx-auto text-center relative">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-3xl mx-auto mb-8 shadow-2xl shadow-blue-500/30 hover:scale-110 transition-transform duration-300">
            <Wifi className="w-12 h-12 text-white" />
          </div>
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-slate-900 to-blue-900 bg-clip-text text-transparent">
            Works Offline, Always Available
          </h2>
          <p className="text-xl text-slate-600 leading-relaxed mb-8">
            HappyBirday is built with an offline-first approach. All your birthday reminders, contacts, 
            and calendar data are stored locally on your device. Access your information anytime, anywhere, 
            without needing an internet connection. Your data stays private and secure on your device.
          </p>
          <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm border border-slate-200 rounded-full px-6 py-3 shadow-lg">
            <span className="inline-block w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            <p className="text-slate-700 font-medium">AI features require internet connectivity</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 lg:px-8 bg-white/60 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-slate-900 to-blue-900 bg-clip-text text-transparent">
            Ready to Transform Your Birthday Experience?
          </h2>
          <p className="text-xl text-slate-600 mb-10 leading-relaxed">
            Join thousands of users who never miss a birthday. Download HappyBirday today and start 
            celebrating the people who matter most with thoughtful gifts and heartfelt wishes.
          </p>
          <button onClick={() => setModalOpen(true)} className="group px-10 py-5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-semibold text-lg hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 flex items-center space-x-2 mx-auto hover:scale-105 active:scale-95 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <Bell className="w-5 h-5 relative z-10" />
            <span className="relative z-10">Join the Waitlist</span>
          </button>
          <p className="mt-6 text-sm text-slate-500">Be the first to know when we launch!</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-slate-100 to-blue-100 border-t border-slate-200 py-12 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center text-center mb-8">
            <div className="flex items-center space-x-3 mb-4 group cursor-pointer">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/30 transition-all duration-300 group-hover:scale-110">
                <img src="/icon.png" alt="happybirday icon" className="w-10 h-10 rounded-xl" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">happybirday</span>
            </div>
            <p className="text-slate-600 mb-2 font-medium">Your intelligent birthday assistant</p>
            <p className="text-slate-500 text-sm max-w-2xl">
              Making it easy to celebrate the people you love with AI-powered gift suggestions, 
              heartfelt wishes, and timely reminders.
            </p>
          </div>
          <div className="border-t border-slate-300 pt-8 text-center">
            <p className="text-slate-500 text-sm">
              Copyright © {new Date().getFullYear()} HappyBirday. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Modal */}
      {modalOpen && (
        <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-md flex items-center justify-center z-50 px-4 animate-in fade-in duration-200">
          <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md mx-4 relative animate-in zoom-in duration-300">
            <button 
              onClick={() => setModalOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 transition-colors duration-200 hover:scale-110 active:scale-95"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="text-center mb-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl mx-auto mb-4 shadow-lg shadow-blue-500/30">
                <Bell className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold bg-gradient-to-r from-slate-900 to-blue-900 bg-clip-text text-transparent mb-2">Join the Waitlist</h3>
              <p className="text-slate-600">Be the first to know when HappyBirday launches. Enter your email below to get notified.</p>
            </div>
            <div className="space-y-4">
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email" 
                className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              />
              <button 
                onClick={handleSubmit}
                className="w-full px-4 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105 active:scale-95"
              >
                Notify Me
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;