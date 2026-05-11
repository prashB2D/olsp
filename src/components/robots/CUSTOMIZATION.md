# ImpactRobot - Quick Reference & Integration Examples

## 🚀 Quick Start

### Import
```tsx
import ImpactRobot from "@/components/robots/ImpactRobot";
```

### Use in Any Section
```tsx
<section id="my-section">
  <ImpactRobot
    colors={{ bg: '#1a1a1a', accent: '#30d0de' }}
    rightOffset={-5}
    topOffset={30}
  />
  {/* Your content */}
</section>
```

---

## 🎨 Color Presets

Copy-paste these color combinations for quick customization:

### Classic (Current - Black + Cyan)
```tsx
colors={{ bg: '#1a1a1a', accent: '#30d0de' }}
```

### Gold + White
```tsx
colors={{ bg: '#ffffff', accent: '#ffd700' }}
```

### Purple + Pink
```tsx
colors={{ bg: '#2d1b69', accent: '#ff006e' }}
```

### Navy + Electric Blue
```tsx
colors={{ bg: '#001f3f', accent: '#0080ff' }}
```

### Dark Green + Neon Green
```tsx
colors={{ bg: '#0d2818', accent: '#00ff41' }}
```

### Dark Red + Orange
```tsx
colors={{ bg: '#330000', accent: '#ff6600' }}
```

### Dark Gray + Silver
```tsx
colors={{ bg: '#2a2a2a', accent: '#c0c0c0' }}
```

---

## 📍 Position Presets

### Top Right (Default)
```tsx
rightOffset={-5}
topOffset={30}
```

### Bottom Right
```tsx
rightOffset={-5}
topOffset={70}
```

### Center Right
```tsx
rightOffset={0}
topOffset={50}
```

### Far Right (Slightly Off-Screen)
```tsx
rightOffset={-15}
topOffset={35}
```

### Near Edge
```tsx
rightOffset={5}
topOffset={40}
```

---

## 🔄 Reuse Examples

### Example 1: Different Section
```tsx
// In Solutions.tsx
import ImpactRobot from "@/components/robots/ImpactRobot";

export default function Solutions() {
  return (
    <section className="relative py-32">
      <ImpactRobot
        colors={{ bg: '#001f3f', accent: '#0080ff' }}
        rightOffset={-10}
        topOffset={25}
      />
      {/* Solutions content */}
    </section>
  );
}
```

### Example 2: Dark Mode Variant
```tsx
// In MissionVision.tsx (if dark mode added)
const isDark = document.documentElement.classList.contains('dark');

<ImpactRobot
  colors={{
    bg: isDark ? '#0a0a0a' : '#1a1a1a',
    accent: isDark ? '#00ffff' : '#30d0de',
  }}
  rightOffset={-5}
  topOffset={30}
/>
```

### Example 3: Multiple Robots in Section
```tsx
// Different robots at different positions
<section>
  <ImpactRobot
    colors={{ bg: '#1a1a1a', accent: '#30d0de' }}
    rightOffset={-5}
    topOffset={20}
  />
  
  <ImpactRobot
    colors={{ bg: '#330000', accent: '#ff6600' }}
    rightOffset={-25}
    topOffset={60}
  />
</section>
```

### Example 4: Conditional Rendering
```tsx
// Show different robots based on viewport size
import { useMediaQuery } from '@/hooks/use-mobile';

export function MySection() {
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <section>
      {!isMobile && (
        <ImpactRobot
          colors={{ bg: '#1a1a1a', accent: '#30d0de' }}
          rightOffset={-5}
          topOffset={30}
        />
      )}
    </section>
  );
}
```

---

## 🎯 CSS Variable Customization

Override robot behavior globally by setting CSS variables:

```css
/* In your global CSS or Tailwind config */
:root {
  --bb8-diameter: 4.375em;  /* Robot size */
  --radius: 99em;           /* Border radius */
  --transition: 0.3s;       /* Transition speed */
}

/* Or in specific component */
.my-section {
  --robot-z-index: 15;      /* Change stacking */
}
```

---

## 🔧 Animation Tweaks

To modify animation speed/feel without changing component code, add to `ImpactRobot.css`:

```css
/* Faster animation */
.bb8-scroll.fast {
  --transition: 0.15s;
}

/* Slower animation */
.bb8-scroll.slow {
  --transition: 0.5s;
}
```

Then use in component:
```tsx
<div className="bb8-scroll robot-black fast">
```

---

## 📊 Component Size Reference

| Device | Font Size | Robot Size | Opacity |
|--------|-----------|-----------|---------|
| Desktop | 16px | 70px | 1.0 |
| Tablet | 14px | 61px | 0.7 |
| Mobile | 12px | 52px | 0.5 |

---

## 🎬 Motion Customization

To adjust spring responsiveness, modify in `ImpactRobot.tsx`:

```typescript
// More reactive/bouncy
const headRotation = useSpring(0, {
  stiffness: 150,  // Increase (50-200)
  damping: 10,     // Decrease (10-30)
});

// Smoother/slower
const headRotation = useSpring(0, {
  stiffness: 50,   // Decrease
  damping: 30,     // Increase
});
```

---

## ✨ Pro Tips

1. **Test responsiveness**: Use DevTools device emulation
2. **Keep colors accessible**: Ensure contrast meets WCAG standards
3. **Position carefully**: Avoid overlapping section headings
4. **Mobile first**: Design positions for mobile, then adjust up
5. **Use CSS vars**: Makes theming easier for future variants
6. **Check z-index**: Verify robot stays behind important content
7. **Performance**: Monitor animation smoothness on slower devices

---

## 🚨 Common Issues & Fixes

| Issue | Solution |
|-------|----------|
| Robot not visible | Check section is in viewport, verify z-index |
| Animation choppy | Check browser performance, reduce opacity on mobile |
| Colors not showing | Verify CSS variable syntax: `--robot-bg` (not `--robot-background`) |
| Robot blocking clicks | Ensure `pointer-events: none` in CSS, check z-index |
| Flashing on scroll | Check `backface-visibility: hidden`, clear cache |

---

## 📝 Implementation Checklist for New Sections

- [ ] Import ImpactRobot component
- [ ] Choose color scheme from presets or custom
- [ ] Set position offsets (rightOffset, topOffset)
- [ ] Verify z-index doesn't overlap important content
- [ ] Test scroll behavior
- [ ] Test on mobile/tablet
- [ ] Verify pointer-events work
- [ ] Check color contrast accessibility
- [ ] Document custom colors/positions in comments

---

## 🔗 File References

- Component: `src/components/robots/ImpactRobot.tsx`
- Styles: `src/components/robots/ImpactRobot.css`
- Full Docs: `src/components/robots/README.md`
- Current Integration: `src/components/MissionVision.tsx`

---

**Status**: ✅ Ready for Production & Reuse
