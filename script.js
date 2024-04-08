const mapImage = document.getElementById('map-image');
const infoBox = document.getElementById('info-box');
const showPlanButton = document.getElementById('show-plan');

const infrastructures = [
  { id: 1, x: 67, y: 25, title: "Solar Farms", description: "A solar farm is a large collection of solar panels that convert sunlight into electricity.", color: 'red', greenDescription: "A 1-megawatt solar farm can offset the carbon emissions of roughly 500 gas-powered vehicles annually. This helps combat climate change and air pollution. Studies by the National Renewable Energy Laboratory (NREL) show that solar energy creates more jobs per megawatt of electricity produced than fossil fuels. Furthermore, the Iowa Environmental Mesearch and Policy Center reports that Iowa has excellent potential for solar energy production, making it a financially viable option. Source: gridalternatives.org" },
  { id: 2, x: 37, y: 68, title: "Bioswales", description: "Bioswales are shallow, landscaped depressions designed to capture, filter, and slow down stormwater runoff. They often contain native plants and grasses.", color: 'red', greenDescription: "Bioswales filter pollutants like oil, chemicals, and excess nutrients from runoff, protecting nearby waterways and groundwater. By slowing and absorbing runoff, bioswales reduce peak water flows, lessening the risk of flash floods and erosion. Bioswales allow water to infiltrate back into the soil, replenishing groundwater supplies and supporting healthy vegetation. Bioswales can replace or supplement costly traditional stormwater systems (pipes, retention ponds), reducing long-term maintenance costs. The EPA estimates bioswales can remove up to 90% of certain pollutants from stormwater runoff. Studies have shown bioswales can reduce peak stormwater flows by up to 20%, significantly reducing the burden on existing infrastructure. Source: hgic.clemson.edu" },
  { id: 3, x: 15, y: 25, title: "Community Composting Facility", description: "A community composting facility is a centralized location where residents can bring their food scraps, yard waste, and other organic materials to be turned into compost.", color: 'red', greenDescription: "Up to 30% of household waste could be diverted from landfills through composting, significantly reducing Waverly's waste footprint. Food scraps decomposing in landfills produce methane, a potent greenhouse gas. Composting helps mitigate these emissions. Compost improves soil fertility, reducing the need for chemical fertilizers, benefiting for local parks, gardens, and agricultural lands. Less waste going to landfills means lower disposal fees and extends the landfill's lifespan, saving the city money. A community composting facility creates local jobs in the collection, processing, and even education related to composting. According to the EPA, composting can divert a significant portion of waste volume from landfills, up to nearly a third of a city's total waste stream. Also from the EPA, food waste sent to landfills is a significant contributor to methane emissions, a greenhouse gas with 28 to 36 times the global warming potential of CO2 over a 100 year period. Source: islr.org" },
  { id: 4, x: 22, y: 35, title: "Green Roofs", description: "Green roofs are roofs with a layer of vegetation planted over a waterproofing system. They can range from simple grass coverings to diverse gardens.", color: 'red', greenDescription: "Green roofs retain significant amounts of rainwater, up to 75%, reducing flooding risks and strain on existing drainage systems. Plants on green roofs filter air pollutants and improve overall air quality. The insulation and cooling benefits of green roofs help reduce energy costs for the buildings they cover. According to Penn State, studies show that green roofs can retain 50-90% of precipitation depending on design and rainfall intensity. The GRHC (Green Roofs for Healthy Cities) claims that green roofs can extend a roof's lifespan by two to three times compared to a traditional roof. Source: nps.gov" },
  { id: 5, x: 35, y: 20, title: "Community Gardens", description: "Community gardens are shared plots of land where residents can grow their own fruits, vegetables, herbs, and flowers.", color: 'red', greenDescription: "Community gardens provide a source of fresh, nutritious food grown within the city, reducing reliance on long-distance transportation and lowering food miles. Residents who grow their own food can significantly reduce their grocery bills, especially for fresh produce. Access to fresh produce and the physical activity of gardening can lead to improved health outcomes, potentially saving healthcare costs over time. According to the American Nutrition Association, studies have shown that community gardeners eat more fruits and vegetables than non-gardeners. Also, Community gardens can be a source of fresh produce for low-income communities, reducing the potential for food deserts. Source: ihpl.llu.edu" },
  { id: 6, x: 41, y: 41, title: "Bike Lanes", description: "Bike lanes are designated lanes on roadways exclusively for bicycle use and are often marked with paint, signage, or physical barriers that separate them from vehicle traffic.", color: 'red', greenDescription: "Encouraging more people to bike decreases reliance on cars, reducing carbon emissions and improving air quality. Bike lanes make cycling safer and more accessible, leading to increased physical activity and associated health benefits. The health benefits of active transportation can lead to potential long-term healthcare savings for the community. According to National Association of City Transportation Officials, Studies show that protected bike lanes can increase ridership by an average of 75%. Source: ncdot.gov" },
  { id: 7, x: 95, y: 95, title: "Regenerative Farming Practices", description: "Regenerative farming practices are a holistic approach to agriculture that focuses on improving soil health, biodiversity, and water cycles. Specifically, it includes cover cropping, no-till or minimal-till, diverse crop rotations, and integrating livestock.", color: 'red', greenDescription: "Regenerative practices build rich, fertile topsoil, the basis for productive agriculture and reducing the need for chemical fertilizers. Healthy soil acts as a carbon sink, pulling carbon dioxide from the atmosphere and helping mitigate climate change. Healthier soils retain moisture better, protecting crops during drought and decreasing the need for additional irrigation. Studies show that over time, regenerative practices can lead to similar or even increased yields compared to conventional farming. The Rodale Institute's Farming Systems Trial has shown comparable or higher yields and significantly greater profitability potential in regenerative systems over long-term studies. According to Regeneration International, studies estimate that widespread adoption of regenerative practices could sequester enough carbon to significantly impact atmospheric CO2 concentrations. Source: nrdc.org" },
  { id: 8, x: 67, y: 22, title: "Community Solar", description: "Community solar is a shared solar array where individuals or businesses can subscribe for a portion of the electricity generated.", color: 'red', greenDescription: "Community solar expands access to solar power even for residents who rent, have unsuitable roofs, or can't afford a full system installation. By replacing fossil-fuel-generated electricity with solar power, community solar projects reduce Waverly's overall carbon footprint.  The development and maintenance of community solar projects create jobs and stimulate the local economy. According to the Solar Foundation, The solar industry is a rapidly growing sector that creates well-paying jobs, the solar industry employs over 250,000 workers in the U.S. Source: energy.gov" },
  { id: 9, x: 36, y: 35, title: "Pollinator-Friendly Parks", description: "Pollinator-friendly parks are parks and green spaces designed to specifically support the needs of pollinators like bees, butterflies, moths, and other beneficial insects.", color: 'red', greenDescription: "Pollinators are essential for the reproduction of many plant species, thus supporting entire ecosystems. Healthy pollinator populations enhance park biodiversity. Roughly one-third of our food supply relies on pollinators. Pollinator parks often rely on native plants that are well-adapted to local conditions, requiring less watering, fertilization, and pest control. According to the Food and Agriculture Organization of the United Nations, over 75% of the world's flowering plants rely on animal pollinators for reproduction, with the vast majority of those pollinators being insects. Source: nps.gov" },
  { id: 10, x: 29, y: 41, title: "Electric Vehicle Charging Stations", description: "Electric vehicle charging stations are public or private installations that provide electricity to recharge the batteries of electric vehicles.", color: 'red', greenDescription: "EVs produce zero tailpipe emissions, so widespread EV adoption significantly improves air quality and helps combat climate change. Even when powered by the grid, EVs generally displace a significant portion of gasoline and diesel use. The number of registered EVs is growing exponentially. According to the International Energy Agency, some projections estimate that by 2030, 35% of new car sales will be electric vehicles. Source: transportation.gov" },
  { id: 11, x: 20, y: 41, title: "Roads", description: "Altering roadways to be constructed with materials that allow water to infiltrate through the surface and into the ground below, unlike traditional asphalt or concrete that create impenetrable barriers.", color: 'orange', greenDescription: "Permeable pavement dramatically reduces runoff, easing the burden on drainage systems and preventing flash flooding during heavy rainfall. Permeable pavement doesn't absorb heat like traditional surfaces, helping to lower city temperatures. With proper maintenance, permeable pavement can have a similar or longer lifespan than traditional pavement due to less water-related damage. According to the EPA, studies show that permeable pavement can reduce peak stormwater runoff flows by up to 90%. Also, cost analysis studies, while location-specific, often show that the long-term benefits outweigh the potentially higher initial installation cost of permeable pavement. Source: usgs.gov" },
  { id: 12, x: 37, y: 50, title: "Public Spaces", description: "Altering playgrounds to be designed with natural elements like logs, rocks, sand, water, and native plants.", color: 'orange', greenDescription: "Nature-based materials absorb rainwater better than standard playground surfaces, reducing runoff. Natural materials are often less expensive to maintain compared to traditional playground equipment that requires repair and repainting. Studies link nature-based playgrounds to increased physical activity levels in children. According to the University of Nebraska-Lincoln, exposure to natural elements during play can reduce stress and improve mental well-being. Source: weconservepa.org" },
  { id: 13, x: 25, y: 41, title: "Expanding Sidewalks", description: "Altering existing sidewalks by widening them, adding sidewalks to streets that currently lack them, and improving connectivity within the sidewalk network.", color: 'orange', greenDescription: "Encouraging walking instead of driving reduces vehicle emissions, improving air quality and combating climate change. Improved sidewalks make walking a safer and more appealing option, promoting healthy lifestyles. Walkable neighborhoods see increased foot traffic, which benefits local businesses and boosts the local economy. According to the Bureau of Transportation Statistics, the presence of sidewalks promotes walking to the extent that if communities without sidewalks built them, an expected 2.8 million Americans would take up walking. Source: transportation.gov" },
];

