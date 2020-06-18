INSERT INTO artist (first_name,last_name,email,password,mobile_no,customized,
reviews,profile_img,social_media_accounts,budget,bio) VALUES 
('Alaa','Swaireh','alaa@gmail.com','12345678',
'0592888888','false','10','https://avatars1.githubusercontent.com/u/26024288?s=96&v=4','https://www.facebook.com/',
'10.2','الفن هو الأسلوب، والأسلوب هو الإنسان');
('mariam','Isa','mariam@gmail.com','01234567',
'0592000000','true','12','https://avatars1.githubusercontent.com/u/26024288?s=96&v=4','https://www.instagram.com/',
'10.2','الفن هو الأسلوب، والأسلوب هو الإنسان');
('Rana','Obeid','rana@gmail.com','87654321',
'0592888888','false','7','https://avatars1.githubusercontent.com/u/26024288?s=96&v=4','https://www.pinterest.com/',
'10.2','الفن هو الأسلوب، والأسلوب هو الإنسان');

INSERT INTO customer (first_name,last_name,email,password,budget) VALUES
('Lina','Obeid','lina@gmail.com','00000000','20.44');
('Muhammad','Abed','mu95@gmail.com','555555555','12.24');
('Ahmed','Safi','ahmed@gmail.com','66666666','11.31');

INSERT INTO painting (title,img,description,category,property,count_sold,artist_id) VALUES
('طائر الاوز','https://media.zid.store/0651e4a4-a220-4670-8922-c62f64ff8293/c69cd11f-6321-46b6-91fc-d4ea9769fbdf.jpeg',
'لوحة فنية جدارية من قماش الكانفس تتميز بالالوان الطبيعية','لوحات طيور','{40*60 : 70 , 100*120 : 150 , 140*200 : 250}','4','1');
('تراث','https://palumedia.eu/wp-content/uploads/2019/08/2a42c6230069bf74d3090e765c97d6d6.jpg',
'لوحة فنية جدارية من قماش الكانفس تتميز بالالوان الطبيعية','لوحات تراثية','{40*60 : 70 , 100*120 : 150 , 140*200 : 250}','5','2');
('طبيعة ','https://upload.3dlat.com/do.php?img=1129422',
'لوحة فنية جدارية من قماش الكانفس تتميز بالالوان الطبيعية','لوحات طبيعة','{40*60 : 70 , 100*120 : 150 , 140*200 : 250}','6','3');

INSERT INTO cart (customer_id,painting_id,price) VALUES
('1','2','70');
('2','1','150');
('3','3','250');

INSERT INTO painting_user (painting_id,customer_id,selling_date) VALUES
('1','2','18/6/2020');
('2','1','10/6/2020');
('3','3','1/6/2020');  

INSERT INTO feedback (artist_id,customer_id,rate,details) VALUES 
('1','2','5','عمل رائع جدا');
('2','1','4','عمل رائع جدا');
('3','3','5','عمل رائع جدا');
