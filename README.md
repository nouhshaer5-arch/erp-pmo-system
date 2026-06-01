# نظام ERP + PMO احترافي متكامل
# Professional ERP + PMO System for Real Estate Development

## 📋 نبذة عن النظام | System Overview

نظام إدارة مشاريع متكامل (ERP + PMO) مخصص لشركات المقاولات والتطوير العقاري في المملكة العربية السعودية، بمستوى يضاهي الأنظمة العالمية مثل Procore و Oracle Primavera.

Integrated project management system (ERP + PMO) designed for construction and real estate development companies in Saudi Arabia, at a level comparable to world-class systems like Procore and Oracle Primavera.

## ✨ المميزات الرئيسية | Key Features

### لوحة المعلومات | Dashboard
- 📊 لوحة معلومات ثلاثية الأبعاد تفاعلية (3D Interactive Dashboard)
- 📈 رسوم بيانية وتحليلات متقدمة
- 🔄 تحديث البيانات في الوقت الفعلي (Real-time)
- 🎯 مؤشرات الأداء الرئيسية (KPIs)
- 🗺️ خرائط تفاعلية للمشاريع

### إدارة المشاريع | Project Management
- 📁 إدارة متعددة المستويات للمشاريع والفيلل
- ⏱️ جدولة زمنية متقدمة (Gantt Charts)
- 👥 إدارة الموارد والعمالة
- 📸 معرض الصور والمستندات
- 📝 تقارير يومية وأسبوعية وشهرية

### الإدارة المالية | Financial Management
- 💰 إدارة الميزانيات والتكاليف
- 📊 تحليل الانحرافات والتنبؤ المالي
- 📋 إدارة المستخلصات والدفعات
- 📈 متابعة التدفقات النقدية
- 📄 إدارة العقود والمطالبات

### إدارة العقود | Contract Management
- 📄 عقود الملاك والمقاولين والموردين
- ✏️ أوامر التغيير والمطالبات
- 📋 متابعة الضمانات والتأمينات
- ⚖️ إدارة النزاعات والتسويات

### الأمان والصلاحيات | Security & Permissions
- 🔐 نظام صلاحيات متعدد المستويات
- 👤 إدارة المستخدمين والأدوار
- 🔒 تشفير البيانات
- 📋 تسجيل الأنشطة (Audit Log)

### الدعم متعدد اللغات | Multi-Language Support
- 🇸🇦 واجهة عربية كاملة (RTL)
- 🇬🇧 واجهة إنجليزية كاملة (LTR)
- 🔄 تبديل فوري بين اللغتين
- 🌙 Dark Mode و Light Mode

## 🛠️ التقنيات المستخدمة | Tech Stack

### Frontend
- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **3D Graphics**: Three.js & React Three Fiber
- **Animation**: Framer Motion
- **State Management**: Zustand
- **Charts**: Recharts
- **Multi-language**: next-intl
- **Icons**: Lucide React

### Backend
- **Runtime**: Node.js
- **API**: Next.js API Routes
- **Database**: PostgreSQL
- **ORM**: Prisma
- **Authentication**: Supabase
- **AI**: OpenAI Integration

## 📁 بنية المشروع | Project Structure

```
erp-pmo-system/
├── src/
│   ├── app/              # Next.js App Router
│   ├── components/       # React Components
│   ├── hooks/           # Custom Hooks
│   ├── pages/           # API Routes
│   ├── store/           # State Management (Zustand)
│   ├── types/           # TypeScript Interfaces
│   ├── utils/           # Utility Functions
│   ├── services/        # External Services
│   └── styles/          # Global Styles
├── prisma/              # Database Schema
├── public/              # Static Assets
├── .env.example         # Environment Variables Template
├── next.config.js       # Next.js Configuration
├── tailwind.config.ts   # Tailwind CSS Configuration
├── tsconfig.json        # TypeScript Configuration
└── package.json         # Dependencies
```

## 🚀 البدء السريع | Quick Start

### المتطلبات | Prerequisites
- Node.js 18+
- npm أو yarn
- PostgreSQL
- Git

### التثبيت | Installation

```bash
# استنساخ المستودع
git clone https://github.com/nouhshaer5-arch/erp-pmo-system.git
cd erp-pmo-system

# تثبيت المكتبات
npm install

# إنشاء ملف المتغيرات البيئية
cp .env.example .env.local

# تحديث قاعدة البيانات
npm run prisma:migrate

# توليد Prisma Client
npm run prisma:generate

# تشغيل الخادم
npm run dev
```

ثم افتح المتصفح وانتقل إلى `http://localhost:3000`

## 📖 التوثيق | Documentation

راجع المجلدات التالية للحصول على معلومات مفصلة:
- `/docs` - التوثيق الكامل
- `/docs/ar` - التوثيق بالعربية
- `/docs/en` - التوثيق بالإنجليزية

## 🤝 المساهمة | Contributing

نرحب بمساهماتك! يرجى:
1. إنشاء Fork للمستودع
2. إنشاء فرع للميزة الجديدة (`git checkout -b feature/amazing-feature`)
3. Commit التغييرات (`git commit -m 'Add amazing feature'`)
4. Push إلى الفرع (`git push origin feature/amazing-feature`)
5. فتح Pull Request

## 📄 الترخيص | License

هذا المشروع مرخص تحت MIT License

## 📞 التواصل | Contact

- 📧 البريد الإلكتروني: support@erp-pmo-system.com
- 🐦 تويتر: @erppmo_system
- 💼 LinkedIn: ERP PMO System

---

**ملاحظة مهمة | Important Note**:
هذا النظام يتطلب معرفة متقدمة بـ Next.js و React و TypeScript. للمساعدة، يرجى فتح Issue في المستودع.
