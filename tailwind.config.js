export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      boxShadow: {
        soft: '0 18px 60px rgba(79, 70, 229, 0.12)'
      },
      backgroundImage: {
        'hero-gradient': 'radial-gradient(circle at top, rgba(79, 70, 229, 0.12), transparent 35%), linear-gradient(180deg, #F8FAFC 0%, #F4F4FF 100%)'
      }
    }
  },
  plugins: []
};
