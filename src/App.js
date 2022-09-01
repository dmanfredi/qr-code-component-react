import qrcode from './images/image-qr-code.png';

function App() {
  return (
    <div className="App">
      <div className="meta-wrapper">
        <div className="container">
          <div className="qr-image-wrapper">
            <img src={qrcode} alt="QR Code" className="qr-img" />
          </div>
          <header className="prompt">
            Improve your front-end skills by building projects
          </header>
          <div className="instructions">
            Scan the QR code to visit Frontend Mentor and take your coding
            skills to the next level
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
