# probo-nodejs-assignment
CRUD APIs

SCHEMA
------------------------------------------------------------------------------------------------------------------

CREATE TABLE `users` (

  `first_name` varchar(255) NOT NULL,

  `last_name` varchar(255) NOT NULL,

  `email` varchar(255) NOT NULL,
  
  `password` varchar(255) NOT NULL,
  
  `mobile` varchar(10) NOT NULL,
  
  `img` varchar(50) DEFAULT NULL,
  
  PRIMARY KEY (`email`)
  
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


------------------------------------------------------------------------------------------------------------------

LOGIN API(GENERATES TOKEN IF CORRECT INFORMATION PASSED)
![image](https://user-images.githubusercontent.com/121883415/211260674-b3623b24-3666-4b8b-9db6-b1515657302a.png)

CREATE USER API
![image](https://user-images.githubusercontent.com/121883415/211260797-43481431-c527-440b-8f18-0fba1466fe82.png)

DELETE USER API
![image](https://user-images.githubusercontent.com/121883415/211260967-3717effc-789f-4a51-986e-f383c4b1225d.png)

RETRIEVE USER LIST API
![image](https://user-images.githubusercontent.com/121883415/211261131-61e5eaeb-4724-4f41-8fdf-603357cc78a6.png)

UPDATE USER LIST API
![image](https://user-images.githubusercontent.com/121883415/211261266-609af51b-3374-44e3-a090-f5dfde684f4b.png)
