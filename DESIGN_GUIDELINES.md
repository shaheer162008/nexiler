# Design Guidelines - Nexiler Agency Website

## 🎨 Overall Design Philosophy
**Style:** Notion.com inspired - Clean, minimal, professional
**Theme:** Light mode only (Black text on White background)
**Approach:** Modern minimalism with flat design

---

## 📐 Spacing & Layout

### Section Spacing
- **Top Padding:** `pt-8` (consistent across all sections)
- **Bottom Padding:** `pb-16` (consistent across all sections)
- **Side Padding:** `px-4 sm:px-6 lg:px-8` (responsive)
- **Max Width:** `max-w-4xl mx-auto` or `max-w-5xl mx-auto` (centered content container)

### Component Gaps
- **Between sections:** Minimal gap (pt-8)
- **Internal spacing:** `space-y-6` for vertical stacks
- **Grid gaps:** `gap-6` for cards/items

---

## 🎯 Typography

### Headings
```tsx
// Main Headings (Hero, Section Titles)
className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-black leading-tight px-2"

// Sub Headings (CTA sections)
className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-black leading-tight"

// Card Titles
className="text-xl font-bold text-black mb-3"
```

### Body Text
```tsx
// Description text
className="text-sm sm:text-base md:text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed px-2"

// Card descriptions
className="text-sm text-gray-600 leading-relaxed"
```

### Font Properties
- **Weight:** `font-bold` for headings, `font-semibold` for buttons/labels
- **Tracking:** `tracking-tight` for all headings
- **Leading:** `leading-tight` for headings, `leading-relaxed` for body

---

## 🎨 Color Palette

### Primary Colors
- **Black:** `text-black` (headings, icons, primary text)
- **White:** `bg-white` (backgrounds, card backgrounds)
- **Gray-700:** `text-gray-700` (body text)
- **Gray-600:** `text-gray-600` (secondary text, stats labels)

### Button Colors (Black & White Only)
- **Primary Button:** `bg-black` with `hover:bg-gray-800` and white text
- **Secondary Button:** `bg-white` with `border-gray-200` and black text
- **No color buttons** - Only black/white theme

### Borders
- **Light Border:** `border border-gray-200` (default for all cards/sections)
- **Hover Border:** `hover:border-gray-300`
- **No background tint** - Keep cards white `bg-white`

---

## 🃏 Card Styling

### Flat Card Design (NO SHADOWS!)
```tsx
className="p-8 rounded-2xl border border-gray-200 bg-white hover:border-gray-300 transition-all cursor-pointer"
```

### Key Properties
- **Border Radius:** `rounded-2xl` (consistent across all cards)
- **Border:** `border border-gray-200` (thin, light border)
- **Shadow:** ❌ NEVER use shadows (`shadow-*` classes)
- **Hover:** Only change border color to `border-gray-300`
- **Padding:** `p-8` for cards, `p-8 sm:p-12` for CTA sections
- **Background:** Always white `bg-white` for cards

---

## 🔘 Button Styling

### Primary Button (Main CTA)
```tsx
className="px-5 py-2.5 bg-black hover:bg-gray-800 text-white rounded-md font-semibold text-sm transition-colors"
```

### Secondary Button
```tsx
className="px-5 py-2.5 bg-white border border-gray-200 hover:bg-gray-50 text-black rounded-md font-semibold text-sm transition-colors"
```

### Button Rules
- **Border Radius:** `rounded-md` or `rounded-lg` (consistent)
- **Size:** `px-5 py-2.5` or `px-6 py-3` (compact, Notion-style)
- **Text:** `font-semibold text-sm`
- **Hover:** Only color change, NO scale or shadow
- **Transition:** `transition-colors` only
- **Icons:** `w-5 h-5` with gap-2 spacing

---

## 📱 Responsive Design

### Grid Layouts
```tsx
// Services Grid (3 columns on desktop)
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"

// Stats Grid (4 columns on desktop)
className="grid grid-cols-2 md:grid-cols-4 gap-6"
```

