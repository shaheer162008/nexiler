# Firebase Setup Guide - Complete Instructions

## 🔧 Step 1: Update Firebase Credentials (WHEN YOU CREATE NEW PROJECT)

### File: `.env`
Replace with your new Firebase credentials:

```dotenv
# Gmail Account (for email sending)
EMAIL_ADRESS=your-gmail@gmail.com
PASSWORD=your-gmail-app-password

# Firebase Admin (Firestore)
PROJECT_ID=your-firebase-project-id
PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n"
CLIENT_EMAIL=firebase-adminsdk-xxxxx@your-project.iam.gserviceaccount.com

# Google AI (for chatbot)
GOOGLE_AI_API_KEY=AIzaSyAzCQ6G5DgBljOyzB4THwboWR2Yy-gROzE
```

**Where to get these:**
1. **Firebase Console** → Project Settings → Service Accounts → Generate New Private Key
2. Copy entire service account JSON and extract:
   - `project_id` → `PROJECT_ID`
   - `private_key` → `PRIVATE_KEY` (include BEGIN/END lines)
   - `client_email` → `CLIENT_EMAIL`

---

### File: `firebase/init.ts`
Update with your new Firebase config:

```typescript
const firebaseConfig = {
  apiKey: "YOUR_API_KEY_HERE",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT.firebasestorage.app",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID",
  measurementId: "YOUR_MEASUREMENT_ID"
};
```

Get from: Firebase Console → Project Settings → Your apps → Config

---

### File: `firebase/firebase-admin.ts`
✅ **Already correct** - Uses env variables (no changes needed)

```typescript
if(!process.env.PROJECT_ID || !process.env.CLIENT_EMAIL || !process.env.PRIVATE_KEY) {
  throw new Error("Missing Firebase admin environment variables");
}
```

---

## 🔐 Step 2: Admin Authentication Setup

### Location: **Firebase Console → Authentication → Users**

**Manually add admin user:**
1. Go to Firebase Console
2. Select your project
3. Go to **Authentication** tab
4. Click **"Create user"** button
5. Enter:
   - Email: `admin@virtuoedge.tech`
   - Password: **Set whatever you want** (you'll remember it)
6. Click **"Create user"**

✅ **Code location:** `src/app/admin/page.tsx` (lines 37-52)
- Uses Firebase Authentication
- No password stored in database
- Fully secure

---

## 📊 Step 3: Firestore Database Structure

### Create these Collections in Firebase Console:

#### 1. **newsletterEmails** Collection
```
Field: email (string) - indexed
Field: subscribedAt (timestamp)
Field: source (string) = "website-newsletter"

Example document:
{
  email: "user@example.com",
  subscribedAt: 2026-01-15,
  source: "website-newsletter"
}
```

**Route:** `src/app/api/newsletter/route.ts`
- Line 17-24: Checks if email already exists
- Line 26-30: Returns "Already subscribed" message if found
- Line 33-38: Saves to database if new
- Line 40-102: Sends welcome email

---

#### 2. **consultations** Collection
```
Field: name (string)
Field: email (string)
Field: phone (string)
Field: service (string)
Field: budget (string)
Field: preferredDate (string)
Field: preferredTime (string)
Field: clientTimezone (string)
Field: message (string)
Field: createdAt (timestamp)
Field: status (string) = "pending"

Example:
{
  name: "John Doe",
  email: "john@example.com",
  phone: "+923001234567",
  service: "Web Development",
  budget: "$5000-$10000",
  preferredDate: "2026-01-20",
  preferredTime: "10:00 AM",
  clientTimezone: "PKT",
  message: "Custom website needed",
  createdAt: 2026-01-15,
  status: "pending"
}
```

**Route:** `src/app/api/consultation/route.ts`
- Saves consultation data
- Sends confirmation email to client
- Sends notification to admin@virtuoedge.tech

---

#### 3. **blogs** Collection
```
Field: title (string)
Field: excerpt (string)
Field: content (string) - HTML
Field: category (string)
Field: date (string) - YYYY-MM-DD
Field: featuredImage (string) - URL
Field: status (string) = "published" or "draft"
Field: createdAt (timestamp)

Example (see SAMPLE_BLOG.md)
```

**Dashboard:** `src/app/admin/dashboard/`
- Create/Edit/Delete blogs
- Admin only (requires authentication)

---

## ✅ Step 4: Newsletter Logic - VERIFIED

### Newsletter Flow:
```
User submits email
    ↓
Validate email format
    ↓
Check if already in database
    ├─ YES → Return "Already subscribed" (success, no email)
    └─ NO  → Continue
    ↓
Save email to Firestore
    ↓
Send welcome email
    ├─ Success → Return success message
    └─ Fail → Still return success (email saves anyway)
```

### Code Locations:
- **API Route:** `src/app/api/newsletter/route.ts`
- **Frontend:** `src/components/Newsletter.tsx` (lines 20-35)
  - Submits form to API
  - Shows success/error messages
  - `alreadySubscribed` flag in response

---

## 📝 Step 5: Sample Blog Post

See separate file: `SAMPLE_BLOG.md`

**To Create Blog:**
1. Login: `admin@virtuoedge.tech` + password
2. Go to: `/admin/dashboard`
3. Click "Create Blog"
4. Fill form with content
5. Click "Publish"

---

## 🚀 Step 6: Verification Checklist

- [ ] `.env` updated with new Firebase credentials
- [ ] `firebase/init.ts` updated with new config
- [ ] Admin user created: `admin@virtuoedge.tech`
- [ ] Firestore Collections created (3):
  - [ ] `newsletterEmails`
  - [ ] `consultations`
  - [ ] `blogs`
- [ ] Test newsletter subscription
- [ ] Test already-subscribed message
- [ ] Create sample blog post

---

## 📞 API Endpoints Summary

| Endpoint | Method | Purpose |
|----------|--------|---------|
| `/api/newsletter` | POST | Subscribe to newsletter |
| `/api/consultation` | POST | Book consultation |
| `/api/availableTimeSlots` | GET | Get available times |
| `/admin` | GET | Admin login page |
| `/admin/dashboard` | GET | Blog management |

---

## 🔒 Security Notes

✅ **What's Secure:**
- Admin password: Firebase Auth (encrypted)
- Email credentials: Env variables (not in code)
- Newsletter emails: Firestore (private)
- Admin functions: Protected routes (auth required)

❌ **What Needs Attention:**
- Keep `.env` file private (never commit to git)
- Don't share Firebase credentials publicly
- Use strong password for `admin@virtuoedge.tech`

