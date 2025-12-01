# Digital Watch with Real Battery API ⚡

A responsive digital watch application that displays real-time battery information using the Web Battery API. This project features a modern UI with mobile-first design, real-time updates, and comprehensive battery monitoring.

![Digital Watch Preview](https://img.shields.io/badge/Demo-Live-brightgreen) ![Responsive](https://img.shields.io/badge/Responsive-Yes-blue) ![Battery-API](https://img.shields.io/badge/Battery_API-Implemented-green)

## ✨ Features

### 🕐 Time Display
- **Real-time clock** with hours, minutes, and seconds
- **12/24 hour format** with AM/PM indicator
- **Day/Night detection** with visual indicators
- **Current date** with weekday and month
- **Timezone-aware** display

### 🔋 Battery Monitoring (Real API)
- **Real battery percentage** using `navigator.getBattery()`
- **Charging status detection** (charging/not charging)
- **Time estimations**:
  - Time until fully charged (when charging)
  - Time until empty (when discharging)
- **Battery health indicator** based on charge level
- **Visual battery level bar** with color coding

### 📱 Responsive Design
- **Mobile-first approach** with Tailwind CSS
- **Adaptive layout** for mobile, tablet, and desktop
- **Touch-friendly** interactive elements
- **Responsive typography** that scales appropriately

### 🎨 Visual Design
- **Gradient backgrounds** with sky blue theme
- **Nabla font** for the watch display (retro-futuristic style)
- **Animated elements** for time transitions and battery charging
- **Color-coded battery status**:
  - 🟢 Green: 80%+ (Excellent)
  - 🔵 Blue: 50-79% (Good)
  - 🟡 Yellow: 20-49% (Fair)
  - 🔴 Red: Below 20% (Poor)
  - 🟣 Purple: Charging (with animation)

## 🛠️ Tech Stack

| Technology | Purpose | Version |
|------------|---------|---------|
| <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" width="20" height="20"> **HTML5** | Markup structure | Latest |
| <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" width="20" height="20"> **CSS3** | Custom styling & animations | Latest |
| <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" width="20" height="20"> **JavaScript (ES6+)** | Application logic & Battery API | ES2022 |
| <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" width="20" height="20"> **Tailwind CSS** | Utility-first CSS framework | 3.3+ |
| <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" width="20" height="20"> **Google Fonts** | Typography (Nabla, Stack Sans Text) | Latest |
| <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fontawesome/fontawesome-original.svg" width="20" height="20"> **Font Awesome** | Icon library | 6.4.0 |
| <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/chrome/chrome-original.svg" width="20" height="20"> **Web Battery API** | Real battery information | Browser API |

### Tech Stack Icons
```markdown
- <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" width="16" height="16"> **HTML5** - Semantic markup and structure
- <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" width="16" height="16"> **CSS3** - Styling, animations, and responsive design
- <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" width="16" height="16"> **JavaScript** - Dynamic functionality and Battery API
- <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" width="16" height="16"> **Tailwind CSS** - Rapid UI development
- <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" width="16" height="16"> **Google Fonts** - Custom typography
- <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fontawesome/fontawesome-original.svg" width="16" height="16"> **Font Awesome** - Icon system
- <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/chrome/chrome-original.svg" width="16" height="16"> **Web APIs** - Browser-native functionality
```

## 📁 Project Structure

```
digital-watch/
│
├── index.html              # Main HTML file
│
├── 🎨 STYLES
│   ├── Tailwind CSS       # Utility classes via CDN
│   ├── Google Fonts       # Custom typography
│   └── Custom CSS         # Animations & overrides
│
├── ⚙️ FUNCTIONALITY
│   ├── Real-time clock    # Updates every second
│   ├── Battery API        # Real battery monitoring
│   ├── Responsive design  # Screen size detection
│   └── Interactive UI     # Click animations
│
└── 📱 RESPONSIVE BREAKPOINTS
    ├── Mobile: < 640px
    ├── Tablet: 641px - 768px
    └── Desktop: > 769px
```

## 🚀 Getting Started

### Prerequisites
- <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/chrome/chrome-original.svg" width="16" height="16"> Modern web browser with Battery API support (Chrome, Edge, Opera)
- <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" width="16" height="16"> For local development: any code editor

### Installation & Usage

1. **Clone or download** the repository:
   ```bash
   git clone https://github.com/Nethononda-Nyandano/digital-watch.git
   ```

2. **Open** `index.html` in a browser:
   - Double-click the file, or
   - Use a local server for best results

3. **View the application**:
   - The watch will display current time
   - Battery information will load automatically
   - Resize browser to see responsive design

### Quick Start (One File)
Since this is a single HTML file with CDN dependencies, you can simply:
1. Copy the entire HTML code
2. Save as `index.html`
3. Open in any modern browser

## 🔧 How It Works

### Time Display System
```javascript
// Updates time every second
setInterval(() => {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    
    // Format with leading zeros
    hr.innerHTML = hours < 10 ? "0" + hours : hours;
    // ... update minutes and seconds
}, 1000);
```

### Real Battery API Implementation
```javascript
// Access the Battery API
async function initBatteryAPI() {
    if ('getBattery' in navigator) {
        battery = await navigator.getBattery();
        
        // Event listeners for battery changes
        battery.addEventListener('levelchange', updateBatteryInfo);
        battery.addEventListener('chargingchange', updateBatteryInfo);
        battery.addEventListener('chargingtimechange', updateBatteryInfo);
        battery.addEventListener('dischargingtimechange', updateBatteryInfo);
        
        updateBatteryInfo(); // Initial update
    }
}
```

### Responsive Design
- Uses Tailwind's responsive utility classes
- CSS media queries for custom breakpoints
- JavaScript screen size detection
- Flexible container layouts

## 🌐 Browser Compatibility

| Browser | Battery API | Flexbox/Grid | CSS Animations | ES6+ |
|---------|-------------|--------------|----------------|------|
| <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/chrome/chrome-original.svg" width="16" height="16"> Chrome | ✅ 38+ | ✅ | ✅ | ✅ |
| <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firefox/firefox-original.svg" width="16" height="16"> Firefox | ❌ (Removed) | ✅ | ✅ | ✅ |
| <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/safari/safari-original.svg" width="16" height="16"> Safari | ❌ | ✅ | ✅ | ✅ |
| <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/edge/edge-original.svg" width="16" height="16"> Edge | ✅ 79+ | ✅ | ✅ | ✅ |
| <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opera/opera-original.svg" width="16" height="16"> Opera | ✅ 25+ | ✅ | ✅ | ✅ |

**Note**: Battery API works on HTTPS in production. For local development, it works on `localhost`.

## 🎯 Key Components

### 1. Watch Display
- **Font**: Nabla with EDPT variation for retro look
- **Size**: Responsive from 4rem (mobile) to 8rem (desktop)
- **Format**: HH:MM:SS with AM/PM indicator

### 2. Battery Panel
- **Level Bar**: Visual representation of battery percentage
- **Status Indicators**: Charging, discharging, full
- **Time Estimates**: Calculated based on current rate
- **Health Assessment**: Simulated based on charge level

### 3. Responsive Features
- **Screen Detection**: Shows mobile/tablet/desktop status
- **Adaptive Layout**: Grid and flexbox adjustments
- **Touch Optimization**: Larger tap targets for mobile

## 📱 Mobile Optimizations

- **Touch-friendly buttons** with visual feedback
- **Appropriate font sizes** for small screens
- **Stacked layout** on mobile, side-by-side on desktop
- **Battery-saving** efficient updates
- **No horizontal scrolling** ensured

## 🚨 Known Limitations

1. **Battery API Support**:
   - Not available in Firefox (removed for privacy)
   - Requires HTTPS in production environments
   - May show "API not supported" in unsupported browsers

2. **Browser Permissions**:
   - No permissions required (unlike other device APIs)
   - Read-only access to battery information

3. **Accuracy**:
   - Time estimates are approximations
   - Battery health is simulated based on charge level

## 🔮 Future Enhancements

| Status | Feature | Description |
|--------|---------|-------------|
| ⏳ | Dark/light theme toggle | User preference based themes |
| ⏳ | Multiple timezone support | Display multiple time zones |
| ⏳ | Alarm and timer functionality | Additional time features |
| ⏳ | Battery history chart | Graph of battery usage over time |
| ⏳ | PWA installation support | Install as progressive web app |
| ⏳ | Offline capability | Work without internet connection |
| ⏳ | Customizable themes | User-defined color schemes |
| ⏳ | Voice time announcements | Accessibility feature |

## 🤝 Contributing

<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" width="16" height="16"> Contributions are welcome! Here's how:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/AmazingFeature`)
3. **Commit** your changes (`git commit -m 'Add some AmazingFeature'`)
4. **Push** to the branch (`git push origin feature/AmazingFeature`)
5. **Open** a Pull Request

### Development Guidelines
- Follow existing code style
- Test on multiple screen sizes
- Ensure Battery API fallbacks work
- Update documentation as needed

## 📄 License

<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/license/license-plain.svg" width="16" height="16"> This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

##  Acknowledgments

- **Google Fonts** for the Nabla typeface
- **Tailwind CSS** for the utility-first framework
- **Font Awesome** for the icon library
- **W3C** for the Web Battery API specification
- **Browser vendors** for implementing modern web APIs

## 📧 Contact

For questions or feedback:

- <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" width="16" height="16"> **GitHub Issues**: [Open an issue](https://github.com/Nethononda-Nyandano/digital-watch/issues)
- <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" width="16" height="16"> **Email**: nyandanonethononda8@gmail.com


---

**⭐ If you find this project useful, please give it a star on GitHub!**

---

*Last Updated: November 2025 | Version: 1.0.0 | Built with <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" width="14" height="14"> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" width="14" height="14"> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" width="14" height="14"> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" width="14" height="14">*

