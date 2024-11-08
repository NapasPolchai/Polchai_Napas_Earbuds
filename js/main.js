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

(() => {
  console.log("IIFE Fired");

  const infoHotspot = [
    {
      slot: "slot1",
      title: "Universal button",
      description: "The universal button on earbuds controls playback, calls, and voice assistants with simple taps or holds.",
      imgSrc: "images/"
    },
    {
      slot: "slot2",
      title: "Speaker",
      description: "A speaker that delivers powerful, high-quality sound for music, calls, and more—connect easily and enjoy clear audio anywhere.",
      imgSrc: "images/"
    },
    {
      slot: "slot3",
      title: "Microphone",
      description: "A microphone captures clear audio for calls, recording, and streaming.",
      imgSrc: "images/"
    }
  ];
  
  // Populate content dynamically
  function populateContent(hotspotDataItem, selected) {
    selected.innerHTML = `
      <h2>${hotspotDataItem.title}</h2>
      <p>${hotspotDataItem.description}</p>
      <img src="${hotspotDataItem.imgSrc}" alt="${hotspotDataItem.title}">
    `;
  }
  
  // Show info function
  function showInfo(e) {
    const slot = e.currentTarget.getAttribute("slot");
  
    // Find the corresponding data for the hovered hotspot
    const hotspotDataItem = infoHotspot.find(item => item.slot === slot);
  
    if (hotspotDataItem) {
      // Select the specific hotspot's info container
      const selected = e.currentTarget.querySelector("div");
  
      // Add the content dynamically
      populateContent(hotspotDataItem, selected);
  
      // Show info with animation
      gsap.to(selected, {duration: 1, autoAlpha: 1});
    }
  }
  
  // Hide info function
  function hideInfo(e) {
    const selected = e.currentTarget.querySelector("div");
    gsap.to(selected, {duration: 1, autoAlpha: 0});
  }
  
  // Event listeners for each hotspot
  const hotSpots = document.querySelectorAll(".Hotspot");
  hotSpots.forEach(hotSpot => {
    hotSpot.addEventListener("mouseover", showInfo);
    hotSpot.addEventListener("mouseout", hideInfo);
  });
})();