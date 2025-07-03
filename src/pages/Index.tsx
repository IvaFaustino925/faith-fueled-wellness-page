
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
            <div className="mb-6">
              <span className="text-2xl">✝️</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
              Faith, Fat Loss & the Hidden Key to{' '}
              <span className="text-amber-600">Healing After 40</span>
            </h1>
            <div className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed space-y-4">
              <p>At 45, I wasn't just tired.</p>
              <p className="italic">"I was spiritually drained, emotionally worn out, and physically stuck.</p>
              <p>I had tried it all. Diets, detox teas, endless cardio, and even prayers</p>
              <p>And yet, I still couldn't lose the stubborn belly fat or find the energy I once had.</p>
              <p>I blamed my age. My hormones. Myself.</p>
              <p className="font-semibold">But deep down, I knew something wasn't adding up."</p>
            </div>
            <Button 
              onClick={handleVideoClick}
              className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              🎥 Watch the Free Video
            </Button>
            <div className="mt-12">
              <img 
                src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=600&h=400&fit=crop" 
                alt="Woman finding peace and healing" 
                className="mx-auto rounded-2xl shadow-2xl max-w-md w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Prayer Answer Section */}
      <section id="story" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
              🙏 The Answer to My Prayers Was Hiding in Plain Sight…
            </h2>
            <div className="prose prose-lg mx-auto text-gray-700 leading-relaxed">
              <p className="text-xl mb-6">
                One night, in a moment of surrender, I prayed for a breakthrough.
              </p>
              <p className="mb-6">
                Not another trend or "quick fix", but real, lasting healing.
              </p>
              <p className="mb-6">
                That's when I discovered something I had never even considered:
              </p>
              <p className="mb-6 font-semibold text-amber-600 text-xl">
                My liver was silently slowing everything down.
              </p>
              <p className="mb-6">
                I learned how, especially for women over 40, a sluggish liver can completely block fat-burning, 
                drain energy, and throw off your body's natural balance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5-Minute Routine Section */}
      <section className="py-16 bg-gradient-to-r from-amber-50 to-rose-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
              🌿 A 5-Minute Routine That Changed Everything
            </h2>
            <div className="prose prose-lg mx-auto text-gray-700 leading-relaxed text-center">
              <p className="text-xl mb-6">
                What I found wasn't a miracle pill.
              </p>
              <p className="mb-6">
                It wasn't expensive or extreme.
              </p>
              <p className="mb-6">
                It was a simple, science-backed routine, just five minutes a day. One that works with your body's design, not against it.
              </p>
              <p className="mb-8 font-semibold text-amber-600">
                And more importantly: It aligned with my values. With my faith. With how God created us to function.
              </p>
              
              <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
                <p className="text-lg font-semibold mb-4">After just a few weeks:</p>
                <div className="space-y-2">
                  <p>🔥 My belly started shrinking</p>
                  <p>⚡ My energy came back</p>
                  <p>🕊️ I felt connected to my body again and to God's purpose for my health</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Not Just About Fat Loss Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
              📖 Why This Isn't Just About Fat Loss
            </h2>
            <div className="prose prose-lg mx-auto text-gray-700 leading-relaxed">
              <p className="text-xl mb-6">
                You may be feeling the same right now, tired, frustrated, and wondering if lasting change is even possible.
              </p>
              <p className="mb-6 font-semibold text-amber-600">
                Let me tell you this with love:
              </p>
              <div className="bg-gradient-to-r from-amber-50 to-rose-50 p-8 rounded-2xl mb-8">
                <p className="mb-4 font-semibold">You are not broken.</p>
                <p className="mb-4 font-semibold">You are not too late.</p>
                <p className="mb-4 font-semibold">And your body was never designed to fight against itself.</p>
              </div>
              <p className="mb-6">
                This journey is about more than the number on the scale.
              </p>
              <p className="mb-6">
                It's about healing from the inside out.
              </p>
              <p className="text-xl font-semibold text-amber-600">
                It's about reclaiming your energy, your confidence, and your connection with God's plan for your life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Video Learning Section */}
      <section className="py-16 bg-gradient-to-r from-amber-50 to-rose-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            🎥 What You'll Learn in This Free Video
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="bg-white/80 backdrop-blur-sm border-amber-200 shadow-lg">
              <CardContent className="p-8">
                <div className="space-y-4">
                  <p className="flex items-start"><span className="text-green-600 mr-2">✅</span> The hidden liver switch that affects women over 40</p>
                  <p className="flex items-start"><span className="text-green-600 mr-2">✅</span> Why most diets don't work (and what to do instead)</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-white/80 backdrop-blur-sm border-amber-200 shadow-lg">
              <CardContent className="p-8">
                <div className="space-y-4">
                  <p className="flex items-start"><span className="text-green-600 mr-2">✅</span> A gentle detox method rooted in science and supported by faith</p>
                  <p className="flex items-start"><span className="text-green-600 mr-2">✅</span> How to reignite your body's fat-burning naturally, without gym obsession or starvation</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* This Is For You Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
              ✨ This Is For You If:
            </h2>
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="bg-gradient-to-r from-amber-50 to-rose-50 p-6 rounded-2xl">
                <p className="text-lg">You're a woman of faith, 40+</p>
              </div>
              <div className="bg-gradient-to-r from-amber-50 to-rose-50 p-6 rounded-2xl">
                <p className="text-lg">You've tried everything but still feel stuck</p>
              </div>
              <div className="bg-gradient-to-r from-amber-50 to-rose-50 p-6 rounded-2xl">
                <p className="text-lg">You want a natural, truthful approach</p>
              </div>
              <div className="bg-gradient-to-r from-amber-50 to-rose-50 p-6 rounded-2xl">
                <p className="text-lg">You're ready to restore your health and walk in purpose again</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lead Magnet Section */}
      <section className="py-16 bg-gradient-to-b from-amber-100 to-amber-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              🎁 Bonus: Free Checklist Download
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              I created a "5-Minute Liver Reset Checklist" so you can start right away.
              📩 Drop your email to receive it. No fluff, no spam. Just real steps, real results.
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

      {/* Final Thoughts & CTA Section */}
      <section id="video" className="py-16 bg-gradient-to-r from-amber-600 to-rose-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            ❤️ Final Thoughts
          </h2>
          <div className="max-w-3xl mx-auto mb-8">
            <p className="text-xl mb-6 opacity-90">
              Friend, if you've been praying for something real.
            </p>
            <p className="text-lg mb-6 opacity-90">
              Not hype, not false promises, but healing that aligns with your body and your beliefs…
            </p>
            <p className="text-xl font-semibold mb-6">
              This is it.
            </p>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl mb-8">
              <p className="text-lg mb-4">You were created with purpose.</p>
              <p className="text-lg">You are meant to feel strong, light, and aligned in health and in spirit.</p>
            </div>
            <p className="text-lg opacity-90">
              Trust, this might just be your turning point.
            </p>
          </div>
          <Button 
            onClick={handleVideoClick}
            className="bg-white text-amber-600 hover:bg-gray-100 px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            👉 Watch the Free Video Here
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