function createIndicators() {
  infrastructures.forEach(infrastructure => {
    addIndicator(infrastructure.x, infrastructure.y, infrastructure.color, infrastructure);
  });
}

function addIndicator(xPercent, yPercent, color, infrastructure) {
  const mapImageRect = mapImage.getBoundingClientRect();
  const indicator = document.createElement('div');
  indicator.classList.add('indicator');
  indicator.dataset.id = infrastructure.id; 
  
  const left = mapImageRect.left + (mapImageRect.width * xPercent / 100);
  const top = mapImageRect.top + (mapImageRect.height * yPercent / 100);
  
  indicator.style.left = `${left}px`;
  indicator.style.top = `${top}px`;
  indicator.style.backgroundColor = color;
  
  indicator.addEventListener('click', () => showInfoBox(infrastructure));
  document.body.appendChild(indicator);
}

function showInfoBox(infrastructure) {
  infoBox.innerHTML = `<h3>${infrastructure.title}</h3><p>${infrastructure.description}</p>`;
  infoBox.style.left = '10px';
  infoBox.style.top = '50px'; 
  infoBox.style.visibility = 'visible';
  infoBox.dataset.currentId = infrastructure.id;
}

function hideInfoBox() {
  infoBox.style.visibility = 'hidden';
}

function showGreenPlanDetails() {
  const currentId = infoBox.dataset.currentId;
  const infrastructure = infrastructures.find(infra => infra.id.toString() === currentId);
  
  if (infrastructure) {
    infoBox.innerHTML = `<h3>${infrastructure.title}</h3><p>${infrastructure.greenDescription}</p>`;
    document.querySelector(`.indicator[data-id="${infrastructure.id}"]`).style.backgroundColor = 'green';
  }
}

createIndicators();

showPlanButton.addEventListener('click', showGreenPlanDetails);

window.addEventListener('resize', function() {
  document.querySelectorAll('.indicator').forEach(indicator => indicator.remove());
  createIndicators(); 
});
document.getElementById('green-plan-form').addEventListener('submit', function(event) {
  event.preventDefault(); 
  
  const infrastructureId = document.getElementById('infrastructure-id').value;
  const greenDescription = document.getElementById('green-description').value;
  
  const infrastructure = infrastructures.find(infra => infra.id.toString() === infrastructureId);
  if (infrastructure) {
    infrastructure.greenDescription = greenDescription;
    alert('Green plan details updated successfully!');
  } else {
    alert('Infrastructure with the specified ID not found.');
  }
  
  event.target.reset();
});

mapImage.addEventListener('click', function(event) {
  if (event.target !== infoBox && !infoBox.contains(event.target)) { 
      hideInfoBox();
  }
});
