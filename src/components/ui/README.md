# Custom UI Components

This folder contains reusable custom UI components for the Nexiler website.

## Components

### 1. Dropdown (Navigation Dropdown)
**File:** `dropdown.tsx`

A navigation dropdown component for menus and navigation items. Features hover to open/close functionality.

**Usage:**
```tsx
import Dropdown from '@/components/ui/dropdown';

const items = [
  { name: 'Web Development', href: '/services/web-development' },
  { name: 'Mobile Apps', href: '/services/mobile-apps' },
];

<Dropdown 
  trigger={{ label: 'Services', href: '/services' }}
  items={items}
  columns={2}  // 1 or 2 columns
/>
```

**Props:**
- `trigger`: Object with `label` (string) and optional `href` (string)
- `items`: Array of objects with `name`, `href`, and optional `description`
- `columns`: 1 or 2 (default: 1)
- `className`: Optional additional CSS classes

**Features:**
- Hover to open/close
- 1 or 2 column layouts
- Optional item descriptions
- Auto-close on click
- Smooth animations

---

### 2. Select (Form Dropdown)
**File:** `select.tsx`

A custom select/dropdown component for forms and filters. Replaces native `<select>` elements with a custom styled version.

**Usage:**
```tsx
import Select from '@/components/ui/select';

const options = [
  { value: 'web-dev', label: 'Web Development' },
  { value: 'mobile', label: 'Mobile Apps' },
];

<Select
  options={options}
  value={selectedValue}
  onChange={(value) => setSelectedValue(value)}
  placeholder="Select a service"
  required
/>
```

**Props:**
- `options`: Array of `{ value: string, label: string }`
- `value`: Current selected value (string)
- `onChange`: Callback function `(value: string) => void`
- `placeholder`: Placeholder text (default: "Select an option")
- `className`: Optional additional CSS classes
- `disabled`: Boolean (default: false)
- `required`: Boolean for form validation (default: false)
- `name`: Form field name
- `id`: Form field ID

**Features:**
- Custom styled dropdown with consistent design
- Click outside to close
- Keyboard accessible
- Hidden native select for form submission
- Check icon for selected option
- Smooth animations
- Scrollable list for many options
- Border styling consistent with site (`border-2 border-gray-400`)

**Examples:**

Contact Form:
```tsx
const serviceOptions = [
  { value: 'web-development', label: 'Web Development' },
  { value: 'mobile-apps', label: 'Mobile Apps' },
];

<Select
  id="service"
  name="service"
  value={formData.service}
  onChange={(value) => handleSelectChange('service', value)}
  options={serviceOptions}
  placeholder="Select a service"
  required
/>
```

## Styling

Both components follow the site's design system:
- Border: `border-gray-300` or `border-2 border-gray-400`
- Focus: `focus:border-black`
- Hover: `hover:bg-gray-50`
- Text: Black text with gray placeholders
- Shadows: `shadow-xl` for dropdowns
- Transitions: Smooth color and transform transitions

## Where Used

### Dropdown Component:
- `navbar.tsx` - Services and Packages navigation dropdowns

### Select Component:
- `contact/contact_form.tsx` - Service and Budget selection fields
- Can be used in any form that needs custom dropdown selects
