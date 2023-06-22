import { useEffect } from "react";

const FlinksIframe = _ => {
  useEffect(() => {
    const messagehandler = e => {
      console.log(e.data)
    }
    window.addEventListener('message', messagehandler);
    return _ => window.removeEventListener('message', messagehandler);
  }, []);
  return (
    <iframe height="760" title="flinks"
        src="https://toolbox-iframe.private.fin.ag/?demo=true&redirectUrl=https://flinks.com/contact/thank-you&innerRedirect=true&theme=light&consentEnable=true&customerName=FinTech&backgroundColor=f7f7f7&foregroundColor1=000000&desktopLayout=true&headerEnable=false&institutionFilterEnable=true">
    </iframe>
  )
}

export default FlinksIframe;