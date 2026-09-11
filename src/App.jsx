import { useEffect, useRef, useState, useCallback } from 'react';
import Matter from 'matter-js';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Volume2, X } from 'lucide-react';
import './App.css';

const MAX_HANDS = 500;

function LandingPage({ onStart }) {
  return (
    <div className="w-full h-full flex flex-col bg-[#09090B] text-[#FAFAFA] font-['Space_Grotesk'] relative overflow-hidden grid-bg">
      {/* Top Marquee */}
      <div className="w-full marquee-container text-xs py-1 z-10 font-mono">
        <div className="marquee-content px-4">
          SHATTER BIOLOGICAL LIMITS // DYNAMIC REGISTER PHYSICS // FINGERS++ /// FINGERS++ // BASE-5 COMPUTATIONAL ENGINE // SHATTER BIOLOGICAL LIMITS // DYNAMIC REGISTER PHYSICS // FINGERS++ /// FINGERS++ // BASE-5 COMPUTATIONAL ENGINE //
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
            KERNEL: <span className="text-[#FAFAFA]">B5_STABLE</span>
          </div>
          <div className="border border-[#DFE104] text-[#DFE104] px-3 py-1">RADIX: B5</div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center z-20 w-full max-w-4xl mx-auto px-4 mt-[-50px]">
        
        {/* System ID Badge */}
        <div className="border border-[#3F3F46] bg-[#09090B] px-6 py-2 mb-8 font-mono text-xs flex items-center gap-3 uppercase">
          <span className="text-[#DFE104]">▶</span>
          [ SYSTEM ID: FINGERS_V2.0 ] // <span className="text-[#DFE104]">MEM: 5^10 BYTES</span>
        </div>

        {/* Hero Title */}
        <h1 className="text-8xl md:text-[140px] font-bold uppercase tracking-tighter leading-none mb-6 text-center">
          FINGERS<span className="text-[#DFE104]">++</span>
        </h1>
        <h2 className="text-xl md:text-3xl font-bold uppercase text-[#FAFAFA] mb-12 text-center tracking-tight">
          Incrementing human counting beyond limits.
        </h2>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 w-full">
          {[
            { label: 'INPUT RADIX', value: '0..4 [BASE-5]' },
            { label: 'PARALLELISM', value: '10 DIGITS' },
            { label: 'CYCLE CLOCK', value: '0.002 MS' },
            { label: 'STATE VECTOR', value: 'SYNCHRONIZED' }
          ].map((stat, i) => (
            <div key={i} className="border border-[#3F3F46] p-4 bg-[#09090B]">
              <div className="text-[#3F3F46] text-xs font-mono mb-2 uppercase">{stat.label}</div>
              <div className="text-lg font-bold uppercase text-[#DFE104]">{stat.value}</div>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col md:flex-row gap-6 items-center mb-16">
          <button 
            onClick={onStart}
            className="bg-[#DFE104] text-[#09090B] font-bold uppercase text-lg px-8 py-4 border-2 border-[#FAFAFA] flex flex-col items-center shadow-[4px_4px_0_0_#FAFAFA] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
          >
            <span>INITIALIZE</span>
            <span>WORKSPACE <span className="ml-2 font-normal">→</span></span>
            <span className="text-xs font-mono mt-1">[CANVAS.HTML]</span>
          </button>
          <button className="border border-[#3F3F46] text-[#FAFAFA] bg-[#09090B] font-bold uppercase text-sm px-8 py-4 hover:bg-[#3F3F46] transition-colors flex flex-col items-center">
            <span>DOCS //</span>
            <span>RADIX_SPEC</span>
          </button>
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
          ARCHITECTS: <span className="text-[#FAFAFA]">GEOWON & SHIVAKANTH</span>
        </div>
      </div>

      {/* Very Bottom Footer */}
      <div className="w-full flex justify-between items-center px-4 py-2 font-mono text-[8px] text-[#3F3F46] uppercase z-20">
        <div>(C) 2026 FINGERS++ ALL REGISTERS ALLOCATED. NO RIGHTS RESERVED.</div>
        <div className="text-[#DFE104]">ALL RADIANS QUANTIZED TO BASE-5</div>
      </div>
    </div>
  );
}

export default function App() {
  const [inWorkspace, setInWorkspace] = useState(false);

  if (!inWorkspace) {
    return <LandingPage onStart={() => setInWorkspace(true)} />;
  }

  return <Workspace onExit={() => setInWorkspace(false)} />;
}

let globalAudioCtx = null;
const getAudioCtx = () => {
  if (!globalAudioCtx) {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (AudioCtx) globalAudioCtx = new AudioCtx();
  }
  if (globalAudioCtx && globalAudioCtx.state === 'suspended') {
    globalAudioCtx.resume();
  }
  return globalAudioCtx;
};

function Workspace({ onExit }) {
  const sceneRef = useRef(null);
  const engineRef = useRef(null);
  const renderRef = useRef(null);
  const bodyMap = useRef(new Map());
  const refMap = useRef({});
  const grabbedRef = useRef(null); // Tracks { id, offsetX, offsetY, isStaticBeforeDrag }
  
  const [handsState, setHandsState] = useState([]);
  const handsRef = useRef([]);
  const setHands = useCallback((updater) => {
    setHandsState(prev => {
      const next = typeof updater === 'function' ? updater(prev) : updater;
      handsRef.current = next; // Synchronize ref immediately
      return next;
    });
  }, []);
  const hands = handsState;

  const isMounted = useRef(true);
  useEffect(() => {
    return () => { isMounted.current = false; };
  }, []);

  const [goreMode, setGoreMode] = useState(false);
  const [physicsMode, setPhysicsMode] = useState(1); // 0 = Arranged, 1 = Zero-G, 2 = Earth
  const [mathInput, setMathInput] = useState("");
  const [mathGraphic, setMathGraphic] = useState(null);
  const [logs, setLogs] = useState([
    "> KERNEL_INIT: Dynamic Register Physics Engine loaded.",
    "> DEFAULT: ZERO-G Ambient active. Registers float freely."
  ]);
  const [terminalCollapsed, setTerminalCollapsed] = useState(false);

  const playBubbleSound = useCallback(() => {
    try {
      const ctx = getAudioCtx();
      if (!ctx) return;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);
      
      osc.type = 'sine';
      osc.frequency.setValueAtTime(150, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(800, ctx.currentTime + 0.1);
      
      gain.gain.setValueAtTime(0, ctx.currentTime);
      gain.gain.linearRampToValueAtTime(0.5, ctx.currentTime + 0.01);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.1);
      
      osc.start(ctx.currentTime);
      osc.stop(ctx.currentTime + 0.1);
    } catch (e) {
      console.error(e);
    }
  }, []);

  const playSnapSound = useCallback(() => {
    try {
      const ctx = getAudioCtx();
      if (!ctx) return;
      const bufferSize = ctx.sampleRate * 0.5;
      const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) data[i] = Math.random() * 2 - 1;
      
      const noise = ctx.createBufferSource();
      noise.buffer = buffer;
      
      const filter = ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(2000, ctx.currentTime);
      filter.frequency.exponentialRampToValueAtTime(100, ctx.currentTime + 0.5);

      const gain = ctx.createGain();
      gain.gain.setValueAtTime(1, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.5);
      
      noise.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);
      noise.start();
    } catch (e) {
      console.error(e);
    }
  }, []);
  
  const addLog = useCallback((msg) => {
    const time = new Date().toLocaleTimeString('en-US', { hour12: false });
    setLogs(prev => [...prev, `[${time}] ${msg}`].slice(-20));
  }, []);

  const totalRaw = hands.reduce((sum, h) => sum + h.value, 0);
  const totalBase10 = Number(totalRaw.toFixed(3));
  const totalBase5 = Math.floor(totalBase10).toString(5);

  useEffect(() => {
    if (goreMode) addLog("WARNING: Safety protocols disabled. Gore mode active.");
  }, [goreMode, addLog]);

  // Physics Init
  useEffect(() => {
    const engine = Matter.Engine.create();
    engineRef.current = engine;
    engine.world.gravity.y = physicsMode === 2 ? 1 : 0;
    engine.world.gravity.x = 0;

    const render = Matter.Render.create({
      element: sceneRef.current,
      engine: engine,
      options: {
        width: window.innerWidth,
        height: window.innerHeight,
        wireframes: false,
        background: 'transparent'
      }
    });
    renderRef.current = render;

    const createBoundaries = () => {
      Matter.Composite.remove(engine.world, engine.world.bodies.filter(b => b.label === 'wall'));
      const w = window.innerWidth;
      const h = window.innerHeight;
      const t = 100;
      const boundaries = [
        Matter.Bodies.rectangle(w/2, -t/2, w, t, { isStatic: true, label: 'wall' }),
        Matter.Bodies.rectangle(w/2, h + t/2, w, t, { isStatic: true, label: 'wall' }),
        Matter.Bodies.rectangle(-t/2, h/2, t, h, { isStatic: true, label: 'wall' }),
        Matter.Bodies.rectangle(w + t/2, h/2, t, h, { isStatic: true, label: 'wall' })
      ];
      Matter.Composite.add(engine.world, boundaries);
    };
    createBoundaries();

    const handleResize = () => {
      render.canvas.width = window.innerWidth;
      render.canvas.height = window.innerHeight;
      createBoundaries();
      arrangeHands();
    };
    window.addEventListener('resize', handleResize);

    Matter.Render.run(render);
    const runner = Matter.Runner.create();
    Matter.Runner.run(runner, engine);

    let animationFrame;
    const syncLoop = () => {
      handsRef.current.forEach(hand => {
        if (!hand.snapped) {
          const body = bodyMap.current.get(hand.id);
          // If grabbed by custom drag, we control it directly
          if (body && refMap.current[hand.id]) {
            refMap.current[hand.id].style.transform = 
              `translate3d(${body.position.x - 70}px, ${body.position.y - 30}px, 0px) rotate(${body.angle}rad)`;
          }
        }
      });
      animationFrame = requestAnimationFrame(syncLoop);
    };
    syncLoop();

    return () => {
      window.removeEventListener('resize', handleResize);
      Matter.Render.stop(render);
      Matter.Runner.stop(runner);
      Matter.Engine.clear(engine);
      if (render.canvas) render.canvas.remove();
      cancelAnimationFrame(animationFrame);
      // Clean up maps so React 18 strict mode doesn't crash on remount with stale physics bodies
      bodyMap.current.clear();
      refMap.current = {};
    };
  }, []);

  const arrangeHands = useCallback(() => {
    if (physicsMode !== 0) return;
    const paddingX = 160;
    const paddingY = 110;
    const columns = Math.max(1, Math.floor((window.innerWidth - 200) / paddingX));
    const startX = (window.innerWidth - (Math.min(handsRef.current.length, columns) - 1) * paddingX) / 2;
    const startY = 200;

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

  useEffect(() => {
    if (engineRef.current) {
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
    }
  }, [physicsMode, arrangeHands]);

  useEffect(() => {
    arrangeHands();
  }, [handsState.length, arrangeHands]);

  const spawnHand = (value = 1, isFraction = false) => {
    if (!isMounted.current) return;
    const id = Date.now().toString() + Math.random().toString();
    const x = window.innerWidth / 2;
    const y = window.innerHeight / 2;
    
    const body = Matter.Bodies.rectangle(x, y, 140, 60, { 
      restitution: 0.85, 
      frictionAir: 0.01,
      isStatic: physicsMode === 0,
      render: { visible: false } 
    });
    body.handId = id;
    
    if (physicsMode !== 0) {
      const angle = Math.random() * Math.PI * 2;
      const forceMagnitude = 0.05;
      Matter.Body.applyForce(body, body.position, {
        x: Math.cos(angle) * forceMagnitude,
        y: Math.sin(angle) * forceMagnitude
      });
    }

    Matter.Composite.add(engineRef.current.world, body);
    bodyMap.current.set(id, body);

    setHands(prev => {
      const next = [...prev, { id, value, snapped: false, isFraction }];
      addLog(`SPAWN_NODE: Hand generated with Base-5 register value [${isFraction ? value.toFixed(3) : value}].`);
      return next;
    });
  };

  const handleAddHand = () => {
    spawnHand(0); // Default to 0 (fist)
  };

  const snapHand = useCallback((id) => {
    if (!isMounted.current) return;
    playSnapSound();
    const body = bodyMap.current.get(id);
    if (body) {
      Matter.Composite.remove(engineRef.current.world, body);
      bodyMap.current.delete(id);
    }
    setHands(prev => prev.map(h => h.id === id ? { ...h, snapped: true } : h));
    addLog(`DEL_NODE: Hand snapped and disintegrated.`);
    setTimeout(() => {
      if (!isMounted.current) return;
      setHands(prev => prev.filter(h => h.id !== id));
      delete refMap.current[id];
    }, 1200);
  }, [addLog, playSnapSound]);

  const handleHandClick = useCallback((e, id) => {
    playBubbleSound();
    
    setHands(prev => {
      const idx = prev.findIndex(h => h.id === id);
      if (idx === -1) return prev;
      
      const newHands = [...prev];
      const hand = newHands[idx];
      
      // If fraction, click upgrades it to whole number 1
      if (hand.isFraction) {
        hand.value = 1;
        hand.isFraction = false;
        addLog(`MOD_NODE: Converted fraction node into whole integer 1.`);
        return newHands;
      }
      
      const nextVal = hand.value + 1;
      if (nextVal > 4) {
        snapHand(id);
        const engine = engineRef.current;
        if (engine) {
          const body = bodyMap.current.get(id);
          if (body) {
            Matter.Composite.remove(engine.world, body);
          }
        }
      } else {
        hand.value = nextVal;
        addLog(`MOD_NODE: Incremented hand to [VAL:${nextVal}]`);
      }
      return newHands;
    });
  }, [addLog, snapHand, playBubbleSound, setHands]);

  useEffect(() => {
    const handleGlobalMove = (e) => {
      const grabbed = grabbedRef.current;
      if (!grabbed) return;
      
      const body = bodyMap.current.get(grabbed.id);
      if (body) {
        Matter.Body.setStatic(body, true);
        Matter.Body.setPosition(body, {
          x: e.clientX - grabbed.offsetX,
          y: e.clientY - grabbed.offsetY
        });
        
        // Track velocity manually since e.movementX is unreliable on pointer events
        grabbed.velX = e.clientX - grabbed.lastX;
        grabbed.velY = e.clientY - grabbed.lastY;
        grabbed.lastX = e.clientX;
        grabbed.lastY = e.clientY;
        grabbed.lastMoveTime = Date.now();
      }
    };

    const handleGlobalUp = (e) => {
      const grabbed = grabbedRef.current;
      if (!grabbed) return;
      
      const body = bodyMap.current.get(grabbed.id);
      if (body) {
        Matter.Body.setStatic(body, physicsMode === 0);
        
        const dist = Math.hypot(e.clientX - grabbed.startX, e.clientY - grabbed.startY);
        if (dist < 5) {
          handleHandClick(e, grabbed.id);
        } else {
          if (physicsMode !== 0) {
            // Prevent runaway velocity if the mouse was stationary before releasing
            const timeSinceLastMove = Date.now() - (grabbed.lastMoveTime || 0);
            if (timeSinceLastMove < 100) {
              Matter.Body.setVelocity(body, {
                x: (grabbed.velX || 0) * 0.8,
                y: (grabbed.velY || 0) * 0.8
              });
            } else {
              Matter.Body.setVelocity(body, { x: 0, y: 0 });
            }
          }
        }
      }
      grabbedRef.current = null;
    };

    window.addEventListener('pointermove', handleGlobalMove);
    window.addEventListener('pointerup', handleGlobalUp);
    return () => {
      window.removeEventListener('pointermove', handleGlobalMove);
      window.removeEventListener('pointerup', handleGlobalUp);
    };
  }, [physicsMode, handleHandClick]);

  const flingAll = () => {
    triggerInsult();
    if (physicsMode === 0) setPhysicsMode(1);
    
    handsRef.current.forEach(hand => {
      const body = bodyMap.current.get(hand.id);
      if (body) {
        Matter.Body.setStatic(body, false);
        const angle = Math.random() * Math.PI * 2;
        const force = 0.5 + Math.random();
        Matter.Body.setVelocity(body, {
          x: Math.cos(angle) * 30,
          y: Math.sin(angle) * 30 - 20
        });
        Matter.Body.setAngularVelocity(body, (Math.random() - 0.5) * 1);
      }
    });
    addLog("SYS_OVERRIDE: Applied omnidirectional kinetic burst to all registers.");
  };

  const [insults, setInsults] = useState([]);
  
  const RAGE_BAITS = [
    "Are you seriously calculating that?",
    "A 5-year-old could count that faster.",
    "Skill issue detected in terminal.",
    "Why do you even need a computer for this?",
    "Bro is using base-5 to hide how bad they are at math.",
    "Touch grass instead of touching virtual hands.",
    "Imagine needing an app to count to 10.",
    "I'm deleting system32 out of secondhand embarrassment."
  ];

  const triggerInsult = useCallback((specificMessage = null) => {
    if (!isMounted.current) return;
    const text = specificMessage || RAGE_BAITS[Math.floor(Math.random() * RAGE_BAITS.length)];
    const newInsult = {
      id: Date.now(),
      text,
      x: 20 + Math.random() * 60, // 20% to 80% screen width
      y: 20 + Math.random() * 60  // 20% to 80% screen height
    };
    
    setInsults(prev => [...prev, newInsult]);
    addLog(`SYS_WARN: ${text}`);
    
    // Play error sound
    try {
      const ctx = getAudioCtx();
      if (ctx) {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(100, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(40, ctx.currentTime + 0.3);
        gain.gain.setValueAtTime(0.3, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.3);
        osc.start(ctx.currentTime);
        osc.stop(ctx.currentTime + 0.3);
      }
    } catch(e) {}

    setTimeout(() => {
      if (!isMounted.current) return;
      setInsults(prev => prev.filter(i => i.id !== newInsult.id));
    }, 4000);
  }, [addLog]);

  const LARGE_NUMBER_INSULTS = [
    "This isn't a super computer. Calm down.",
    "Are you trying to melt my CPU?",
    "I'm a web app, not a quantum processor.",
    "What do you need all these hands for? A cult?",
    "Do you think I'm made of RAM?",
    "Stop spamming numbers before I crash your browser."
  ];

  const executeMath = () => {
    if (!mathInput) return;
    
    // Security check: Reject input that isn't purely math (XSS protection)
    if (/[^0-9\+\-\*\/\.\(\)\s]/.test(mathInput)) {
      addLog("SECURITY_ERROR: Non-arithmetic characters detected. Execution blocked.");
      triggerInsult("Nice try. Injection blocked. Type real math next time.");
      return;
    }
    
    addLog(`EVALUATE: ${mathInput}`);
    try {
      const result = Function(`"use strict";return (${mathInput})`)();
      
      if (typeof result !== 'number' || isNaN(result) || !isFinite(result)) {
        addLog("ERROR: Math evaluation resulted in NaN or Infinity.");
        triggerInsult("Did you try to divide by zero? Or are you just typing garbage?");
        return;
      }
      
      addLog(`RESULT: ${result}`);
      
      setMathGraphic({ text: `${mathInput} = ${result}`, id: Date.now() });
      setTimeout(() => setMathGraphic(null), 2500);
      
      let target = result;
      if (target < 0) {
        addLog("ERROR: Negative fingers don't exist.");
        target = 0;
      }
      
      if (target >= 500) {
        triggerInsult(LARGE_NUMBER_INSULTS[Math.floor(Math.random() * LARGE_NUMBER_INSULTS.length)]);
      }

      if (target > 1000) {
        addLog("ERROR: Value exceeds node limit (1000).");
        triggerInsult("1000+ hands? Absolutely not. Request denied.");
        return;
      }
      
      // Random 15% chance to just insult them anyway if it wasn't a huge number
      if (target < 500 && Math.random() < 0.15) {
        triggerInsult();
      }

      let currentTotal = Number(handsRef.current.reduce((sum, h) => sum + h.value, 0).toFixed(3));

      const spawnValue = (val) => {
        const intPart = Math.floor(val);
        const fracPart = Number((val - intPart).toFixed(3));
        const numFives = Math.floor(intPart / 5);
        const remainder = intPart % 5;
        for (let i = 0; i < numFives; i++) setTimeout(() => spawnHand(5), i * 30);
        
        // Only spawn remainder if there is one, or if we specifically need to spawn a zero (e.g. 0 math)
        if (remainder > 0 || (numFives === 0 && fracPart === 0 && val === 0)) {
            setTimeout(() => spawnHand(remainder), numFives * 30);
        }
        if (fracPart > 0 && goreMode) {
            setTimeout(() => spawnHand(fracPart, true), numFives * 30 + 30);
        }
      };

      if (target > currentTotal) {
         // Spawning new hands
         spawnValue(target - currentTotal);
      } else if (target < currentTotal) {
         // Subtraction / Division -> Thanos Snap exactly the difference!
         let toRemove = Number((currentTotal - target).toFixed(3));
         let handsToSnap = [];
         let remainingHands = [...handsRef.current];
         
         // Sort hands descending by value to optimally remove big numbers first
         remainingHands.sort((a,b) => b.value - a.value);
         
         for (let h of remainingHands) {
             let val = h.value;
             if (toRemove >= val && val > 0) {
                 toRemove = Number((toRemove - val).toFixed(3));
                 handsToSnap.push(h);
             }
         }
         
         if (toRemove > 0) {
             // If we couldn't make exact change (e.g. need to remove 3, but only have a 5-hand)
             // We snap EVERYTHING in a massive wave, then respawn the target result
             handsRef.current.forEach((h, i) => setTimeout(() => snapHand(h.id), i * 15));
             setTimeout(() => spawnValue(target), handsRef.current.length * 15 + 400);
         } else {
             // We found exact change! Staggered Thanos snap for the hands that are being removed.
             handsToSnap.forEach((h, i) => setTimeout(() => snapHand(h.id), i * 150));
         }
      }

    } catch (e) {
      addLog("ERROR: Invalid math expression.");
      triggerInsult("Syntax error? Did you literally fail basic typing?");
    }
  };

  const togglePhysics = () => {
    const next = (physicsMode + 1) % 3;
    setPhysicsMode(next);
    addLog(`PHYSICS: Set to ${next === 0 ? 'STATIC' : next === 1 ? 'ZERO-G' : 'EARTH-G'}`);
  };

  return (
    <div className="w-full h-full bg-[#09090B] font-['Space_Grotesk'] overflow-hidden relative grid-bg">
      <div className="absolute top-0 left-0 w-full h-full pointer-events-auto" ref={sceneRef} />

      {/* RAGE BAIT INSULTS */}
      {insults.map(insult => (
        <div 
          key={insult.id}
          className="fixed z-[100] font-bold font-mono text-red-500 uppercase tracking-tighter text-2xl drop-shadow-[2px_2px_0_#000] animate-float-insult"
          style={{ left: `${insult.x}%`, top: `${insult.y}%` }}
        >
          &gt; {insult.text}
        </div>
      ))}

      {/* MATH GRAPHIC OVERLAY */}
      {mathGraphic && (
        <div className="pointer-events-none fixed inset-0 z-50 flex items-center justify-center">
          <div className="text-[#DFE104] font-mono text-[8rem] font-bold opacity-0 animate-math-flash text-center drop-shadow-[0_0_20px_rgba(223,225,4,0.8)]">
            {mathGraphic.text}
          </div>
        </div>
      )}

      {/* HEADER BAR */}
      <div className="absolute top-0 left-0 w-full z-40 bg-[#09090B] border-b-2 border-[#3F3F46] flex flex-col pointer-events-auto">
        <div className="flex justify-between items-center px-4 py-2 border-b border-[#3F3F46]">
          <div className="flex gap-4 items-center">
            <button onClick={() => { playBubbleSound(); onExit && onExit(); }} className="border border-[#3F3F46] px-3 py-1 text-xs hover:bg-[#FAFAFA] hover:text-[#09090B] uppercase">
              &lt; Exit_Workspace
            </button>
            <div className="flex items-center gap-2 font-bold text-sm">
              <span className="w-3 h-3 bg-[#DFE104]"></span>
              FINGERS++ <span className="text-[#3F3F46] text-xs font-normal">KERNEL::OS_REALTIME</span>
            </div>
          </div>
          
          <div className="flex items-center gap-6">
            <div className="text-xs uppercase text-[#3F3F46] font-bold">
              HAND_NODES: <span className="text-[#DFE104] text-sm">{hands.length}</span>
            </div>
            <div className="text-xs uppercase text-[#3F3F46] font-bold">
              TOTAL_VAL (B10): <span className="text-[#FAFAFA] text-sm">{totalBase10}</span> <span className="text-[#DFE104] ml-1">{totalBase5}(B5)</span>
            </div>
          </div>

          <div className="flex items-center gap-4 text-xs font-bold uppercase">
            <button 
              onClick={() => { playBubbleSound(); setGoreMode(!goreMode); }}
              className={`flex items-center gap-2 border px-2 py-1 transition-colors ${goreMode ? 'border-red-500 text-red-500' : 'border-[#3F3F46] text-[#3F3F46] hover:text-[#FAFAFA]'}`}
            >
              <span className={`w-2 h-2 ${goreMode ? 'bg-red-500' : 'bg-[#3F3F46]'}`}></span> GORE MODE
            </button>
            <button 
              onClick={() => { playBubbleSound(); togglePhysics(); }}
              className="text-[#DFE104] hover:text-[#FAFAFA] flex items-center gap-1"
            >
              PHYSICS: {physicsMode === 0 ? 'STATIC' : physicsMode === 1 ? 'ZERO-G' : 'EARTH-G'}
            </button>
            <Volume2 size={16} className="text-[#3F3F46] hover:text-[#FAFAFA] cursor-pointer" onClick={playBubbleSound} />
          </div>
        </div>

        {/* ACTION BAR */}
        <div className="flex px-4 py-2 gap-4 items-center bg-[#09090B]">
          <div className="text-[#DFE104] font-bold text-sm whitespace-nowrap">&gt; REGISTER_MATH:</div>
          <div className="flex-grow flex bg-[#FAFAFA] text-[#09090B] font-mono text-lg h-10 border-2 border-[#3F3F46] relative">
            <input 
              className="w-full h-full bg-transparent outline-none px-4" 
              value={mathInput}
              onChange={e => setMathInput(e.target.value)}
              onKeyDown={e => {
                if(e.key === 'Enter'){ playBubbleSound(); executeMath(); }
              }}
              placeholder="e.g. 3 + 4 * 2"
            />
            <div className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-[#3F3F46] pointer-events-none uppercase">BASE-5 AWAITING</div>
          </div>
          <button 
            onClick={() => { playBubbleSound(); executeMath(); }}
            className="bg-[#DFE104] text-[#09090B] font-bold uppercase h-10 px-6 border-2 border-[#FAFAFA] hover:bg-[#FAFAFA] hover:border-[#DFE104] whitespace-nowrap shadow-[2px_2px_0_0_#FAFAFA] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[0_0_0_0]"
          >
            * Execute
          </button>
          <button 
            onClick={() => { playBubbleSound(); handleAddHand(); }}
            className="bg-[#09090B] text-[#FAFAFA] border-2 border-[#FAFAFA] h-10 px-6 font-bold uppercase hover:bg-[#3F3F46] whitespace-nowrap"
          >
            + Add Hand
          </button>
          <button 
            onClick={() => { playBubbleSound(); flingAll(); }}
            className="bg-[#09090B] text-red-500 border-2 border-red-500 h-10 px-6 font-bold uppercase hover:bg-red-500 hover:text-black whitespace-nowrap"
          >
            ⚡ Fling All
          </button>
        </div>
      </div>

      {/* INSTRUCTIONS OVERLAY */}
      <div className="absolute top-32 left-4 pointer-events-none z-10 text-[#3F3F46] text-xs font-mono uppercase leading-relaxed">
        [ PHYSICS SIMULATION KERNEL ACTIVE ]<br/>
        &gt; GRAB & FLING HANDS ACROSS ZERO-G BOARDS<br/>
        &gt; CLICK HAND TO INCREMENT REGISTER (0 -&gt; 5)<br/>
        &gt; RIGHT CLICK HAND TO TRIGGER THANOS SNAP DISINTEGRATION
      </div>

      {/* RADIX OVERLAY */}
      <div className="absolute bottom-10 right-8 pointer-events-none z-10 border border-[#3F3F46] bg-[#09090B]/80 p-4 text-right">
        <div className="text-[#3F3F46] text-xs font-mono mb-2 uppercase">RADIX-5 DECOMPOSITION</div>
        <div className="text-[#DFE104] font-bold mb-1">
          IΣ = {totalBase10} =&gt; {totalBase5}(B5)
        </div>
        <div className="text-[#FAFAFA] text-xs font-mono opacity-60">
          [P:1] = [P:4] + [P:5] ...
        </div>
      </div>

      {/* HANDS */}
      {hands.map(hand => (
        <div
          key={hand.id}
          ref={el => refMap.current[hand.id] = el}
          className={`absolute w-[140px] h-[60px] pointer-events-auto select-none flex items-center justify-center gap-2 ${hand.snapped ? 'snapping' : ''}`}
          onPointerDown={(e) => {
            const body = bodyMap.current.get(hand.id);
            if (body) {
              Matter.Body.setStatic(body, true);
              grabbedRef.current = {
                id: hand.id,
                startX: e.clientX,
                startY: e.clientY,
                lastX: e.clientX,
                lastY: e.clientY,
                offsetX: e.clientX - body.position.x,
                offsetY: e.clientY - body.position.y
              };
              e.target.setPointerCapture(e.pointerId);
            }
          }}
          onContextMenu={(e) => { e.preventDefault(); handleHandClick(e, hand.id); }}
        >
          {/* Number Tag */}
          <div className="absolute top-0 right-0 bg-[#09090B]/80 border border-[#3F3F46] text-[#DFE104] text-[10px] font-mono px-1 rounded shadow-md pointer-events-none z-10 translate-x-2 -translate-y-2">
            {hand.isFraction ? Number(hand.value.toFixed(3)) : hand.value}
          </div>
          {/* Emoji / Image */}
          <div className="flex items-center justify-center filter drop-shadow-[2px_2px_0_rgba(255,255,255,0.2)] pointer-events-none">
            {hand.isFraction ? <span className="text-[54px]" style={{ transform: `scale(${Math.max(0.3, Math.min(1.5, hand.value))})` }}>🩸</span> :
             hand.value === 0 ? <span className="text-[54px]">✊</span> :
             hand.value === 1 ? <span className="text-[54px]">☝️</span> :
             hand.value === 2 ? <span className="text-[54px]">✌️</span> :
             hand.value === 3 ? <img src="/3.png" className="w-16 h-16 object-contain drop-shadow-md scale-125" draggable="false" /> :
             hand.value === 4 ? <img src="/4.png" className="w-16 h-16 object-contain drop-shadow-md scale-125" draggable="false" /> :
             <span className="text-[54px]">🖐️</span>}
          </div>
        </div>
      ))}
    </div>
  );
}
