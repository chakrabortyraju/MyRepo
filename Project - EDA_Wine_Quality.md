# EDA – Wine Quality
[[Link for the Jupyter notebook](https://github.com/chakrabortyraju/MyRepo/blob/master/Jupyter_Notebooks/EDA%20-%20Wine_Quality.ipynb)]
[![](https://github.com/chakrabortyraju/MyRepo/blob/master/images/1_OjVreh3NGN_FgBEQs4AMdg.jpeg)](https://github.com/chakrabortyraju/MyRepo/blob/master/images/1_OjVreh3NGN_FgBEQs4AMdg.jpeg)

## Description of the Dataset
This dataset provides details of Wine Components and Quality of different wine varieties. Each of these components are mentioned below:

- fixed acidity - most acids involved with wine or fixed or nonvolatile (do not evaporate readily);
- volatile acidity - the amount of acetic acid in wine, which at too high of levels can lead to an unpleasant, vinegar taste;
- citric acid - found in small quantities, citric acid can add ‘freshness’ and flavor to wines;
- residual sugar - the amount of sugar remaining after fermentation stops, it’s rare to find wines with less than 1 gram/liter and wines with greater than 45 grams/liter are considered sweet;
- chlorides - the amount of salt in the wine;
- free sulfur dioxide - the free form of SO2 exists in equilibrium between molecular SO2 (as a dissolved gas) and bisulfite ion; it prevents microbial growth and the oxidation of wine;
- total sulfur dioxide - amount of free and bound forms of S02; in low concentrations, SO2 is mostly undetectable in wine, but at free SO2 concentrations over 50 ppm, SO2 becomes evident in the nose and taste of wine;
- density - the density of water is close to that of water depending on the percent alcohol and sugar content;
- pH - describes how acidic or basic a wine is on a scale from 0 (very acidic) to 14 (very basic); most wines are between 3-4 on the pH scale;
- sulphates - a wine additive which can contribute to sulfur dioxide gas (S02) levels, wich acts as an antimicrobial and antioxidant
- alcohol - the percent alcohol content of the wine;

**The output feature is:**

- quality - output variable (based on sensory data, score between 0 and 10);
## ANALYSIS OF THE DATASET
### Understanding the available wine qualities.
[![](https://github.com/chakrabortyraju/MyRepo/blob/master/images/quality.png)](https://github.com/chakrabortyraju/MyRepo/blob/master/images/quality.png)<br/>

- Looks like most of the wine have average quality of 6. There are very few wines with poor and high quality.

### Understanding the available wine qualities based on redefined categories.
[![](https://github.com/chakrabortyraju/MyRepo/blob/master/images/quality_1.png)](https://github.com/chakrabortyraju/MyRepo/blob/master/images/quality_1.png)<br/>

- Quality scores are distributed in three categories -- poor [3 to 4], normal [5 to 6] and excellent [7 to 9]. As expected, majority falls under normal category.

### Viewing Distributions Of Attribute Variables.
[![](https://github.com/chakrabortyraju/MyRepo/blob/master/images/dist.png)](https://github.com/chakrabortyraju/MyRepo/blob/master/images/dist.png)<br/>

### Relationship between Attribute Variables.
[![](https://github.com/chakrabortyraju/MyRepo/blob/master/images/heatmap.png)](https://github.com/chakrabortyraju/MyRepo/blob/master/images/heatmap.png)<br/>

- From above we can see, there is a strong positive correlation of density with residual sugar. However, a strong negative correlation of density and alcohol.
- Also, there is no correlation between free sulphur dioxide and quality.

### Distribution of Density.
[![](https://github.com/chakrabortyraju/MyRepo/blob/master/images/density.png)](https://github.com/chakrabortyraju/MyRepo/blob/master/images/density.png)<br/>
### Density of Residual Sugar.
[![](https://github.com/chakrabortyraju/MyRepo/blob/master/images/residual.png)](https://github.com/chakrabortyraju/MyRepo/blob/master/images/residual.png)<br/>
### Distribution of Alcohol.
[![](https://github.com/chakrabortyraju/MyRepo/blob/master/images/alcohol.png)](https://github.com/chakrabortyraju/MyRepo/blob/master/images/alcohol.png)<br/>
## Conclusion
**We can observe the following, for each feature:**

- fixed acidity - besides the smallest quality (3), mean value and variance increases with quality;
- volatile acidity - smaller means and smaller variance results in increasing quality;
- citric acid - quality increases with the mean value;
- residual sugar - highest quality has small mean, variance and less outliers;
- chlorides - highest quality has smaller mean, variance and less outliers;
- free sulfur dioxide - smaller mean and variance are for both small (3) and high quality (8);
- total sulfur dioxide - smaller mean and variance are for both small (3) and high quality (8);
- density - smaller mean, larger variance for higher quality;
- pH - smaller values for higher quality;
- sulphates - higher mean, smaller variance, less outliersfor higher quality;
- alcohol - higher mean values, larger variance, less outliers for higher quality;
