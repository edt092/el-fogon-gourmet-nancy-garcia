export default function LogoSVG({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 200"
      className={className}
      aria-label="El Fogón Gourmet — Nancy García"
      role="img"
    >
      <defs>
        <radialGradient id="l-bg" cx="50%" cy="55%" r="55%">
          <stop offset="0%" stopColor="#1e1008" />
          <stop offset="100%" stopColor="#050201" />
        </radialGradient>
        <linearGradient id="l-fire" x1="0.5" y1="1" x2="0.5" y2="0">
          <stop offset="0%" stopColor="#ffe566" />
          <stop offset="22%" stopColor="#ffb300" />
          <stop offset="55%" stopColor="#ff4400" />
          <stop offset="90%" stopColor="#cc1100" />
          <stop offset="100%" stopColor="#880800" stopOpacity="0.5" />
        </linearGradient>
        <linearGradient id="l-core" x1="0.5" y1="1" x2="0.5" y2="0">
          <stop offset="0%" stopColor="#fff9c4" />
          <stop offset="50%" stopColor="#ffcc00" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#ff9900" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="l-gold" x1="0.5" y1="0" x2="0.5" y2="1">
          <stop offset="0%" stopColor="#ffe566" />
          <stop offset="45%" stopColor="#ffb300" />
          <stop offset="100%" stopColor="#cc7a00" />
        </linearGradient>
        <linearGradient id="l-plank" x1="0.5" y1="0" x2="0.5" y2="1">
          <stop offset="0%" stopColor="#7b3a0e" />
          <stop offset="50%" stopColor="#5c2a08" />
          <stop offset="100%" stopColor="#3d1a04" />
        </linearGradient>
        <filter id="l-gf" x="-15%" y="-15%" width="130%" height="130%">
          <feGaussianBlur stdDeviation="1.8" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="l-ts" x="-5%" y="-5%" width="110%" height="110%">
          <feDropShadow dx="0" dy="1" stdDeviation="1.5" floodColor="#000" floodOpacity="0.9" />
        </filter>
        <filter id="l-og" x="-4%" y="-4%" width="108%" height="108%">
          <feDropShadow dx="0" dy="0" stdDeviation="3" floodColor="#ff6600" floodOpacity="0.35" />
        </filter>
      </defs>

      {/* Circle background */}
      <circle cx="100" cy="100" r="97" fill="url(#l-bg)" filter="url(#l-og)" />
      <circle cx="100" cy="100" r="97" fill="none" stroke="#ff6600" strokeWidth="1.2" />
      <circle cx="100" cy="100" r="93" fill="none" stroke="#ff8800" strokeWidth="0.4" opacity="0.3" />

      {/* Flames */}
      <g filter="url(#l-gf)">
        {/* Far side flames */}
        <path
          d="M66 80 C64 72 65 63 68 57 C68.5 64 68 70 70 75 C70.5 77.5 71.5 78.5 72 78 C72.5 74.5 72 68 74 62 C75 70 73 79 71 84 Z"
          fill="#ff5500" opacity="0.6"
        />
        <path
          d="M134 80 C136 72 135 63 132 57 C131.5 64 132 70 130 75 C129.5 77.5 128.5 78.5 128 78 C127.5 74.5 128 68 126 62 C125 70 127 79 129 84 Z"
          fill="#ff5500" opacity="0.6"
        />
        {/* Secondary side flames */}
        <path
          d="M79 78 C76 68 77 57 81 50 C82 58 81 65 83 71 C83.5 73.5 85 75.5 86 74 C87 70 86 62 88 55 C89.5 64 87.5 75 85 80 Z"
          fill="#ff6600" opacity="0.75"
        />
        <path
          d="M121 78 C124 68 123 57 119 50 C118 58 119 65 117 71 C116.5 73.5 115 75.5 114 74 C113 70 114 62 112 55 C110.5 64 112.5 75 115 80 Z"
          fill="#ff6600" opacity="0.75"
        />
        {/* Main center flame */}
        <path
          d="M100 14
             C96 22 88 28 89 39
             C89.5 44 88 46 85 44
             C82 37 84 28 85 23
             C80 29 77 37 78 46
             C78 55 82 65 88 70
             C85 64 84 56 86 49
             C87 58 91 66 97 70
             C93.5 63 93 56 96 49
             C97 58 99 65 100 68
             C101 65 103 58 104 49
             C107 56 106.5 63 103 70
             C109 66 113 58 114 49
             C116 56 115 64 112 70
             C118 65 122 55 122 46
             C123 37 120 29 115 23
             C116 28 118 37 115 44
             C112 46 110.5 44 111 39
             C112 28 104 22 100 14 Z"
          fill="url(#l-fire)"
        />
        {/* Inner bright core */}
        <path
          d="M100 28 C98 34 95 38 96 44 C96.5 49 98.5 52 100 54 C101.5 52 103.5 49 104 44 C105 38 102 34 100 28 Z"
          fill="url(#l-core)" opacity="0.9"
        />
      </g>

      {/* "El" — small italic above Fogón */}
      <text
        x="100" y="88"
        textAnchor="middle"
        fontSize="19"
        fontWeight="700"
        fill="url(#l-gold)"
        filter="url(#l-ts)"
        fontFamily="Georgia, 'Times New Roman', serif"
        fontStyle="italic"
        letterSpacing="5"
      >
        El
      </text>

      {/* "Fogón" — main large title */}
      <text
        x="100" y="119"
        textAnchor="middle"
        fontSize="38"
        fontWeight="900"
        fill="url(#l-gold)"
        filter="url(#l-ts)"
        fontFamily="Georgia, 'Times New Roman', serif"
        fontStyle="italic"
        letterSpacing="1"
      >
        Fogón
      </text>

      {/* GOURMET banner — wooden plank style */}
      <polygon points="34,133 44,125 44,141" fill="#3d1a04" />
      <polygon points="166,133 156,125 156,141" fill="#3d1a04" />
      <rect x="42" y="124" width="116" height="18" rx="1" fill="url(#l-plank)" />
      <line x1="43" y1="125.5" x2="157" y2="125.5" stroke="#9b5523" strokeWidth="0.8" />
      <line x1="43" y1="141" x2="157" y2="141" stroke="#2a1003" strokeWidth="0.8" />
      <text
        x="100" y="136"
        textAnchor="middle"
        fontSize="11"
        fontWeight="800"
        fill="#ffe566"
        fontFamily="'Arial Black', Arial, sans-serif"
        letterSpacing="3.5"
      >
        GOURMET
      </text>

      {/* Divider with ornament dots */}
      <line x1="52" y1="152" x2="148" y2="152" stroke="#ff6600" strokeWidth="0.5" opacity="0.4" />
      <circle cx="100" cy="152" r="2" fill="#ff6600" opacity="0.5" />
      <circle cx="75" cy="152" r="1.2" fill="#ffb300" opacity="0.4" />
      <circle cx="125" cy="152" r="1.2" fill="#ffb300" opacity="0.4" />

      {/* "Nancy García" — cursive italic */}
      <text
        x="100" y="172"
        textAnchor="middle"
        fontSize="18"
        fontWeight="400"
        fill="white"
        filter="url(#l-ts)"
        fontFamily="'Palatino Linotype', Palatino, 'Book Antiqua', Georgia, serif"
        fontStyle="italic"
        letterSpacing="0.5"
      >
        Nancy García
      </text>

      {/* Bottom decorative dots */}
      <circle cx="72" cy="184" r="1.5" fill="#ff6600" opacity="0.5" />
      <circle cx="86" cy="187" r="1" fill="#ffb300" opacity="0.4" />
      <circle cx="100" cy="188" r="1.5" fill="#ff6600" opacity="0.5" />
      <circle cx="114" cy="187" r="1" fill="#ffb300" opacity="0.4" />
      <circle cx="128" cy="184" r="1.5" fill="#ff6600" opacity="0.5" />
    </svg>
  );
}
