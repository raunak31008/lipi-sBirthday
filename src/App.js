import React, { useState, useEffect } from 'react';
import { Heart, Play, ChevronLeft, ChevronRight, X, Star, Sparkles, Menu, Home, Camera, Video, MessageCircle, Gift } from 'lucide-react';

const App = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const [floatingHearts, setFloatingHearts] = useState([]);
  const [sparkles, setSparkles] = useState([]);
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentQuote, setCurrentQuote] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Your beautiful memories
  const memories = [
    {
      type: 'image',
      src: './attached_assets/04f609b0-44d6-41e2-b07a-0eb55ae21c12.jpeg',
      caption: '💕 Our first flight together',
    },
    {
      type: 'image',
      src: './attached_assets/WhatsApp Image 2025-05-30 at 5.57.46 PM.jpeg',
      caption: '🌊 With you, every moment feels like magic',
      date: 'Summer 2024'
    },
    {
      type: 'image',
      src: './attached_assets/WhatsApp Image 2025-05-30 at 5.57.44 PM (1).jpeg',
      caption: '🌅 Beach days are the best days with you by my side',
      date: 'Summer 2023'
    },
    {
      type: 'image',
      src: './attached_assets/WhatsApp Image 2025-05-30 at 5.58.07 PM (1).jpeg',
      caption: '🍃 Walking through life together',
      date: 'Winter 2024'
    },
    {
      type: 'image',
      src: './attached_assets/WhatsApp Image 2025-05-30 at 5.58.04 PM (1).jpeg',
      caption: '✨ Every moment with you sparkles',
      date: 'Spring 2024'
    },
    {
      type: 'image',
      src: './attached_assets/WhatsApp Image 2025-05-30 at 5.58.07 PM.jpeg',
      caption: '✨ Cherishing every precious moment we share',
      date: 'Spring 2024'
    },
    {
      type: 'image',
      src: './attached_assets/WhatsApp Image 2025-05-30 at 5.57.52 PM.jpeg',
      caption: '✨ Lost in the adventure, finding our way through every twist and turn together."',
      date: 'Spring 2024'
    },
    {
      type: 'image',
      src: './attached_assets/WhatsApp Image 2025-05-30 at 5.57.45 PM.jpeg',
      caption: '✨ You light up my world every day',
      date: 'Spring 2024'
    },
    {
      type: 'video',
      src: './attached_assets/WhatsApp Video 2025-05-30 at 5.57.47 PM.mp4',
      thumbnail: './photos/video-thumb1.jpg',
      caption: '🎬 Varanasi',
    },
    {
      type: 'video',
      src: './attached_assets/WhatsApp Video 2025-05-30 at 5.58.03 PM.mp4',
      thumbnail: './photos/video-thumb1.jpg',
      caption: '🎬 Vrindavan',
    },
    {
      type: 'video',
      src: './attached_assets/WhatsApp Video 2025-05-30 at 5.58.10 PM.mp4',
      thumbnail: './photos/video-thumb1.jpg',
      caption: '🎬 Darjelling',
    },
    {
      type: 'video',
      src: './attached_assets/WhatsApp Video 2025-05-31 at 1.03.03 PM.mp4',
      thumbnail: './photos/video-thumb1.jpg',
      caption: '🎬 Goa',
    },
    {
      type: 'video',
      src: './attached_assets/WhatsApp Video 2025-05-30 at 5.57.55 PM.mp4',
      thumbnail: './photos/video-thumb1.jpg',
      caption: '🎬 Cyber Hub',
    },
    {
      type: 'video',
      src: '/attached_assets/WhatsApp Video 2025-05-31 at 1.11.30 PM.mp4',
      thumbnail: './photos/video-thumb1.jpg',
      caption: '🎬 Rajgir',
    },

  ];

  const loveQuotes = [
    "Every love story is beautiful, but ours is my favorite 💕",
    "You are my today and all of my tomorrows ✨",
    "In your eyes, I found my home 🏠",
    "You make my heart skip beats 💓",
    "Forever isn't long enough with you 💫",
    "You are the reason I believe in love 🌹"
  ];

  const loveMessages = [
    "You light up my world like nobody else 🌟",
    "Every day with you feels like a fairytale ✨",
    "You're not just my girlfriend, you're my best friend 💕",
    "Your smile is my favorite notification 😊",
    "I fall in love with you more every single day 💖"
  ];

  // Navigation items
  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'gallery', label: 'Gallery', icon: Camera },
    { id: 'videos', label: 'Videos', icon: Video },
    { id: 'messages', label: 'Messages', icon: MessageCircle },
    { id: 'memories', label: 'Memories', icon: Gift }
  ];

  // Mouse tracking for interactive effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Auto-change quotes
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote(prev => (prev + 1) % loveQuotes.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [loveQuotes.length]);

  // Generate floating elements
  useEffect(() => {
    const heartInterval = setInterval(() => {
      const newHeart = {
        id: Date.now() + Math.random(),
        left: Math.random() * 100,
        delay: Math.random() * 2,
        size: Math.random() * 0.5 + 0.8
      };
      setFloatingHearts(prev => [...prev.slice(-6), newHeart]);
    }, 5000);

    const sparkleInterval = setInterval(() => {
      const newSparkle = {
        id: Date.now() + Math.random(),
        left: Math.random() * 100,
        top: Math.random() * 100,
        delay: Math.random() * 3
      };
      setSparkles(prev => [...prev.slice(-8), newSparkle]);
    }, 2500);

    return () => {
      clearInterval(heartInterval);
      clearInterval(sparkleInterval);
    };
  }, []);

  const openModal = (item, index) => {
    setModalContent(item);
    setCurrentIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalContent(null);
  };

  const nextItem = () => {
    const newIndex = (currentIndex + 1) % memories.length;
    setCurrentIndex(newIndex);
    setModalContent(memories[newIndex]);
  };

  const prevItem = () => {
    const newIndex = currentIndex === 0 ? memories.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    setModalContent(memories[newIndex]);
  };

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    setIsMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-purple-100 relative overflow-hidden">
      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes floatUp {
          0% { transform: translateY(100vh) rotate(0deg); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(-100vh) rotate(360deg); opacity: 0; }
        }
        @keyframes gentlePulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .gentle-pulse { animation: gentlePulse 4s ease-in-out infinite; }
        .fade-in-up { animation: fadeInUp 0.8s ease-out forwards; }
        .parallax-cursor::before {
          content: '';
          position: fixed;
          width: 20px;
          height: 20px;
          background: radial-gradient(circle, rgba(236, 72, 153, 0.3) 0%, transparent 70%);
          border-radius: 50%;
          pointer-events: none;
          z-index: 9999;
          transform: translate(-50%, -50%);
        }
      `}</style>

      {/* Interactive cursor effect */}
      <div 
        className="parallax-cursor"
        style={{
          left: mousePosition.x,
          top: mousePosition.y
        }}
      />

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {floatingHearts.map(heart => (
          <div
            key={heart.id}
            className="absolute text-pink-400 opacity-60"
            style={{
              left: `${heart.left}%`,
              bottom: '-60px',
              fontSize: `${heart.size * 2}rem`,
              animation: `floatUp 10s linear infinite`,
              animationDelay: `${heart.delay}s`
            }}
          >
            💖
          </div>
        ))}
        
        {sparkles.map(sparkle => (
          <Sparkles
            key={sparkle.id}
            className="absolute w-4 h-4 text-yellow-400 opacity-50 animate-pulse"
            style={{
              left: `${sparkle.left}%`,
              top: `${sparkle.top}%`,
              animationDelay: `${sparkle.delay}s`
            }}
          />
        ))}
      </div>

      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-lg border-b border-pink-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-20">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <Heart className="w-8 h-8 text-pink-500 animate-pulse" fill="currentColor" />
              <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
              LIPI’s Special Day
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 ${
                      activeSection === item.id
                        ? 'bg-pink-500 text-white shadow-lg transform scale-105'
                        : 'text-gray-700 hover:text-pink-500 hover:bg-pink-50'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span className="font-medium">{item.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-pink-50 transition-colors"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md shadow-lg border-b border-pink-100 fade-in-up">
              <div className="py-4 space-y-2">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`w-full flex items-center space-x-3 px-6 py-3 transition-all duration-300 ${
                        activeSection === item.id
                          ? 'bg-pink-500 text-white'
                          : 'text-gray-700 hover:bg-pink-50'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      <span className="font-medium">{item.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center pt-20">
        {/* Hero Background Image */}
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-gradient-to-br from-pink-200 via-purple-200 to-indigo-200 flex items-center justify-center">
            {/* Placeholder for main hero image */}
            <div className="text-center p-8">
              <Heart className="w-24 h-24 text-pink-400 mx-auto mb-4 gentle-pulse" fill="currentColor" />
              <p className="text-pink-600 font-medium text-lg">Replace with your beautiful photo</p>
              <p className="text-sm text-gray-500 mt-2">Path: ./attached_assets/WhatsApp Image 2025-05-30 at 5.57.45 PM.jpeg</p>
            </div>
          </div>
          <img
            src="./attached_assets/WhatsApp Image 2025-05-30 at 5.57.45 PM.jpeg"
            alt="Our beautiful moment"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ display: 'none' }}
            onLoad={(e) => { e.target.style.display = 'block'; e.target.previousElementSibling.style.display = 'none'; }}
            onError={(e) => { e.target.style.display = 'none'; }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/50"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <div className="fade-in-up">
            <h1 className="text-4xl sm:text-6xl lg:text-8xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
              Happy Birthday
              <span className="block bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                Lipi
              </span>
            </h1>
            
            <div className="mb-8 h-16 flex items-center justify-center">
              <p className="text-xl sm:text-2xl lg:text-3xl text-white/90 font-light leading-relaxed drop-shadow-md transition-opacity duration-1000">
                {loveQuotes[currentQuote]}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={() => scrollToSection('gallery')}
                className="group px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                <span className="flex items-center space-x-2">
                  <Camera className="w-5 h-5" />
                  <span>Explore Our Memories</span>
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
              
              <button
                onClick={() => scrollToSection('messages')}
                className="group px-8 py-4 bg-white/20 backdrop-blur-sm text-white font-semibold rounded-full border-2 border-white/30 hover:bg-white/30 transform hover:scale-105 transition-all duration-300"
              >
                <span className="flex items-center space-x-2">
                  <Heart className="w-5 h-5" />
                  <span>Love Messages</span>
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent mb-6">
              Our Beautiful Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Every photo tells a story, every moment is a treasure 📸✨
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
            {memories.filter(item => item.type === 'image').map((item, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-700 cursor-pointer bg-white/90 backdrop-blur-sm"
                onClick={() => openModal(item, index)}
              >
                <div className="aspect-square relative">
                  <div className="w-full h-full bg-gradient-to-br from-pink-100 to-purple-100 flex items-center justify-center">
                    <div className="text-center p-4">
                      <Heart className="w-12 h-12 text-pink-400 mx-auto mb-2" fill="currentColor" />
                      <p className="text-pink-600 font-medium">Beautiful Memory</p>
                    </div>
                  </div>
                  
                  <img
                    src={item.src}
                    alt={item.caption}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    style={{ display: 'none' }}
                    onLoad={(e) => { e.target.style.display = 'block'; e.target.previousElementSibling.style.display = 'none'; }}
                    onError={(e) => { e.target.style.display = 'none'; }}
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <p className="font-semibold text-lg mb-1">{item.caption}</p>
                    <p className="text-sm opacity-90">{item.date}</p>
                  </div>
                </div>

                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <Heart className="w-6 h-6 text-pink-400 animate-pulse drop-shadow-lg" fill="currentColor" />
                </div>

                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Videos Section */}
      <section id="videos" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-50 to-pink-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent mb-6">
              Our Moving Memories
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Captured moments that bring our story to life 🎬💕
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {memories.filter(item => item.type === 'video').map((item, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-700 cursor-pointer bg-white/90 backdrop-blur-sm"
                onClick={() => openModal(item, index)}
              >
                <div className="aspect-video relative">
                  <div className="w-full h-full bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center">
                    <div className="text-center p-4">
                      <Video className="w-16 h-16 text-purple-400 mx-auto mb-2" />
                      <p className="text-purple-600 font-medium">Beautiful Video</p>
                    </div>
                  </div>
                  
                  <img
                    src={item.thumbnail}
                    alt={item.caption}
                    className="absolute inset-0 w-full h-full object-cover"
                    style={{ display: 'none' }}
                    onLoad={(e) => { e.target.style.display = 'block'; e.target.previousElementSibling.style.display = 'none'; }}
                    onError={(e) => { e.target.style.display = 'none'; }}
                  />

                  <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-colors">
                    <div className="w-20 h-20 rounded-full bg-white/90 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <Play className="w-10 h-10 text-purple-500 ml-1" fill="currentColor" />
                    </div>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
                    <p className="text-white font-semibold text-lg">{item.caption}</p>
                    <p className="text-white/80 text-sm">{item.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Messages Section */}
      <section id="messages" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-pink-500 to-red-500 bg-clip-text text-transparent mb-6">
              Messages From My Heart
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Words can't express how much you mean to me, but I'll try 💌
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {loveMessages.map((message, index) => (
              <div
                key={index}
                className="group p-8 bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-500 border border-pink-100"
              >
                <div className="text-center">
                  <Heart className="w-12 h-12 text-pink-400 mx-auto mb-4 group-hover:animate-pulse" fill="currentColor" />
                  <p className="text-gray-700 text-lg leading-relaxed font-medium">
                    {message}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Memories Section */}
      <section id="memories" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-indigo-50 to-purple-50">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent mb-8">
            Special Memories
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 shadow-xl">
              <Gift className="w-16 h-16 text-purple-500 mx-auto mb-6 gentle-pulse" />
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Timeline</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Every day with you adds a new beautiful chapter to our love story. 
                From our first meeting to this very moment, each memory is a treasure 
                I hold close to my heart. Thank you for being my partner in this incredible journey! 💕
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      {isModalOpen && modalContent && (
        <div className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="relative max-w-6xl w-full max-h-full">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-all hover:scale-110"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            {memories.length > 1 && (
              <>
                <button
                  onClick={prevItem}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-all hover:scale-110"
                >
                  <ChevronLeft className="w-8 h-8 text-white" />
                </button>
                <button
                  onClick={nextItem}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-all hover:scale-110"
                >
                  <ChevronRight className="w-8 h-8 text-white" />
                </button>
              </>
            )}

            <div className="relative rounded-3xl overflow-hidden bg-white/5 backdrop-blur-sm">
              {modalContent.type === 'image' ? (
                <img
                  src={modalContent.src}
                  alt={modalContent.caption}
                  className="w-full h-auto max-h-[85vh] object-contain"
                />
              ) : (
                <video
                  src={modalContent.src}
                  controls
                  className="w-full h-auto max-h-[85vh]"
                  autoPlay
                />
              )}
              
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-6">
                <h3 className="text-white text-xl lg:text-2xl font-semibold mb-2">{modalContent.caption}</h3>
                <p className="text-white/90 text-base">{modalContent.date}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="py-12 px-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white text-center">
        <div className="container mx-auto">
          <div className="flex justify-center items-center space-x-2 mb-4">
            <Heart className="w-6 h-6 animate-pulse" fill="currentColor" />
            <span className="text-lg font-medium">Made with infinite love, just for you</span>
            <Heart className="w-6 h-6 animate-pulse" fill="currentColor" />
          </div>
          <p className="text-pink-100 italic">
            "You are my sunshine on cloudy days, my anchor in stormy seas ✨"
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;