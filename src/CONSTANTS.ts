export const UID: string = 'RStjh8vw5YW2dC0zddXbH3AGwfp1'
export const FIELD_ID: number = 1707092204217
export const FIELD_NAME: string = 'Amulet Estate - 1'
export const GOOGLE_MAPS_API_KEY = 'AIzaSyAV8OnKm2XKcoQYTlb922S9zwUxuUV6UPg'

export const FIELD_ID_2: number = 1707182136816
export const FIELD_NAME_2: string = 'Amulet Estate - 2'

/*
Based on the provided data and the current growth stage of the grapes, one of the major pests and diseases that could affect your crop are Downy Mildew, Powdery Mildew, and Grape Berry Moths.

1. Downy Mildew: The forecasted humidity level and rainfall could potentially lead to Downy Mildew. This disease is favored by wet, warm conditions usually following periods of heavy dew and rains. Downy Mildew is characterized by yellow patches on top of the leaves and white, cottony substance underneath.

2. Powdery Mildew: This disease is typically more prevalent in regions with warm, dry climates. The moderate temperatures forecasted for the next week can lead to a higher risk of Powdery Mildew. This is often seen as white, powdery circular spots on leaves, stems, and sometimes grapes.

3. Grape Berry Moths: Depending on the growth stage of the grape, Grape Berry Moths can become a problem. They tend to attack grapes during the bloom stage, the larvae of these moths feed on grape flowers and young fruit.

Potential solutions for these pests and diseases include:

1. Downy Mildew: The use of fungicides can help to control Downy Mildew. Bordeaux mixture is one organic solution, while Ridomil Gold and similar products could be used as a chemical solution in severe infestations. Also, ensure to improve the drainage and circulation in the vineyard.

2. Powdery Mildew: For organic farming, sprays containing sulfur, lime-sulfur, and potassium bicarbonate can be effective. For chemical control, Quintec, and Topguard are used. Also, pruning and proper training of vines can reduce the chances of this disease by improving air circulation and limiting leaf contact.

3. Grape Berry Moths: For organic farming, using pheromone disruption can be an effective method to control these pests, while chemical control can include products such as Intrepid or Sevin. Also, maintaining proper vineyard hygiene by removing any old mummified berries can help reduce the likelihood of infestation.

Please remember to always follow the label when applying any control method or product. These are only recommendations and may not completely control or prevent these pests and diseases. Monitoring your crops carefully and frequently will help you determine the best course of action.
*/
export const diseaseRecHardcoded = [
    "Downy Mildew: The forecasted humidity level and rainfall could potentially lead to Downy Mildew. This disease is favored by wet, warm conditions usually following periods of heavy dew and rains. Downy Mildew is characterized by yellow patches on top of the leaves and white, cottony substance underneath.",
    "Powdery Mildew: This disease is typically more prevalent in regions with warm, dry climates. The moderate temperatures forecasted for the next week can lead to a higher risk of Powdery Mildew. This is often seen as white, powdery circular spots on leaves, stems, and sometimes grapes.",
    "Grape Berry Moths: Depending on the growth stage of the grape, Grape Berry Moths can become a problem. They tend to attack grapes during the bloom stage, the larvae of these moths feed on grape flowers and young fruit.",
    "Potential solutions for these pests and diseases include:",
    "Downy Mildew: The use of fungicides can help to control Downy Mildew. Bordeaux mixture is one organic solution, while Ridomil Gold and similar products could be used as a chemical solution in severe infestations. Also, ensure to improve the drainage and circulation in the vineyard.",
    "Powdery Mildew: For organic farming, sprays containing sulfur, lime-sulfur, and potassium bicarbonate can be effective. For chemical control, Quintec, and Topguard are used. Also, pruning and proper training of vines can reduce the chances of this disease by improving air circulation and limiting leaf contact.",
    "Grape Berry Moths: For organic farming, using pheromone disruption can be an effective method to control these pests, while chemical control can include products such as Intrepid or Sevin. Also, maintaining proper vineyard hygiene by removing any old mummified berries can help reduce the likelihood of infestation.",
    "Please remember to always follow the label when applying any control method or product. These are only recommendations and may not completely control or prevent these pests and diseases. Monitoring your crops carefully and frequently will help you determine the best course of action."
] 

