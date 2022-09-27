# battleship



# Ship factory function 
# three types of tests: unit, integration, and end-to-end test 
# unit test only tests functions, may have downstream functions but those can be mocked. Mock return values of others to test logic of function you are targeting. 
# integration test: test a service as a whole... ideally you can run an integration test without internet or network... What we mock is downstream services, don't mock return values
# end to end test: test entire microservice as a whole. If it makes a downstream service you let it run live, and make a call to database... 

# In general we want as much coverage for unit tests as possible. integration less because cumbersome. End-to-End is flakey so we don't want to many just enough to capture flow.  


# mannualy hit every single cell of ship, the number of hits a ship can take, assert isSunk() returns false, then t est

# hit (0,1) etc 