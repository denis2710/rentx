# Car Registry

## Function Requirements
- Should be possible registry a new Car
- Should be possible list all categories

## Business Rules
- Should not be possible registry a car with a car number allready existent.
- Should nob possible change a car number allredy created. 
- All cars should have the diponibility as true by default. 
- Only admin user can registry a new car

# Car list
## Function Requirements
- Should be possible list all cars avalibles 
- Should be possible list all disponible cars by the category name 
- Should be possible list all disponible cars by the brand name 
- Should be possible list all disponible cars by the car name 


## Business Rules
- User don't need to be logged in system
  
# Specification the car

##  Function Requirements
- Should be possible registry a car specification
- Should be abble to list all specifications
- Should be abble to list all cars

##  Business Rules
- Should not be possible registry a specification to a not existent car 
- Should not be possible registry a specification already existent to the same car 
- Only admin user should registry a car


# Images car registry

##  Function Requirements
- Should be possible registry the car image image
- Should be possible list all cars 

##  Non Function Requirements
- Use multer to file upload 

##  Business Rules
- User should be possible to registry more than one image to the same Car
- The should be administrator 


# Rent cars 

##  Function Requirements
- Should be possible registry a rent 

##  Non Function Requirements
- 

##  Business Rules
- The rent should have min duration of 24 hours
- Should not be possible registry a new rent if have one open to the same user 
- Should not be possible registry a new rent if have one open to the same car 
