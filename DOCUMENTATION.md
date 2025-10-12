# 🚀 Reactfolio - Personal Portfolio & Food Bot

A modern, responsive personal portfolio website built with React, featuring an integrated AI-powered food recommendation chatbot with session management capabilities.

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Installation & Setup](#installation--setup)
- [Configuration](#configuration)
- [API Integration](#api-integration)
- [Session Management](#session-management)
- [Components](#components)
- [Styling](#styling)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## 🎯 Overview

Reactfolio is a comprehensive personal portfolio website that showcases professional information, projects, skills, and includes an advanced AI-powered food recommendation chatbot. The application features modern design principles, responsive layouts, and seamless user experience.

### Key Highlights

- **Modern React Architecture**: Built with React 18 and modern hooks
- **Responsive Design**: Mobile-first approach with CSS Grid and Flexbox
- **AI Integration**: Intelligent food recommendation chatbot
- **Session Management**: Multi-session conversation support
- **Real-time Features**: Live chat with typing indicators
- **Authentication**: Secure JWT-based authentication
- **Email Integration**: Contact form with EmailJS
- **SEO Optimized**: Meta tags and structured data

## ✨ Features

### Portfolio Features
- **Homepage**: Hero section with animated elements
- **About**: Personal information and social links
- **Projects**: Portfolio showcase with filtering
- **Skills**: Technical skills visualization
- **Contact**: Interactive contact form with email integration
- **404 Page**: Custom error page

### Food Bot Features
- **AI Chat Interface**: Conversational food recommendations
- **Session Management**: Multiple conversation sessions
- **Preference Learning**: Adaptive preference collection
- **Real-time Messaging**: Live chat with typing indicators
- **Message Formatting**: Support for newlines and bold text
- **Session History**: Persistent conversation history
- **User Authentication**: Secure login/registration

### Technical Features
- **Responsive Design**: Works on all device sizes
- **Dark/Light Theme**: Theme toggle functionality
- **Loading States**: Smooth loading animations
- **Error Handling**: Comprehensive error management
- **Auto-logout**: Session expiration handling
- **Accessibility**: WCAG compliant components

## 🛠 Tech Stack

### Frontend
- **React 18.2.0** - UI library
- **React Router 6.11.1** - Client-side routing
- **React Helmet 6.1.0** - SEO management
- **FontAwesome 6.4.0** - Icon library
- **Styled Components 5.3.10** - CSS-in-JS
- **React GA4 2.1.0** - Analytics

### Backend Integration
- **RESTful API** - Food Bot API integration
- **JWT Authentication** - Secure token-based auth
- **EmailJS 4.4.1** - Email service integration

### Development Tools
- **Create React App** - Development environment
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **GitHub Pages** - Deployment

## 📁 Project Structure

```
reactfolio/
├── public/
│   ├── index.html
│   ├── favicon.ico
│   └── images/
├── src/
│   ├── components/
│   │   ├── common/
│   │   │   ├── card.jsx
│   │   │   ├── footer.jsx
│   │   │   ├── lazyImage.jsx
│   │   │   ├── loading.jsx
│   │   │   ├── logo.jsx
│   │   │   ├── navBar.jsx
│   │   │   ├── themeToggle.jsx
│   │   │   └── styles/
│   │   ├── contact/
│   │   │   ├── contactForm.jsx
│   │   │   └── styles/
│   │   ├── homepage/
│   │   │   ├── works.jsx
│   │   │   └── styles/
│   │   ├── projects/
│   │   │   ├── allProjects.jsx
│   │   │   ├── project.jsx
│   │   │   └── styles/
│   │   ├── skills/
│   │   │   ├── skills.jsx
│   │   │   └── styles/
│   │   └── chatbot/
│   │       ├── authForm.jsx
│   │       ├── chatInterface.jsx
│   │       ├── chatbotDashboard.jsx
│   │       ├── dashboardHeader.jsx
│   │       └── styles/
│   ├── data/
│   │   ├── user.js
│   │   ├── seo.js
│   │   ├── styles.css
│   │   └── tracking.js
│   ├── services/
│   │   ├── foodBotApi.js
│   │   └── chatService.js
│   ├── pages/
│   │   ├── about.jsx
│   │   ├── contact.jsx
│   │   ├── homepage.jsx
│   │   ├── projects.jsx
│   │   ├── skills.jsx
│   │   ├── chatbot.jsx
│   │   ├── 404.jsx
│   │   └── styles/
│   ├── App.js
│   ├── index.js
│   └── index.css
├── package.json
├── README.md
└── DOCUMENTATION.md
```

## 🚀 Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- Git

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/reactfolio.git
   cd reactfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start development server**
   ```bash
   npm start
   # or
   yarn start
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

### Build for Production

```bash
npm run build
# or
yarn build
```

## ⚙️ Configuration

### Environment Variables

Create a `.env` file in the root directory:

```env
# Food Bot API Configuration
REACT_APP_API_BASE_URL=https://food-bot-backend-gwvsmxazbq-el.a.run.app

# EmailJS Configuration (for contact form)
REACT_APP_EMAILJS_SERVICE_ID=your_service_id
REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key

# Google Analytics (optional)
REACT_APP_GA_TRACKING_ID=your_ga_tracking_id
```

### Personal Information

Update your personal information in `src/data/user.js`:

```javascript
export const INFO = {
  main: {
    title: "Your Name",
    name: "Your Full Name",
    email: "your.email@example.com",
    logo: "path/to/your/logo.png",
    description: "Your professional description"
  },
  socials: {
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourprofile"
  },
  // ... other sections
};
```

### SEO Configuration

Update SEO settings in `src/data/seo.js`:

```javascript
export const SEO = [
  {
    page: "homepage",
    description: "Your homepage description",
    keywords: ["keyword1", "keyword2", "keyword3"]
  },
  // ... other pages
];
```

## 🔌 API Integration

### Food Bot API

The application integrates with a comprehensive Food Bot API that provides:

#### Authentication Endpoints
- `POST /api/register` - User registration
- `POST /api/login` - User authentication
- `GET /api/profile` - Get user profile

#### Chat Endpoints
- `POST /api/chat` - Send message to AI
- `GET /api/preferences` - Get user preferences
- `PUT /api/preferences` - Update user preferences

#### Session Management
- `POST /api/sessions` - Create new session
- `GET /api/sessions` - Get user sessions
- `GET /api/sessions/{id}/history` - Get session history
- `DELETE /api/sessions/{id}` - Delete session
- `DELETE /api/sessions/{id}/history` - Clear session history

#### Health Check
- `GET /api/health` - API health status

### API Service Implementation

The `foodBotApi.js` service handles all API communications:

```javascript
import foodBotAPI from './services/foodBotApi';

// Register user
const result = await foodBotAPI.registerUser({
  username: 'testuser',
  email: 'test@example.com',
  password: 'password123'
});

// Send chat message
const response = await foodBotAPI.sendMessage('Hello!', sessionId);

// Create new session
const session = await foodBotAPI.createSession('My Session');
```

## 💬 Session Management

### Session Features

The chatbot supports advanced session management with UUID-based session identification:

#### Session Creation
- Create named or unnamed sessions
- Automatic UUID session ID generation
- Session metadata tracking
- UUID validation and formatting

#### Session Switching
- Switch between multiple conversations
- Load conversation history
- Maintain context across sessions

#### Session Management
- View all user sessions
- Delete individual sessions
- Clear session history
- Session activity tracking

### Session UI Components

#### Session Manager Panel
- List of all user sessions
- Session metadata (message count, last activity)
- Quick session switching
- Session deletion

#### Session Controls
- New session creation
- Current session indicator
- Clear current session
- Session history loading

### Session State Management

```javascript
const [currentSessionId, setCurrentSessionId] = useState(null);

// Create new session (returns UUID)
const createNewSession = async (sessionName) => {
  const result = await foodBotAPI.createSession(sessionName);
  if (result.success) {
    // result.session_id is a UUID string
    setCurrentSessionId(result.session_id);
    setMessages([]);
  }
};

// Send message with session context
const sendMessage = async (message) => {
  const response = await foodBotAPI.sendMessage(message, currentSessionId);
  // currentSessionId is passed as UUID to maintain conversation context
};
```

### UUID Handling

The application properly handles UUID-based session IDs:

```javascript
// UUID validation
const isValidUUID = (uuid) => {
  const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
  return uuidRegex.test(uuid);
};

// Session ID display formatting
const formatSessionId = (sessionId) => {
  if (!sessionId) return "Connecting...";
  
  if (isValidUUID(sessionId)) {
    return `Session: ${sessionId.substring(0, 8)}...`;
  } else {
    return `Session: ${sessionId.substring(0, 8)}...`;
  }
};
```

## 🧩 Components

### Core Components

#### Navigation (`navBar.jsx`)
- Responsive navigation menu
- Active page highlighting
- Mobile hamburger menu
- Theme toggle integration

#### Footer (`footer.jsx`)
- Social media links
- Copyright information
- Responsive layout

#### Card (`card.jsx`)
- Reusable card component
- Hover animations
- Flexible content support

### Page Components

#### Homepage (`homepage.jsx`)
- Hero section with animations
- Featured works showcase
- Call-to-action sections

#### About (`about.jsx`)
- Personal information display
- Social media integration
- Professional summary

#### Projects (`projects.jsx`)
- Project portfolio grid
- Filtering capabilities
- Project detail modals

#### Skills (`skills.jsx`)
- Skills visualization
- Progress indicators
- Category organization

#### Contact (`contact.jsx`)
- Contact form integration
- EmailJS integration
- Form validation

### Chatbot Components

#### AuthForm (`authForm.jsx`)
- User registration/login
- Form validation
- Error handling
- Demo credentials

#### ChatInterface (`chatInterface.jsx`)
- Real-time chat interface
- Message formatting
- Session management
- Typing indicators

#### ChatbotDashboard (`chatbotDashboard.jsx`)
- User dashboard
- Feature showcase
- Session controls
- Welcome interface

## 🎨 Styling

### CSS Architecture

The application uses a modular CSS approach:

#### Global Styles (`index.css`)
- CSS custom properties (variables)
- Reset styles
- Base typography
- Utility classes

#### Component Styles
- Scoped component styles
- BEM methodology
- Responsive design
- Animation keyframes

#### Design System
- Consistent color palette
- Typography scale
- Spacing system
- Shadow system

### Responsive Design

#### Breakpoints
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

#### Mobile-First Approach
```css
/* Mobile styles */
.component {
  padding: 1rem;
}

/* Tablet and up */
@media (min-width: 768px) {
  .component {
    padding: 2rem;
  }
}

/* Desktop and up */
@media (min-width: 1024px) {
  .component {
    padding: 3rem;
  }
}
```

### Theme Support

#### Light Theme (Default)
- Clean, modern design
- High contrast
- Professional appearance

#### Dark Theme Support
- Dark color scheme
- Reduced eye strain
- Consistent with system preferences

## 🚀 Deployment

### GitHub Pages

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy to GitHub Pages**
   ```bash
   npm run deploy
   ```

3. **Configure GitHub Pages**
   - Go to repository Settings
   - Navigate to Pages section
   - Select source branch (gh-pages)

### Other Deployment Options

#### Netlify
1. Connect your GitHub repository
2. Set build command: `npm run build`
3. Set publish directory: `build`
4. Deploy

#### Vercel
1. Import your GitHub repository
2. Framework preset: Create React App
3. Deploy

#### Custom Server
1. Build the project: `npm run build`
2. Serve the `build` folder
3. Configure server for SPA routing

## 🔧 Development

### Code Style

The project follows consistent coding standards:

#### JavaScript/React
- ES6+ features
- Functional components with hooks
- Consistent naming conventions
- JSDoc comments for functions

#### CSS
- BEM methodology
- Mobile-first responsive design
- Consistent spacing and typography
- CSS custom properties

### File Organization

```
src/
├── components/          # Reusable components
│   ├── common/         # Shared components
│   ├── [feature]/      # Feature-specific components
│   └── styles/         # Component styles
├── pages/              # Page components
├── services/           # API services
├── data/               # Static data
└── utils/              # Utility functions
```

### Adding New Features

1. **Create component structure**
   ```
   src/components/newFeature/
   ├── componentName.jsx
   └── styles/
       └── componentName.css
   ```

2. **Add to routing** (if needed)
   ```javascript
   // In App.js
   <Route path="/new-feature" element={<NewFeature />} />
   ```

3. **Update navigation** (if needed)
   ```javascript
   // In navBar.jsx
   <Link to="/new-feature">New Feature</Link>
   ```

## 🐛 Troubleshooting

### Common Issues

#### Build Errors
- Check Node.js version compatibility
- Clear node_modules and reinstall
- Verify environment variables

#### API Connection Issues
- Verify API base URL
- Check CORS configuration
- Validate authentication tokens

#### Styling Issues
- Check CSS specificity
- Verify responsive breakpoints
- Validate CSS syntax

### Debug Mode

Enable debug mode by setting:
```javascript
// In your component
const DEBUG = process.env.NODE_ENV === 'development';
```

## 📊 Performance

### Optimization Techniques

#### Code Splitting
- Lazy loading of components
- Route-based code splitting
- Dynamic imports

#### Image Optimization
- Lazy loading images
- Responsive images
- WebP format support

#### Bundle Optimization
- Tree shaking
- Minification
- Gzip compression

### Performance Metrics

- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1
- **First Input Delay**: < 100ms

## 🔒 Security

### Security Measures

#### Authentication
- JWT token-based authentication
- Automatic token expiration
- Secure token storage

#### Input Validation
- Client-side validation
- Server-side validation
- XSS protection

#### API Security
- HTTPS enforcement
- CORS configuration
- Rate limiting

## 📈 Analytics

### Google Analytics Integration

The application includes Google Analytics 4 integration:

```javascript
// In tracking.js
import ReactGA from 'react-ga4';

const TRACKING_ID = process.env.REACT_APP_GA_TRACKING_ID;
ReactGA.initialize(TRACKING_ID);
```

### Event Tracking

Track user interactions:
```javascript
// Track page views
ReactGA.send({ hitType: "pageview", page: "/about" });

// Track custom events
ReactGA.event({
  category: 'User',
  action: 'Chat Message Sent',
  label: 'Food Bot'
});
```

## 🤝 Contributing

### Contribution Guidelines

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/new-feature
   ```
3. **Make your changes**
4. **Test thoroughly**
5. **Submit a pull request**

### Code Review Process

- All changes require review
- Ensure tests pass
- Follow coding standards
- Update documentation

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- React team for the amazing framework
- FontAwesome for the icon library
- EmailJS for email service integration
- All contributors and users

## 📞 Support

For support and questions:

- **Email**: your.email@example.com
- **GitHub Issues**: [Create an issue](https://github.com/yourusername/reactfolio/issues)
- **Documentation**: [View docs](https://github.com/yourusername/reactfolio/wiki)

---

**Made with ❤️ by [Your Name]**

*Last updated: January 2025*
