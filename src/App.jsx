import { useEffect, useRef, useState, useCallback } from 'react';
import Matter from 'matter-js';
import { Terminal, Volume2 } from 'lucide-react';
import './App.css';

const MAX_HANDS = 500;

const getFractionString = (decimal) => {
  if (!decimal && decimal !== 0) return '0';
  const val = Number(decimal.toFixed(3));
  if (val === 0.5)  return '1/2';
  if (val === 0.25) return '1/4';
  if (val === 0.75) return '3/4';
  if (Math.abs(val - 0.333) < 0.002) return '1/3';
  if (Math.abs(val - 0.667) < 0.002) return '2/3';
  if (Math.abs(val - 0.167) < 0.002) return '1/6';
  if (val === 0.2)  return '1/5';
  if (val === 0.1)  return '1/10';
  return val.toString();
};

// --- Landing Page -------------------------------------------------------------
function LandingPage({ onStart }) {
  const MARQUEE_TEXT = 'SHATTER BIOLOGICAL LIMITS // DYNAMIC REGISTER PHYSICS // FINGERS++ /// FINGERS++ // QUINARY TALLY ENGINE // ';
  return (
    <div className="w-full h-full flex flex-col bg-[#09090B] text-[#FAFAFA] font-['Space_Grotesk'] relative overflow-hidden grid-bg">

      {/* Top Marquee - text duplicated for seamless looping */}
      <div className="w-full marquee-container text-xs py-1 z-10 font-mono">
        <div className="marquee-content px-4">
          {MARQUEE_TEXT}{MARQUEE_TEXT}
        </div>
      </div>

      {/* Header */}
      <div className="w-full flex justify-between items-center p-6 z-20">
        <div className="flex items-center gap-3 font-bold text-2xl tracking-tighter">
          <div className="bg-[#DFE104] text-[#09090B] w-8 h-8 flex items-center justify-center text-xl">5</div>
          FINGERS++
        </div>
        <div className="flex items-center gap-6 font-mono text-xs text-[#3F3F46]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-[#3F3F46]"></span>
            KERNEL: <span className="text-[#FAFAFA] ml-1">B5_STABLE</span>
          </div>
          <div className="border border-[#DFE104] text-[#DFE104] px-3 py-1">RADIX: B5</div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center z-20 w-full max-w-4xl mx-auto px-4 mt-[-50px]">

        {/* System ID Badge */}
        <div className="border border-[#3F3F46] bg-[#09090B] px-6 py-2 mb-8 font-mono text-xs flex items-center gap-3 uppercase">
          <span className="text-[#DFE104]">&#9654;</span>
          [ SYSTEM ID: FINGERS_V2.0 ] //<span className="text-[#DFE104] ml-2">MEM: 5^10 BYTES</span>
        </div>

        {/* Hero Title */}
        <h1 className="text-8xl md:text-[140px] font-bold uppercase tracking-tighter leading-none mb-6 text-center">
          FINGERS<span className="text-[#DFE104]">++</span>
        </h1>
        <h2 className="text-xl md:text-3xl font-bold uppercase text-[#FAFAFA] mb-12 text-center tracking-tight">
          Incrementing human counting beyond limits.
        </h2>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 w-full">
          {[
            { label: 'COUNTING METHOD', value: 'LITERAL FINGERS' },
            { label: 'MATH SKILLS',     value: 'QUESTIONABLE'    },
            { label: 'CPU TEMP',        value: 'MELTING'         },
            { label: 'DIV BY ZERO',     value: 'INSTANT DEATH'   }
          ].map((stat, i) => (
            <div key={i} className="border border-[#3F3F46] p-4 bg-[#09090B]">
              <div className="text-gray-400 text-xs font-mono mb-2 uppercase">{stat.label}</div>
              <div className="text-lg font-bold uppercase text-[#DFE104]">{stat.value}</div>
            </div>
          ))}
        </div>

        {/* Onboarding Tip */}
        <div className="text-[#DFE104] font-mono text-xs mb-8 border border-[#DFE104] px-4 py-2 bg-[#09090B] animate-pulse text-center">
          <span className="font-bold">? HOW TO USE:</span>&nbsp;
          Left-Click to increment a hand &nbsp;|&nbsp; Right-Click to disintegrate it &nbsp;|&nbsp; Drag to fling
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col md:flex-row gap-6 items-center mb-12">
          <button
            onClick={onStart}
            className="bg-[#DFE104] text-[#09090B] font-bold uppercase text-lg px-8 py-4 border-2 border-[#FAFAFA] flex flex-col items-center shadow-[4px_4px_0_0_#FAFAFA] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
          >
            <span>INITIALIZE</span>
            <span>WORKSPACE <span className="ml-2 font-normal">&#8594;</span></span>
            <span className="text-xs font-mono mt-1">[CANVAS.HTML]</span>
          </button>
          <div className="flex flex-col gap-2 text-xs font-mono text-[#3F3F46] border border-[#3F3F46] p-4 bg-[#09090B]">
            <div><span className="text-[#DFE104]">A</span> - Add Hand</div>
            <div><span className="text-[#DFE104]">F</span> - Fling All</div>
            <div><span className="text-[#DFE104]">G</span> - Gore Mode</div>
            <div><span className="text-[#DFE104]">P</span> - Physics Mode</div>
          </div>
        </div>

        {/* Code Snippet Box */}
        <div className="w-full border border-[#3F3F46] bg-[#09090B]/80 p-6 relative">
          <div className="flex justify-between items-center border-b border-[#3F3F46] pb-4 mb-4 font-mono text-xs text-[#3F3F46] uppercase">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-[#DFE104]"></span>
              B5_CORE_INTERPRETER.asm
            </div>
            <div>MODE: RAW_REGISTER</div>
          </div>
          <div className="font-mono text-xs md:text-sm text-[#DFE104] leading-relaxed uppercase">
            <div className="mb-2"><span className="opacity-50">0x00:</span> LOAD_FINGER_MAP [THUMB..PINKY] -&gt; REG_B5_ALPHA</div>
            <div className="mb-2"><span className="opacity-50">0x04:</span> INC_RADIX_5 OVERFLOW_CASCADE -&gt; NEXT_HAND_BUS</div>
            <div><span className="opacity-50">0x08:</span> SHATTER_BIO_CEILING: 5^10 = 9,765,625 RESOLVED IN REALTIME</div>
          </div>
        </div>
      </div>

      {/* Footer Status Bar */}
      <div className="w-full border-t border-[#3F3F46] p-4 flex flex-col md:flex-row justify-between items-center z-20 bg-[#09090B] font-mono text-[10px] uppercase gap-4">
        <div className="flex flex-wrap items-center gap-4 text-[#3F3F46]">
          <div className="flex items-center gap-2 font-bold">
            <span className="w-2 h-2 bg-[#DFE104]"></span>
            <span className="text-[#FAFAFA]">SYSTEM STATUS: ONLINE // BASE-5 KERNEL</span>
          </div>
          <div>|</div>
          <div>SYS_REV: #2026.04-STABLE</div>
          <div>|</div>
          <div className="text-[#DFE104]">LATENCY: 0.12MS</div>
        </div>
        <div className="text-[#3F3F46]">
          ARCHITECTS: <span className="text-[#FAFAFA]">GEOWON &amp; SHIVAKANTH</span>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="w-full flex justify-between items-center px-4 py-2 font-mono text-[8px] text-[#3F3F46] uppercase z-20">
        <div>(C) 2026 FINGERS++ ALL REGISTERS ALLOCATED. NO RIGHTS RESERVED.</div>
        <div className="text-[#DFE104]">ALL RADIANS QUANTIZED TO BASE-5</div>
      </div>
    </div>
  );
}

// --- Audio Helpers -------------------------------------------------------------
let globalAudioCtx = null;
const getAudioCtx = () => {
  if (!globalAudioCtx) {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (AudioCtx) globalAudioCtx = new AudioCtx();
  }
  if (globalAudioCtx && globalAudioCtx.state === 'suspended') globalAudioCtx.resume();
  return globalAudioCtx;
};

// --- App Root -----------------------------------------------------------------
export default function App() {
  const [inWorkspace, setInWorkspace] = useState(false);
  if (!inWorkspace) return <LandingPage onStart={() => setInWorkspace(true)} />;
  return <Workspace onExit={() => setInWorkspace(false)} />;
}

// --- Workspace ----------------------------------------------------------------
function Workspace({ onExit }) {
  const sceneRef    = useRef(null);
  const engineRef   = useRef(null);
  const bodyMap     = useRef(new Map());
  const refMap      = useRef({});
  const grabbedRef  = useRef(null);

  const [handsState, setHandsState] = useState([]);
  const handsRef = useRef([]);
  const setHands = useCallback((updater) => {
    setHandsState(prev => {
      const next = typeof updater === 'function' ? updater(prev) : updater;
      handsRef.current = next;
      return next;
    });
  }, []);
  const hands = handsState;

  const isMounted = useRef(true);
  useEffect(() => {
    isMounted.current = true;
    return () => { isMounted.current = false; };
  }, []);

  const [goreMode, setGoreMode]     = useState(false);
  const [physicsMode, setPhysicsMode] = useState(1); // 0=Arranged 1=Zero-G 2=Earth
  const [mathInput, setMathInput]   = useState('');
  const [mathGraphic, setMathGraphic] = useState(null);
  const [insults, setInsults]       = useState([]);
  const [logs, setLogs]             = useState([
    '> KERNEL_INIT: Dynamic Register Physics Engine loaded.',
    '> DEFAULT: ZERO-G Ambient active. Registers float freely.'
  ]);
  const [terminalOpen, setTerminalOpen] = useState(false);

  // -- Audio ------------------------------------------------------------------
  const playBubbleSound = useCallback(() => {
    try {
      const ctx = getAudioCtx(); if (!ctx) return;
      const osc = ctx.createOscillator(); const gain = ctx.createGain();
      osc.connect(gain); gain.connect(ctx.destination);
      osc.type = 'sine';
      osc.frequency.setValueAtTime(150, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(800, ctx.currentTime + 0.1);
      gain.gain.setValueAtTime(0, ctx.currentTime);
      gain.gain.linearRampToValueAtTime(0.5, ctx.currentTime + 0.01);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.1);
      osc.start(ctx.currentTime); osc.stop(ctx.currentTime + 0.1);
    } catch (e) {}
  }, []);

  const playSnapSound = useCallback(() => {
    try {
      const ctx = getAudioCtx(); if (!ctx) return;
      const bufferSize = ctx.sampleRate * 0.5;
      const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) data[i] = Math.random() * 2 - 1;
      const noise = ctx.createBufferSource(); noise.buffer = buffer;
      const filter = ctx.createBiquadFilter(); filter.type = 'lowpass';
      filter.frequency.setValueAtTime(2000, ctx.currentTime);
      filter.frequency.exponentialRampToValueAtTime(100, ctx.currentTime + 0.5);
      const gain = ctx.createGain();
      gain.gain.setValueAtTime(1, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.5);
      noise.connect(filter); filter.connect(gain); gain.connect(ctx.destination);
      noise.start();
    } catch (e) {}
  }, []);

  // -- Logging ----------------------------------------------------------------
  const addLog = useCallback((msg) => {
    const time = new Date().toLocaleTimeString('en-US', { hour12: false });
    setLogs(prev => [...prev, `[${time}] ${msg}`].slice(-30));
  }, []);

  // -- Totals -----------------------------------------------------------------
  const totalBase10 = Number(hands.reduce((s, h) => s + h.value, 0).toFixed(3));
  const totalBase5  = Math.floor(totalBase10).toString(5);

  // -- Insults ----------------------------------------------------------------
  const RAGE_BAITS = [
    'Are you seriously calculating that?',
    'A 5-year-old could count that faster.',
    'Skill issue detected in terminal.',
    'Why do you even need a computer for this?',
    'Bro is using base-5 to hide how bad they are at math.',
    'Touch grass instead of touching virtual hands.',
    'Imagine needing an app to count to 10.',
    "I'm deleting system32 out of secondhand embarrassment.",
    'Have you tried counting on your actual fingers?',
    'Error 404: Math skills not found.',
  ];
  const LARGE_NUMBER_INSULTS = [
    "This isn't a supercomputer. Calm down.",
    'Are you trying to melt my CPU?',
    "I'm a web app, not a quantum processor.",
    'What do you need all these hands for? A cult?',
    "Do you think I'm made of RAM?",
    'Stop spamming numbers before I crash your browser.',
    'My therapist warned me about users like you.',
  ];

  const triggerInsult = useCallback((specificMessage = null) => {
    if (!isMounted.current) return;
    const text = specificMessage || RAGE_BAITS[Math.floor(Math.random() * RAGE_BAITS.length)];
    const id = Date.now() + Math.random();
    // Keep insults away from screen edges
    const x = 15 + Math.random() * 70;
    const y = 15 + Math.random() * 70;
    setInsults(prev => [...prev, { id, text, x, y }]);
    addLog(`SYS_WARN: ${text}`);
    try {
      const ctx = getAudioCtx();
      if (ctx) {
        const osc = ctx.createOscillator(); const gain = ctx.createGain();
        osc.connect(gain); gain.connect(ctx.destination);
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(100, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(40, ctx.currentTime + 0.3);
        gain.gain.setValueAtTime(0.3, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.3);
        osc.start(ctx.currentTime); osc.stop(ctx.currentTime + 0.3);
      }
    } catch(e) {}
    setTimeout(() => {
      if (!isMounted.current) return;
      setInsults(prev => prev.filter(i => i.id !== id));
    }, 4000);
  }, [addLog]);

  // -- Gore mode log ----------------------------------------------------------
  useEffect(() => {
    if (goreMode) addLog('WARNING: Safety protocols disabled. Gore mode active.');
  }, [goreMode, addLog]);

  // -- Physics Init -----------------------------------------------------------
  useEffect(() => {
    const engine = Matter.Engine.create();
    engineRef.current = engine;
    engine.world.gravity.y = physicsMode === 2 ? 1 : 0;

    const render = Matter.Render.create({
      element: sceneRef.current,
      engine,
      options: {
        width: window.innerWidth,
        height: window.innerHeight,
        wireframes: false,
        background: 'transparent'
      }
    });

    const createBoundaries = () => {
      const walls = Matter.Composite.allBodies(engine.world).filter(b => b.label === 'wall');
      Matter.Composite.remove(engine.world, walls);
      const w = window.innerWidth, h = window.innerHeight, t = 100;
      Matter.Composite.add(engine.world, [
        Matter.Bodies.rectangle(w/2, -t/2,   w, t,   { isStatic: true, label: 'wall' }),
        Matter.Bodies.rectangle(w/2, h+t/2,  w, t,   { isStatic: true, label: 'wall' }),
        Matter.Bodies.rectangle(-t/2, h/2,   t, h,   { isStatic: true, label: 'wall' }),
        Matter.Bodies.rectangle(w+t/2, h/2,  t, h,   { isStatic: true, label: 'wall' }),
      ]);
    };
    createBoundaries();

    const handleResize = () => {
      render.canvas.width  = window.innerWidth;
      render.canvas.height = window.innerHeight;
      createBoundaries();
      // Bring out-of-bounds bodies back
      Matter.Composite.allBodies(engine.world).forEach(b => {
        if (b.isStatic) return;
        let { x, y } = b.position, changed = false;
        if (x > window.innerWidth)  { x = window.innerWidth  - 100; changed = true; }
        if (x < 0)                  { x = 100;                      changed = true; }
        if (y > window.innerHeight) { y = window.innerHeight - 100; changed = true; }
        if (y < 0)                  { y = 100;                      changed = true; }
        if (changed) { Matter.Body.setPosition(b, { x, y }); Matter.Body.setVelocity(b, { x: 0, y: 0 }); }
      });
    };
    window.addEventListener('resize', handleResize);

    Matter.Render.run(render);
    const runner = Matter.Runner.create();
    Matter.Runner.run(runner, engine);

    // 60fps DOM sync loop
    let raf;
    const syncLoop = () => {
      handsRef.current.forEach(hand => {
        if (hand.snapped) return;
        const body = bodyMap.current.get(hand.id);
        const el   = refMap.current[hand.id];
        if (body && el) {
          el.style.transform = `translate3d(${body.position.x - 70}px, ${body.position.y - 30}px, 0) rotate(${body.angle}rad)`;
        }
      });
      raf = requestAnimationFrame(syncLoop);
    };
    syncLoop();

    return () => {
      window.removeEventListener('resize', handleResize);
      Matter.Render.stop(render);
      Matter.Runner.stop(runner);
      Matter.Engine.clear(engine);
      if (render.canvas) render.canvas.remove();
      cancelAnimationFrame(raf);
      bodyMap.current.clear();
      refMap.current = {};
      setHandsState([]);
      handsRef.current = [];
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // -- Arrange Hands ---------------------------------------------------------
  const arrangeHands = useCallback(() => {
    if (physicsMode !== 0) return;
    const paddingX = 160, paddingY = 110;
    const columns  = Math.max(1, Math.floor((window.innerWidth - 200) / paddingX));
    const startX   = (window.innerWidth - (Math.min(handsRef.current.length, columns) - 1) * paddingX) / 2;
    const startY   = 160;
    handsRef.current.forEach((hand, i) => {
      const body = bodyMap.current.get(hand.id);
      if (body) {
        Matter.Body.setStatic(body, true);
        Matter.Body.setAngle(body, 0);
        Matter.Body.setPosition(body, {
          x: startX + (i % columns) * paddingX,
          y: startY + Math.floor(i / columns) * paddingY
        });
      }
    });
  }, [physicsMode]);

  // Re-arrange whenever hand count changes or physicsMode changes
  useEffect(() => { arrangeHands(); }, [handsState.length, arrangeHands]);

  useEffect(() => {
    if (!engineRef.current) return;
    engineRef.current.world.gravity.y = physicsMode === 2 ? 1 : 0;
    if (physicsMode === 0) {
      arrangeHands();
    } else {
      handsRef.current.forEach(hand => {
        const body = bodyMap.current.get(hand.id);
        if (body) {
          Matter.Body.setStatic(body, false);
          if (physicsMode === 1 && Math.abs(body.velocity.x) < 0.1 && Math.abs(body.velocity.y) < 0.1) {
            const angle = Math.random() * Math.PI * 2;
            Matter.Body.applyForce(body, body.position, {
              x: Math.cos(angle) * 0.05,
              y: Math.sin(angle) * 0.05
            });
          }
        }
      });
    }
  }, [physicsMode, arrangeHands]);

  // -- Spawn Hand -------------------------------------------------------------
  const spawnHand = useCallback((value = 1, isFraction = false) => {
    if (!isMounted.current || !engineRef.current) return;
    const id = Date.now().toString() + Math.random().toString();
    const x  = window.innerWidth  / 2;
    const y  = window.innerHeight / 2;
    const body = Matter.Bodies.rectangle(x, y, 140, 60, {
      restitution: 0.85,
      frictionAir: 0.01,
      isStatic: physicsMode === 0,
      render: { visible: false }
    });
    body.handId = id;
    if (physicsMode !== 0) {
      const angle = Math.random() * Math.PI * 2;
      Matter.Body.applyForce(body, body.position, {
        x: Math.cos(angle) * 0.05,
        y: Math.sin(angle) * 0.05
      });
    }
    Matter.Composite.add(engineRef.current.world, body);
    bodyMap.current.set(id, body);
    setHands(prev => {
      const next = [...prev, { id, value, snapped: false, isFraction }];
      addLog(`SPAWN_NODE: Hand [${isFraction ? value.toFixed(3) : value}] spawned.`);
      return next;
    });
  }, [physicsMode, setHands, addLog]);

  // -- Snap Hand -------------------------------------------------------------
  const snapHand = useCallback((id) => {
    if (!isMounted.current) return;
    playSnapSound();

    // Mark as snapped immediately so React applies the .snapping CSS class
    // Also freeze the physics body so it doesn't drift during the 1.2s animation
    const bodyToFreeze = bodyMap.current.get(id);
    if (bodyToFreeze && engineRef.current) {
      Matter.Body.setStatic(bodyToFreeze, true);
      Matter.Body.setVelocity(bodyToFreeze, { x: 0, y: 0 });
    }
    setHands(prev => prev.map(h => h.id === id ? { ...h, snapped: true } : h));
    addLog('DEL_NODE: Hand snapped and disintegrated.');

    // Keep the physics body alive during the animation so the sync loop
    // keeps the element positioned correctly while it plays out.
    // Only remove body + DOM element AFTER the 1.2s animation finishes.
    setTimeout(() => {
      if (!isMounted.current) return;
      const body = bodyMap.current.get(id);
      if (body && engineRef.current) {
        Matter.Composite.remove(engineRef.current.world, body);
        bodyMap.current.delete(id);
      }
      setHands(prev => prev.filter(h => h.id !== id));
      delete refMap.current[id];
    }, 1200);
  }, [addLog, playSnapSound, setHands]);

  // -- Click / Increment Hand -------------------------------------------------
  const handleHandClick = useCallback((id) => {
    playBubbleSound();
    setHands(prev => {
      const idx = prev.findIndex(h => h.id === id);
      if (idx === -1) return prev;
      const hand = prev[idx];
      if (hand.snapped) return prev;
      const newHands = [...prev];
      const updated  = { ...hand };
      if (updated.isFraction) {
        updated.value      = 1;
        updated.isFraction = false;
        addLog('MOD_NODE: Fraction node converted to integer 1.');
      } else {
        updated.value = (updated.value + 1) > 5 ? 0 : updated.value + 1;
        addLog(`MOD_NODE: Hand incremented to [${updated.value}].`);
      }
      newHands[idx] = updated;
      return newHands;
    });
  }, [playBubbleSound, setHands, addLog]);

  // -- Global Pointer Drag ----------------------------------------------------
  useEffect(() => {
    const onMove = (e) => {
      const g = grabbedRef.current;
      if (!g) return;
      const body = bodyMap.current.get(g.id);
      if (body) {
        Matter.Body.setPosition(body, { x: e.clientX - g.offsetX, y: e.clientY - g.offsetY });
        g.velX = e.clientX - g.lastX;
        g.velY = e.clientY - g.lastY;
        g.lastX = e.clientX;
        g.lastY = e.clientY;
        g.lastMoveTime = Date.now();
      }
    };
    const onUp = (e) => {
      const g = grabbedRef.current;
      if (!g) return;
      const body = bodyMap.current.get(g.id);
      if (body) {
        Matter.Body.setStatic(body, physicsMode === 0);
        const dist = Math.hypot(e.clientX - g.startX, e.clientY - g.startY);
        if (dist < 5) {
          // Tap = left-click = increment
          handleHandClick(g.id);
        } else if (physicsMode !== 0) {
          const stale = Date.now() - (g.lastMoveTime || 0) > 100;
          Matter.Body.setVelocity(body, stale ? { x: 0, y: 0 } : {
            x: (g.velX || 0) * 0.8,
            y: (g.velY || 0) * 0.8
          });
        }
      }
      grabbedRef.current = null;
    };
    window.addEventListener('pointermove', onMove);
    window.addEventListener('pointerup',   onUp);
    return () => {
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerup',   onUp);
    };
  }, [physicsMode, handleHandClick]);

  // -- Fling All --------------------------------------------------------------
  const flingAll = useCallback(() => {
    triggerInsult();
    if (physicsMode === 0) setPhysicsMode(1);
    handsRef.current.forEach(hand => {
      const body = bodyMap.current.get(hand.id);
      if (body) {
        Matter.Body.setStatic(body, false);
        const angle = Math.random() * Math.PI * 2;
        Matter.Body.setVelocity(body, { x: Math.cos(angle) * 30, y: Math.sin(angle) * 30 - 20 });
        Matter.Body.setAngularVelocity(body, (Math.random() - 0.5));
      }
    });
    addLog('SYS_OVERRIDE: Applied omnidirectional kinetic burst to all registers.');
  }, [physicsMode, triggerInsult, addLog]);

  // -- Keyboard Shortcuts -----------------------------------------------------
  useEffect(() => {
    const onKey = (e) => {
      if (e.target.tagName === 'INPUT') return;
      if (e.key === 'a' || e.key === 'A') { playBubbleSound(); spawnHand(0); }
      if (e.key === 'f' || e.key === 'F') { playBubbleSound(); flingAll(); }
      if (e.key === 'g' || e.key === 'G') { playBubbleSound(); setGoreMode(m => !m); }
      if (e.key === 'p' || e.key === 'P') { playBubbleSound(); setPhysicsMode(m => (m + 1) % 3); }
      if (e.key === 't' || e.key === 'T') { setTerminalOpen(m => !m); }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [playBubbleSound, spawnHand, flingAll]);

  // -- Execute Math -----------------------------------------------------------
  const executeMath = useCallback(() => {
    if (!mathInput.trim()) return;
    if (mathInput.length > 50) {
      addLog('SECURITY_ERROR: Expression exceeds 50 characters.');
      triggerInsult("Equation too long. I'm not reading all that.");
      return;
    }
    if (/[^0-9+\-*/.()\s]/.test(mathInput)) {
      addLog('SECURITY_ERROR: Non-arithmetic characters detected.');
      triggerInsult('Nice try. Injection blocked. Type real math next time.');
      return;
    }
    addLog(`EVALUATE: ${mathInput}`);
    try {
      const result = Function('"use strict";return (' + mathInput + ')')();
      if (typeof result !== 'number' || isNaN(result) || !isFinite(result)) {
        addLog('ERROR: NaN or Infinity produced.');
        triggerInsult('Did you divide by zero? Are you OK?');
        return;
      }
      addLog(`RESULT: ${result}`);
      setMathGraphic({ text: `${mathInput} = ${result}`, id: Date.now() });
      setTimeout(() => setMathGraphic(null), 2500);

      const NEGATIVE_TROLL = [
        `Show me ${result} fingers. I'll wait.`,
        'Negative fingers? Bro discovered antimatter.',
        `${result} fingers? Are you REMOVING fingers? Call 911.`,
        'Bold of you to assume fingers can go below zero.',
        'Sir, this is a hand counter, not a hospital.',
        `${result}? That's not math, that's a crime scene.`,
        'You want NEGATIVE fingers?? Who hurt you??',
        'I only count fingers that EXIST. Revolutionary concept.',
        'Negative fingers have been reported to the physics police.',
        `${result} fingers detected. Initiating concerned face: :-|`,
      ];

      let target = result;
      if (target < 0) {
        addLog("ERROR: Negative fingers don't exist. Setting to 0.");
        triggerInsult(NEGATIVE_TROLL[Math.floor(Math.random() * NEGATIVE_TROLL.length)]);
        // Snap ALL existing hands in a dramatic rage-quit wave
        handsRef.current.forEach((h, i) => setTimeout(() => snapHand(h.id), i * 80));
        return;
      }
      if (target >= 500) triggerInsult(LARGE_NUMBER_INSULTS[Math.floor(Math.random() * LARGE_NUMBER_INSULTS.length)]);
      if (target > 1000) {
        addLog('ERROR: Value exceeds node limit (1000).');
        triggerInsult("I am not a supercomputer. Request denied.");
        return;
      }
      if (target < 500 && Math.random() < 0.15) triggerInsult();

      const currentTotal = Number(handsRef.current.reduce((s, h) => s + h.value, 0).toFixed(3));

      const spawnValue = (val) => {
        const intPart  = Math.floor(val);
        const fracPart = Number((val - intPart).toFixed(3));
        const numFives = Math.floor(intPart / 5);
        const remainder = intPart % 5;
        for (let i = 0; i < numFives; i++) setTimeout(() => spawnHand(5), i * 30);
        if (remainder > 0) setTimeout(() => spawnHand(remainder), numFives * 30);
        if (fracPart > 0 && goreMode) setTimeout(() => spawnHand(fracPart, true), numFives * 30 + 30);
      };

      if (target > currentTotal) {
        spawnValue(target - currentTotal);
      } else if (target < currentTotal) {
        let toRemove = Number((currentTotal - target).toFixed(3));
        const sorted = [...handsRef.current].sort((a, b) => b.value - a.value);
        const toSnap = [];
        for (const h of sorted) {
          if (toRemove >= h.value && h.value > 0) {
            toRemove = Number((toRemove - h.value).toFixed(3));
            toSnap.push(h);
          }
        }
        if (toRemove > 0) {
          // Can't make exact change - clear all, respawn target
          handsRef.current.forEach((h, i) => setTimeout(() => snapHand(h.id), i * 15));
          setTimeout(() => spawnValue(target), handsRef.current.length * 15 + 400);
        } else {
          toSnap.forEach((h, i) => setTimeout(() => snapHand(h.id), i * 150));
        }
      }
    } catch (e) {
      addLog('ERROR: Invalid math expression.');
      triggerInsult('Syntax error? Did you literally fail basic typing?');
    }
  }, [mathInput, addLog, triggerInsult, goreMode, spawnHand, snapHand]);

  const togglePhysics = () => {
    const next = (physicsMode + 1) % 3;
    setPhysicsMode(next);
    addLog(`PHYSICS: Set to ${next === 0 ? 'STATIC' : next === 1 ? 'ZERO-G' : 'EARTH-G'}`);
  };

  // -- Render -----------------------------------------------------------------
  return (
    <div className="w-full h-full bg-[#09090B] font-['Space_Grotesk'] overflow-hidden relative grid-bg">
      {/* Physics Canvas */}
      <div className="absolute inset-0 pointer-events-none" ref={sceneRef} />

      {/* -- Insults -- */}
      {insults.map(ins => (
        <div
          key={ins.id}
          className="fixed z-[100] font-bold font-mono text-red-500 uppercase tracking-tighter text-xl md:text-2xl drop-shadow-[2px_2px_0_#000] animate-float-insult pointer-events-none"
          style={{ left: `${ins.x}%`, top: `${ins.y}%`, transform: 'translate(-50%,-50%)' }}
        >
          &gt; {ins.text}
        </div>
      ))}

      {/* -- Math Flash Overlay -- */}
      {mathGraphic && (
        <div className="pointer-events-none fixed inset-0 z-50 flex items-center justify-center px-8">
          <div className="text-[#DFE104] font-mono text-4xl md:text-7xl font-bold opacity-0 animate-math-flash text-center drop-shadow-[0_0_20px_rgba(223,225,4,0.8)] break-all">
            {mathGraphic.text}
          </div>
        </div>
      )}

      {/* -- Header Bar -- */}
      <div className="absolute top-0 left-0 w-full z-40 bg-[#09090B] border-b-2 border-[#3F3F46] pointer-events-auto">
        {/* Top Row */}
        <div className="flex justify-between items-center px-4 py-2 border-b border-[#3F3F46]">
          <div className="flex gap-4 items-center">
            <button
              onClick={() => { playBubbleSound(); onExit && onExit(); }}
              className="border border-[#3F3F46] px-3 py-1 text-xs hover:bg-[#FAFAFA] hover:text-[#09090B] uppercase"
            >
              &lt; Exit
            </button>
            <div className="flex items-center gap-2 font-bold text-sm">
              <span className="w-3 h-3 bg-[#DFE104]"></span>
              FINGERS++ <span className="text-[#3F3F46] text-xs font-normal">KERNEL::OS_REALTIME</span>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div className="text-xs uppercase text-[#3F3F46] font-bold">
              NODES: <span className="text-[#DFE104] text-sm">{hands.length}</span>
            </div>
            <div className="text-xs uppercase text-[#3F3F46] font-bold">
              TOTAL: <span className="text-[#FAFAFA] text-sm">{totalBase10}</span>
              <span className="text-[#DFE104] ml-2">{totalBase5}(B5)</span>
            </div>
          </div>
          <div className="flex items-center gap-4 text-xs font-bold uppercase">
            <button
              onClick={() => { playBubbleSound(); setGoreMode(m => !m); }}
              className={`flex items-center gap-2 border px-2 py-1 transition-colors ${goreMode ? 'border-red-500 text-red-500' : 'border-[#3F3F46] text-[#3F3F46] hover:text-[#FAFAFA]'}`}
            >
              <span className={`w-2 h-2 ${goreMode ? 'bg-red-500' : 'bg-[#3F3F46]'}`}></span>
              GORE {goreMode ? 'ON' : 'OFF'}
            </button>
            <button
              onClick={() => { playBubbleSound(); togglePhysics(); }}
              className="text-[#DFE104] hover:text-[#FAFAFA] flex items-center gap-1"
            >
              PHY: {physicsMode === 0 ? 'STATIC' : physicsMode === 1 ? 'ZERO-G' : 'EARTH-G'}
            </button>
            <button
              onClick={() => setTerminalOpen(m => !m)}
              className="text-[#3F3F46] hover:text-[#FAFAFA]"
              title="Toggle Terminal (T)"
            >
              <Terminal size={16} />
            </button>
            <Volume2 size={16} className="text-[#3F3F46] hover:text-[#FAFAFA] cursor-pointer" onClick={playBubbleSound} />
          </div>
        </div>

        {/* Action Bar */}
        <div className="flex px-4 py-2 gap-3 items-center bg-[#09090B]">
          <div className="text-[#DFE104] font-bold text-sm whitespace-nowrap">&gt; MATH:</div>
          <div className="flex-grow flex bg-[#FAFAFA] text-[#09090B] font-mono text-base h-10 border-2 border-[#3F3F46]">
            <input
              className="w-full h-full bg-transparent outline-none px-4"
              value={mathInput}
              onChange={e => setMathInput(e.target.value)}
              onKeyDown={e => { if (e.key === 'Enter') { playBubbleSound(); executeMath(); } }}
              placeholder="e.g. 3 + 4 * 2  &#8594;  press Enter"
            />
          </div>
          <button
            onClick={() => { playBubbleSound(); executeMath(); }}
            className="bg-[#DFE104] text-[#09090B] font-bold uppercase h-10 px-5 border-2 border-[#FAFAFA] hover:bg-[#FAFAFA] hover:border-[#DFE104] whitespace-nowrap shadow-[2px_2px_0_0_#FAFAFA] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none"
          >
            &#9654; RUN
          </button>
          <button
            onClick={() => { playBubbleSound(); spawnHand(0); }}
            className="bg-[#09090B] text-[#FAFAFA] border-2 border-[#FAFAFA] h-10 px-4 font-bold uppercase hover:bg-[#3F3F46] whitespace-nowrap"
            title="Add Hand (A)"
          >
            + Hand
          </button>
          <button
            onClick={() => { playBubbleSound(); flingAll(); }}
            className="bg-[#09090B] text-red-500 border-2 border-red-500 h-10 px-4 font-bold uppercase hover:bg-red-500 hover:text-black whitespace-nowrap"
            title="Fling All (F)"
          >
            &#9889; Fling
          </button>
        </div>
      </div>

      {/* -- Instructions Overlay (bottom-left) -- */}
      <div className="absolute bottom-16 left-4 pointer-events-none z-10 text-[#3F3F46] text-[10px] font-mono uppercase leading-loose">
        <div>[ PHYSICS SIMULATION KERNEL ]</div>
        <div>&gt; LEFT-CLICK &#8594; INCREMENT (0-5)</div>
        <div>&gt; RIGHT-CLICK &#8594; THANOS SNAP</div>
        <div>&gt; DRAG &#8594; FLING IN PHYSICS</div>
        <div>&gt; <span className="text-[#DFE104]">A</span> ADD &nbsp; <span className="text-[#DFE104]">F</span> FLING &nbsp; <span className="text-[#DFE104]">G</span> GORE &nbsp; <span className="text-[#DFE104]">T</span> TERM</div>
      </div>

      {/* -- Radix Decomposition (bottom-right) -- */}
      <div className="absolute bottom-16 right-4 pointer-events-none z-10 border border-[#3F3F46] bg-[#09090B]/80 p-4 text-right">
        <div className="text-[#3F3F46] text-xs font-mono mb-1 uppercase">RADIX-5 DECOMPOSITION</div>
        <div className="text-[#DFE104] font-bold text-sm">
          &#931; = {totalBase10} &#8594; {totalBase5}(B5)
        </div>
        <div className="text-[#FAFAFA] text-xs font-mono opacity-50 mt-1">
          {hands.length} register{hands.length !== 1 ? 's' : ''} active
        </div>
      </div>

      {/* -- Terminal Log (collapsible) -- */}
      {terminalOpen && (
        <div className="absolute bottom-0 left-0 w-full z-30 bg-[#09090B] border-t-2 border-[#DFE104] pointer-events-auto" style={{ maxHeight: '160px' }}>
          <div className="flex justify-between items-center px-4 py-1 border-b border-[#3F3F46]">
            <span className="text-[#DFE104] text-xs font-mono uppercase">&#9654; SYS_LOG</span>
            <button onClick={() => setTerminalOpen(false)} className="text-[#3F3F46] hover:text-[#FAFAFA] text-xs">x CLOSE</button>
          </div>
          <div className="overflow-y-auto font-mono text-[10px] text-[#3F3F46] px-4 py-2 space-y-0.5" style={{ maxHeight: '120px' }}>
            {logs.map((log, i) => <div key={i} className="leading-tight">{log}</div>)}
          </div>
        </div>
      )}

      {/* -- Hands -- */}
      {hands.map((hand, handIdx) => {
        // Cumulative counter: sum all hands before this one, then add this hand's value
        const prevSum = hands.slice(0, handIdx).reduce((s, h) => s + h.value, 0);
        const cumulativeVal = Number((prevSum + hand.value).toFixed(3));
        const badgeLabel = hand.isFraction
          ? (Number.isInteger(prevSum) && prevSum > 0)
            ? `${prevSum}+${getFractionString(hand.value)}`
            : getFractionString(cumulativeVal)
          : cumulativeVal;
        return (
          // Outer div: physics position anchor only — JS writes transform here, NO animation class
          <div
            key={hand.id}
            ref={el => refMap.current[hand.id] = el}
            className="absolute w-[140px] h-[60px] pointer-events-auto select-none"
            onPointerDown={e => {
              const body = bodyMap.current.get(hand.id);
              if (body) {
                Matter.Body.setStatic(body, true);
                grabbedRef.current = {
                  id: hand.id,
                  startX: e.clientX, startY: e.clientY,
                  lastX:  e.clientX, lastY:  e.clientY,
                  offsetX: e.clientX - body.position.x,
                  offsetY: e.clientY - body.position.y
                };
                e.target.setPointerCapture(e.pointerId);
              }
            }}
            onContextMenu={e => { e.preventDefault(); snapHand(hand.id); }}
          >
            {/* Inner div: visual content + animation class — isolated from JS transform */}
            <div className={`w-full h-full flex items-center justify-center gap-1 relative ${hand.snapped ? 'snapping' : ''}`}>
              {/* Value Badge - cumulative counter */}
              <div className="absolute top-0 right-0 bg-[#09090B]/90 border border-[#DFE104] text-[#DFE104] text-[10px] font-mono px-1 pointer-events-none z-10 translate-x-1 -translate-y-2">
                {badgeLabel}
              </div>
              {/* Emoji / Image */}
              <div className="flex items-center justify-center filter drop-shadow-[2px_2px_0_rgba(255,255,255,0.2)] pointer-events-none">
                {hand.isFraction
                  ? <div className="relative flex items-center justify-center">
                      <span className="text-[54px]" style={{ transform: `scale(${Math.max(0.3, Math.min(1.5, hand.value))})` }}>🩸</span>
                      <span className="absolute font-black text-white text-lg drop-shadow-[0_2px_2px_rgba(0,0,0,1)] z-10 pointer-events-none">{getFractionString(hand.value)}</span>
                    </div>
                  : hand.value === 0 ? <span className="text-[54px]">✊</span>
                  : hand.value === 1 ? <span className="text-[54px]">☝️</span>
                  : hand.value === 2 ? <span className="text-[54px]">✌️</span>
                  : hand.value === 3 ? <img src="3.png" alt="3" className="w-16 h-16 object-contain drop-shadow-md scale-125" draggable="false" />
                  : hand.value === 4 ? <img src="4.png" alt="4" className="w-16 h-16 object-contain drop-shadow-md scale-125" draggable="false" />
                  : <span className="text-[54px]">🖐️</span>
                }
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
