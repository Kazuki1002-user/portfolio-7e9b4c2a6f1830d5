(() => {
  'use strict';
  const data = window.PORTFOLIO;
  const escape = value => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  function youtubeId(input) {
    try {
      const url = new URL(input);
      if (url.protocol !== 'https:') return null;
      let id;
      if (url.hostname === 'youtu.be') id = url.pathname.slice(1);
      else if (['youtube.com','www.youtube.com','m.youtube.com','youtube-nocookie.com','www.youtube-nocookie.com'].includes(url.hostname)) {
        id = url.pathname === '/watch' ? url.searchParams.get('v') : /^\/(embed|shorts|live)\//.test(url.pathname) ? url.pathname.split('/')[2] : null;
      }
      return /^[\w-]{11}$/.test(id || '') ? id : null;
    } catch { return null; }
  }
  window.portfolioYouTubeId = youtubeId;
  function videoMarkup(video) {
    const id = youtubeId(video.url);
    return `<figure class="video"><div class="video-frame">${id ? `<iframe src="https://www.youtube-nocookie.com/embed/${id}" title="${escape(video.title)}" loading="lazy" referrerpolicy="strict-origin-when-cross-origin" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>` : `<div class="placeholder"><span>${video.url ? '動画URLを確認してください' : '動画準備中'}</span><small>${escape(video.title)}</small></div>`}</div><figcaption><h5>${escape(video.title)}</h5><p>${escape(video.description)}</p></figcaption></figure>`;
  }
  window.portfolioVideoMarkup = videoMarkup;
  function setText(selector, text) {const element = document.querySelector(selector);if(element)element.textContent=text;}
  if (!document.querySelector('#research')) return;
  setText('#intro-text',data.intro);
  if(data.name){setText('#owner',data.name);document.querySelector('#owner').hidden=false;}
  setText('#research-title',data.research.title);setText('#research-summary',data.research.summary);
  document.querySelector('#research-video').innerHTML=videoMarkup(data.research.video);
  const validImage=src=>/^assets\/[^<>"'\\?#\u0000-\u001f]+\.(svg|png|jpe?g|webp)$/i.test(src||'')&&!src.split('/').includes('..');
  const figures = document.querySelector('#research-figures');
  figures.innerHTML=data.research.figures.map((image,index)=>`<figure class="diagram"><div class="figure-heading"><span>${escape(image.status)}</span><h4>${escape(image.title)}</h4></div><button class="image-button" type="button" data-image="${index}" aria-label="${escape(image.title)}の画像を拡大"><img src="${validImage(image.src)?escape(image.src):'assets/research-current.svg'}" alt="${escape(image.alt)}" width="960" height="600" loading="lazy"><span class="expand-label">クリックで拡大</span></button><figcaption><p>${escape(image.description)}</p></figcaption></figure>`).join('');
  setText('#band-title',data.band.title);setText('#band-summary',data.band.summary);
  setText('#telephone-description',data.band.telephone.description);setText('#reverse-description',data.band.reverse.description);
  document.querySelector('#telephone-video').innerHTML=videoMarkup(data.band.telephone.video);
  document.querySelector('#reverse-videos').innerHTML=data.band.reverse.videos.map(videoMarkup).join('');
  setText('#game-title',data.game.title);setText('#game-summary',data.game.summary);
  document.querySelector('#game-video').innerHTML=videoMarkup(data.game.video);
  const dialog=document.querySelector('#image-dialog');
  let trigger=null;
  figures.querySelectorAll('[data-image]').forEach(button=>button.addEventListener('click',()=>{
    trigger=button;
    const original=button.querySelector('img');
    const enlarged=document.querySelector('#expanded-image');enlarged.src=original.src;enlarged.alt=original.alt;
    setText('#image-caption',data.research.figures[Number(button.dataset.image)].title);
    dialog.showModal();document.body.classList.add('modal-open');document.querySelector('#close-image').focus();
  }));
  document.querySelector('#close-image').addEventListener('click',()=>dialog.close());
  dialog.addEventListener('click',event=>{if(event.target===dialog){const r=dialog.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)dialog.close();}});
  dialog.addEventListener('close',()=>{document.body.classList.remove('modal-open');trigger?.focus({preventScroll:true});});
  const links=[...document.querySelectorAll('nav a')];
  function updateNavigation(){let current='research';for(const id of ['research','band','game'])if(document.getElementById(id).getBoundingClientRect().top<=130)current=id;links.forEach(link=>{if(link.hash==='#'+current)link.setAttribute('aria-current','location');else link.removeAttribute('aria-current');});}
  addEventListener('scroll',updateNavigation,{passive:true});updateNavigation();
})();
