# Info-442-Group 8
- Company Name
- Company Mission
- Company Role
- Problem Statement
- Revised Problem Statement
- Solution Overview
- Our Prototype and Interactive Details
	* Welcome Page
	* Home Page (Main Page)
	* Result Page
- Index

## Company Name:
Global Souvenir Guidebook

## Company Mission:
We aim to help people select the most unique gifts to their family and friends. We research the finest souvenirs across different cities and customize the recommendations to better save time and fit people’s needs.    

## Company Role:
* CEO: Garson (Tianci) Yang
* CTO: Yuqi Zheng
* PM: Jane (Shu Wen) Juan
* CDO: Qianzhu Fan

## Problem Statement:
With the development of city touring, traveling has become part of people’s daily life. They travel all over the world to see and experience. Besides, there are always needs for gifts and souvenirs to bring to their beloved ones, trying to let them feel the wonderful experience and culture on the road as well. From city t-shirts to local cuisine, it seems that there are lots of choices absolutely perfect as gifts. However, it’s really hard for tourists or even new coming residents to find those good gifts and souvenirs. They have no idea what the local specials are and where to get them. Most travellers just buy something randomly without ensured qualities when visiting tourist spots. As a result, selecting and buying souvenirs do become a problem for those travellers.


## Revised Problem Statement:
Seattle attracts numerous tourists every year. In the limited visiting time, tourists need to figure out what Seattle specialties are, select meaningful gifts for their friends and family, find where to buy them and search for operation hours of stores. So far, there is no one single collaborative source of information. It takes effort and time for tourists to do the research online. Existing solutions are either product-oriented or store-oriented. For instance, Yelp provides store information and shop categories but it doesn’t provide product information. Some other traveling articles have the top souvenir recommendations in Seattle. People need to cross check various references and gather the information by themselves. This is a problem reducing their precious visiting time.  

## Solution Overview:
We plan to build a web application which can provide an integrated solution for tourists to help them select souvenirs with all the required information. We create a theme label, guiding users to know specialties in Seattle. At a granular level, users can use our search engine with filters to narrow down the scope of selection. Then, based on detailed information about the store and product showed in results, users can select more meaningful Seattle souvenirs for their friends, family and kids more efficiently.   

## Our Prototype and Interactive Details:
* Welcome Page 
Our website greets users with a home page. There is a map with click button to select cities on welcome page. Users can click on the city to enter the unique portal for this city. If the region selected is not found in the database, nothing will pop up and users will not enter the main portal. In this project, we focus on the Greater Seattle Area. 
![Welcome Page](https://raw.githubusercontent.com/FannieFann/Info-442-Global-Souvenir-Guidebook/master/prototype/Untitled%20Notebook-3.jpg)

* Home Page (Main Page)
After selecting the region, users enter the main portal. On top of the page is search bar which can be used to search for store name.There are several filter bars on the left for selecting different product types, categories, locations, targeted customers and budget. On the right are listings for stores. Users can browse and select shops based on their needs. There will be a map mode as well. 
![Home Page](https://raw.githubusercontent.com/FannieFann/Info-442-Global-Souvenir-Guidebook/master/prototype/-nEIq0IfewCg62YXno65TxygIL437zrRUvlraHfzbDc0JBa560_Fkr_Y1ctKDLKlU0d1BoZgh_k4iLu6vEBHTGLuLNty32suSEjPyx589xtOrwX-xmwSPRKiYT4M3CXi8mw5aKaJ.png)
	* Filter: Users can use filters to filter results by different labels. These labels are shown as following:
		* Product type (food, chocolates, clothes)
			* Food
			* Chocolate
			* Clothes
			* Jewelry
			* Book/Postcard
			* Decors
			* Plastic
		* Theme (Seattle specialties): Themes are related to local products, i.e. Seahawks, UW, Starbucks, etc.. For example, there is a theme called “UW” which represents products related to the university of washington.
			* UW souvenir
			* Coffee 
			* Seafood
			* Boeing souvenir
			* MicroSoft/Amazon souvenir
			* Seahawks
			* Sounders
			* Pike Place
		* Neighborhood: Where are those stores located?
			* University district
			* Laurelhurst
			* Roosevelt
		* For whom: Who is the users giving 
			* Family
			* Friends
			* Kids
			* Colleagues
			* Senior 
		* Budget (Price) : This will be a price range not a specific price. Use different symbols to represent different price ranges.(e.g., $, $$, $$$)
	* Search bar: Users can use the search bar to search for store name with any keywords. After typing in keywords in the input box and clicking on the search button, different results will be listed on this page with different keywords.

	* Sorting: Users can sort results by price ascending/descending (by clicking on “sort by” button)

	* Store result list:
		* Store name
		* Price
		* Address
		* Phone number




* Result Page (Main Portal)
After clicking on the selected shop, the shop information page pop up. There are shop address, pictures and merchandise information.
![Result Page](https://raw.githubusercontent.com/FannieFann/Info-442-Global-Souvenir-Guidebook/master/prototype/Untitled%20Notebook-2.jpg)

Data source: When our web application is fully launched, we will ask store owners to send their information through forms to us, and store them in the database. For now, we’re mainly focusing on the front-end and back-end, so we will just make up some local mock data and save them in JSON files.


* Store Detail
	* Store Name
	* Location
	* Business hours 
	* Phone number
	* Website 
	* Product list

	
Requirement Example 
* Filter button: Users can use filters (5 filters) to query the result of a list of store information. 
* Search bar: Users can search stores with free keywords using input box
* Users can access a specific store and product information by clicking one of the stores.
* Users can go backward from the store information page to the search result page.
* The home page should display a world map with certain region marks that users can select (just Seattle for the first version)








