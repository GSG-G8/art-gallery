INSERT INTO artist (first_name,last_name,email,password,mobile_no,customized,
reviews,profile_img,social_media_accounts,budget,bio) VALUES 
('Alaa','Swaireh','alaa@gmail.com','12345678',
'0592888888','false','10','https://avatars1.githubusercontent.com/u/26024288?s=96&v=4','{https://www.facebook.com/}',
'200.26','الفن هو الأسلوب، والأسلوب هو الإنسان'),
('mariam','Isa','mariam@gmail.com','01234567',
'0592000000','true','12','https://avatars1.githubusercontent.com/u/26024288?s=96&v=4','{https://www.instagram.com/}',
'300.50','الفن هو الأسلوب، والأسلوب هو الإنسان'),
('Rana','Obeid','rana@gmail.com','87654321',
'0592111111','false','7','https://avatars1.githubusercontent.com/u/26024288?s=96&v=4','{https://www.pinterest.com/}',
'300.66','الفن هو الأسلوب، والأسلوب هو الإنسان'),
('Rehab','ALsawaf','rehab@gmail.com','44444444',
'0592333333','false','8','https://avatars1.githubusercontent.com/u/26024288?s=96&v=4','{https://www.facebook.com/}',
'400.20','الفن هو الأسلوب، والأسلوب هو الإنسان'),
('Mohammed','ALghzali','mohammed@gmail.com','33333333',
'0592777777','true','3','https://avatars1.githubusercontent.com/u/26024288?s=96&v=4','{https://www.facebook.com/}',
'100.23','الفن هو الأسلوب، والأسلوب هو الإنسان');

INSERT INTO customer (first_name,last_name,email,password,budget) VALUES
('Lina','Obeid','lina@gmail.com','00000000','300.44'),
('Muhammad','Abed','mu95@gmail.com','555555555','200.24'),
('Ahmed','Safi','ahmed@gmail.com','66666666','200.31'),
('Rawan','Abudahrouj','rwan@gmail.com','11111111','600.44'),
('Abeer','Karam','abeer@gmail.com','22222222','1000.64');

INSERT INTO painting (title,img,description,category,property,count_sold,artist_id) VALUES
('طائر الاوز','https://media.zid.store/0651e4a4-a220-4670-8922-c62f64ff8293/c69cd11f-6321-46b6-91fc-d4ea9769fbdf.jpeg',
'لوحة فنية جدارية من قماش الكانفس تتميز بالالوان الطبيعية','لوحات طيور','{40*60 : 70 , 100*120 : 150 , 140*200 : 250}','1','1'),
('تراث','https://palumedia.eu/wp-content/uploads/2019/08/2a42c6230069bf74d3090e765c97d6d6.jpg',
'لوحة فنية جدارية من قماش الكانفس تتميز بالالوان الطبيعية','لوحات تراثية','{40*60 : 70 , 100*120 : 150 , 140*200 : 250}','1','1'),
('طبيعة ','https://upload.3dlat.com/do.php?img=1129422',
'لوحة فنية جدارية من قماش الكانفس تتميز بالالوان الطبيعية','لوحات طبيعة','{40*60 : 70 , 100*120 : 150 , 140*200 : 250}','1','2'),
('طبيعة ','https://upload.3dlat.com/do.php?img=1129422',
'لوحة فنية جدارية من قماش الكانفس تتميز بالالوان الطبيعية','لوحات اسلامية','{40*60 : 70 , 100*120 : 150 , 140*200 : 250}','1','2'),
('طبيعة ','https://upload.3dlat.com/do.php?img=1129422',
'لوحة فنية جدارية من قماش الكانفس تتميز بالالوان الطبيعية','لوحات مدن','{40*60 : 70 , 100*120 : 150 , 140*200 : 250}','1','3'),
('طبيعة ','https://upload.3dlat.com/do.php?img=1129422',
'لوحة فنية جدارية من قماش الكانفس تتميز بالالوان الطبيعية','لوحات تاريخية','{40*60 : 70 , 100*120 : 150 , 140*200 : 250}','2','3'),
('طبيعة ','https://upload.3dlat.com/do.php?img=1129422',
'لوحة فنية جدارية من قماش الكانفس تتميز بالالوان الطبيعية','لوحات طبيعة','{40*60 : 70 , 100*120 : 150 , 140*200 : 250}','1','4'),
('طبيعة ','https://upload.3dlat.com/do.php?img=1129422',
'لوحة فنية جدارية من قماش الكانفس تتميز بالالوان الطبيعية','لوحات طبيعة','{40*60 : 70 , 100*120 : 150 , 140*200 : 250}','1','4'),
('طبيعة ','https://upload.3dlat.com/do.php?img=1129422',
'لوحة فنية جدارية من قماش الكانفس تتميز بالالوان الطبيعية','لوحات طبيعة','{40*60 : 70 , 100*120 : 150 , 140*200 : 250}','1','4'),
('طبيعة ','https://upload.3dlat.com/do.php?img=1129422',
'لوحة فنية جدارية من قماش الكانفس تتميز بالالوان الطبيعية','لوحات طبيعة','{40*60 : 70 , 100*120 : 150 , 140*200 : 250}','1','5');

INSERT INTO cart (customer_id,painting_id,price) VALUES
('1','1','70'),
('1','2','150'),
('2','3','70'),
('2','4','70'),
('3','5','70'),
('3','6','70'),
('4','7','250'),
('4','8','70'),
('5','9','150'),
('5','10','150'),
('5','6','250');

INSERT INTO painting_user (painting_id,customer_id,selling_date) VALUES
('1','1','2020-6-18'),
('2','1','2020-6-18'),
('3','2','2020-6-10'),
('4','2','2020-6-10'),
('5','3','2020-6-01'),
('6','3','2020-6-01'),
('6','5','2020-6-01'),
('7','4','2020-6-02'),
('8','4','2020-6-02'),
('9','5','2020-6-03'), 
('10','5','2020-6-03');  

INSERT INTO feedback (artist_id,customer_id,rate,details) VALUES 
('1','1','5','عمل رائع جدا'),
('2','2','4','عمل رائع جدا'),
('3','3','5','عمل رائع جدا'),
('3','5','5','عمل رائع جدا'),
('4','4','5','عمل رائع جدا'),
('5','5','5','عمل رائع جدا');