/*
The grape farm is entering a crucial stage in its growth cycle (12 months) that requires careful monitoring and management. However, without complete history of NDVI and NDWI trends, it becomes challenging to make precise irrigation recommendations.

The weather conditions presented for the next eight days have mixed forecasts, with some days being partly cloudy with rain and others partly cloudy, with temperatures ranging approximately between 2-16°C. There seems to be a fair amount of cloud coverage over the next week which would reduce evaporation rates and keep the soil relatively moist.

Here are some general observations and recommendations:

1. **On the two rainy days**, take advantage of the precipitation for natural irrigation. Make sure waterlogging is avoided; improve soil water percolation if necessary to protect the roots from flooding and root diseases.

2. The days with **higher humidity** and **lower winds** will reduce water loss from the grapevines through evapotranspiration. Consider this when determining irrigation volumes, the irrigation needed might be lesser than normal.

3. The **UV Index** is within a moderate range for the entire week. While the grapevines can tolerate this index, prolonged exposure could affect grapevines. Monitor the vineyard to ascertain any adverse impact of the UV Index.

4. **The NDWI and NDVI values** are often used to determine vegetation health and moisture condition, respectively. Both indices are currently relatively low, which could imply a need for more regular watering to increase moisture content.

Given these conditions, it is advisable to monitor the crop closely in this phase and adjust the irrigation accordingly. Always ensure that the amount of water supply does not exceed the water holding capacity of the soil, to prevent waterlogging and root diseases.

Finally, consider using sensors (for example, soil and leaf wetness sensors) in the vineyard, as they could provide valuable insights into plant water needs and can help in automating the irrigation process.

Please note: These recommendations are based on the mentioned input data and should be adjusted based on any additional specific farm or local factors. It would also be useful to verify these recommendations with a local agronomist or extension service. It's important to closely observe how the crops respond to the implemented changes and adjust strategies accordingly.

export const irrigationRecHardcoded = [
    "The grape farm is entering a crucial stage in its growth cycle (12 months) that requires careful monitoring and management. However, without complete history of NDVI and NDWI trends, it becomes challenging to make precise irrigation recommendations.",
    "The weather conditions presented for the next eight days have mixed forecasts, with some days being partly cloudy with rain and others partly cloudy, with temperatures ranging approximately between 2-16°C. There seems to be a fair amount of cloud coverage over the next week which would reduce evaporation rates and keep the soil relatively moist.",
    "Here are some general observations and recommendations:",
    "1. **On the two rainy days**, take advantage of the precipitation for natural irrigation. Make sure waterlogging is avoided; improve soil water percolation if necessary to protect the roots from flooding and root diseases.",
    "2. The days with **higher humidity** and **lower winds** will reduce water loss from the grapevines through evapotranspiration. Consider this when determining irrigation volumes, the irrigation needed might be lesser than normal.",
    "3. The **UV Index** is within a moderate range for the entire week. While the grapevines can tolerate this index, prolonged exposure could affect grapevines. Monitor the vineyard to ascertain any adverse impact of the UV Index.",
    "4. **The NDWI and NDVI values** are often used to determine vegetation health and moisture condition, respectively. Both indices are currently relatively low, which could imply a need for more regular watering to increase moisture content.",
    "Given these conditions, it is advisable to monitor the crop closely in this phase and adjust the irrigation accordingly. Always ensure that the amount of water supply does not exceed the water holding capacity of the soil, to prevent waterlogging and root diseases.",
    "Finally, consider using sensors (for example, soil and leaf wetness sensors) in the vineyard, as they could provide valuable insights into plant water needs and can help in automating the irrigation process.",
    "Please note: These recommendations are based on the mentioned input data and should be adjusted based on any additional specific farm or local factors. It would also be useful to verify these recommendations with a local agronomist or extension service. It's important to closely observe how the crops respond to the implemented changes and adjust strategies accordingly."
]
*/

