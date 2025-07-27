import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useAnimation = (loading = false) => {
  useEffect(() => {
    if (loading) return;

    const elements = document.querySelectorAll("[animate]");

    elements.forEach((el) => {
      const raw = el.getAttribute("animate");
      const tokens = raw.split(" ").map((t) => t.trim());

      const props = {
        opacity: 0,
        x: 0,
        y: 0,
        scale: 1,
        rotate: 0,
        delay: 0,
        duration: 1,
        ease: "power3.out",
        repeat: 0,
        once: true,
        direction: "center",
        maxOffset: 20,
        z:999,
      };

      let isFadeOut = false;
      let isTypewriter = false;
      let isHeartbeat = false;
      let magnetEnabled = false;

      // 🔹 Parse animation tokens
      tokens.forEach((token) => {
        const [key, value] = token.includes(":") ? token.split(":").map((s) => s.trim()) : [token, true];
        switch (key) {
          case "fade-in": props.opacity = 0; break;
          case "fade-out": props.opacity = 1; isFadeOut = true; break;

          case "slide-up": props.y = 60; break;
          case "slide-down": props.y = -60; break;
          case "slide-left": props.x = 60; break;
          case "slide-right": props.x = -60; break;

          case "zoom-out": props.scale = 0; break;
          case "zoom-in": props.scale = 1.1; break;

          case "rotate": props.rotate = Number(value); break;

          case "delay": props.delay = parseFloat(value); break;
          case "duration": props.duration = parseFloat(value); break;
          case "scale": props.scale = parseFloat(value); break;
          case "ease": props.ease = value; break;
          case "repeat": props.repeat = parseInt(value); break;
          case "direction": props.direction = value; break;
          case "once": props.once = value !== "false"; break;

          case "z": props.z = parseInt(value); break;
          case "x": props.x = parseInt(value); break;
          case "y": props.y = parseInt(value); break;

          case "magnet": magnetEnabled = true; if (value) props.maxOffset = parseInt(value); break;
          case "typewriter": isTypewriter = true; break;
          case "heartbeat": isHeartbeat = true; break;
        }
      });

      // ✅ Base Animation
      gsap.set(el, { opacity: props.opacity, x: props.x, y: props.y, scale: props.scale });
      gsap.to(el, {
        opacity: isFadeOut ? 0 : 1,
        x: 0,
        y: 0,
        scale: 1,
        ease: props.ease,
        delay: props.delay,
        duration: props.duration,
        repeat: props.repeat,
        scrollTrigger: {
          trigger: el,
          start: "top 90%",
          toggleActions: props.once ? "play none none none" : "play none none reverse",
        },
      });

      // ✅ Magnet Effect
      if (magnetEnabled) {
        const moveMagnet = (e) => {
          const rect = el.getBoundingClientRect();
          const relX = e.clientX - rect.left;
          const relY = e.clientY - rect.top;
          const centerX = rect.width / 2;
          const centerY = rect.height / 2;
          const offsetX = ((relX - centerX) / centerX) * props.maxOffset;
          const offsetY = ((relY - centerY) / centerY) * props.maxOffset;
          gsap.to(el, { x: offsetX, y: offsetY, ease: "power3.out", duration: 0.3 });
        };
        const leaveMagnet = () => gsap.to(el, { x: 0, y: 0, ease: "power3.out", duration: 0.4 });
        el.addEventListener("mousemove", moveMagnet);
        el.addEventListener("mouseleave", leaveMagnet);
      }

      // ✅ Typewriter Effect
      if (isTypewriter) {
        const originalText = el.textContent;
        el.textContent = "";
        el.style.borderRight = "2px solid #fff";
        el.style.whiteSpace = "nowrap";
        el.style.overflow = "hidden";
        el.style.display = "inline-block";
        el.style.textAlign = props.direction;

        const chars = originalText.split("");
        const typeSpeed = 0.1;
        const deleteSpeed = 0.05;

        gsap.to(el, { borderColor: "transparent", repeat: -1, yoyo: true, duration: 0.5, ease: "none" });

        const typeText = () => {
          chars.forEach((_, i) => {
            gsap.delayedCall(i * typeSpeed, () => el.textContent = originalText.slice(0, i + 1));
          });
          gsap.delayedCall(chars.length * typeSpeed + 0.5, deleteText);
        };

        const deleteText = () => {
          chars.forEach((_, i) => {
            gsap.delayedCall(i * deleteSpeed, () => {
              const remaining = originalText.slice(0, chars.length - i - 1);
              el.textContent = remaining || "\u00A0";
            });
          });
          gsap.delayedCall(chars.length * deleteSpeed + 0.5, typeText);
        };

        ScrollTrigger.create({ trigger: el, start: "top 90%", once: true, onEnter: () => typeText() });
      }

      // ✅ Heartbeat Effect
      if (isHeartbeat) {
        gsap.to(el, {
          scale: 1.1,
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut",
          duration: 0.6,
          scrollTrigger: { trigger: el, start: "top 90%" },
        });
      }
    });

    ScrollTrigger.refresh();
  }, [loading]);
};