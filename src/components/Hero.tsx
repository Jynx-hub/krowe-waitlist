import { Rocket, ArrowRight, CheckCircle, Shield, Lock } from 'lucide-react';
import { useState } from 'react';
import { supabase } from '../lib/supabase';

export default function Hero() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');
    setSuccess(false);

    try {
      const { error } = await supabase
        .from('waitlist')
        .insert([{ email }]);

      if (error) {
        if (error.code === '23505') {
          setMessage('This email is already on the waitlist!');
        } else {
          setMessage('Something went wrong. Please try again.');
        }
      } else {
        setSuccess(true);
        setMessage('Successfully joined the waitlist!');
        setEmail('');
      }
    } catch {
      setMessage('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="max-w-7xl mx-auto px-6 py-20 text-center">
      <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-800 mb-6 leading-tight">
        Launch your idea
        <br />
        without the confusion.
      </h1> 

      <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
        Imagine your startup building itself. With Krowe, simplify every step, cut the confusion, 
        and focus on launching your idea faster.
      </p>

   {/*   <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
        <button className="px-6 py-3 text-gray-600 hover:text-gray-900 font-medium transition-colors">
          Learn how
        </button>
        <button className="px-8 py-3 bg-[#f27d33] text-white rounded-lg hover:bg-[#e06d23] transition-all shadow-lg hover:shadow-xl font-medium flex items-center gap-2 group">
          Experience Effortless Efficiency
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div> */}

      <div className="max-w-md mx-auto bg-white rounded-2xl shadow-xl p-8 border-2 border-[#f27d33]/20">
        <h3 className="text-2xl font-bold text-gray-800 mb-2">Join the Waitlist</h3>
        <p className="text-gray-600 mb-6">Be the first to experience the simplest way to launch a startup.</p>


        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f27d33] focus:border-transparent"
          />
          <button
            type="submit"
            disabled={loading}
            className="w-full px-6 py-3 bg-[#f27d33] text-white rounded-lg hover:bg-[#e06d23] transition-all shadow-lg hover:shadow-xl font-medium disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Joining...' : 'Join Waitlist'}
          </button>
        </form>

        {message && (
          <div className={`mt-4 p-3 rounded-lg ${success ? 'bg-green-50 text-green-700' : 'bg-orange-50 text-orange-700'}`}>
            {message}
          </div>
        )}
      </div>
    </section>
  );
}