/*
better irrigation rec:


Based on the provided data and the general irrigation requirements for grape crops, here are the personalized irrigation advisories for your vineyard in the coming seven days:

Day 1: There will be partly cloudy weather with a negligible probability of precipitation (pop: 0), so no natural irrigation from rain. The NDVI value is 0.2, indicating sparse vegetation, and the NDWI value is 0.22, indicating dry conditions. Considering the current crop growth stage (12 months), you should plan for a moderate irrigation of around 6-8 mm.

Day 2: Expect a day of moderate rain, which will naturally irrigate your crops (rain: 5.09 mm, pop: 1). Therefore, it's best to avoid additional irrigation to prevent waterlogging. However, keep an eye on precipitation and adjust accordingly.

Day 3: The relatively warm temperature (283.19 K) and partly cloudy weather with a low chance of rain (pop: 0.4) will increase evaporation rates. Plan for a light irrigation of 4-6mm if there's less than expected rain.

Day 4: Partly cloudy with no predicted rainfall (pop: 0). An irrigation level of around 6-8 mm is advisable considering the weather conditions and NDVI and NDWI trends hinting towards the need for more water.

Day 5: No expected rainfall (pop: 0) and warmer temperatures imply increased evaporation. To ensure optimal grape yield, an irrigation amount of 8-10 mm is recommended.

Day 6: There's a chance of light rain (pop: 0.53, rain: 1.35 mm). Depending on how much rain you actually receive, you can adjust the irrigation accordingly, but it would be advisable to irrigate about 4-6 mm for optimum crop development.

Day 7: Expect a rainy morning and then a clearing (pop: 0). Expect quite dry weather for the day, so moderate irrigation of 6-8 mm would be ideal.

Depending on the soil type at your vineyard, you may need to adjust the amount of water. So, regularly monitor soil moisture and adjust irrigation levels accordingly. It's also important to monitor and maintain sufficient nitrogen levels due to the influence on NDVI values. Always plan for contingencies as weather forecasts can shift.

Keep an eye on the Coastal Flood Advisory as it may also affect your irrigation schedule. Remember, it's always better to irrigate early in the morning to minimize evaporation losses and to utilize the water more efficiently. Consider implementing water conservation methods such as drip irrigation or micro-irrigation to save water.
*/

export const irrigationRecHardcoded = [
    "Based on the provided data and the general irrigation requirements for grape crops, here are the personalized irrigation advisories for your vineyard in the coming seven days:",
    "Day 1: There will be partly cloudy weather with a negligible probability of precipitation (pop: 0), so no natural irrigation from rain. The NDVI value is 0.2, indicating sparse vegetation, and the NDWI value is 0.22, indicating dry conditions. Considering the current crop growth stage (12 months), you should plan for a moderate irrigation of around 6-8 mm.",
    "Day 2: Expect a day of moderate rain, which will naturally irrigate your crops (rain: 5.09 mm, pop: 1). Therefore, it's best to avoid additional irrigation to prevent waterlogging. However, keep an eye on precipitation and adjust accordingly.",
    "Day 3: The relatively warm temperature (283.19 K) and partly cloudy weather with a low chance of rain (pop: 0.4) will increase evaporation rates. Plan for a light irrigation of 4-6mm if there's less than expected rain.",
    "Day 4: Partly cloudy with no predicted rainfall (pop: 0). An irrigation level of around 6-8 mm is advisable considering the weather conditions and NDVI and NDWI trends hinting towards the need for more water.",
    "Day 5: No expected rainfall (pop: 0) and warmer temperatures imply increased evaporation. To ensure optimal grape yield, an irrigation amount of 8-10 mm is recommended.",
    "Day 6: There's a chance of light rain (pop: 0.53, rain: 1.35 mm). Depending on how much rain you actually receive, you can adjust the irrigation accordingly, but it would be advisable to irrigate about 4-6 mm for optimum crop development.",
    "Day 7: Expect a rainy morning and then a clearing (pop: 0). Expect quite dry weather for the day, so moderate irrigation of 6-8 mm would be ideal.",
    "Depending on the soil type at your vineyard, you may need to adjust the amount of water. So, regularly monitor soil moisture and adjust irrigation levels accordingly. It's also important to monitor and maintain sufficient nitrogen levels due to the influence on NDVI values. Always plan for contingencies as weather forecasts can shift.",
    "Keep an eye on the Coastal Flood Advisory as it may also affect your irrigation schedule. Remember, it's always better to irrigate early in the morning to minimize evaporation losses and to utilize the water more efficiently. Consider implementing water conservation methods such as drip irrigation or micro-irrigation to save water."
]