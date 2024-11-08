(() => {
  console.log("IIFE Fired");
  
  const hotspots = document.querySelectorAll('.Hotspot');
  console.log(hotspots)

  function showInfo(e) {
    console.log(e.currentTarget.slot);
    let selected = document.querySelector(`button[slot="${e.currentTarget.slot}"] > div`);
    gsap.to(selected, 1, {autoAlpha: 1});
  }

  function hideInfo(e) {
    console.log(e);
    let selected = document.querySelector(`button[slot="${e.currentTarget.slot}"] > div`);
    gsap.to(selected, 1, {autoAlpha: 0});

    let name = "Napas";

    console.log('My name is')
  }


  hotspots.forEach(hotspot => {
    hotspot.addEventListener('mouseover', showInfo);
    hotspot.addEventListener('mouseout', hideInfo);
  });

})();