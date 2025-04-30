import React, { useMemo } from 'react';

interface Bubble {
    id: number;
    cx: number;
    cy: number;
    r: number;
    color: string;
    opacity: number;
}

const Background: React.FC = () => {
    // Génération aléatoire des bulles
    const bubbles = useMemo<Bubble[]>(() => {
        const bubbleColors = [
            '#2b7fff',
            '#7070eb',
            '#9061d4',
            '#b33c89',
        ];

        const bubbleCount = 40;
        return Array.from({ length: bubbleCount }, (_, i) => ({
            id: i,
            cx: Math.random() * 100,
            cy: Math.random() * 100,
            r: 0.1 + Math.random() * 0.3,
            color: bubbleColors[Math.floor(Math.random() * bubbleColors.length)],
            opacity: 0.6 + Math.random() * 0.4 // Opacité entre 0.6 et 1
        }));
    }, []);

    return (
        <div className="fixed inset-0 w-full -z-10 overflow-hidden bg-[#0a0e17]">
            <svg
                className="w-full h-full"
                viewBox="0 0 100 100"
                preserveAspectRatio="xMidYMid slice"
            >
                {/* Fond noir */}
                <rect width="100%" height="100%" fill="#0a0e17" />

                {/* Bulles 2D vibrantes */}
                {bubbles.map((bubble) => (
                    <circle
                        key={bubble.id}
                        cx={`${bubble.cx}%`}
                        cy={`${bubble.cy}%`}
                        r={bubble.r}
                        fill={bubble.color}
                        opacity={bubble.opacity}
                        className="transition-all duration-3000 ease-[cubic-bezier(0.25,0.1,0.25,1)]"
                        style={{
                            animation: `float ${8 + Math.random() * 12}s infinite ease-in-out`,
                            animationDelay: `${Math.random() * 5}s`
                        }}
                    />
                ))}

                {/* Effet de profondeur */}
                <defs>
                    <filter id="bubble-blur" x="-20%" y="-20%" width="100%" height="140%">
                        <feGaussianBlur stdDeviation="0.5" />
                    </filter>
                </defs>
            </svg>

            {/* Styles d'animation */}
            <style>{`
        @keyframes float {
          0%, 100% { transform: translate(0, 0); }
          25% { transform: translate(${Math.random() * 2 - 1}%, ${Math.random() * 2 - 1}%); }
          50% { transform: translate(${Math.random() * 3 - 1.5}%, ${Math.random() * 3 - 1.5}%); }
          75% { transform: translate(${Math.random() * 2 - 1}%, ${Math.random() * 2 - 1}%); }
        }
      `}</style>
        </div>
    );
};

export default Background;