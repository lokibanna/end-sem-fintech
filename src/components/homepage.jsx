import React, { useState } from 'react';
import './HomePage.css';

const HomePage = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  // Features data
  const features = [
    {
      id: 1,
      title: "Easy Tracking",
      description: "Quickly add your income and expenses with our simple interface. Keep track of every dollar coming in and going out.",
      icon: "💰",
      details: [
        "Simple one-click entry",
        "Income & expense categories",
        "Real-time transaction history",
        "Quick delete & edit options"
      ]
    },
    {
      id: 2,
      title: "Financial Insights",
      description: "See your financial health at a glance with our intuitive dashboard. Know exactly where your money is going.",
      icon: "📊",
      details: [
        "Interactive dashboard",
        "Visual spending patterns",
        "Monthly/yearly reports",
        "Balance tracking"
      ]
    },
    {
      id: 3,
      title: "Smart Budgeting",
      description: "Set budgets and track your progress. Get insights to help you save more and spend wisely.",
      icon: "🎯",
      details: [
        "Custom budget limits",
        "Progress tracking",
        "Overspend alerts",
        "Savings recommendations"
      ]
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "College Student",
      text: "This app helped me manage my college expenses perfectly! Super easy to use.",
      rating: 5
    },
    {
      name: "Mike Chen",
      role: "Young Professional",
      text: "Finally, a finance tracker that doesn't complicate things. Love the simple interface!",
      rating: 5
    },
    {
      name: "Emily Davis",
      role: "Freelancer",
      text: "Great for tracking multiple income sources. The insights feature is amazing!",
      rating: 5
    }
  ];

  return (
    <div className="home-page">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <span className="logo-icon">💰</span>
            <span className="logo-text">FinanceTracker</span>
          </div>
          <div className="nav-links">
            <a href="#features">Features</a>
            <a href="#about">About</a>
            <a href="#testimonials">Reviews</a>
            <button className="cta-btn">Get Started</button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-title">
              Take Control of Your 
              <span className="highlight"> Finances</span>
            </h1>
            <p className="hero-subtitle">
              Simple, powerful, and intuitive finance tracking for students and young professionals. 
              Start managing your money like a pro today!
            </p>
            <div className="hero-buttons">
              <button className="btn-primary">Start Tracking Now</button>
              <button className="btn-secondary">Watch Demo</button>
            </div>
            <div className="hero-stats">
              <div className="stat">
                <span className="stat-number">10K+</span>
                <span className="stat-label">Happy Users</span>
              </div>
              <div className="stat">
                <span className="stat-number">$2M+</span>
                <span className="stat-label">Money Tracked</span>
              </div>
              <div className="stat">
                <span className="stat-number">4.9★</span>
                <span className="stat-label">User Rating</span>
              </div>
            </div>
          </div>
          <div className="hero-visual">
            <div className="phone-mockup">
              <div className="phone-screen">
                <div className="app-preview">
                  <div className="preview-header">
                    <div className="preview-balance">
                      <span className="balance-label">Current Balance</span>
                      <span className="balance-amount">$2,450.00</span>
                    </div>
                  </div>
                  <div className="preview-transactions">
                    <div className="transaction income">
                      <span>💰 Salary</span>
                      <span>+$2,500</span>
                    </div>
                    <div className="transaction expense">
                      <span>🍕 Food</span>
                      <span>-$50</span>
                    </div>
                    <div className="transaction expense">
                      <span>🚌 Transport</span>
                      <span>-$25</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features">
        <div className="container">
          <div className="section-header">
            <h2>Powerful Features for Smart Money Management</h2>
            <p>Everything you need to take control of your finances in one simple app</p>
          </div>
          
          <div className="features-grid">
            {features.map((feature, index) => (
              <div 
                key={feature.id}
                className={`feature-card ${activeFeature === index ? 'active' : ''}`}
                onClick={() => setActiveFeature(index)}
              >
                <div className="feature-icon">{feature.icon}</div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
                <ul className="feature-details">
                  {feature.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="how-it-works">
        <div className="container">
          <div className="section-header">
            <h2>How It Works</h2>
            <p>Get started in just 3 simple steps</p>
          </div>
          
          <div className="steps">
            <div className="step">
              <div className="step-number">1</div>
              <div className="step-content">
                <h3>Add Your Transactions</h3>
                <p>Quickly input your income and expenses with our simple form. Takes less than 10 seconds!</p>
              </div>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <div className="step-content">
                <h3>View Your Insights</h3>
                <p>See your financial overview with beautiful charts and real-time balance tracking.</p>
              </div>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <div className="step-content">
                <h3>Set Smart Budgets</h3>
                <p>Create budgets for different categories and track your progress with visual indicators.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="testimonials">
        <div className="container">
          <div className="section-header">
            <h2>What Our Users Say</h2>
            <p>Join thousands of happy users who've transformed their finances</p>
          </div>
          
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <div className="stars">
                  {Array.from({length: testimonial.rating}, (_, i) => (
                    <span key={i}>⭐</span>
                  ))}
                </div>
                <p className="testimonial-text">"{testimonial.text}"</p>
                <div className="testimonial-author">
                  <strong>{testimonial.name}</strong>
                  <span>{testimonial.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Take Control of Your Money?</h2>
            <p>Join thousands of users who are already managing their finances smarter</p>
            <button className="btn-primary large">Start Your Financial Journey</button>
            <p className="cta-note">✅ Free to use • ✅ No credit card required • ✅ Setup in 2 minutes</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-left">
              <div className="footer-logo">
                <span className="logo-icon">💰</span>
                <span className="logo-text">FinanceTracker</span>
              </div>
              <p>Making personal finance simple and accessible for everyone.</p>
            </div>
            <div className="footer-links">
              <div className="link-group">
                <h4>Product</h4>
                <a href="#features">Features</a>
                <a href="#">Pricing</a>
                <a href="#">Updates</a>
              </div>
              <div className="link-group">
                <h4>Support</h4>
                <a href="#">Help Center</a>
                <a href="#">Contact Us</a>
                <a href="#">FAQ</a>
              </div>
              <div className="link-group">
                <h4>Company</h4>
                <a href="#about">About</a>
                <a href="#">Blog</a>
                <a href="#">Privacy</a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 FinanceTracker. Made with ❤️ for students.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;