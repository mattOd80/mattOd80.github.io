[
    'https://cdnjs.cloudflare.com/ajax/libs/babel-standalone/7.24.7/babel.min.js',
    'https://cdnjs.cloudflare.com/ajax/libs/react/18.3.1/umd/react.development.js',
    'https://cdnjs.cloudflare.com/ajax/libs/react-dom/18.3.1/umd/react-dom.development.min.js',
].forEach( src => {
    const script = document.createElement('script');
    script.setAttribute('type', 'text/javascript');
    script.setAttribute('crossorigin', '');
    script.setAttribute('src', src);
    document.head.appendChild(script);

});

const react_app = document.createElement('script');
react_app.setAttribute('type', 'text/babel');
react_app.setAttribute('data-presets', 'react');
react_app.setAttribute('crossorigin', '');
react_app.setAttribute('src', 'spa.js');
document.head.appendChild(react_app);