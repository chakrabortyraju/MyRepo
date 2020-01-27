# EDA – Breast Cancer Survival
[[Link for the Jupyter notebook](https://github.com/chakrabortyraju/MyRepo/blob/a5d6907a79b01b647999fe229053e123d35ca583/Jupyter_Notebooks/EDA%20-%20Wine_Quality.ipynb)]
[![](https://github.com/chakrabortyraju/MyRepo/blob/master/images/breast-cancer-facts-what-is-breast-cancer.jpeg)](https://github.com/chakrabortyraju/MyRepo/blob/master/images/breast-cancer-facts-what-is-breast-cancer.jpeg)
## WHAT IS BREAST CANCER?
[![](https://github.com/chakrabortyraju/MyRepo/blob/master/images/download.jpg)](https://github.com/chakrabortyraju/MyRepo/blob/master/images/download.jpg)<br/>
**Breast cancer** is a disease in which cells in the breast grow out of control. There are different kinds of breast cancer. The kind of breast cancer depends on which cells in the breast turn into cancer.

The average **5-year survival rate** for women with invasive breast cancer is **90%**. The average **10-year survival rate is 83%**. If the cancer is located only in the breast, the **5-year survival rate of women with breast cancer is 99%**. Sixty-two percent **(62%)** of people with breast cancer are diagnosed with this stage.

Breast cancer can spread outside the breast through blood vessels and lymph vessels. When breast cancer spreads to other parts of the body, it is said to have metastasized.
## ROLE OF POSITIVE AXILLARY NODES IN BREAST CANCER
[![](https://github.com/chakrabortyraju/MyRepo/blob/master/images/images.jpg)](https://github.com/chakrabortyraju/MyRepo/blob/master/images/images.jpg)<br/>
The lymphatic system is one of the body's primary tools for fighting infection. This system contains lymph fluid and lymph nodes, which occur in critical areas in the body. Cancer cells sometimes enter and build up in the lymph system.

The **number of axillary lymph nodes** can vary from person to person, ranging from **five nodes to more than 30**. After a breast cancer diagnosis, a doctor will often check whether cancer cells have spread to the axillary lymph nodes.
## DETAILS OF THE SOURCE DATASET
**Variables Details:**
- Number of variables: 4
- Number of observations: 306
- Missing cells: 0 (0.0%)
- Duplicate rows 17 (5.6%)

**Variables types:**
- Numeric = 4
- Categorical = 0
- Text (Unique) = 0
- Rejected = 0

**Column Names and Descriptions:**
1. Age: Age of patient at the time of operation.
2. Years_of_operation: Patient’s year of operation.
3. Pos_axillary_nodes: Number of positive axillary nodes detected.
4. Status: The patient survived/died within number of years.
## ANALYSIS OF THE DATASET
### Question: What is the percentage of Survived/Dead Patients?
[![](https://github.com/chakrabortyraju/MyRepo/blob/master/images/1.png)](https://github.com/chakrabortyraju/MyRepo/blob/master/images/1.png)
- 72.7% Patients survived the operation whereas 27.3% Patients found to be dead in certain number of years after operations.
### Question: What are the chances of survival for yonger/older patients?
[![](https://github.com/chakrabortyraju/MyRepo/blob/master/images/age.png)](https://github.com/chakrabortyraju/MyRepo/blob/master/images/age.png)
- Major overlapping is observed, which tells us that survival chances are irrespective of a person’s age.
- Although there is overlapping we can vaguely tell that people whose age is in the range 30–40 are more likely to survive, and 40–60 are less likely to survive. While people whose age is in the range 60–75 have equal chances of surviving and not surviving.
- Yet, this cannot be our final conclusion. We cannot decide the survival chances of a patient just by considering the age parameter.
### Question: What are the survival chances based on Years of operations?
[![](https://github.com/chakrabortyraju/MyRepo/blob/master/images/years.png)](https://github.com/chakrabortyraju/MyRepo/blob/master/images/years.png)
- The data is overlapping hence no major information could be gained.
- However, it can be observed that in the years 1960 and 1965 there were more unsuccessful operations.
### Question: What are the survival/death chances based on axillary nodes?
[![](https://github.com/chakrabortyraju/MyRepo/blob/master/images/nodes.png)](https://github.com/chakrabortyraju/MyRepo/blob/master/images/nodes.png)
- It is seen that 95% of the patient has axil nodes between 0 to 25.
- Patients with no nodes or 1 node are more likely to survive. There are very few chances of surviving if there are 25 or more nodes.
### Question: Is there any change in survival percentage in recent years?
[![](https://github.com/chakrabortyraju/MyRepo/blob/master/images/years_1.png)](https://github.com/chakrabortyraju/MyRepo/blob/master/images/years_1.png)
- From the above plot, we can observe that, as the patient year of operation is the latest, survival is little better.
### Question: Is there any other determinant for Death/Survival?
[![](https://github.com/chakrabortyraju/MyRepo/blob/master/images/corr.png)](https://github.com/chakrabortyraju/MyRepo/blob/master/images/corr.png)
- Other than Age and Positive axillary nodes no other determinant found to affecting the number of Survival or dead patients.
## CONCLUSION
- Patients having less than **5 positive axillary nodes** have slightly high rate of     survival.
- Patient’s age and operation year alone are not deciding factors for his/her survival. Yet, people **less than 35 years have more chance of survival**.
- Survival chance is inversely proportional to the number of positive axillary nodes. We also saw that the absence of **positive axillary nodes cannot always guarantee survival**.
## ACTIONABLE INSIGHTS
- From the analysis, I could not put together any actionable items to better the survival percentage. Since, there was a positive trend in survival percentage in recent years, I reckon that is due to advancement of medical science in this field. Hope this becomes better in days to come.

- The other option would be an initiative from the Govt. to increase the awareness of this disease. Since, survival chances are better if positive axillary nodes are less than 5, may be consulting doctors at the initial stages would increase the survival percentage.
