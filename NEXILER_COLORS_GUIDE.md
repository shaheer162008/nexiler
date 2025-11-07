# Nexiler Color System - Usage Guide

## 🎨 Brand Color
**Nexiler Green:** `#87ed82`

---

## 📚 Available CSS Classes

### Background Classes
```tsx
// Main Nexiler green background
<div className="bg-nexiler">Content</div>

// Dark green background (for hover states)
<div className="bg-nexiler-dark">Content</div>

// Light green background
<div className="bg-nexiler-light">Content</div>

// Very subtle green background (for cards)
<div className="bg-nexiler-subtle">Content</div>
```

---

### Text Classes
```tsx
// Green text
<p className="text-nexiler">Green text here</p>

// Dark green text
<p className="text-nexiler-dark">Dark green text</p>
```

---

### Border Classes
```tsx
// Green border
<div className="border-2 border-nexiler">Card with green border</div>

// Dark green border
<div className="border-2 border-nexiler-dark">Card with dark green border</div>
```

---

### Hover Classes
```tsx
// Background changes to green on hover
<button className="bg-white hover:bg-nexiler">Hover me</button>

// Background changes to dark green on hover
<button className="bg-nexiler hover:bg-nexiler-dark">Hover me</button>

// Text color changes on hover
<a className="text-black hover:text-nexiler">Hover link</a>

// Border color changes on hover
<div className="border-2 border-gray-300 hover:border-nexiler">Hover card</div>
```

---

### Gradient Class
```tsx
// Beautiful green gradient (light to dark)
<div className="bg-nexiler-gradient">Gradient background</div>
```

---

## 💡 Common Use Cases

### 1. Primary Button
```tsx
<button className="px-6 py-3 bg-nexiler hover:bg-nexiler-dark text-white rounded-lg font-semibold transition-colors">
  Get Started
</button>
```

### 2. Secondary Button (Outlined)
```tsx
<button className="px-6 py-3 bg-white border-2 border-nexiler text-black hover:bg-nexiler rounded-lg font-semibold transition-colors">
  Learn More
</button>
```

### 3. Interactive Card
```tsx
<div className="p-6 bg-white border-2 border-gray-300 hover:border-nexiler hover:shadow-lg transition-all duration-300 rounded-xl">
  Card content
</div>
```

### 4. Icon Container
```tsx
<div className="w-16 h-16 bg-nexiler rounded-2xl flex items-center justify-center">
  <Icon className="w-8 h-8 text-white" />
</div>
```

### 5. Icon Container with Hover Effect
```tsx
<div className="group">
  <div className="w-16 h-16 bg-black group-hover:bg-nexiler rounded-2xl flex items-center justify-center transition-all duration-300">
    <Icon className="w-8 h-8 text-white" />
  </div>
</div>
```

### 6. Link with Hover
```tsx
<a href="#" className="text-black hover:text-nexiler transition-colors">
  Click me
</a>
```

### 7. Badge/Tag
```tsx
<span className="px-3 py-1 bg-nexiler-subtle text-nexiler rounded-full text-sm font-semibold">
  New
</span>
```

### 8. Stats Card with Hover
```tsx
<div className="group p-6 border-2 border-gray-300 hover:border-nexiler rounded-xl transition-all">
  <div className="text-4xl font-bold text-black group-hover:text-nexiler transition-colors">
    500+
  </div>
  <p className="text-gray-600">Projects</p>
</div>
```

---

## 🎯 Color Hierarchy (When to Use What)

### Use Nexiler Green For:
✅ Primary CTA buttons
✅ Important interactive elements (hover states)
✅ Icons that need emphasis
✅ Active states
✅ Links on hover
✅ Checkmarks and success indicators
✅ Progress indicators

### Don't Overuse:
❌ Not for all backgrounds (use white/black primarily)
❌ Not for body text (use black)
❌ Not for every border (use gray for subtle borders)

---

## 🔧 Color Variants

| Class | Color Code | When to Use |
|-------|-----------|-------------|
| `bg-nexiler` | #87ed82 | Primary buttons, main accents |
| `bg-nexiler-dark` | #6ed969 | Hover states, active states |
| `bg-nexiler-light` | #a0f29c | Gradients, subtle highlights |
| `bg-nexiler-subtle` | #e8fce7 | Card backgrounds, sections |

---

## 📝 Best Practices

1. **Keep it Simple**: Use green strategically, not everywhere
2. **Maintain Contrast**: Always ensure text is readable
3. **Consistent Hover**: Use `hover:bg-nexiler-dark` for buttons with `bg-nexiler`
4. **Smooth Transitions**: Always add `transition-colors` or `transition-all` with hover effects
5. **White Space**: Let the green breathe - don't overuse it

---

## 🚀 Quick Copy-Paste Components

### Hero CTA Section
```tsx
<div className="flex gap-4">
  <button className="px-8 py-3 bg-nexiler hover:bg-nexiler-dark text-white rounded-lg font-semibold transition-colors">
    Get Started
  </button>
  <button className="px-8 py-3 bg-white border-2 border-nexiler hover:bg-nexiler text-black rounded-lg font-semibold transition-colors">
    Learn More
  </button>
</div>
```

### Service Card
```tsx
<div className="group p-8 bg-white border-2 border-gray-300 hover:border-nexiler rounded-2xl transition-all duration-300">
  <div className="w-16 h-16 bg-black group-hover:bg-nexiler rounded-2xl flex items-center justify-center mb-6 transition-all">
    <Icon className="w-8 h-8 text-white" />
  </div>
  <h3 className="text-xl font-bold mb-3">Service Title</h3>
  <p className="text-gray-600">Service description here...</p>
</div>
```

### Newsletter Input
```tsx
<div className="flex gap-3">
  <input 
    type="email" 
    className="flex-1 px-4 py-3 border-2 border-nexiler rounded-lg focus:outline-none focus:border-nexiler-dark"
    placeholder="Enter email"
  />
  <button className="px-6 py-3 bg-nexiler hover:bg-nexiler-dark text-white rounded-lg font-semibold transition-colors">
    Subscribe
  </button>
</div>
```

---

## ⚠️ Important Notes

- All classes work with Tailwind CSS
- Always test on different backgrounds for contrast
- Use `transition-colors` or `transition-all` for smooth animations
- Combine with `group` and `group-hover:` for parent-child hover effects
- Mobile responsive - classes work on all screen sizes

---

**Questions? Check the examples above or experiment in your component!** 🎨✨
