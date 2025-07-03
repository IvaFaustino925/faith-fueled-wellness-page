
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Heart, Sparkles, Battery, Bird } from 'lucide-react';

const Index = () => {
  const handleVideoClick = () => {
    // Replace with your actual affiliate link
    window.open('https://your-affiliate-link-here.com', '_blank');
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // This will be replaced with actual MailerLite integration
    console.log('Form submitted - integrate with MailerLite');
    // After successful signup, redirect to affiliate video
    setTimeout(() => {
      window.open('https://your-affiliate-link-here.com', '_blank');
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-amber-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Heart className="h-6 w-6 text-amber-600" />
              <div>
                <h1 className="text-xl font-bold text-gray-800">fait.by.purpose</h1>
                <p className="text-xs text-amber-600">Where Faith Meets Wellness</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-6">
              <a href="#home" className="text-gray-600 hover:text-amber-600 transition-colors">Home</a>
              <a href="#story" className="text-gray-600 hover:text-amber-600 transition-colors">My Story</a>
              <a href="#truth" className="text-gray-600 hover:text-amber-600 transition-colors">The Truth</a>
              <a href="#video" className="text-gray-600 hover:text-amber-600 transition-colors">Watch Video</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
              I Found My Healing — And My Waistline — Through{' '}
              <span className="text-amber-600">Faith and Science</span> at 45
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
              This faith-inspired liver detox helped me release stubborn weight, restore my energy, and reconnect with purpose.
            </p>
            <Button 
              onClick={handleVideoClick}
              className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              🎥 Watch the Free Video
            </Button>
            <div className="mt-12">
              <img 
                src="/api/placeholder/600/400" 
                alt="Smiling woman representing transformation" 
                className="mx-auto rounded-2xl shadow-2xl max-w-md w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Personal Story Section */}
      <section id="story" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
              My Journey from Hopeless to Healed
            </h2>
            <div className="prose prose-lg mx-auto text-gray-700 leading-relaxed">
              <p className="text-xl mb-6">
                At 45, I was drowning in my own body. Every morning felt like climbing a mountain just to get out of bed. 
                The stubborn fat around my waist seemed to mock every diet I tried, every workout I attempted.
              </p>
              <p className="mb-6">
                I remember one particular evening, sitting in my kitchen after another failed attempt at meal prep, 
                feeling utterly <strong>hopeless</strong>. In that moment of desperation, I found myself in 
                <strong> silent prayer</strong>, asking God why I couldn't find the strength to take care of the body He gave me.
              </p>
              <p className="mb-6">
                That's when everything changed. Through a series of what I can only call divine appointments, 
                I discovered the truth about liver health and how it affects everything — our energy, our weight, our joy.
              </p>
              <p className="mb-6">
                When I learned that 85% of women over 40 have compromised liver function, it all clicked. 
                My body wasn't broken; it just needed the right support to heal itself the way God designed it to.
              </p>
              <p className="text-xl font-semibold text-amber-600">
                Today, my <strong>energy is reborn</strong>, my confidence restored, and my <strong>faith stronger</strong> than ever. 
                I know this wasn't just for me — it was meant to be shared.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="truth" className="py-16 bg-gradient-to-r from-amber-50 to-rose-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            Restore What God Intended
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="bg-white/80 backdrop-blur-sm border-amber-200 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8 text-center">
                <Sparkles className="h-12 w-12 text-amber-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-800 mb-4">Natural Fat Burning</h3>
                <p className="text-gray-600">
                  Naturally burn belly fat with your body's God-given processes. 
                  No extreme diets or punishing workouts required.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/80 backdrop-blur-sm border-amber-200 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8 text-center">
                <Battery className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-800 mb-4">Restored Energy</h3>
                <p className="text-gray-600">
                  Restore energy and joy without extreme measures. 
                  Wake up feeling refreshed and ready for your purpose.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/80 backdrop-blur-sm border-amber-200 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8 text-center">
                <Bird className="h-12 w-12 text-sky-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-800 mb-4">Spiritual Alignment</h3>
                <p className="text-gray-600">
                  Feel spiritually aligned and physically renewed. 
                  Honor your body as the temple it was created to be.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-to-r from-amber-50 to-rose-50 border-amber-200">
              <CardContent className="p-8 md:p-12">
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="flex-1">
                    <blockquote className="text-xl md:text-2xl text-gray-700 italic mb-4">
                      "I felt like I was finally treating my body with the love God intended. 
                      The transformation wasn't just physical — it was spiritual and emotional too."
                    </blockquote>
                    <cite className="text-amber-600 font-semibold">— Sarah M., Age 47</cite>
                  </div>
                  <div className="flex-shrink-0">
                    <img 
                      src="/api/placeholder/200/200" 
                      alt="Testimonial" 
                      className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover shadow-lg"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Lead Magnet Section */}
      <section className="py-16 bg-gradient-to-b from-amber-100 to-amber-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Download the 5-Minute Liver Reset Checklist
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Get a free step-by-step guide to begin your fat-loss and faith journey today.
            </p>
            
            <Card className="bg-white shadow-xl">
              <CardContent className="p-8">
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName" className="text-gray-700">First Name</Label>
                      <Input 
                        id="firstName" 
                        type="text" 
                        placeholder="Enter your first name"
                        className="mt-1"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-gray-700">Email Address</Label>
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="Enter your email"
                        className="mt-1"
                        required
                      />
                    </div>
                  </div>
                  <Button 
                    type="submit"
                    className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3 text-lg rounded-full"
                  >
                    Download Free Checklist
                  </Button>
                  <p className="text-sm text-gray-500 mt-2">
                    Your information is safe and will never be shared.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section id="video" className="py-16 bg-gradient-to-r from-amber-600 to-rose-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            You were created for more.
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Reclaim your health today.
          </p>
          <Button 
            onClick={handleVideoClick}
            className="bg-white text-amber-600 hover:bg-gray-100 px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            🎥 Watch the Free Liver Detox Video
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <Heart className="h-5 w-5 text-amber-400" />
                  <span className="font-bold">fait.by.purpose</span>
                </div>
                <p className="text-gray-400 text-sm">
                  Where Faith Meets Wellness
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Quick Links</h4>
                <div className="space-y-2 text-sm">
                  <a href="#" className="text-gray-400 hover:text-white block">Terms of Service</a>
                  <a href="#" className="text-gray-400 hover:text-white block">Privacy Policy</a>
                  <a href="#" className="text-gray-400 hover:text-white block">Disclaimer</a>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Contact</h4>
                <p className="text-gray-400 text-sm">
                  contact@faitbypurpose.com
                </p>
              </div>
            </div>
            <Separator className="bg-gray-700 my-8" />
            <div className="text-center text-sm text-gray-400">
              <p className="mb-2">
                © 2024 fait.by.purpose. All rights reserved.
              </p>
              <p>
                This site is for educational purposes and may contain affiliate links. 
                Results may vary. Always consult with your healthcare provider.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
