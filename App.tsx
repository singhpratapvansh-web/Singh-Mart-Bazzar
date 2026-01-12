
import React, { useState, useEffect } from 'react';
// Added Bot to the list of imported icons from lucide-react
import { ShoppingBag, ChevronRight, Star, ArrowRight, Instagram, Facebook, Twitter, Mail, Phone, MapPin, CheckCircle, Bot } from 'lucide-react';
import Header from './components/Header';
import AIChat from './components/AIChat';
import { PRODUCTS, FAQS, MARKETING, PAGE_META } from './constants';
import { CartItem, Product } from './types';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [cart, setCart] = useState<CartItem[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  useEffect(() => {
    // Scroll to top on page change
    window.scrollTo(0, 0);
  }, [currentPage, selectedProduct]);

  const addToCart = (product: Product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (id: string) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const renderHome = () => (
    <div className="space-y-16 pb-16">
      {/* Hero Section */}
      <section className="relative h-[80vh] overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1590736704728-f4730bb30770?auto=format&fit=crop&q=80&w=2000" 
          className="absolute inset-0 w-full h-full object-cover"
          alt="Traditional bazaar background"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
            <h1 className="text-5xl md:text-7xl brand-font mb-6 leading-tight">
              Experience the Spirit of <br/> Tradition, Delivered.
            </h1>
            <p className="text-xl md:text-2xl mb-10 max-w-2xl text-gray-200">
              Welcome to Singh Mart Bazaar. Curating the world's finest artisanal heritage goods for the modern home.
            </p>
            <div className="flex space-x-4">
              <button 
                onClick={() => setCurrentPage('shop')}
                className="bg-orange-700 hover:bg-orange-800 text-white px-8 py-4 rounded-sm font-medium transition-all flex items-center"
              >
                Shop Collection <ArrowRight size={20} className="ml-2" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Collections Preview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="text-3xl brand-font text-gray-900">The Heritage Collection</h2>
            <p className="text-gray-500 mt-2">Timeless designs crafted by master artisans.</p>
          </div>
          <button 
            onClick={() => setCurrentPage('shop')}
            className="text-orange-800 font-semibold flex items-center hover:underline"
          >
            View All <ChevronRight size={18} />
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {PRODUCTS.slice(0, 4).map(product => (
            <div key={product.id} className="group cursor-pointer" onClick={() => {
              setSelectedProduct(product);
              setCurrentPage('product');
            }}>
              <div className="relative overflow-hidden aspect-[3/4] mb-4 bg-gray-100">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    addToCart(product);
                  }}
                  className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm py-3 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"
                >
                  <ShoppingBag size={16} className="mr-2" /> Add to Bag
                </button>
              </div>
              <h3 className="text-lg font-medium text-gray-800">{product.title}</h3>
              <div className="flex justify-between items-center mt-1">
                <span className="text-gray-900 font-bold">${product.price.toFixed(2)}</span>
                <div className="flex items-center text-yellow-500">
                  <Star size={14} fill="currentColor" />
                  <span className="text-xs text-gray-500 ml-1">{product.rating}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Brand Values */}
      <section className="bg-orange-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="space-y-4">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto shadow-sm">
                <CheckCircle className="text-orange-800" size={32} />
              </div>
              <h3 className="text-xl font-bold brand-font">Authenticity Guaranteed</h3>
              <p className="text-gray-600">Every piece in our shop is hand-verified for historical and artisanal accuracy.</p>
            </div>
            <div className="space-y-4">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto shadow-sm">
                <ShoppingBag className="text-orange-800" size={32} />
              </div>
              <h3 className="text-xl font-bold brand-font">Ethical Sourcing</h3>
              <p className="text-gray-600">We work directly with artisans, ensuring fair wages and preserving local economies.</p>
            </div>
            <div className="space-y-4">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto shadow-sm">
                <MapPin className="text-orange-800" size={32} />
              </div>
              <h3 className="text-xl font-bold brand-font">Worldwide Delivery</h3>
              <p className="text-gray-600">Secure, tracked shipping from our bazaar to your doorstep, anywhere in the world.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );

  const renderProduct = () => {
    if (!selectedProduct) return renderHome();
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="aspect-square bg-gray-100 overflow-hidden">
            <img 
              src={selectedProduct.image} 
              alt={selectedProduct.title} 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="space-y-8">
            <div>
              <nav className="flex text-sm text-gray-500 mb-4">
                <button onClick={() => setCurrentPage('home')} className="hover:text-orange-800">Home</button>
                <span className="mx-2">/</span>
                <button onClick={() => setCurrentPage('shop')} className="hover:text-orange-800">{selectedProduct.category}</button>
              </nav>
              <h1 className="text-4xl brand-font text-gray-900 mb-2">{selectedProduct.title}</h1>
              <div className="flex items-center space-x-4">
                <div className="flex text-yellow-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} fill={i < Math.floor(selectedProduct.rating) ? "currentColor" : "none"} />
                  ))}
                </div>
                <span className="text-gray-500 text-sm">Based on 48 reviews</span>
              </div>
            </div>
            
            <p className="text-3xl font-bold text-orange-800">${selectedProduct.price.toFixed(2)}</p>
            
            <div className="space-y-4">
              <h3 className="font-semibold text-gray-900 uppercase tracking-widest text-sm">Description</h3>
              <p className="text-gray-600 leading-relaxed">{selectedProduct.description}</p>
            </div>

            <button 
              onClick={() => addToCart(selectedProduct)}
              className="w-full bg-orange-800 text-white py-5 font-bold uppercase tracking-widest hover:bg-orange-900 transition-colors"
            >
              Add to Shopping Bag
            </button>

            <div className="border-t pt-8 space-y-4 text-sm text-gray-500">
              <p><strong>Meta Title:</strong> {selectedProduct.metaTitle}</p>
              <p><strong>Meta Description:</strong> {selectedProduct.metaDescription}</p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderMarketingHub = () => (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl brand-font text-gray-900 mb-4">Marketing Asset Dashboard</h1>
        <p className="text-gray-500 max-w-2xl mx-auto">Access all generated copy for Singh Mart Bazaar outreach and advertisements.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Email */}
        <div className="bg-white p-6 border border-gray-100 shadow-sm rounded-lg">
          <div className="flex items-center space-x-2 text-orange-800 mb-4">
            <Mail size={20} />
            <h3 className="font-bold uppercase tracking-wider text-sm">Email Campaign</h3>
          </div>
          <p className="text-xs font-bold text-gray-400 mb-1">SUBJECT:</p>
          <p className="text-gray-800 mb-4 font-medium">{MARKETING.emailSubject}</p>
          <p className="text-xs font-bold text-gray-400 mb-1">CONTENT:</p>
          <p className="text-gray-600 text-sm whitespace-pre-wrap line-clamp-4">{MARKETING.emailBody}</p>
        </div>

        {/* SMS / WhatsApp */}
        <div className="bg-white p-6 border border-gray-100 shadow-sm rounded-lg">
          <div className="flex items-center space-x-2 text-green-700 mb-4">
            <Phone size={20} />
            <h3 className="font-bold uppercase tracking-wider text-sm">Direct Messaging</h3>
          </div>
          <p className="text-xs font-bold text-gray-400 mb-1">SMS MESSAGE:</p>
          <p className="text-gray-800 text-sm mb-4">{MARKETING.smsMessage}</p>
          <p className="text-xs font-bold text-gray-400 mb-1">WHATSAPP MESSAGE:</p>
          <p className="text-gray-800 text-sm">{MARKETING.whatsappMessage}</p>
        </div>

        {/* Ad Copy */}
        <div className="bg-white p-6 border border-gray-100 shadow-sm rounded-lg">
          <div className="flex items-center space-x-2 text-blue-800 mb-4">
            <Facebook size={20} />
            <h3 className="font-bold uppercase tracking-wider text-sm">Ad Creative</h3>
          </div>
          <p className="text-xs font-bold text-gray-400 mb-1">CAPTION:</p>
          <p className="text-gray-800 text-sm mb-4">{MARKETING.adCaption}</p>
          <p className="text-xs font-bold text-gray-400 mb-1">AD COPY:</p>
          <p className="text-gray-600 text-sm">{MARKETING.adCopy}</p>
        </div>

        {/* Blog/Article */}
        <div className="bg-white p-6 border border-gray-100 shadow-sm rounded-lg col-span-1 md:col-span-2">
          <div className="flex items-center space-x-2 text-gray-800 mb-4">
            <CheckCircle size={20} />
            <h3 className="font-bold uppercase tracking-wider text-sm">Featured Article Snippet</h3>
          </div>
          <p className="text-gray-600 text-sm leading-relaxed">{MARKETING.article}</p>
        </div>

        {/* App Notification */}
        <div className="bg-white p-6 border border-gray-100 shadow-sm rounded-lg">
          <div className="flex items-center space-x-2 text-red-800 mb-4">
            <Bot size={20} />
            <h3 className="font-bold uppercase tracking-wider text-sm">App Notification</h3>
          </div>
          <div className="bg-gray-100 p-3 rounded-lg flex items-center space-x-3">
             <div className="bg-orange-800 w-8 h-8 rounded flex items-center justify-center text-white text-[10px] font-bold">SM</div>
             <div>
               <p className="text-xs font-bold">Singh Mart Bazaar</p>
               <p className="text-[10px] text-gray-600">{MARKETING.appNotification}</p>
             </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderAbout = () => (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-5xl brand-font text-center mb-12">Our Story</h1>
      <div className="prose prose-orange max-w-none space-y-8 text-lg text-gray-600 leading-relaxed">
        <p>
          Founded on the principle that heritage should be accessible to all, Singh Mart Bazaar began as a curated passion project. Our founder recognized that in the rush toward mass-produced uniformity, the soulful touch of an artisan was being lost.
        </p>
        <img src="https://images.unsplash.com/photo-1544027993-37dbfe43562a?auto=format&fit=crop&q=80&w=1200" className="w-full h-80 object-cover rounded-sm shadow-md" alt="Artisan at work" />
        <p>
          We travel across continents—from the hidden looms of Kashmir to the copper workshops of old cities—to bring you products that aren't just items, but stories. Each purchase at Singh Mart Bazaar supports the survival of traditional techniques and provides fair livelihood to artisanal communities.
        </p>
        <div className="bg-orange-50 p-8 border-l-4 border-orange-800 italic">
          "Quality is not an act, it is a habit. At Singh Mart, we make it our life's work to bridge the gap between ancient traditions and modern homes."
        </div>
      </div>
    </div>
  );

  const renderFAQ = () => (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-4xl brand-font text-center mb-12">Frequently Asked Questions</h1>
      <div className="space-y-4">
        {FAQS.map((faq, i) => (
          <details key={i} className="group bg-white border border-gray-200 rounded-lg p-6 [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex cursor-pointer items-center justify-between gap-1.5">
              <h2 className="text-lg font-medium text-gray-900">{faq.question}</h2>
              <span className="shrink-0 rounded-full bg-orange-50 p-1.5 text-orange-800 transition duration-300 group-open:-rotate-180">
                <ChevronRight size={20} className="rotate-90" />
              </span>
            </summary>
            <p className="mt-4 leading-relaxed text-gray-600">{faq.answer}</p>
          </details>
        ))}
      </div>
    </div>
  );

  const renderShop = () => (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col md:flex-row justify-between items-start mb-12 gap-8">
        <div>
          <h1 className="text-4xl brand-font text-gray-900 mb-2">Shop Our Collection</h1>
          <p className="text-gray-500">Discover premium goods across all categories.</p>
        </div>
        <div className="flex space-x-4">
          <select className="border border-gray-300 rounded px-4 py-2 text-sm focus:outline-none focus:border-orange-800 bg-white">
            <option>All Categories</option>
            <option>Traditional Wear</option>
            <option>Men's Fashion</option>
            <option>Home & Kitchen</option>
          </select>
          <select className="border border-gray-300 rounded px-4 py-2 text-sm focus:outline-none focus:border-orange-800 bg-white">
            <option>Featured</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>Newest</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {PRODUCTS.map(product => (
          <div key={product.id} className="group cursor-pointer" onClick={() => {
            setSelectedProduct(product);
            setCurrentPage('product');
          }}>
            <div className="relative overflow-hidden aspect-[3/4] mb-4 bg-gray-100">
              <img 
                src={product.image} 
                alt={product.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  addToCart(product);
                }}
                className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm py-3 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"
              >
                <ShoppingBag size={16} className="mr-2" /> Add to Bag
              </button>
            </div>
            <h3 className="text-lg font-medium text-gray-800">{product.title}</h3>
            <span className="text-gray-900 font-bold block mt-1">${product.price.toFixed(2)}</span>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Header 
        cartCount={cart.reduce((s, i) => s + i.quantity, 0)} 
        onCartClick={() => {}} // Could implement a drawer
        onNavigate={(page) => {
          setCurrentPage(page);
          setSelectedProduct(null);
        }}
        currentPage={currentPage}
      />

      <main className="flex-1">
        {currentPage === 'home' && renderHome()}
        {currentPage === 'shop' && renderShop()}
        {currentPage === 'product' && renderProduct()}
        {currentPage === 'about' && renderAbout()}
        {currentPage === 'faq' && renderFAQ()}
        {currentPage === 'marketing' && renderMarketingHub()}
      </main>

      <AIChat />

      <footer className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-2 space-y-6">
              <h2 className="text-3xl brand-font font-bold text-orange-500">SINGH MART BAZZAAR</h2>
              <p className="text-gray-400 max-w-sm leading-relaxed">
                {MARKETING.socialMediaDescription.split(':')[1]}
              </p>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-orange-500 transition-colors"><Instagram size={20} /></a>
                <a href="#" className="hover:text-orange-500 transition-colors"><Facebook size={20} /></a>
                <a href="#" className="hover:text-orange-500 transition-colors"><Twitter size={20} /></a>
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-lg font-semibold uppercase tracking-wider">Navigation</h3>
              <ul className="space-y-2 text-gray-400">
                <li><button onClick={() => setCurrentPage('home')} className="hover:text-white transition-colors">Home</button></li>
                <li><button onClick={() => setCurrentPage('shop')} className="hover:text-white transition-colors">All Products</button></li>
                <li><button onClick={() => setCurrentPage('about')} className="hover:text-white transition-colors">Our Story</button></li>
                <li><button onClick={() => setCurrentPage('faq')} className="hover:text-white transition-colors">FAQs</button></li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold uppercase tracking-wider">Newsletter</h3>
              <p className="text-sm text-gray-400">Join our club for exclusive access to heritage drops.</p>
              <div className="flex space-x-2">
                <input 
                  type="email" 
                  placeholder="Email address" 
                  className="bg-gray-800 border-none rounded px-4 py-2 text-sm flex-1 focus:ring-1 focus:ring-orange-500"
                />
                <button className="bg-orange-700 hover:bg-orange-800 px-4 py-2 rounded text-sm transition-colors">Join</button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 uppercase tracking-widest">
            <p>© 2024 Singh Mart Bazaar. All heritage preserved.</p>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-white">Privacy Policy</a>
              <a href="#" className="hover:text-white">Terms of Service</a>
              <a href="#" className="hover:text-white">Accessibility</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
