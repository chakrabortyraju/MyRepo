
# EDA - European Premier League
[[Link for the Jupyter notebook](https://github.com/chakrabortyraju/MyRepo/blob/a5d6907a79b01b647999fe229053e123d35ca583/Jupyter_Notebooks/EDA%20-%20European_Premier_league.ipynb)]
![](https://e1.365dm.com/17/12/768x432/skysports-champions-league-champions-league-trophy-uefa-champions-league_4179916.jpg?20171211102418)
### 1. Problem Statement
This dataset represents details of the teams participated in European Premier League from 1993 till 2018 with their goal scoring details and results against each oppononents in Home or Away matches. My analysis is to find out if there is any trend/probability in their home or away matches or if there is any seasonal effect on the match results.

#### 1.1. Introduction
This Exploratory Data Analysis is to practice Python skills learned till now on a structured data set including loading, inspecting, wrangling, exploring, and drawing conclusions from data. The notebook has observations with each step in order to explain thoroughly how to approach the data set. Based on the observation some questions also are answered in the notebook for the reference though not all of them are explored in the analysis.


#### 1.2. Data source and dataset
##### a. How was it collected?

- **Name:** "European Premier League"
- **Sponsoring Organization:** INSAID
- **Year:** 1993 to 2018
- Description: The dataset contains details of 9664 matches played from 1993 ro 2018. There are 10 columns in the source dataset. Six of those had some short forms. I tried to find out first the full names to have a better understanding of the dataset:
  - FTHG: Full Time Home Goal
  - FTAG: Full Time Away Goal
  - FTR: Full Time Result
  - HTHG: Half Time Home Goal
  - HTAG: Half Time Away Goal
  - HTR: Half Time Result

### 2. Load packages and data
As a part of the anlysis in the beginning I loaded some packages and installed some updates which I felt to be needed in the course of the analysis like - Numpy, Pandas, matplotlib, plotly, chart-studio etc and then the "Eupopean_Premier_League" data set.

### 3. Data Profiling
Through this step I reviewed the data types and sample data to understand the varibales I will be dealing with and decide on the variables needed to be transformed in some way before they can be analyzed.

### 4. Initial Observations and comments:
During initial anlysis of the data, I felt followign fields needed to looked into:
[![](https://github.com/chakrabortyraju/MyRepo/blob/master/images/rarnings.png)](https://github.com/chakrabortyraju/MyRepo/blob/master/images/rarnings.png)
- Div column had 9664 Fixed Values (F0) and could be dropped during anlysis.
- Date column had 2572 out of 9664 distinct. This is quite obvious but this column coould be converted in european seasons (Summer, Winter, Autumn or Fall) for further  anlysis.
- HomeTeam and AwayTeam columns had some missing values but I could get the list of unique Club names participated in the league.
- FTHG, FTAG, HTHG, HTAG, HTR fields did not provide any valuable information but FTR column could be used for futher analysis.

### 5. Handling NaN data in the categorical columns
There are three variables with many missing values. None of them points to a need to "fill in" the missing responses or delete the rows. More detail:
HTHG: Replaced with median value.
HTAG: Replaced with median value.
HTR: Replaced with median value.

#### Top 10 Away Teams
[![](https://github.com/chakrabortyraju/MyRepo/blob/master/images/top_10_away.png)](https://github.com/chakrabortyraju/MyRepo/blob/master/images/top_10_away.png)

#### Top 10 Home Teams
[![](https://github.com/chakrabortyraju/MyRepo/blob/master/images/top_10_home.png)](https://github.com/chakrabortyraju/MyRepo/blob/master/images/top_10_home.png)

#### Home Team Win/Away Team Win/Draw Percentages
[![](https://github.com/chakrabortyraju/MyRepo/blob/master/images/prct.png)](https://github.com/chakrabortyraju/MyRepo/blob/master/images/prct.png)

#### Correlations Between Numerical fields
[![](https://github.com/chakrabortyraju/MyRepo/blob/master/images/corr_1.png)](https://github.com/chakrabortyraju/MyRepo/blob/master/images/corr_1.png)

#### Correlations Between Numerical/Categorical fields
[![](https://github.com/chakrabortyraju/MyRepo/blob/master/images/corr_2.png)](https://github.com/chakrabortyraju/MyRepo/blob/master/images/corr_2.png)

#### List of Away Teams with WIn, Loss Draw Shares
[![](https://github.com/chakrabortyraju/MyRepo/blob/master/images/away_W_L_D.png)](https://github.com/chakrabortyraju/MyRepo/blob/master/images/away_W_L_D.png)

#### List of Home Teams with WIn, Loss Draw Shares
[![](https://github.com/chakrabortyraju/MyRepo/blob/master/images/home_W_L_D.png)](https://github.com/chakrabortyraju/MyRepo/blob/master/images/home_W_L_D.png)


