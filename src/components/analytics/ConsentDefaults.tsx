import { CONSENT_DENIED_REGIONS } from "@/content/site";
import { CONSENT_STORAGE_KEY } from "@/lib/analytics";

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID ?? "";

/**
 * Consent Mode v2 defaults and the GTM loader, as one inline script in <head> so the defaults are
 * set before any tag can fire. Denied in the EEA, UK and Switzerland until the banner is answered;
 * granted elsewhere. A stored choice wins; Global Privacy Control counts as an opt-out.
 * With no NEXT_PUBLIC_GTM_ID the container is not loaded at all.
 */
export function ConsentDefaults() {
  const script = `
window.dataLayer=window.dataLayer||[];
function gtag(){dataLayer.push(arguments);}
window.gtag=window.gtag||gtag;
var k=${JSON.stringify(CONSENT_STORAGE_KEY)},s=null;try{s=localStorage.getItem(k);}catch(e){}
gtag('consent','default',{ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied',analytics_storage:'denied',functionality_storage:'granted',security_storage:'granted',region:${JSON.stringify(CONSENT_DENIED_REGIONS)},wait_for_update:500});
gtag('consent','default',{ad_storage:'granted',ad_user_data:'granted',ad_personalization:'granted',analytics_storage:'granted',functionality_storage:'granted',security_storage:'granted'});
function u(v){var g=v==='granted'?'granted':'denied';gtag('consent','update',{ad_storage:g,ad_user_data:g,ad_personalization:g,analytics_storage:g});}
if(s==='granted'||s==='denied')u(s);
if(navigator.globalPrivacyControl&&s!=='granted'){u('denied');try{localStorage.setItem(k,'denied');}catch(e){}}
${
  GTM_ID
    ? `dataLayer.push({'gtm.start':new Date().getTime(),event:'gtm.js'});var t=document.createElement('script');t.async=true;t.src='https://www.googletagmanager.com/gtm.js?id='+encodeURIComponent(${JSON.stringify(GTM_ID)});document.head.appendChild(t);`
    : ""
}`;
  return <script id="consent-defaults" dangerouslySetInnerHTML={{ __html: script }} />;
}
