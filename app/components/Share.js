import Head from "next/head";
import { FacebookShareButton, TwitterShareButton,WhatsappShareButton,FacebookIcon, TwitterIcon, WhatsappIcon } from "react-share";
import "./share.css";
const Share = ({ url }) => {
  const shareTitle = "¡Únete a nuestro movimiento! Protejamos nuestas opciones de de movilidad y entregas.  Entra a   #yodecidocomomemuevo";  
  return (
    <div >
      <FacebookShareButton url={url} quote={shareTitle} className="share-buttons">
      <FacebookIcon size={32} round={true} />
      </FacebookShareButton>
      <TwitterShareButton url={url} title={shareTitle} className="share-buttons">
      <TwitterIcon size={32} round={true} />
      </TwitterShareButton>
      <WhatsappShareButton url={url} title={shareTitle} className="share-buttons">
      <WhatsappIcon size={32} round={true} />
      </WhatsappShareButton>
      <Head>
        {/* Script de Facebook */}
        <script async defer crossOrigin="anonymous" src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v11.0&appId={tu-app-id}" nonce="abcdefg" />
        {/* Script de Twitter */}
        <script async defer src="https://platform.twitter.com/widgets.js" />
        {/* Script de WhatsApp */}
        <script async defer src="https://cdn.jsdelivr.net/npm/@widgetbot/share-widget@1.1.0/whatsapp.js" />
      </Head>
    </div>
  );
};

export default Share;
