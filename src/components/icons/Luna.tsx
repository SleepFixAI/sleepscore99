const Luna = ({ className = "", size = 32 }: { className?: string; size?: number }) => {
  return (
    <div className={`relative ${className}`} style={{ width: size, height: size }}>
      <div 
        className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-orange-400"
        style={{
          clipPath: 'polygon(50% 0%, 100% 0%, 100% 100%, 50% 100%, 50% 0%)'
        }}
      />
      <div 
        className="absolute inset-0 rounded-full border-2 border-primary"
        style={{
          clipPath: 'polygon(0% 0%, 50% 0%, 50% 100%, 0% 100%, 0% 0%)'
        }}
      />
    </div>
  );
};

export default Luna;