### Breakpoints
- **Mobile:** Base classes (no prefix)
- **Tablet:** `sm:` prefix (640px+)
- **Desktop:** `md:` prefix (768px+)
- **Large:** `lg:` prefix (1024px+)

---

## 🚫 Design DON'Ts

### NEVER Use:
❌ Drop shadows (`shadow-*`)
❌ Heavy shadows (`shadow-lg`, `shadow-xl`, `shadow-2xl`)
❌ Scale effects (`scale-105`, `hover:scale-*`)
❌ Colored backgrounds for CTA sections (keep white)
❌ Gradient backgrounds
❌ Multiple accent colors (stick to black/white only)
❌ Complex animations (only `transition-colors` or `transition-all`)

### ALWAYS Use:
✅ Flat cards with light borders
✅ `rounded-2xl` for cards, `rounded-md` or `rounded-lg` for buttons
✅ Black text on white background
✅ Simple hover states (color/border changes only)
✅ Consistent spacing (`pt-8 pb-16`)
✅ Black/white buttons only (no color)
✅ Gray borders (`border-gray-200`)
✅ White card backgrounds (`bg-white`)

---

## 🏗️ Component Structure Template

```tsx
<section className="pt-8 pb-16 px-4 sm:px-6 lg:px-8 bg-white">
  <div className="max-w-4xl mx-auto">
    {/* Header */}
    <div className="text-center space-y-6 mb-12">
      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-black leading-tight px-2">
        Section Title
      </h2>
      <p className="text-sm sm:text-base md:text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed px-2">
        Section description
      </p>
    </div>

    {/* Content Cards */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
      {/* Card items with bg-white */}
    </div>

    {/* CTA Section */}
    <div className="rounded-2xl border border-gray-200 bg-white p-8 sm:p-12">
      {/* CTA content - always white background */}
    </div>
  </div>
</section>
```

---

## 🔗 Navigation & Links

### Navbar
- Fixed position: `fixed top-0 left-0 right-0 z-50`
- Background: `bg-white border-b border-gray-200`
- Height: `h-14`
- Logo width: `w-32` with `h-auto`

### Link Hover Effects
```tsx
className="text-sm text-black font-semibold hover:scale-110 transition-transform"
```

---

## 📊 Icons

### Icon Styling
- **Size:** `w-8 h-8` for service icons, `w-5 h-5` for button icons
- **Color:** `text-black` (simple, no gradients)
- **Container:** `w-16 h-16` with flex center alignment and `bg-gray-50 rounded-2xl`

---

## ✅ Quality Checklist

Before pushing any component, verify:

- [ ] Uses `pt-8 pb-16` spacing
- [ ] Max width is `max-w-4xl mx-auto` or `max-w-5xl mx-auto`
- [ ] No shadows anywhere
- [ ] Cards use `rounded-2xl`, buttons use `rounded-md` or `rounded-lg`
- [ ] Buttons use exact button template above (black/white only)
- [ ] Text uses proper typography classes
- [ ] Borders are `border-gray-200`
- [ ] Hover only changes colors (no scale/shadow)
- [ ] NO colored buttons - only black/white theme
- [ ] All text is black or gray (no other colors)
- [ ] Responsive grid uses proper breakpoints with `gap-6`
- [ ] Icons are simple black (`text-black`)
- [ ] All card backgrounds are white (`bg-white`)
- [ ] CTA sections have white backgrounds (NOT gray-50)

---

## 📝 Notes

- This design is inspired by **Notion.com** - keep it minimal and professional
- Focus on **content readability** over flashy effects
- **Consistency** is key - all sections should look cohesive
- When in doubt, **remove** decoration rather than add it
- **White space** is your friend - don't overcrowd sections
- **Always use white backgrounds** for cards and CTA sections
- **Black and white only** for buttons - no colors

---

**Version:** 2.0
**Last Updated:** November 5, 2025
**Maintained by:** Nexiler Team
