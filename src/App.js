import './App.css';
import { useState } from 'react';
import QRCode from 'react-qr-code';
import QRCodeLink from 'qrcode';

function App() {
  const [qr, setQr] = useState('');
  const [share, setShare] = useState('');

  
  const handleShare = (link_url) => {
    QRCodeLink.toDataURL(link_url, {
      width: 600,
      margin: 3,
    }, function (err, url) {
      setShare(url);
    })
  };

  const handleChange = (e) => {
    setQr(e.target.value);
    handleShare(e.target.value);
  }
  return (
    <div className="container">
      <div>
      <h1>Hello World</h1>
      <input
      className='input'
      type="text"
      placeholder="Digite seu link..."
      value={ qr }
      onChange={ (e) => handleChange(e) }
      />
        <a href={ share } download='qrcode.png'> Baixar QRCode</a>

      </div>

      <div className='card'>

      <QRCode size='200' value={qr} />
      </div>

    </div>
  );
}

export default App;
