---
description: Formal Standard Rules & Requirements for HelpUS LLC Applications and Web Portals
globs: **/*
---

# HelpUS LLC Formal System Standards & Guidelines

This document formalizes the permanent technical, visual, legal, and operational standards for all applications, portals, and services developed by or for **HelpUS LLC**.

---

## 1. Domain & Routing Architecture
- **Master Entry Portal**: `www.helpusbr.com` (and `helpusbr.com`). Serves as the primary entry point for Software Engineering Services, Company Portfolio, and Product Ecosystem.
- **AI Agent Command Center**: `nexoai.helpusbr.com` (NexosAI Cloud Mesh).
- **Subdomain Strategy**: Individual SaaS products run on dedicated subdomains (e.g., `nexoai.helpusbr.com`, `usmle.helpusbr.com`, `health.helpusbr.com`, `imoveis.helpusbr.com`). The old `hub.helpusbr.com` CNAME is deprecated in favor of `www.helpusbr.com`.

---

## 2. Language & i18n Standard (Default: English EN 🇺🇸)
- **Default Initial Language**: **English (`EN`)** must ALWAYS be the primary default language across all sites and portals.
- **Supported Languages**:
  - `EN`: 🇺🇸 English (Default)
  - `ES`: 🇪🇸 Español
  - `PT`: 🇧🇷 Português
- **Language Switcher Component**:
  - Floating Popdown Dropdown (`🌐 🇺🇸 English (EN) ▾`) in desktop header.
  - Responsive language pills in mobile drawer.
- **Persistence**: Language selection MUST be saved to both `localStorage` (`helpus_lang` / `nexos_lang`) and `document.cookie`, updating the URL parameter `?lang=code` without page reload.

---

## 3. Brand Identity & Official Logo Standard
- **Official Brand Name**: **HelpUS LLC** (Entity # `001-142-885`, Baldwin County, Gulf Shores, AL 36542).
- **Official Logo**: Must use the official HelpUS Logo image (`/images/helpus_logo.png` or `/helpus_logo.png`) in:
  - Desktop Header Navbar
  - Mobile Menu Drawer
  - Product Cards
  - Institutional & Legal Footer

---

## 4. Navigation & User Experience (UX)
- **Top Responsive Navbar**: Full-width top header with logo, standard navigation links (`Institutional`, `Solutions`, `Help & Support`, `Contact`), language popdown, and CTA button.
- **Mobile Menu Drawer**: Hamburger button (`☰`) for mobile devices (< 1024px) providing a smooth drawer menu.
- **Full-Page Detail View**: Clicking "Experimente Agora / Learn More" on any product opens a dedicated full-page view integrated with the browser History API (`window.history.pushState` & `popstate`), allowing the user to navigate back with the browser's native Back button.
- **WhatsApp Direct Channel**: Floating contact actions link directly to the official HelpUS WhatsApp `(83) 99872-1848` (`https://wa.me/5583998721848`).

---

## 5. Alabama Launchpad Cycle 2 2026 Compliance
- All public-facing copy and materials must reflect:
  - **Company**: HelpUS LLC
  - **Headquarters**: 241 E 16th Ave, Suite B4, Gulf Shores, AL 36542
  - **Core Product**: NexosAI Cloud Mesh (Autonomous AI Agent Mesh & Multi-LLM Orchestration)
  - **Local Execution**: On-Device AI Bridge Gateway (`127.0.0.1:8765`)
  - **Value Pitch**: Plain-language problem-first messaging (*"Turn AI output into controlled, auditable work across your systems while people stay in control"*).
