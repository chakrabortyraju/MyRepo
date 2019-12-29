# My Journey with GCDAI so far

| **Topics**  | **Descriptions**  | **Status**  |
| ------------ | ------------ | ------------ |
||![](https://www.bytelion.com/wp-content/uploads/2015/12/python-banner.png)||
| PYTON BASICS  |  - Data issues, Population & Sample - Measures of Central tendency - Measures of spread - Measures of shape - Popular statistical Plots - Intro to Inferential statistics - Probability in statistics - Random Variables - Normal Distribution - Central Limit Theorem - Hypothesis testing - Case Study |  Completed |
||![](https://media.koganpage.com/media/project_kp/image/mrs_e_statstraining_kp-web.jpg)||
| BASICS OF STATISTICS |  - Introduction to Python - Building blocks of Python - Variable and Data Types - I/O and Formating - Operators and Control Flow - Deep dive into Data Types - Functions in Python - Making Python powerful - Python Starter Kit Quiz | Completed  |
||![](https://miro.medium.com/max/2560/1*Ptv1_9wX9O2Rm2IBklyufw.png)||
||TERM 1: DATA ANALYTICS WITH PYTHON|||
|Module 1|Fundamentals of Data Science|Completed|
|Module 2|Python Basics & Statistics|Completed|
|Module 3|Numpy and Pandas|Completed|
|Module 4|Data Visualization in Python|Completed|
|Module 5|Exploratory Data Analysis with Python|Completed|
|Module 6|EDA PROJECT 1: [European Premier League][EDA1]|Completed|

[EDA1]: https://github.com/users/chakrabortyraju/projects/1 "EDA Project"

# EDA - European Premier League
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
- **Description:** The dataset contains details of 9664 matches played from 1993 ro 2018. There are 10 columns in the source dataset. Six of those had some short forms. I tried to find out first the full names to have a better understanding of the dataset:

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
![](![rarnings.png](image/rarnings.png))
- Div column had 9664 Fixed Values (F0) and could be dropped during anlysis.
- Date column had 2572 out of 9664 distinct. This is quite obvious but this column coould be converted in european seasons (Summer, Winter, Autumn or Fall) for further  anlysis.
- HomeTeam and AwayTeam columns had some missing values but I could get the list of unique Club names participated in the league.
- FTHG, FTAG, HTHG, HTAG, HTR fields did not provide any valuable information but FTR column could be used for futher analysis.








