---
version: alpha
name: "Harsh Modi Portfolio"
description: "A dark, technical portfolio for a full-stack engineer who turns systems complexity into usable software."
colors:
  background: "#0c0c1d"
  surface: "#12142a"
  text: "#f4f7ff"
  muted: "#afb8ca"
  accent: "#75cfff"
  border: "rgba(186, 200, 230, 0.18)"
typography:
  display:
    fontFamily: "Archivo, DM Sans, sans-serif"
  body:
    fontFamily: "DM Sans, system-ui, sans-serif"
  mono:
    fontFamily: "SFMono-Regular, Consolas, monospace"
rounded:
  DEFAULT: "0.375rem"
  card: "0.75rem"
spacing:
  section-gap: "1.625rem"
  page-max: "77.5rem"
components:
  panel:
    border: "1px solid rgba(186, 200, 230, 0.18)"
  action:
    accent: "#75cfff"
---

# Harsh Modi Portfolio Design System

## Overview

### Creative North Star

A well-maintained engineering notebook: dark, precise, and evidence-led. The About page presents capability, education, and proof in a left editorial column, paired with a focused experience panel on the right.

### Product context and register

- **Audience and primary job:** Hiring teams and technical collaborators need to understand Harsh's product engineering range and tangible outcomes quickly.
- **Locale and language policy:** English-only public portfolio.
- **Register:** Brand. Technical evidence remains concrete and readable.
- **Memorable signature:** A balanced one-page profile: compact evidence and education to the left, a single outlined career record to the right.
- **Restraint:** Experience and practice panels stay flat and quiet; no stock portraits, gradient text, or decorative grid backgrounds.
- **Token ownership/runtime mapping:** Existing SCSS is canonical. This file documents tokens implemented in `src/components/about/about.scss`.

## Colors

`#0c0c1d` is the page field; `#12142a` is reserved for subtle surfaces. `#75cfff` identifies technical structure, actions, and timeline markers. Text and muted copy use `#f4f7ff` and `#afb8ca` for legible contrast.

## Typography

Archivo is used for display hierarchy; DM Sans stays the body face to match the existing site. The code specimen uses a system monospace stack. Prose is kept below 70 characters where possible.

## Layout

Content is capped at 1600px. Desktop uses a broad two-column profile grid, with education beneath the practice details and a compact, content-sized experience record on the right. Below 1180px, the columns become a natural one-column reading flow; details stack below 600px.

## Elevation & Depth

Hierarchy comes from tone and a hairline border. Static panels do not use drop shadows; the blue glow belongs only in the page background.

## Shapes

Actions use a 6px radius. Panels use 12px, never pills. Dividers and timeline rules are 1px and low contrast.

## Components

### Foundational visual states

Links and buttons retain native semantics. The main action has a 200ms color/position hover change and must have a visible focus ring from the global stylesheet. Motion reveals use Framer Motion and should be disabled through reduced-motion preferences.

### Iconography

React Icons is the shared icon source. Icons are blue line or familiar brand-like glyphs and never substitute for an action label.

### Motion

Content enters once with a 550ms ease-out reveal. No looping decorative motion is used on this page.

## Do's and Don'ts

- **Do:** Use measured outcomes and specific technology context from the resume.
- **Do:** Keep the experience timeline chronological and skimmable.
- **Don't:** Turn skills into an equal-sized card grid.
- **Don't:** Use gradient text, wide soft shadows, or oversized rounded surfaces.
